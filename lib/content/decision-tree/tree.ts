import type { DecisionOutcomeDefinition, DecisionTreeDefinition } from "./types";

function worksheet(slug: string, label: string, description: string) {
  return {
    label,
    href: `/guides/worksheets/${slug}-worksheet.pdf`,
    description,
  };
}

function templateGuide(slug: string, label: string, description: string) {
  return {
    label,
    href: `/guides/${slug}`,
    description,
  };
}

const LETTER_WIZARD: DecisionOutcomeDefinition["tools"][number] = {
  label: "Start the HOA appeal letter wizard",
  href: "/",
  description:
    "Draft a formal dispute letter with your facts, defenses, and remedy request.",
};

const GUIDES_HUB: DecisionOutcomeDefinition["tools"][number] = {
  label: "Browse all HOA appeal guides",
  href: "/guides",
  description: "Open the full library if you want to compare related topics.",
};

const FAQ_HUB: DecisionOutcomeDefinition["tools"][number] = {
  label: "Browse the FAQ knowledge base",
  href: "/faq",
  description: "Short answers to common notice, hearing, and fine questions.",
};

const OUTCOMES: DecisionOutcomeDefinition[] = [
  {
    id: "notice-deadline-open",
    title: "Protect the deadline, then dispute in writing",
    summary:
      "Your appeal or cure window still looks open. Calendar the deadline, gather the notice packet, and send a written position before the clock expires.",
    guideSlugs: [
      "hoa-fine-timelines-and-deadlines",
      "hoa-fine-appeal-process",
      "understanding-your-rights",
      "certified-mail-and-notice-proof",
    ],
    templates: [
      templateGuide(
        "sample-hoa-appeal-letter-structure",
        "Sample appeal letter structure",
        "Section-by-section outline for a clear written dispute."
      ),
      worksheet(
        "how-to-write-an-hoa-appeal-letter",
        "Appeal letter worksheet (PDF)",
        "Printable packet for facts, citations, and remedy language."
      ),
    ],
    tools: [LETTER_WIZARD, GUIDES_HUB],
  },
  {
    id: "notice-deadline-unclear",
    title: "Clarify the controlling deadline in writing",
    summary:
      "When the notice is vague, ask for the governing deadline and whether late submissions are accepted—while still preserving hearing and appeal rights.",
    guideSlugs: [
      "hoa-fine-timelines-and-deadlines",
      "hoa-due-process-rights",
      "requesting-hoa-records-and-violation-files",
      "understanding-your-rights",
    ],
    templates: [
      templateGuide(
        "how-to-write-an-hoa-appeal-letter",
        "How to write an appeal letter",
        "Language for requesting deadlines, records, and a hearing."
      ),
      worksheet(
        "hoa-fine-timelines-and-deadlines",
        "Timelines worksheet (PDF)",
        "Track notice, cure, and appeal dates on one page."
      ),
    ],
    tools: [LETTER_WIZARD, FAQ_HUB],
  },
  {
    id: "notice-deadline-missed",
    title: "Document why the window was missed, then escalate carefully",
    summary:
      "A missed internal deadline is not always the end. Preserve delivery defects, late notice, and payment-under-protest options before collections escalate.",
    guideSlugs: [
      "checklist-before-paying-an-hoa-fine",
      "after-the-hoa-hearing-next-steps",
      "dealing-with-lien-threats",
      "mediation-and-adr-for-hoa-disputes",
    ],
    templates: [
      worksheet(
        "checklist-before-paying-an-hoa-fine",
        "Before-you-pay checklist (PDF)",
        "Verify the debt and preserve dispute rights before payment."
      ),
      templateGuide(
        "how-to-write-an-hoa-appeal-letter",
        "Late-appeal letter guidance",
        "How to explain delayed notice or portal failures in writing."
      ),
    ],
    tools: [LETTER_WIZARD, GUIDES_HUB],
  },
  {
    id: "appeal-letter-ready",
    title: "Build a complete written appeal packet",
    summary:
      "Focus on facts, citations, exhibits, and one clear remedy. A complete letter beats an emotional narrative every time.",
    guideSlugs: [
      "how-to-write-an-hoa-appeal-letter",
      "sample-hoa-appeal-letter-structure",
      "how-to-collect-evidence",
      "hoa-fine-appeal-process",
    ],
    templates: [
      templateGuide(
        "sample-hoa-appeal-letter-structure",
        "Sample letter structure",
        "Header, facts, legal arguments, remedy, and exhibits."
      ),
      worksheet(
        "sample-hoa-appeal-letter-structure",
        "Letter structure worksheet (PDF)",
        "Fill-in outline you can print and complete offline."
      ),
      worksheet(
        "how-to-write-an-hoa-appeal-letter",
        "Appeal letter worksheet (PDF)",
        "Checklist for citations, defects, and the ask."
      ),
    ],
    tools: [LETTER_WIZARD, GUIDES_HUB],
  },
  {
    id: "appeal-need-evidence",
    title: "Strengthen evidence before you submit",
    summary:
      "Boards and later reviewers respond to dated photos, records, and comparables—not adjectives. Build the exhibit spine first.",
    guideSlugs: [
      "how-to-collect-evidence",
      "photographic-evidence-for-hoa-appeals",
      "selective-enforcement-hoa-fines",
      "requesting-hoa-records-and-violation-files",
    ],
    templates: [
      worksheet(
        "how-to-collect-evidence",
        "Evidence collection worksheet (PDF)",
        "Organize photos, logs, and records requests."
      ),
      worksheet(
        "photographic-evidence-for-hoa-appeals",
        "Photo evidence worksheet (PDF)",
        "Light, landmarks, timestamps, and authenticity tips."
      ),
    ],
    tools: [LETTER_WIZARD, FAQ_HUB],
  },
  {
    id: "hearing-prep",
    title: "Prepare for the hearing like a short presentation",
    summary:
      "Arrive with indexed exhibits, a one-minute opening, and a written decision request. Know the agenda and speaking order.",
    guideSlugs: [
      "hoa-hearing-what-to-expect",
      "hoa-meeting-preparation",
      "preparing-exhibits-for-hoa-hearings",
      "hoa-board-meeting-rules-and-minutes",
    ],
    templates: [
      worksheet(
        "hoa-hearing-what-to-expect",
        "Hearing prep worksheet (PDF)",
        "Agenda flow, speaking order, and decision timing."
      ),
      worksheet(
        "preparing-exhibits-for-hoa-hearings",
        "Exhibits worksheet (PDF)",
        "Label and order hearing exhibits before you speak."
      ),
    ],
    tools: [LETTER_WIZARD, GUIDES_HUB],
  },
  {
    id: "after-denial",
    title: "Treat denial or silence as a written-record problem",
    summary:
      "Demand or calendar a written decision, then choose ADR, payment under protest, counsel, or court based on stakes—not frustration.",
    guideSlugs: [
      "after-the-hoa-hearing-next-steps",
      "mediation-and-adr-for-hoa-disputes",
      "appealing-an-hoa-fine-in-court",
      "when-to-hire-an-hoa-attorney",
    ],
    templates: [
      worksheet(
        "after-the-hoa-hearing-next-steps",
        "Post-hearing worksheet (PDF)",
        "Written decisions, deadlines, and escalation forks."
      ),
      templateGuide(
        "appealing-an-hoa-fine-in-court",
        "Court appeal overview",
        "Exhaustion, jurisdiction, and evidence preservation."
      ),
    ],
    tools: [LETTER_WIZARD, FAQ_HUB],
  },
  {
    id: "lien-collections",
    title: "Verify the debt and slow the collections path",
    summary:
      "Separate fines from assessments, request a ledger breakdown, and preserve dispute rights before a lien or foreclosure narrative hardens.",
    guideSlugs: [
      "dealing-with-lien-threats",
      "hoa-collections-and-demand-letters",
      "hoa-foreclosure-risks-from-unpaid-fines",
      "checklist-before-paying-an-hoa-fine",
      "assessment-vs-fine-differences",
    ],
    templates: [
      worksheet(
        "dealing-with-lien-threats",
        "Lien threat worksheet (PDF)",
        "Verify debt, document disputes, and track escalation."
      ),
      worksheet(
        "checklist-before-paying-an-hoa-fine",
        "Payment checklist (PDF)",
        "Decide whether paying now helps or hurts your record."
      ),
    ],
    tools: [LETTER_WIZARD, GUIDES_HUB],
  },
  {
    id: "not-sure-start",
    title: "Start with rights, process, and your state rules",
    summary:
      "If you are unsure where you stand, map notice/cure/hearing rights, skim the appeal process, then use your state page and the letter wizard.",
    guideSlugs: [
      "understanding-your-rights",
      "hoa-fine-appeal-process",
      "state-hoa-law-basics-for-homeowners",
      "hoa-due-process-rights",
    ],
    templates: [
      templateGuide(
        "sample-hoa-appeal-letter-structure",
        "Sample letter structure",
        "A simple outline once you know what to ask for."
      ),
      worksheet(
        "understanding-your-rights",
        "Owner rights worksheet (PDF)",
        "Notice, cure, hearing, and written-decision checklist."
      ),
    ],
    tools: [LETTER_WIZARD, GUIDES_HUB, FAQ_HUB],
  },
];

