import type { EditorialAttribution } from "@/lib/content/editorial/attribution";
import type { RelatedContentBuckets } from "@/lib/content/related";

export type StateContentParagraphs = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type StateViolation = {
  title: string;
  description: string;
};

export type StateAppealStep = {
  step: number;
  title: string;
  description: string;
};

export type StateStatute = {
  citation: string;
  summary: string;
};

export type StateTimelineEvent = {
  label: string;
  duration: string;
  notes: string;
};

export type StateEvidenceCategory = {
  category: string;
  items: string[];
};

export type StateAppealPhase = {
  title: string;
  actions: string[];
};

export type StateFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type StateInternalLink = {
  label: string;
  href: string;
  description: string;
};

export type StateSource = {
  citation: string;
  description: string;
  url?: string;
};

export type StateLegalContent = {
  code: string;
  overview: StateContentParagraphs;
  commonViolations: StateContentParagraphs & {
    violations: StateViolation[];
  };
  appealProcess: StateContentParagraphs & {
    steps: StateAppealStep[];
  };
  statutes: StateContentParagraphs & {
    items: StateStatute[];
  };
  timelines: StateContentParagraphs & {
    events: StateTimelineEvent[];
  };
  hearingProcess: StateContentParagraphs;
  evidenceChecklist: StateContentParagraphs & {
    categories: StateEvidenceCategory[];
  };
  appealStrategy: StateContentParagraphs & {
    phases: StateAppealPhase[];
  };
  faq: StateFaqItem[];
  internalLinks: StateInternalLink[];
  relatedGuideSlugs: string[];
  sources: StateSource[];
  attribution: EditorialAttribution;
  relatedContent: RelatedContentBuckets;
};

export function countStateContentWords(content: StateLegalContent): number {
  const textParts: string[] = [];

  function collect(value: unknown): void {
    if (typeof value === "string") {
      textParts.push(value);
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
    code: content.code,
    overview: content.overview,
    commonViolations: content.commonViolations,
    appealProcess: content.appealProcess,
    statutes: content.statutes,
    timelines: content.timelines,
    hearingProcess: content.hearingProcess,
    evidenceChecklist: content.evidenceChecklist,
    appealStrategy: content.appealStrategy,
    faq: content.faq,
    internalLinks: content.internalLinks,
    relatedGuideSlugs: content.relatedGuideSlugs,
    sources: content.sources,
    attribution: content.attribution,
  });
  return textParts.join(" ").split(/\s+/).filter(Boolean).length;
}
