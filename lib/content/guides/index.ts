import { attributionForGuideCategory } from "@/lib/content/editorial/attribution";
import { FAQ_CATALOG } from "@/lib/content/faq/catalog";
import { generateRelatedContentForGuide } from "@/lib/content/related";
import { SUCCESS_STORIES } from "@/lib/content/success-stories";
import { STATE_SEO_CONFIG } from "@/lib/seo/statePages";
import { GUIDE_ASSETS } from "./assets.generated";
import { GUIDE_CATALOG, GUIDE_CATEGORY_ORDER } from "./catalog";
import { GUIDE_BODIES } from "./guides.generated";
import {
  countGuideWords,
  GUIDE_CATEGORY_LABELS,
  type GuideArticle,
  type GuideCategory,
  type GuideEntry,
} from "./types";

type BaseGuideArticle = Omit<GuideArticle, "relatedContent">;

function assemble(slug: string): BaseGuideArticle {
  const meta = GUIDE_CATALOG.find((g) => g.slug === slug);
  const body = GUIDE_BODIES[slug];
  const educationalAssets = GUIDE_ASSETS[slug];
  if (!meta) throw new Error(`Missing catalog entry for guide: ${slug}`);
  if (!body) throw new Error(`Missing generated body for guide: ${slug}`);
  if (!educationalAssets) {
    throw new Error(`Missing educational assets for guide: ${slug}`);
  }
  return {
    ...meta,
    ...body,
    educationalAssets,
    attribution: attributionForGuideCategory(meta.category),
  };
}

const articles: BaseGuideArticle[] = GUIDE_CATALOG.map((g) => assemble(g.slug));
const guideCandidates = articles.map((guide) => ({
  slug: guide.slug,
  title: guide.title,
  metaDescription: guide.metaDescription,
  category: guide.category,
  relatedGuideSlugs: guide.relatedGuideSlugs,
}));
const stateCandidates = STATE_SEO_CONFIG.map((state) => ({
  code: state.code,
  name: state.name,
  slug: state.slug,
  statuteReference: state.statuteReference,
  noticeDefenseHook: state.noticeDefenseHook,
  hearingRightsHook: state.hearingRightsHook,
}));
const successStoryCandidates = SUCCESS_STORIES.map((story) => ({
  slug: story.slug,
  title: story.title,
  summary: story.summary,
  metaDescription: story.metaDescription,
  stateCode: story.stateCode,
  stateSlug: story.stateSlug,
  guideSlugs: story.guideSlugs,
  topicKeywords: story.topicKeywords,
}));
const faqCandidates = FAQ_CATALOG.map((faq) => ({
  slug: faq.slug,
  question: faq.question,
  metaDescription: faq.metaDescription,
  category: faq.category,
  pairedGuideSlug: faq.pairedGuideSlug,
  relatedGuideSlugs: faq.relatedGuideSlugs,
  relatedFaqSlugs: faq.relatedFaqSlugs,
}));
const articlesWithRelatedContent: GuideArticle[] = articles.map((guide) => ({
  ...guide,
  relatedContent: generateRelatedContentForGuide(
    {
      kind: "guide",
      slug: guide.slug,
      title: guide.title,
      metaDescription: guide.metaDescription,
      category: guide.category,
      relatedGuideSlugs: guide.relatedGuideSlugs,
      internalLinks: guide.internalLinks,
    },
    {
      guides: guideCandidates,
      states: stateCandidates,
      successStories: successStoryCandidates,
      faqs: faqCandidates,
    }
  ),
}));
const bySlug = new Map(articlesWithRelatedContent.map((g) => [g.slug, g]));

/** Full assembled articles — preferred for pages and tests. */
export const GUIDE_ARTICLES: GuideArticle[] = articlesWithRelatedContent;

/**
 * Backward-compatible listing used by RelatedGuides and older imports.
 * Includes meta fields RelatedGuides expects.
 */
export const GUIDE_ENTRIES: GuideEntry[] = articles.map((g) => ({
  slug: g.slug,
  title: g.title,
  metaTitle: g.metaTitle,
  metaDescription: g.metaDescription,
  category: g.category,
  sections: g.sections,
}));