export const HOA_DECISION_TREE: DecisionTreeDefinition = {
  heading: "HOA fine appeal decision tree",
  intro:
    "Answer a few questions about your situation. We will recommend guides, your state page, letter templates, and tools—no searching required.",
  startId: "start",
  nodes: [
    {
      id: "start",
      prompt: "What best describes your situation right now?",
      options: [
        {
          label: "I just received a fine or violation notice",
          nextId: "notice-deadline",
        },
        {
          label: "I am writing or planning an appeal letter",
          nextId: "appeal-focus",
        },
        {
          label: "I have a hearing or board meeting coming up",
          outcomeId: "hearing-prep",
        },
        {
          label: "The board denied me, or I got no written decision",
          outcomeId: "after-denial",
        },
        {
          label: "I am facing a lien, collections, or foreclosure threat",
          outcomeId: "lien-collections",
        },
        {
          label: "I am not sure where to start",
          outcomeId: "not-sure-start",
        },
      ],
    },
    {
      id: "notice-deadline",
      prompt: "Is an appeal, cure, or response deadline still open?",
      options: [
        {
          label: "Yes — time remains",
          outcomeId: "notice-deadline-open",
        },
        {
          label: "Unsure / the notice is unclear",
          outcomeId: "notice-deadline-unclear",
        },
        {
          label: "No — the window already closed",
          outcomeId: "notice-deadline-missed",
        },
      ],
    },
    {
      id: "appeal-focus",
      prompt: "What do you need most for the appeal?",
      options: [
        {
          label: "Help writing a complete letter",
          outcomeId: "appeal-letter-ready",
        },
        {
          label: "Help gathering evidence and exhibits first",
          outcomeId: "appeal-need-evidence",
        },
        {
          label: "Both — I need the full process overview",
          outcomeId: "notice-deadline-open",
        },
      ],
    },
  ],
  outcomes: OUTCOMES,
};
