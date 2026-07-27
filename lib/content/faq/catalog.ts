import type { FaqCatalogEntry } from "./types";

/**
 * Locked catalog of 50 FAQ knowledge-base entries.
 * Each pairs 1:1 with a guide topic. Bodies live in faq.generated.ts.
 */
export const FAQ_CATALOG: FaqCatalogEntry[] = [
  {
    slug: "can-an-hoa-fine-me-without-notice",
    question: "Can an HOA fine me without written notice?",
    metaTitle:
      "Can an HOA Fine Me Without Written Notice? | Owner FAQ | MyHOAAppeal",
    metaDescription:
      "Learn when HOAs must give written notice before fines, what due process usually requires, and how to challenge penalties issued without proper notice.",
    category: "rights-process",
    pairedGuideSlug: "understanding-your-rights",
    relatedGuideSlugs: [
      "hoa-due-process-rights",
      "hoa-fine-appeal-process",
      "certified-mail-and-notice-proof",
    ],
    relatedFaqSlugs: [
      "what-due-process-rights-do-hoa-owners-have",
      "how-do-i-start-an-hoa-fine-appeal",
      "how-do-i-prove-hoa-notice-was-defective",
    ],
  },
  {
    slug: "what-evidence-do-i-need-for-an-hoa-appeal",
    question: "What evidence do I need for an HOA fine appeal?",
    metaTitle:
      "What Evidence Do I Need for an HOA Fine Appeal? | FAQ | MyHOAAppeal",
    metaDescription:
      "Find out which photos, logs, records, and exhibits strengthen an HOA fine appeal and how to organize a board-ready evidence packet.",
    category: "evidence-enforcement",
    pairedGuideSlug: "how-to-collect-evidence",
    relatedGuideSlugs: [
      "photographic-evidence-for-hoa-appeals",
      "preparing-exhibits-for-hoa-hearings",
      "requesting-hoa-records-and-violation-files",
    ],
    relatedFaqSlugs: [
      "how-should-i-photograph-hoa-violations",
      "how-do-i-organize-hoa-hearing-exhibits",
      "can-i-request-my-hoa-violation-file",
    ],
  },
  {
    slug: "what-should-i-do-if-my-hoa-threatens-a-lien",
    question: "What should I do if my HOA threatens a lien over a fine?",
    metaTitle:
      "What Should I Do If My HOA Threatens a Lien? | FAQ | MyHOAAppeal",
    metaDescription:
      "Respond to HOA lien threats tied to disputed fines: verify the debt, preserve appeal rights, and know when foreclosure risk becomes real.",
    category: "money-liens",
    pairedGuideSlug: "dealing-with-lien-threats",
    relatedGuideSlugs: [
      "hoa-foreclosure-risks-from-unpaid-fines",
      "hoa-collections-and-demand-letters",
      "assessment-vs-fine-differences",
    ],
    relatedFaqSlugs: [
      "can-an-hoa-foreclose-over-unpaid-fines",
      "how-should-i-respond-to-hoa-collection-letters",
      "are-hoa-assessments-the-same-as-fines",
    ],
  },
  {
    slug: "how-do-i-prepare-for-an-hoa-board-hearing",
    question: "How do I prepare for an HOA board hearing?",
    metaTitle:
      "How Do I Prepare for an HOA Board Hearing? | FAQ | MyHOAAppeal",
    metaDescription:
      "Prepare opening remarks, exhibits, and questions for an HOA board hearing so directors can follow your fine dispute clearly.",
    category: "appeals-letters",
    pairedGuideSlug: "hoa-meeting-preparation",
    relatedGuideSlugs: [
      "hoa-hearing-what-to-expect",
      "preparing-exhibits-for-hoa-hearings",
      "after-the-hoa-hearing-next-steps",
    ],
    relatedFaqSlugs: [
      "what-happens-at-an-hoa-fine-hearing",
      "how-do-i-organize-hoa-hearing-exhibits",
      "what-should-i-do-after-an-hoa-hearing",
    ],
  },
  {
    slug: "how-do-i-start-an-hoa-fine-appeal",
    question: "How do I start an HOA fine appeal?",
    metaTitle: "How Do I Start an HOA Fine Appeal? | Step FAQ | MyHOAAppeal",
    metaDescription:
      "Start an HOA fine appeal correctly: review notice and cure windows, request a hearing in writing, and calendar every protective deadline.",
    category: "appeals-letters",
    pairedGuideSlug: "hoa-fine-appeal-process",
    relatedGuideSlugs: [
      "how-to-write-an-hoa-appeal-letter",
      "hoa-fine-timelines-and-deadlines",
      "understanding-your-rights",
    ],
    relatedFaqSlugs: [
      "how-do-i-write-an-hoa-appeal-letter",
      "what-deadlines-matter-in-hoa-fine-disputes",
      "can-an-hoa-fine-me-without-notice",
    ],
  },
  {
    slug: "how-do-i-write-an-hoa-appeal-letter",
    question: "How do I write an effective HOA fine appeal letter?",
    metaTitle:
      "How Do I Write an HOA Fine Appeal Letter? | FAQ | MyHOAAppeal",
    metaDescription:
      "Write a clear HOA fine appeal letter with facts, rule citations, procedural defects, exhibits, and a specific request for relief.",
    category: "appeals-letters",
    pairedGuideSlug: "how-to-write-an-hoa-appeal-letter",
    relatedGuideSlugs: [
      "sample-hoa-appeal-letter-structure",
      "hoa-fine-appeal-process",
      "certified-mail-and-notice-proof",
    ],
    relatedFaqSlugs: [
      "what-sections-belong-in-an-hoa-appeal-letter",
      "how-do-i-start-an-hoa-fine-appeal",
      "how-do-i-prove-hoa-notice-was-defective",
    ],
  },
  {
    slug: "what-sections-belong-in-an-hoa-appeal-letter",
    question: "What sections belong in an HOA appeal letter?",
    metaTitle:
      "What Sections Belong in an HOA Appeal Letter? | FAQ | MyHOAAppeal",
    metaDescription:
      "Use a proven HOA appeal letter outline—caption, facts, defects, exhibits, and closing ask—without copying generic filler language.",
    category: "appeals-letters",
    pairedGuideSlug: "sample-hoa-appeal-letter-structure",
    relatedGuideSlugs: [
      "how-to-write-an-hoa-appeal-letter",
      "checklist-before-paying-an-hoa-fine",
      "hoa-legal-terminology-glossary",
    ],
    relatedFaqSlugs: [
      "how-do-i-write-an-hoa-appeal-letter",
      "should-i-pay-an-hoa-fine-before-appealing",
      "what-hoa-legal-terms-should-owners-know",
    ],
  },
  {
    slug: "what-happens-at-an-hoa-fine-hearing",
    question: "What happens at an HOA fine hearing?",
    metaTitle: "What Happens at an HOA Fine Hearing? | FAQ | MyHOAAppeal",
    metaDescription:
      "Learn how HOA fine hearings typically run, who speaks, what evidence matters, and how to request a fair written decision.",
    category: "appeals-letters",
    pairedGuideSlug: "hoa-hearing-what-to-expect",
    relatedGuideSlugs: [
      "hoa-meeting-preparation",
      "after-the-hoa-hearing-next-steps",
      "hoa-due-process-rights",
    ],
    relatedFaqSlugs: [
      "how-do-i-prepare-for-an-hoa-board-hearing",
      "what-should-i-do-after-an-hoa-hearing",
      "what-due-process-rights-do-hoa-owners-have",
    ],
  },
  {
    slug: "what-should-i-do-after-an-hoa-hearing",
    question: "What should I do after an HOA fine hearing?",
    metaTitle:
      "What Should I Do After an HOA Fine Hearing? | FAQ | MyHOAAppeal",
    metaDescription:
      "Know what to do after an HOA fine hearing: confirm minutes, challenge inaccurate decisions, try ADR, or escalate carefully.",
    category: "appeals-letters",
    pairedGuideSlug: "after-the-hoa-hearing-next-steps",
    relatedGuideSlugs: [
      "mediation-and-adr-for-hoa-disputes",
      "appealing-an-hoa-fine-in-court",
      "hoa-hearing-what-to-expect",
    ],
    relatedFaqSlugs: [
      "when-does-hoa-mediation-make-sense",
      "can-i-take-an-hoa-fine-to-court",
      "what-happens-at-an-hoa-fine-hearing",
    ],
  },
  {
    slug: "can-i-take-an-hoa-fine-to-court",
    question: "Can I take an HOA fine dispute to court?",
    metaTitle: "Can I Take an HOA Fine Dispute to Court? | FAQ | MyHOAAppeal",
    metaDescription:
      "Understand when court review of an HOA fine is realistic, what records judges expect, and how internal appeals affect litigation.",
    category: "appeals-letters",
    pairedGuideSlug: "appealing-an-hoa-fine-in-court",
    relatedGuideSlugs: [
      "when-to-hire-an-hoa-attorney",
      "after-the-hoa-hearing-next-steps",
      "statute-of-limitations-for-hoa-fines",
    ],
    relatedFaqSlugs: [
      "when-should-i-hire-an-hoa-attorney",
      "what-should-i-do-after-an-hoa-hearing",
      "is-there-a-time-limit-to-challenge-hoa-fines",
    ],
  },
  {
    slug: "should-i-pay-an-hoa-fine-before-appealing",
    question: "Should I pay an HOA fine before appealing?",
    metaTitle:
      "Should I Pay an HOA Fine Before Appealing? | FAQ | MyHOAAppeal",
    metaDescription:
      "Use a pre-payment checklist to verify notice, cure windows, fine schedules, and appeal rights before you pay an HOA penalty.",
    category: "appeals-letters",
    pairedGuideSlug: "checklist-before-paying-an-hoa-fine",
    relatedGuideSlugs: [
      "understanding-your-rights",
      "hoa-fine-schedules-and-caps",
      "cure-periods-before-hoa-fines",
    ],
    relatedFaqSlugs: [
      "can-an-hoa-fine-me-without-notice",
      "can-my-hoa-charge-more-than-the-fine-schedule",
      "what-is-an-hoa-cure-period",
    ],
  },
  {
    slug: "what-is-selective-enforcement-by-an-hoa",
    question: "What is selective enforcement by an HOA?",
    metaTitle: "What Is Selective Enforcement by an HOA? | FAQ | MyHOAAppeal",
    metaDescription:
      "Prove selective HOA enforcement with neighbor comparisons, records requests, and a calm written narrative boards cannot ignore.",
    category: "evidence-enforcement",
    pairedGuideSlug: "selective-enforcement-hoa-fines",
    relatedGuideSlugs: [
      "comparing-neighbor-enforcement-records",
      "challenging-arbitrary-hoa-fines",
      "how-to-collect-evidence",
    ],
    relatedFaqSlugs: [
      "how-do-i-compare-neighbor-hoa-enforcement",
      "how-do-i-challenge-an-arbitrary-hoa-fine",
      "what-evidence-do-i-need-for-an-hoa-appeal",
    ],
  },
  {
    slug: "how-should-i-photograph-hoa-violations",
    question: "How should I photograph alleged HOA violations for an appeal?",
    metaTitle:
      "How Should I Photograph HOA Violations for an Appeal? | FAQ | MyHOAAppeal",
    metaDescription:
      "Capture HOA appeal photos that show dates, landmarks, and lot identity so volunteer boards and later reviewers trust your file.",
    category: "evidence-enforcement",
    pairedGuideSlug: "photographic-evidence-for-hoa-appeals",
    relatedGuideSlugs: [
      "how-to-collect-evidence",
      "preparing-exhibits-for-hoa-hearings",
      "landscaping-and-maintenance-violation-appeals",
    ],
    relatedFaqSlugs: [
      "what-evidence-do-i-need-for-an-hoa-appeal",
      "how-do-i-organize-hoa-hearing-exhibits",
      "how-do-i-appeal-a-landscaping-hoa-fine",
    ],
  },
  {
    slug: "can-i-request-my-hoa-violation-file",
    question: "Can I request my HOA violation file and related records?",
    metaTitle:
      "Can I Request My HOA Violation File? | Records FAQ | MyHOAAppeal",
    metaDescription:
      "Request HOA violation photos, fine schedules, and meeting minutes using your documents and state association records rules.",
    category: "evidence-enforcement",
    pairedGuideSlug: "requesting-hoa-records-and-violation-files",
    relatedGuideSlugs: [
      "how-to-collect-evidence",
      "hoa-board-meeting-rules-and-minutes",
      "open-meeting-laws-and-hoa-transparency",
    ],
    relatedFaqSlugs: [
      "what-evidence-do-i-need-for-an-hoa-appeal",
      "do-hoa-board-minutes-matter-in-fine-disputes",
      "do-open-meeting-laws-apply-to-hoa-fine-votes",
    ],
  },
  {
    slug: "how-do-i-compare-neighbor-hoa-enforcement",
    question: "How do I compare neighbor enforcement records in an HOA dispute?",
    metaTitle:
      "How Do I Compare Neighbor HOA Enforcement? | FAQ | MyHOAAppeal",
    metaDescription:
      "Build lawful neighbor comparison charts that show uneven HOA fine enforcement without harassment or privacy violations.",
    category: "evidence-enforcement",
    pairedGuideSlug: "comparing-neighbor-enforcement-records",
    relatedGuideSlugs: [
      "selective-enforcement-hoa-fines",
      "photographic-evidence-for-hoa-appeals",
      "requesting-hoa-records-and-violation-files",
    ],
    relatedFaqSlugs: [
      "what-is-selective-enforcement-by-an-hoa",
      "how-should-i-photograph-hoa-violations",
      "can-i-request-my-hoa-violation-file",
    ],
  },
  {
    slug: "how-do-i-prove-hoa-notice-was-defective",
    question: "How do I prove HOA notice was defective?",
    metaTitle:
      "How Do I Prove HOA Notice Was Defective? | FAQ | MyHOAAppeal",
    metaDescription:
      "Create airtight notice proof for HOA fine appeals with certified mail, email archives, and calendar math that protects deadlines.",
    category: "evidence-enforcement",
    pairedGuideSlug: "certified-mail-and-notice-proof",
    relatedGuideSlugs: [
      "hoa-fine-timelines-and-deadlines",
      "how-to-write-an-hoa-appeal-letter",
      "cure-periods-before-hoa-fines",
    ],
    relatedFaqSlugs: [
      "what-deadlines-matter-in-hoa-fine-disputes",
      "how-do-i-write-an-hoa-appeal-letter",
      "what-is-an-hoa-cure-period",
    ],
  },
  {
    slug: "how-do-i-organize-hoa-hearing-exhibits",
    question: "How do I organize exhibits for an HOA hearing?",
    metaTitle:
      "How Do I Organize Exhibits for an HOA Hearing? | FAQ | MyHOAAppeal",
    metaDescription:
      "Organize numbered HOA hearing exhibits—photos, letters, schedules, and comparables—so directors can follow your case in minutes.",
    category: "evidence-enforcement",
    pairedGuideSlug: "preparing-exhibits-for-hoa-hearings",
    relatedGuideSlugs: [
      "hoa-meeting-preparation",
      "photographic-evidence-for-hoa-appeals",
      "how-to-collect-evidence",
    ],
    relatedFaqSlugs: [
      "how-do-i-prepare-for-an-hoa-board-hearing",
      "how-should-i-photograph-hoa-violations",
      "what-evidence-do-i-need-for-an-hoa-appeal",
    ],
  },
  {
    slug: "what-is-retaliatory-hoa-enforcement",
    question: "What is retaliatory enforcement by an HOA board?",
    metaTitle:
      "What Is Retaliatory HOA Enforcement? | Owner FAQ | MyHOAAppeal",
    metaDescription:
      "Recognize retaliatory HOA fine patterns after complaints or votes, and document timing that supports a fair-process challenge.",
    category: "evidence-enforcement",
    pairedGuideSlug: "retaliatory-enforcement-by-hoa-boards",
    relatedGuideSlugs: [
      "selective-enforcement-hoa-fines",
      "challenging-arbitrary-hoa-fines",
      "conflict-of-interest-on-hoa-boards",
    ],
    relatedFaqSlugs: [
      "what-is-selective-enforcement-by-an-hoa",
      "how-do-i-challenge-an-arbitrary-hoa-fine",
      "what-if-an-hoa-board-member-has-a-conflict",
    ],
  },
  {
    slug: "can-my-hoa-charge-more-than-the-fine-schedule",
    question: "Can my HOA charge more than the published fine schedule?",
    metaTitle:
      "Can My HOA Charge More Than the Fine Schedule? | FAQ | MyHOAAppeal",
    metaDescription:
      "Learn how HOA fine schedules and statutory or document caps limit penalties—and what to do when boards invent amounts.",
    category: "money-liens",
    pairedGuideSlug: "hoa-fine-schedules-and-caps",
    relatedGuideSlugs: [
      "daily-fines-and-accruing-penalties",
      "reading-hoa-statutes-and-ccrs",
      "challenging-arbitrary-hoa-fines",
    ],
    relatedFaqSlugs: [
      "can-an-hoa-stack-daily-fines-indefinitely",
      "how-do-i-read-hoa-statutes-and-ccrs",
      "how-do-i-challenge-an-arbitrary-hoa-fine",
    ],
  },
  {
    slug: "what-is-an-hoa-cure-period",
    question: "What is an HOA cure period before fines begin?",
    metaTitle: "What Is an HOA Cure Period Before Fines? | FAQ | MyHOAAppeal",
    metaDescription:
      "Understand cure periods before HOA fines accrue, how mail dates work, and how to request extensions without waiving rights.",
    category: "money-liens",
    pairedGuideSlug: "cure-periods-before-hoa-fines",
    relatedGuideSlugs: [
      "hoa-fine-timelines-and-deadlines",
      "seasonal-and-weather-related-cure-delays",
      "certified-mail-and-notice-proof",
    ],
    relatedFaqSlugs: [
      "what-deadlines-matter-in-hoa-fine-disputes",
      "can-weather-delay-an-hoa-cure-deadline",
      "how-do-i-prove-hoa-notice-was-defective",
    ],
  },
  {
    slug: "can-an-hoa-stack-daily-fines-indefinitely",
    question: "Can an HOA stack daily fines indefinitely?",
    metaTitle:
      "Can an HOA Stack Daily Fines Indefinitely? | FAQ | MyHOAAppeal",
    metaDescription:
      "Challenge daily HOA fines and accruing penalties by verifying schedules, cure pauses during appeals, and notice defects.",
    category: "money-liens",
    pairedGuideSlug: "daily-fines-and-accruing-penalties",
    relatedGuideSlugs: [
      "hoa-fine-schedules-and-caps",
      "cure-periods-before-hoa-fines",
      "dealing-with-lien-threats",
    ],
    relatedFaqSlugs: [
      "can-my-hoa-charge-more-than-the-fine-schedule",
      "what-is-an-hoa-cure-period",
      "what-should-i-do-if-my-hoa-threatens-a-lien",
    ],
  },
  {
    slug: "are-hoa-assessments-the-same-as-fines",
    question: "Are HOA assessments the same as fines?",
    metaTitle: "Are HOA Assessments the Same as Fines? | FAQ | MyHOAAppeal",
    metaDescription:
      "Separate regular assessments from fines so you know which ledger charges support liens, voting rights, and appeal procedures.",
    category: "money-liens",
    pairedGuideSlug: "assessment-vs-fine-differences",
    relatedGuideSlugs: [
      "dealing-with-lien-threats",
      "hoa-collections-and-demand-letters",
      "hoa-fine-schedules-and-caps",
    ],
    relatedFaqSlugs: [
      "what-should-i-do-if-my-hoa-threatens-a-lien",
      "how-should-i-respond-to-hoa-collection-letters",
      "can-my-hoa-charge-more-than-the-fine-schedule",
    ],
  },
  {
    slug: "how-should-i-respond-to-hoa-collection-letters",
    question: "How should I respond to HOA collection and demand letters?",
    metaTitle:
      "How Should I Respond to HOA Collection Letters? | FAQ | MyHOAAppeal",
    metaDescription:
      "Respond to HOA collection and demand letters without waiving disputes—verify charges, ask for breakdowns, and protect appeal rights.",
    category: "money-liens",
    pairedGuideSlug: "hoa-collections-and-demand-letters",
    relatedGuideSlugs: [
      "dealing-with-lien-threats",
      "assessment-vs-fine-differences",
      "when-to-hire-an-hoa-attorney",
    ],
    relatedFaqSlugs: [
      "what-should-i-do-if-my-hoa-threatens-a-lien",
      "are-hoa-assessments-the-same-as-fines",
      "when-should-i-hire-an-hoa-attorney",
    ],
  },
  {
    slug: "can-an-hoa-foreclose-over-unpaid-fines",
    question: "Can an HOA foreclose over unpaid fines?",
    metaTitle:
      "Can an HOA Foreclose Over Unpaid Fines? | Risk FAQ | MyHOAAppeal",
    metaDescription:
      "Understand when unpaid HOA fines can feed lien and foreclosure pathways, and what owners should do before risk escalates.",
    category: "money-liens",
    pairedGuideSlug: "hoa-foreclosure-risks-from-unpaid-fines",
    relatedGuideSlugs: [
      "dealing-with-lien-threats",
      "hoa-collections-and-demand-letters",
      "when-to-hire-an-hoa-attorney",
    ],
    relatedFaqSlugs: [
      "what-should-i-do-if-my-hoa-threatens-a-lien",
      "how-should-i-respond-to-hoa-collection-letters",
      "when-should-i-hire-an-hoa-attorney",
    ],
  },
  {
    slug: "can-an-hoa-suspend-amenities-over-a-disputed-fine",
    question: "Can an HOA suspend amenities over a disputed fine?",
    metaTitle:
      "Can an HOA Suspend Amenities Over a Disputed Fine? | FAQ | MyHOAAppeal",
    metaDescription:
      "Challenge HOA amenity bans and privilege suspensions tied to disputed fines when documents or statutes require fair process first.",
    category: "money-liens",
    pairedGuideSlug: "privilege-suspension-and-amenity-bans",
    relatedGuideSlugs: [
      "hoa-due-process-rights",
      "understanding-your-rights",
      "hoa-fine-appeal-process",
    ],
    relatedFaqSlugs: [
      "what-due-process-rights-do-hoa-owners-have",
      "can-an-hoa-fine-me-without-notice",
      "how-do-i-start-an-hoa-fine-appeal",
    ],
  },
  {
    slug: "what-due-process-rights-do-hoa-owners-have",
    question: "What due process rights do HOA owners have?",
    metaTitle:
      "What Due Process Rights Do HOA Owners Have? | FAQ | MyHOAAppeal",
    metaDescription:
      "Map HOA due process rights—notice, opportunity to be heard, and reasoned decisions—using statutes and your governing documents.",
    category: "rights-process",
    pairedGuideSlug: "hoa-due-process-rights",
    relatedGuideSlugs: [
      "understanding-your-rights",
      "hoa-hearing-what-to-expect",
      "homeowner-bill-of-rights-hoa-enforcement",
    ],
    relatedFaqSlugs: [
      "can-an-hoa-fine-me-without-notice",
      "what-happens-at-an-hoa-fine-hearing",
      "what-is-a-practical-hoa-homeowner-bill-of-rights",
    ],
  },
  {
    slug: "what-deadlines-matter-in-hoa-fine-disputes",
    question: "What deadlines matter most in HOA fine disputes?",
    metaTitle:
      "What Deadlines Matter Most in HOA Fine Disputes? | FAQ | MyHOAAppeal",
    metaDescription:
      "Build an HOA fine timeline covering inspection, notice, cure, hearing, and appeal cutoffs so you never miss a protective deadline.",
    category: "rights-process",
    pairedGuideSlug: "hoa-fine-timelines-and-deadlines",
    relatedGuideSlugs: [
      "cure-periods-before-hoa-fines",
      "certified-mail-and-notice-proof",
      "hoa-fine-appeal-process",
    ],
    relatedFaqSlugs: [
      "what-is-an-hoa-cure-period",
      "how-do-i-prove-hoa-notice-was-defective",
      "how-do-i-start-an-hoa-fine-appeal",
    ],
  },
  {
    slug: "how-do-i-read-hoa-statutes-and-ccrs",
    question: "How do I read HOA statutes and CC&Rs for a fine dispute?",
    metaTitle:
      "How Do I Read HOA Statutes and CC&Rs? | Owner FAQ | MyHOAAppeal",
    metaDescription:
      "Read HOA statutes and CC&Rs like an advocate: find definitions, enforcement ladders, hearing clauses, and fine-schedule adoption rules.",
    category: "rights-process",
    pairedGuideSlug: "reading-hoa-statutes-and-ccrs",
    relatedGuideSlugs: [
      "hoa-legal-terminology-glossary",
      "state-hoa-law-basics-for-homeowners",
      "amending-ccrs-vs-enforcing-rules",
    ],
    relatedFaqSlugs: [
      "what-hoa-legal-terms-should-owners-know",
      "how-do-state-hoa-laws-affect-fine-appeals",
      "can-an-hoa-enforce-a-rule-that-was-never-amended",
    ],
  },
  {
    slug: "what-hoa-legal-terms-should-owners-know",
    question: "What HOA legal terms should owners know?",
    metaTitle:
      "What HOA Legal Terms Should Owners Know? | Glossary FAQ | MyHOAAppeal",
    metaDescription:
      "Decode HOA legal terminology—CC&Rs, assessments, fine schedules, IDR, and more—so notices and appeal letters use precise language.",
    category: "rules-terminology",
    pairedGuideSlug: "hoa-legal-terminology-glossary",
    relatedGuideSlugs: [
      "reading-hoa-statutes-and-ccrs",
      "assessment-vs-fine-differences",
      "sample-hoa-appeal-letter-structure",
    ],
    relatedFaqSlugs: [
      "how-do-i-read-hoa-statutes-and-ccrs",
      "are-hoa-assessments-the-same-as-fines",
      "what-sections-belong-in-an-hoa-appeal-letter",
    ],
  },
  {
    slug: "how-do-state-hoa-laws-affect-fine-appeals",
    question: "How do state HOA laws affect fine appeals?",
    metaTitle:
      "How Do State HOA Laws Affect Fine Appeals? | FAQ | MyHOAAppeal",
    metaDescription:
      "Learn how state HOA and condominium acts interact with private CC&Rs, and where to look for hearing, notice, and records rights.",
    category: "rights-process",
    pairedGuideSlug: "state-hoa-law-basics-for-homeowners",
    relatedGuideSlugs: [
      "reading-hoa-statutes-and-ccrs",
      "condominium-vs-hoa-fine-differences",
      "hoa-due-process-rights",
    ],
    relatedFaqSlugs: [
      "how-do-i-read-hoa-statutes-and-ccrs",
      "do-condo-and-hoa-fine-rules-differ",
      "what-due-process-rights-do-hoa-owners-have",
    ],
  },
  {
    slug: "do-condo-and-hoa-fine-rules-differ",
    question: "Do condominium and HOA fine rules differ?",
    metaTitle:
      "Do Condominium and HOA Fine Rules Differ? | FAQ | MyHOAAppeal",
    metaDescription:
      "Compare condominium and planned-community fine rules so you cite the right statute family when disputing penalties.",
    category: "rights-process",
    pairedGuideSlug: "condominium-vs-hoa-fine-differences",
    relatedGuideSlugs: [
      "state-hoa-law-basics-for-homeowners",
      "reading-hoa-statutes-and-ccrs",
      "hoa-fine-appeal-process",
    ],
    relatedFaqSlugs: [
      "how-do-state-hoa-laws-affect-fine-appeals",
      "how-do-i-read-hoa-statutes-and-ccrs",
      "how-do-i-start-an-hoa-fine-appeal",
    ],
  },
  {
    slug: "is-there-a-time-limit-to-challenge-hoa-fines",
    question: "Is there a time limit to challenge HOA fines?",
    metaTitle:
      "Is There a Time Limit to Challenge HOA Fines? | FAQ | MyHOAAppeal",
    metaDescription:
      "Explore how limitation periods, laches, and stale violations can affect HOA fine collection and owner defenses.",
    category: "rights-process",
    pairedGuideSlug: "statute-of-limitations-for-hoa-fines",
    relatedGuideSlugs: [
      "hoa-fine-timelines-and-deadlines",
      "appealing-an-hoa-fine-in-court",
      "hoa-collections-and-demand-letters",
    ],
    relatedFaqSlugs: [
      "what-deadlines-matter-in-hoa-fine-disputes",
      "can-i-take-an-hoa-fine-to-court",
      "how-should-i-respond-to-hoa-collection-letters",
    ],
  },
  {
    slug: "what-is-a-practical-hoa-homeowner-bill-of-rights",
    question: "What is a practical homeowner bill of rights for HOA enforcement?",
    metaTitle:
      "What Is a Practical HOA Homeowner Bill of Rights? | FAQ | MyHOAAppeal",
    metaDescription:
      "Use a practical homeowner bill of rights framework to evaluate whether HOA fine enforcement meets basic fairness standards.",
    category: "rights-process",
    pairedGuideSlug: "homeowner-bill-of-rights-hoa-enforcement",
    relatedGuideSlugs: [
      "hoa-due-process-rights",
      "understanding-your-rights",
      "open-meeting-laws-and-hoa-transparency",
    ],
    relatedFaqSlugs: [
      "what-due-process-rights-do-hoa-owners-have",
      "can-an-hoa-fine-me-without-notice",
      "do-open-meeting-laws-apply-to-hoa-fine-votes",
    ],
  },
  {
    slug: "do-hoa-board-minutes-matter-in-fine-disputes",
    question: "Do HOA board meeting minutes matter in fine disputes?",
    metaTitle:
      "Do HOA Board Minutes Matter in Fine Disputes? | FAQ | MyHOAAppeal",
    metaDescription:
      "Use HOA board meeting rules and accurate minutes to challenge fine votes taken without proper notice or recorded rationale.",
    category: "rules-terminology",
    pairedGuideSlug: "hoa-board-meeting-rules-and-minutes",
    relatedGuideSlugs: [
      "open-meeting-laws-and-hoa-transparency",
      "hoa-meeting-preparation",
      "requesting-hoa-records-and-violation-files",
    ],
    relatedFaqSlugs: [
      "do-open-meeting-laws-apply-to-hoa-fine-votes",
      "how-do-i-prepare-for-an-hoa-board-hearing",
      "can-i-request-my-hoa-violation-file",
    ],
  },
  {
    slug: "do-open-meeting-laws-apply-to-hoa-fine-votes",
    question: "Do open meeting laws apply to HOA fine votes?",
    metaTitle:
      "Do Open Meeting Laws Apply to HOA Fine Votes? | FAQ | MyHOAAppeal",
    metaDescription:
      "Apply open-meeting and transparency norms to HOA fine decisions, executive sessions, and owner comment opportunities.",
    category: "rules-terminology",
    pairedGuideSlug: "open-meeting-laws-and-hoa-transparency",
    relatedGuideSlugs: [
      "hoa-board-meeting-rules-and-minutes",
      "hoa-due-process-rights",
      "conflict-of-interest-on-hoa-boards",
    ],
    relatedFaqSlugs: [
      "do-hoa-board-minutes-matter-in-fine-disputes",
      "what-due-process-rights-do-hoa-owners-have",
      "what-if-an-hoa-board-member-has-a-conflict",
    ],
  },
  {
    slug: "what-if-an-hoa-board-member-has-a-conflict",
    question: "What if an HOA board member has a conflict of interest?",
    metaTitle:
      "What If an HOA Board Member Has a Conflict? | FAQ | MyHOAAppeal",
    metaDescription:
      "Identify HOA board conflicts that taint fine hearings and how to request recusal or a reconstituted decision panel.",
    category: "rules-terminology",
    pairedGuideSlug: "conflict-of-interest-on-hoa-boards",
    relatedGuideSlugs: [
      "retaliatory-enforcement-by-hoa-boards",
      "hoa-hearing-what-to-expect",
      "open-meeting-laws-and-hoa-transparency",
    ],
    relatedFaqSlugs: [
      "what-is-retaliatory-hoa-enforcement",
      "what-happens-at-an-hoa-fine-hearing",
      "do-open-meeting-laws-apply-to-hoa-fine-votes",
    ],
  },
  {
    slug: "can-a-management-company-decide-hoa-fines",
    question: "Can a management company decide HOA fines on its own?",
    metaTitle:
      "Can a Management Company Decide HOA Fines? | FAQ | MyHOAAppeal",
    metaDescription:
      "Separate manager recommendations from board votes when disputing HOA fines issued through a management company portal.",
    category: "rules-terminology",
    pairedGuideSlug: "management-company-roles-in-hoa-fines",
    relatedGuideSlugs: [
      "hoa-board-meeting-rules-and-minutes",
      "requesting-hoa-records-and-violation-files",
      "hoa-fine-appeal-process",
    ],
    relatedFaqSlugs: [
      "do-hoa-board-minutes-matter-in-fine-disputes",
      "can-i-request-my-hoa-violation-file",
      "how-do-i-start-an-hoa-fine-appeal",
    ],
  },
  {
    slug: "can-an-hoa-enforce-a-rule-that-was-never-amended",
    question: "Can an HOA enforce a rule that was never properly amended?",
    metaTitle:
      "Can an HOA Enforce an Unamended Rule? | FAQ | MyHOAAppeal",
    metaDescription:
      "Distinguish CC&R amendments from day-to-day rule enforcement so boards cannot invent standards after the fact to justify fines.",
    category: "rules-terminology",
    pairedGuideSlug: "amending-ccrs-vs-enforcing-rules",
    relatedGuideSlugs: [
      "reading-hoa-statutes-and-ccrs",
      "hoa-fine-schedules-and-caps",
      "challenging-arbitrary-hoa-fines",
    ],
    relatedFaqSlugs: [
      "how-do-i-read-hoa-statutes-and-ccrs",
      "can-my-hoa-charge-more-than-the-fine-schedule",
      "how-do-i-challenge-an-arbitrary-hoa-fine",
    ],
  },
  {
    slug: "how-do-i-challenge-an-arbitrary-hoa-fine",
    question: "How do I challenge an arbitrary HOA fine?",
    metaTitle: "How Do I Challenge an Arbitrary HOA Fine? | FAQ | MyHOAAppeal",
    metaDescription:
      "Challenge arbitrary HOA fines rooted in vague standards, shifting aesthetics, or enforcement that ignores published schedules.",
    category: "evidence-enforcement",
    pairedGuideSlug: "challenging-arbitrary-hoa-fines",
    relatedGuideSlugs: [
      "selective-enforcement-hoa-fines",
      "hoa-fine-schedules-and-caps",
      "amending-ccrs-vs-enforcing-rules",
    ],
    relatedFaqSlugs: [
      "what-is-selective-enforcement-by-an-hoa",
      "can-my-hoa-charge-more-than-the-fine-schedule",
      "can-an-hoa-enforce-a-rule-that-was-never-amended",
    ],
  },
  {
    slug: "how-do-i-appeal-an-architectural-review-denial",
    question: "How do I appeal an architectural review denial?",
    metaTitle:
      "How Do I Appeal an Architectural Review Denial? | FAQ | MyHOAAppeal",
    metaDescription:
      "Appeal HOA architectural review denials and related fines with plans, precedent approvals, and recorded design guidelines.",
    category: "appeals-letters",
    pairedGuideSlug: "architectural-review-denials-and-appeals",
    relatedGuideSlugs: [
      "amending-ccrs-vs-enforcing-rules",
      "how-to-write-an-hoa-appeal-letter",
      "photographic-evidence-for-hoa-appeals",
    ],
    relatedFaqSlugs: [
      "can-an-hoa-enforce-a-rule-that-was-never-amended",
      "how-do-i-write-an-hoa-appeal-letter",
      "how-should-i-photograph-hoa-violations",
    ],
  },
  {
    slug: "how-do-i-appeal-a-landscaping-hoa-fine",
    question: "How do I appeal a landscaping or maintenance HOA fine?",
    metaTitle:
      "How Do I Appeal a Landscaping HOA Fine? | FAQ | MyHOAAppeal",
    metaDescription:
      "Appeal landscaping and maintenance HOA fines with cure photos, vendor delays, weather logs, and measurable standard arguments.",
    category: "appeals-letters",
    pairedGuideSlug: "landscaping-and-maintenance-violation-appeals",
    relatedGuideSlugs: [
      "seasonal-and-weather-related-cure-delays",
      "photographic-evidence-for-hoa-appeals",
      "cure-periods-before-hoa-fines",
    ],
    relatedFaqSlugs: [
      "can-weather-delay-an-hoa-cure-deadline",
      "how-should-i-photograph-hoa-violations",
      "what-is-an-hoa-cure-period",
    ],
  },
  {
    slug: "how-do-i-dispute-a-parking-hoa-fine",
    question: "How do I dispute a parking or vehicle HOA fine?",
    metaTitle:
      "How Do I Dispute a Parking or Vehicle HOA Fine? | FAQ | MyHOAAppeal",
    metaDescription:
      "Dispute parking and vehicle HOA fines using signage photos, guest rules, tow policies, and selective-enforcement comparisons.",
    category: "appeals-letters",
    pairedGuideSlug: "parking-and-vehicle-hoa-fines",
    relatedGuideSlugs: [
      "selective-enforcement-hoa-fines",
      "photographic-evidence-for-hoa-appeals",
      "how-to-write-an-hoa-appeal-letter",
    ],
    relatedFaqSlugs: [
      "what-is-selective-enforcement-by-an-hoa",
      "how-should-i-photograph-hoa-violations",
      "how-do-i-write-an-hoa-appeal-letter",
    ],
  },
  {
    slug: "how-do-i-respond-to-noise-hoa-violations",
    question: "How do I respond to noise or nuisance HOA violations?",
    metaTitle:
      "How Do I Respond to Noise or Nuisance HOA Violations? | FAQ | MyHOAAppeal",
    metaDescription:
      "Respond to noise and nuisance HOA violations with logs, quiet-hours rules, and proportionate cure plans instead of denials alone.",
    category: "appeals-letters",
    pairedGuideSlug: "noise-and-nuisance-hoa-violations",
    relatedGuideSlugs: [
      "how-to-collect-evidence",
      "challenging-arbitrary-hoa-fines",
      "mediation-and-adr-for-hoa-disputes",
    ],
    relatedFaqSlugs: [
      "what-evidence-do-i-need-for-an-hoa-appeal",
      "how-do-i-challenge-an-arbitrary-hoa-fine",
      "when-does-hoa-mediation-make-sense",
    ],
  },
  {
    slug: "how-do-i-appeal-a-pet-related-hoa-fine",
    question: "How do I appeal a pet-related HOA fine?",
    metaTitle: "How Do I Appeal a Pet-Related HOA Fine? | FAQ | MyHOAAppeal",
    metaDescription:
      "Appeal pet-related HOA fines by comparing rule text, service-animal issues, and uneven enforcement across the community.",
    category: "appeals-letters",
    pairedGuideSlug: "pet-related-hoa-fines",
    relatedGuideSlugs: [
      "selective-enforcement-hoa-fines",
      "how-to-write-an-hoa-appeal-letter",
      "understanding-your-rights",
    ],
    relatedFaqSlugs: [
      "what-is-selective-enforcement-by-an-hoa",
      "how-do-i-write-an-hoa-appeal-letter",
      "can-an-hoa-fine-me-without-notice",
    ],
  },
  {
    slug: "can-an-hoa-fine-me-for-short-term-rentals",
    question: "Can an HOA fine me for short-term rentals?",
    metaTitle:
      "Can an HOA Fine Me for Short-Term Rentals? | FAQ | MyHOAAppeal",
    metaDescription:
      "Navigate short-term rental HOA enforcement, fine notices, and appeals when city permits conflict with recorded covenants.",
    category: "appeals-letters",
    pairedGuideSlug: "short-term-rental-hoa-enforcement",
    relatedGuideSlugs: [
      "reading-hoa-statutes-and-ccrs",
      "amending-ccrs-vs-enforcing-rules",
      "when-to-hire-an-hoa-attorney",
    ],
    relatedFaqSlugs: [
      "how-do-i-read-hoa-statutes-and-ccrs",
      "can-an-hoa-enforce-a-rule-that-was-never-amended",
      "when-should-i-hire-an-hoa-attorney",
    ],
  },
  {
    slug: "how-should-i-handle-emergency-hoa-safety-fines",
    question: "How should I handle emergency or safety HOA fines?",
    metaTitle:
      "How Should I Handle Emergency HOA Safety Fines? | FAQ | MyHOAAppeal",
    metaDescription:
      "Handle emergency and safety HOA fines by curing hazards first while still preserving notice and hearing challenges on procedure.",
    category: "money-liens",
    pairedGuideSlug: "emergency-fines-and-safety-violations",
    relatedGuideSlugs: [
      "cure-periods-before-hoa-fines",
      "hoa-due-process-rights",
      "insurance-claims-and-hoa-fine-disputes",
    ],
    relatedFaqSlugs: [
      "what-is-an-hoa-cure-period",
      "what-due-process-rights-do-hoa-owners-have",
      "how-do-insurance-claims-affect-hoa-fine-disputes",
    ],
  },
  {
    slug: "can-weather-delay-an-hoa-cure-deadline",
    question: "Can weather delay an HOA cure deadline?",
    metaTitle: "Can Weather Delay an HOA Cure Deadline? | FAQ | MyHOAAppeal",
    metaDescription:
      "Document seasonal and weather-related cure delays so HOA boards grant extensions instead of stacking daily fines unfairly.",
    category: "evidence-enforcement",
    pairedGuideSlug: "seasonal-and-weather-related-cure-delays",
    relatedGuideSlugs: [
      "cure-periods-before-hoa-fines",
      "landscaping-and-maintenance-violation-appeals",
      "daily-fines-and-accruing-penalties",
    ],
    relatedFaqSlugs: [
      "what-is-an-hoa-cure-period",
      "how-do-i-appeal-a-landscaping-hoa-fine",
      "can-an-hoa-stack-daily-fines-indefinitely",
    ],
  },
  {
    slug: "how-do-insurance-claims-affect-hoa-fine-disputes",
    question: "How do insurance claims affect HOA fine disputes?",
    metaTitle:
      "How Do Insurance Claims Affect HOA Fine Disputes? | FAQ | MyHOAAppeal",
    metaDescription:
      "Coordinate insurance claim timelines with HOA fine cure deadlines so adjusters and boards see good-faith repair progress.",
    category: "money-liens",
    pairedGuideSlug: "insurance-claims-and-hoa-fine-disputes",
    relatedGuideSlugs: [
      "seasonal-and-weather-related-cure-delays",
      "emergency-fines-and-safety-violations",
      "dealing-with-lien-threats",
    ],
    relatedFaqSlugs: [
      "can-weather-delay-an-hoa-cure-deadline",
      "how-should-i-handle-emergency-hoa-safety-fines",
      "what-should-i-do-if-my-hoa-threatens-a-lien",
    ],
  },
  {
    slug: "when-does-hoa-mediation-make-sense",
    question: "When does mediation make sense for an HOA fine dispute?",
    metaTitle:
      "When Does HOA Mediation Make Sense? | ADR FAQ | MyHOAAppeal",
    metaDescription:
      "Use mediation and alternative dispute resolution for HOA fine conflicts when internal hearings stall or relationships are strained.",
    category: "appeals-letters",
    pairedGuideSlug: "mediation-and-adr-for-hoa-disputes",
    relatedGuideSlugs: [
      "after-the-hoa-hearing-next-steps",
      "appealing-an-hoa-fine-in-court",
      "when-to-hire-an-hoa-attorney",
    ],
    relatedFaqSlugs: [
      "what-should-i-do-after-an-hoa-hearing",
      "can-i-take-an-hoa-fine-to-court",
      "when-should-i-hire-an-hoa-attorney",
    ],
  },
  {
    slug: "when-should-i-hire-an-hoa-attorney",
    question: "When should I hire an HOA attorney?",
    metaTitle: "When Should I Hire an HOA Attorney? | FAQ | MyHOAAppeal",
    metaDescription:
      "Know when an HOA fine dispute needs a licensed attorney—lien threats, counsel present at hearings, foreclosure risk, or court filing.",
    category: "appeals-letters",
    pairedGuideSlug: "when-to-hire-an-hoa-attorney",
    relatedGuideSlugs: [
      "hoa-foreclosure-risks-from-unpaid-fines",
      "appealing-an-hoa-fine-in-court",
      "dealing-with-lien-threats",
    ],
    relatedFaqSlugs: [
      "can-an-hoa-foreclose-over-unpaid-fines",
      "can-i-take-an-hoa-fine-to-court",
      "what-should-i-do-if-my-hoa-threatens-a-lien",
    ],
  },
];

export const FAQ_CATEGORY_ORDER = [
  "rights-process",
  "appeals-letters",
  "evidence-enforcement",
  "money-liens",
  "rules-terminology",
] as const;
