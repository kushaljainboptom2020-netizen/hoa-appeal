import type { EditorialAttribution } from "@/lib/content/editorial/attribution";
import type { RelatedContentBuckets } from "@/lib/content/related";

export type GuideCategory =
  | "rights-process"
  | "appeals-letters"
  | "evidence-enforcement"
  | "money-liens"
  | "rules-terminology";
export const GUIDE_CATEGORY_LABELS: Record<GuideCategory, string> = {
  "rights-process": "Rights, due process & timelines",
  "appeals-letters": "Appeals, letters & hearings",
  "evidence-enforcement": "Evidence & selective enforcement",
  "money-liens": "Fines, liens & foreclosure",
  "rules-terminology": "Laws, CC&Rs, boards & terminology",
};

export type GuideSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type GuideFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type GuideSource = {
  citation: string;
  description: string;
  url?: string;
};

export type GuideInternalLink = {
  label: string;
  href: string;
  description: string;
};

export type GuideCta = {
  headline: string;
  body: string;
  href: string;
  linkLabel: string;
};

/** Decision-tree option: either advance to another node or end with a result. */
export type GuideDecisionOption = {
  label: string;
  nextId?: string;
  result?: string;
};

export type GuideDecisionNode = {
  id: string;
  prompt: string;
  options: GuideDecisionOption[];
};

export type GuideDecisionTree = {
  heading: string;
  intro: string;
  startId: string;
  nodes: GuideDecisionNode[];
};

export type GuideProcessStep = {
  step: number;
  title: string;
  description: string;
  estimatedTime: string;
  documentsRequired: string[];
  commonMistakes: string[];
};

export type GuideProcessFlow = {
  heading: string;
  intro: string;
  steps: GuideProcessStep[];
};

export type GuideComparisonRow = {
  label: string;
  values: string[];
};

export type GuideComparisonTable = {
  heading: string;
  intro: string;
  columns: string[];
  rows: GuideComparisonRow[];
};

export type GuideChecklistCategory = {
  category: string;
  items: string[];
};

export type GuideChecklistAsset = {
  heading: string;
  intro: string;
  categories: GuideChecklistCategory[];
};

export type GuideTimelineEvent = {
  label: string;
  duration: string;
  notes: string;
  documentsRequired: string[];
  commonMistakes: string[];
};

export type GuideTimelineAsset = {
  heading: string;
  intro: string;
  events: GuideTimelineEvent[];
};

export type GuideVisualTakeaway = {
  title: string;
  detail: string;
};

export type GuideVisualSummary = {
  heading: string;
  intro: string;
  takeaways: GuideVisualTakeaway[];
};

export type GuideDownloadable = {
  label: string;
  description: string;
  href: string;
  fileType: "pdf" | "svg";
};

export type GuideInfographicSet = {
  process: string;
  comparison: string;
  timeline: string;
  checklist: string;
};

/** Structured educational assets rendered beside long-form guide prose. */
export type GuideEducationalAssets = {
  decisionTree: GuideDecisionTree;
  processFlow: GuideProcessFlow;
  comparisonTable: GuideComparisonTable;
  checklist: GuideChecklistAsset;
  timeline: GuideTimelineAsset;
  visualSummary: GuideVisualSummary;
  downloadables: GuideDownloadable[];
  infographics: GuideInfographicSet;
};

/** Catalog metadata — SEO and taxonomy without long-form body. */
export type GuideCatalogEntry = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: GuideCategory;
  relatedGuideSlugs: string[];
};

/** Generated long-form body merged with catalog at runtime. */
export type GuideBody = {
  intro: string[];
  sections: GuideSection[];
  conclusion: string[];
  faq: GuideFaqItem[];
  sources: GuideSource[];
  internalLinks: GuideInternalLink[];
  cta: GuideCta;
};

export type GuideArticle = GuideCatalogEntry &
  GuideBody & {
    educationalAssets: GuideEducationalAssets;
    attribution: EditorialAttribution;
    relatedContent: RelatedContentBuckets;
  };

/** Lightweight shape used by RelatedGuides cards and hub listings. */
export type GuideEntry = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category?: GuideCategory;
  sections?: GuideSection[];
};

export function countGuideWords(article: GuideArticle): number {
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
    title: article.title,
    metaTitle: article.metaTitle,
    metaDescription: article.metaDescription,
    intro: article.intro,
    sections: article.sections,
    conclusion: article.conclusion,
    faq: article.faq,
    sources: article.sources,
    internalLinks: article.internalLinks,
    cta: article.cta,
  });

  return parts.join(" ").split(/\s+/).filter(Boolean).length;
}
