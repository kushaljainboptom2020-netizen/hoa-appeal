import { attributionForGuideCategory } from "@/lib/content/editorial/attribution";
import { GUIDE_CATALOG, GUIDE_CATEGORY_LABELS } from "@/lib/content/guides";
import { generateRelatedContentForFaq } from "@/lib/content/related";
import { SUCCESS_STORIES } from "@/lib/content/success-stories";
import { STATE_SEO_CONFIG } from "@/lib/seo/statePages";
import { FAQ_CATALOG, FAQ_CATEGORY_ORDER } from "./catalog";
import { FAQ_BODIES } from "./faq.generated";
import {
  countFaqWords,
  type FaqArticle,
  type GuideCategory,
} from "./types";

type BaseFaqArticle = Omit<FaqArticle, "relatedContent">;

function assemble(slug: string): BaseFaqArticle {
  const meta = FAQ_CATALOG.find((f) => f.slug === slug);
  const body = FAQ_BODIES[slug];
  if (!meta) throw new Error(`Missing catalog entry for FAQ: ${slug}`);
  if (!body) throw new Error(`Missing generated body for FAQ: ${slug}`);
  return {
    ...meta,
    ...body,
    attribution: attributionForGuideCategory(meta.category),
  };
}

const articles: BaseFaqArticle[] = FAQ_CATALOG.map((f) => assemble(f.slug));
const guideCandidates = GUIDE_CATALOG.map((guide) => ({
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

const articlesWithRelatedContent: FaqArticle[] = articles.map((faq) => ({
  ...faq,
  relatedContent: generateRelatedContentForFaq(
    {
      kind: "faq",
      slug: faq.slug,
      question: faq.question,
      metaDescription: faq.metaDescription,
      category: faq.category,
      pairedGuideSlug: faq.pairedGuideSlug,
      relatedGuideSlugs: faq.relatedGuideSlugs,
      relatedFaqSlugs: faq.relatedFaqSlugs,
      relatedStateCodes: faq.stateConsiderations.relatedStateCodes,
      internalLinks: faq.internalLinks,
    },
    {
      guides: guideCandidates,
      states: stateCandidates,
      successStories: successStoryCandidates,
      faqs: faqCandidates,
    }
  ),
}));

const bySlug = new Map(articlesWithRelatedContent.map((f) => [f.slug, f]));
const guideSlugSet = new Set(GUIDE_CATALOG.map((g) => g.slug));

/** Full assembled articles — preferred for pages and tests. */
export const FAQ_ARTICLES: FaqArticle[] = articlesWithRelatedContent;

export function getAllFaqSlugs(): string[] {
  return FAQ_CATALOG.map((f) => f.slug);
}

export function getFaqBySlug(slug: string): FaqArticle | undefined {
  return bySlug.get(slug);
}

export function getFaqsByCategory(category: GuideCategory): FaqArticle[] {
  return articlesWithRelatedContent.filter((f) => f.category === category);
}

export function getFaqsGroupedByCategory(): {
  category: GuideCategory;
  label: string;
  faqs: FaqArticle[];
}[] {
  return FAQ_CATEGORY_ORDER.map((category) => ({
    category,
    label: GUIDE_CATEGORY_LABELS[category],
    faqs: getFaqsByCategory(category),
  }));
}

export function assertAllFaqsValid(): void {
  if (articles.length !== 50) {
    throw new Error(`Expected 50 FAQs, found ${articles.length}`);
  }

  const pairedGuides = new Set<string>();

  for (const article of articlesWithRelatedContent) {
    const words = countFaqWords(article);
    if (words < 800 || words > 1600) {
      throw new Error(
        `FAQ ${article.slug} has ${words} words (expected 800–1600)`
      );
    }
    if (!article.directAnswer?.trim()) {
      throw new Error(`${article.slug}: missing direct answer`);
    }
    if (article.explanation.length < 3) {
      throw new Error(`${article.slug}: need ≥3 explanation sections`);
    }
    if (article.sources.length < 2) {
      throw new Error(`${article.slug}: need ≥2 sources`);
    }
    if (article.internalLinks.length < 3) {
      throw new Error(`${article.slug}: need ≥3 internal links`);
    }
    if (article.relatedGuideSlugs.length < 2) {
      throw new Error(`${article.slug}: need ≥2 related guides`);
    }
    if (article.relatedFaqSlugs.length < 2) {
      throw new Error(`${article.slug}: need ≥2 related FAQs`);
    }
    if (!article.cta?.href) throw new Error(`${article.slug}: missing CTA`);
    if (!article.stateConsiderations?.intro) {
      throw new Error(`${article.slug}: missing state considerations intro`);
    }
    if (article.stateConsiderations.points.length < 3) {
      throw new Error(`${article.slug}: need ≥3 state consideration points`);
    }
    if (article.stateConsiderations.relatedStateCodes.length < 3) {
      throw new Error(`${article.slug}: need ≥3 related state codes`);
    }
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
    if (!guideSlugSet.has(article.pairedGuideSlug)) {
      throw new Error(
        `${article.slug}: paired guide missing: ${article.pairedGuideSlug}`
      );
    }
    if (pairedGuides.has(article.pairedGuideSlug)) {
      throw new Error(
        `${article.slug}: duplicate paired guide ${article.pairedGuideSlug}`
      );
    }
    pairedGuides.add(article.pairedGuideSlug);

    for (const related of article.relatedGuideSlugs) {
      if (!guideSlugSet.has(related)) {
        throw new Error(`${article.slug}: related guide missing: ${related}`);
      }
    }
    for (const related of article.relatedFaqSlugs) {
      if (!bySlug.has(related)) {
        throw new Error(`${article.slug}: related FAQ missing: ${related}`);
      }
    }
  }

  if (pairedGuides.size !== 50) {
    throw new Error(`Expected 50 unique paired guides, found ${pairedGuides.size}`);
  }
}

export {
  countFaqWords,
  FAQ_CATEGORY_ORDER,
  FAQ_CATALOG,
  GUIDE_CATEGORY_LABELS,
};
export type {
  FaqArticle,
  FaqBody,
  FaqCatalogEntry,
  FaqExplanationSection,
  FaqStateConsiderations,
  GuideCategory,
} from "./types";