export function getAllGuideSlugs(): string[] {
  return GUIDE_CATALOG.map((g) => g.slug);
}

export function getGuideBySlug(slug: string): GuideArticle | undefined {
  return bySlug.get(slug);
}

export function getGuidesByCategory(
  category: GuideCategory
): GuideArticle[] {
  return articlesWithRelatedContent.filter((g) => g.category === category);
}

export function getGuidesGroupedByCategory(): {
  category: GuideCategory;
  label: string;
  guides: GuideArticle[];
}[] {
  return GUIDE_CATEGORY_ORDER.map((category) => ({
    category,
    label: GUIDE_CATEGORY_LABELS[category],
    guides: getGuidesByCategory(category),
  }));
}

export function assertAllGuidesValid(): void {
  if (articles.length !== 50) {
    throw new Error(`Expected 50 guides, found ${articles.length}`);
  }

  for (const article of articlesWithRelatedContent) {
    const words = countGuideWords(article);
    if (words < 1800 || words > 3000) {
      throw new Error(
        `Guide ${article.slug} has ${words} words (expected 1800–3000)`
      );
    }
    if (article.intro.length < 1) throw new Error(`${article.slug}: missing intro`);
    if (article.conclusion.length < 1) {
      throw new Error(`${article.slug}: missing conclusion`);
    }
    if (article.sections.length < 4) {
      throw new Error(`${article.slug}: need ≥4 sections`);
    }
    if (article.faq.length < 5) throw new Error(`${article.slug}: need ≥5 FAQ`);
    if (article.sources.length < 2) {
      throw new Error(`${article.slug}: need ≥2 sources`);
    }
    if (article.relatedGuideSlugs.length < 2) {
      throw new Error(`${article.slug}: need ≥2 related`);
    }
    if (article.internalLinks.length < 3) {
      throw new Error(`${article.slug}: need ≥3 internal links`);
    }
    if (!article.cta?.href) throw new Error(`${article.slug}: missing CTA`);
    if (!article.attribution?.authorSlug || !article.attribution?.reviewerSlug) {
      throw new Error(`${article.slug}: missing editorial attribution`);
    }
    if (
      !article.attribution.publishedAt ||
      !article.attribution.updatedAt ||
      !article.attribution.reviewedAt
    ) {
      throw new Error(`${article.slug}: missing published/updated/reviewed dates`);
    }

    const assets = article.educationalAssets;
    if (!assets) throw new Error(`${article.slug}: missing educational assets`);
    if (!assets.decisionTree?.nodes?.length) {
      throw new Error(`${article.slug}: decision tree incomplete`);
    }
    if (!assets.processFlow?.steps?.length) {
      throw new Error(`${article.slug}: process flow incomplete`);
    }
    if (!assets.comparisonTable?.rows?.length) {
      throw new Error(`${article.slug}: comparison table incomplete`);
    }
    if (!assets.checklist?.categories?.length) {
      throw new Error(`${article.slug}: checklist incomplete`);
    }
    if (!assets.timeline?.events?.length) {
      throw new Error(`${article.slug}: timeline incomplete`);
    }
    if (!assets.visualSummary?.takeaways?.length) {
      throw new Error(`${article.slug}: visual summary incomplete`);
    }
    if (!assets.downloadables?.length) {
      throw new Error(`${article.slug}: downloadables incomplete`);
    }

    for (const related of article.relatedGuideSlugs) {
      if (!bySlug.has(related)) {
        throw new Error(`${article.slug}: related slug missing: ${related}`);
      }
    }
  }
}

export {
  countGuideWords,
  GUIDE_CATEGORY_LABELS,
  GUIDE_CATEGORY_ORDER,
  GUIDE_CATALOG,
};
export type {
  GuideArticle,
  GuideCategory,
  GuideEntry,
  GuideSection,
  GuideFaqItem,
  GuideSource,
  GuideInternalLink,
  GuideCta,
  GuideEducationalAssets,
} from "./types";
