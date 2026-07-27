import type { EditorialAttribution } from "@/lib/content/editorial/attribution";
import type {
  GuideCategory,
  GuideCta,
  GuideInternalLink,
  GuideSource,
} from "@/lib/content/guides/types";
import type { RelatedContentBuckets } from "@/lib/content/related";

export type { GuideCategory, GuideCta, GuideInternalLink, GuideSource };

export type FaqExplanationSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type FaqStateConsiderations = {
  intro: string;
  points: string[];
  relatedStateCodes: string[];
};

/** Catalog metadata — SEO and taxonomy without long-form body. */
export type FaqCatalogEntry = {
  slug: string;
  question: string;
  metaTitle: string;
  metaDescription: string;
  category: GuideCategory;
  pairedGuideSlug: string;
  relatedGuideSlugs: string[];
  relatedFaqSlugs: string[];
};

/** Generated long-form body merged with catalog at runtime. */
export type FaqBody = {
  directAnswer: string;
  explanation: FaqExplanationSection[];
  stateConsiderations: FaqStateConsiderations;
  sources: GuideSource[];
  internalLinks: GuideInternalLink[];
  cta: GuideCta;
};

export type FaqArticle = FaqCatalogEntry &
  FaqBody & {
    attribution: EditorialAttribution;
    relatedContent: RelatedContentBuckets;
  };

export function countFaqWords(article: FaqArticle): number {
  const parts: string[] = [];

  function collect(value: unknown): void {
    if (typeof value === "string") {
      parts.push(value);
      return;
    }
    if (Array.isArray(value)) {
      for (const item of value) collect(item);
      return;
    }
    if (value && typeof value === "object") {
      for (const nested of Object.values(value)) collect(nested);
    }
  }

  collect({
    question: article.question,
    metaTitle: article.metaTitle,
    metaDescription: article.metaDescription,
    directAnswer: article.directAnswer,
    explanation: article.explanation,
    stateConsiderations: article.stateConsiderations,
    sources: article.sources,
    internalLinks: article.internalLinks,
    cta: article.cta,
  });

  return parts.join(" ").split(/\s+/).filter(Boolean).length;
}
