import { attributionForStateCode } from "@/lib/content/editorial/attribution";
import type { StateSeoConfig } from "@/lib/seo/statePages";
import type { StateLegalContent } from "./types";

/** Factual and narrative inputs unique to each state — no shared paragraph text. */
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
  /** Unique overview paragraphs — written for this state only */
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

function internalLinksFor(
  config: StateSeoConfig,
  profile: StateContentProfile
): StateLegalContent["internalLinks"] {
  const hearingNote = profile.hasStatutoryHearingRight
    ? `${config.name}'s statutory hearing framework`
    : `${config.name} governing-document hearing clauses`;
  const noticeNote = profile.noticeWindow
    ? `typical ${profile.noticeWindow} cure windows`
    : "document-based cure windows";

  return [
    {
      label: `${config.name} appeal letter generator`,
      href: `/appeal-hoa-fine/${config.slug}`,
      description: `Draft a dispute letter that cites ${profile.primaryActShort} where applicable, your CC&Rs, and ${noticeNote} common in ${config.name} associations.`,
    },
    {
      label: "Understanding your appeal rights",
      href: "/guides/understanding-your-rights",
      description: `Pair national due-process arguments with ${hearingNote} and the regional enforcement patterns around ${profile.regionalContext}.`,
    },
    {
      label: "How to collect evidence",
      href: "/guides/how-to-collect-evidence",
      description: `Build photo logs and selective-enforcement comparisons that ${config.name} boards and, if needed, ${profile.regulatoryBody ?? "local courts"} take seriously.`,
    },
    {
      label: "Dealing with lien threats",
      href: "/guides/dealing-with-lien-threats",
      description: `Respond quickly if a ${config.name} association escalates unpaid fines toward assessment liens after you dispute ${profile.primaryActShort} procedure.`,
    },
    {
      label: "Browse all state appeal guides",
      href: "#browse-by-state",
      description: `Compare this ${config.name} resource with HOA fine appeal guides for other states if you own property in more than one jurisdiction.`,
    },
  ];
}

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
    code: config.code,
    overview: {
      heading: `Overview of HOA laws in ${config.name}`,
      paragraphs: profile.overviewParagraphs,
      bullets: profile.overviewBullets,
    },
    commonViolations: {
      heading: `Common HOA violations in ${config.name}`,
      paragraphs: profile.violationsIntro,
      violations: profile.violations,
    },
    appealProcess: {
      heading: `${config.name} HOA fine appeal process`,
      paragraphs: profile.appealIntro,
      steps: profile.appealSteps,
    },
    statutes: {
      heading: `Relevant ${config.name} HOA statutes`,
      paragraphs: profile.statutesIntro,
      items: profile.statutes,
    },
    timelines: {
      heading: `Typical ${config.name} HOA fine timelines`,
      paragraphs: profile.timelinesIntro,
      events: profile.timelineEvents,
    },
    hearingProcess: {
      heading: `HOA hearing process in ${config.name}`,
      paragraphs: profile.hearingParagraphs,
      bullets: profile.hearingBullets,
    },
    evidenceChecklist: {
      heading: `Evidence checklist for ${config.name} appeals`,
      paragraphs: profile.evidenceIntro,
      categories: profile.evidenceCategories,
    },
    appealStrategy: {
      heading: `Sample appeal strategy for ${config.name} homeowners`,
      paragraphs: profile.strategyIntro,
      phases: profile.strategyPhases,
    },
    faq: profile.faq,
    internalLinks: internalLinksFor(config, profile),
    relatedGuideSlugs: profile.relatedGuideSlugs,
    sources: profile.sources,
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
