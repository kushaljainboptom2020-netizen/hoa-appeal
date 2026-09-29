import { attributionForStateCode } from "@/lib/content/editorial/attribution";
import type { StateSeoConfig } from "@/lib/seo/statePages";
import { buildRemediatedStateFields } from "./remediated";
import type { StateLegalContent } from "./types";

/** Factual and narrative inputs unique to each state â€” no shared paragraph text. */
export type StateContentProfile = {
  code: string;
  /** Regional or climate context woven into overview and violations */
  regionalContext: string;
  /** Primary governing act short name for prose */
  primaryActShort: string;
  /** Optional state regulatory or ombudsman body */
  regulatoryBody?: string;
  /** Statutory cure/notice window when known (e.g. "30 days" for Texas) */
  noticeWindow?: string;
  /** Whether statute explicitly mentions board hearing rights */
  hasStatutoryHearingRight: boolean;
  /** Unique overview paragraphs â€” written for this state only */
  overviewParagraphs: string[];
  overviewBullets: string[];
  /** Section intros and structured items */
  violationsIntro: string[];
  violations: { title: string; description: string }[];
  appealIntro: string[];
  appealSteps: { step: number; title: string; description: string }[];
  statutesIntro: string[];
  statutes: { citation: string; summary: string }[];
  timelinesIntro: string[];
  timelineEvents: { label: string; duration: string; notes: string }[];
  hearingParagraphs: string[];
  hearingBullets: string[];
  evidenceIntro: string[];
  evidenceCategories: { category: string; items: string[] }[];
  strategyIntro: string[];
  strategyPhases: { title: string; actions: string[] }[];
  faq: { id: string; question: string; answer: string }[];
  sources: { citation: string; description: string; url?: string }[];
  relatedGuideSlugs: string[];
};

export function buildStateLegalContent(
  config: StateSeoConfig,
  profile: StateContentProfile
): StateLegalContent {
  if (profile.code !== config.code) {
    throw new Error(
      `Profile code ${profile.code} does not match config code ${config.code}`
    );
  }

  return {
    ...buildRemediatedStateFields(config, profile),
    attribution: attributionForStateCode(config.code),
    relatedContent: {
      states: [],
      guides: [],
      faqs: [],
      tools: [],
      successStories: [],
    },
  };
}
