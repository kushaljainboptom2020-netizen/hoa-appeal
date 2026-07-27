import type { EditorialAttribution } from "@/lib/content/editorial/attribution";
import type { GuideSource } from "@/lib/content/guides/types";

export type SuccessStory = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  stateCode: string;
  stateSlug: string;
  guideSlugs: string[];
  topicKeywords: string[];
  timeline: string;
  outcome: string;
  highlights: string[];
  /** Narrative body sections for educational depth */
  body: { heading: string; paragraphs: string[] }[];
  attribution: EditorialAttribution;
  sources: GuideSource[];
};

export type SuccessStoryCard = Pick<
  SuccessStory,
  "slug" | "title" | "metaDescription" | "stateSlug" | "summary"
>;
