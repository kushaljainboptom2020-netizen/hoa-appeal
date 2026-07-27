import type {
  ReadinessCalculatorDefinition,
  ReadinessNextStep,
} from "./types";

const NEXT_STEPS: ReadinessNextStep[] = [
  {
    id: "wizard",
    label: "Draft your appeal letter",
    description:
      "Use the free letter wizard to turn your facts into a formal dispute letter.",
    href: "/",
  },
  {
    id: "decision-tree",
    label: "Use the HOA Decision Tree",
    description:
      "Get guided recommendations for guides, state pages, and templates.",
    href: "/decision-tree",
  },
  {
    id: "rights",
    label: "Review your appeal rights",
    description:
      "Map notice, cure, hearing, and written-decision duties before arguing aesthetics.",
    href: "/guides/understanding-your-rights",
  },
  {
    id: "deadlines",
    label: "Calendar critical deadlines",
    description:
      "Track appeal windows, cure clocks, and post-decision dates in one place.",
    href: "/guides/hoa-fine-timelines-and-deadlines",
  },
  {
    id: "evidence",
    label: "Build your evidence file",
    description:
      "Gather dated photos, logs, and records that boards can verify.",
    href: "/guides/how-to-collect-evidence",
  },
  {
    id: "letter",
    label: "Strengthen your written appeal",
    description:
      "Use a clear structure: facts, citations, defects, exhibits, and one remedy.",
    href: "/guides/how-to-write-an-hoa-appeal-letter",
  },
  {
    id: "sample-letter",
    label: "Follow the sample letter outline",
    description:
      "Section-by-section architecture for a complete appeal packet.",
    href: "/guides/sample-hoa-appeal-letter-structure",
  },
  {
    id: "records",
    label: "Request HOA records",
    description:
      "Ask in writing for the violation file, photos, and fine schedule.",
    href: "/guides/requesting-hoa-records-and-violation-files",
  },
  {
    id: "hearing",
    label: "Prepare for the hearing",
    description:
      "Plan opening remarks, exhibits, and a written-decision request.",
    href: "/guides/hoa-hearing-what-to-expect",
  },
  {
    id: "pay-checklist",
    label: "Checklist before paying",
    description:
      "Verify the debt and preserve dispute rights if payment pressure rises.",
    href: "/guides/checklist-before-paying-an-hoa-fine",
  },
  {
    id: "lien",
    label: "Respond to lien threats",
    description:
      "Separate fines from assessments and slow collections with a documented record.",
    href: "/guides/dealing-with-lien-threats",
  },
  {
    id: "guides",
    label: "Browse the guide library",
    description: "Compare related process, evidence, and enforcement guides.",
    href: "/guides",
  },
];

export const READINESS_CALCULATOR: ReadinessCalculatorDefinition = {
  heading: "HOA Appeal Readiness Calculator",
  intro:
    "Answer these questions about your notice, deadlines, documents, evidence, and letter. You will get a readiness score plus strengths, gaps, missing documents, and suggested next steps.",
  disclaimer:
    "This readiness score is informational only. It is an educational self-check—not a prediction of appeal outcomes, not legal advice, and not a substitute for reading your governing documents or consulting a licensed attorney.",
  questions: [
    {
      id: "written-notice",
      category: "Notice",
      prompt: "Do you have a written violation notice or fine invoice?",
      help: "Verbal warnings alone are harder to appeal.",
      maxPoints: 10,
      options: [
        {
          id: "yes-dated",
          label: "Yes — dated written notice or invoice",
          points: 10,
          strength: "You have a written trigger document to cite and attach.",
        },
        {
          id: "yes-undated",
          label: "Yes — but date or citation is unclear",
          points: 5,
          weakness: "Your notice is incomplete or hard to date for deadline tracking.",
          missingDocuments: [
            "Envelope/postmark or portal export showing when notice arrived",
            "Clear CC&R or rule citation from the association",
          ],
          nextStepIds: ["records", "deadlines"],
        },
        {
          id: "verbal-only",
          label: "No — only a verbal warning or rumor",
          points: 0,
          weakness: "You lack a written notice to anchor deadlines and arguments.",
          missingDocuments: [
            "Written violation notice or fine invoice",
            "Portal message or email from the association",
          ],
          nextStepIds: ["records", "rights"],
        },
      ],
    },
    {
      id: "deadline-known",
      category: "Deadlines",
      prompt: "Have you identified the appeal, cure, or response deadline?",
      maxPoints: 12,
      options: [
        {
          id: "calendared",
          label: "Yes — deadline is calendared with delivery proof",
          points: 12,
          strength: "Your controlling deadline is identified and tracked.",
        },
        {
          id: "rough",
          label: "I have a rough date but have not confirmed it in the bylaws",
          points: 6,
          weakness: "The deadline may be wrong if the notice and bylaws disagree.",
          missingDocuments: [
            "Bylaws or fine-policy appeal-window clause",
            "One-page deadline calendar (notice → cure → appeal → hearing)",
          ],
          nextStepIds: ["deadlines"],
        },
        {
          id: "unknown",
          label: "No — I am unsure what the deadline is",
          points: 0,
          weakness: "Missing the internal appeal window can close procedural options.",
          missingDocuments: [
            "Appeal / cure deadline from the notice",
            "Governing-document appeal clause",
          ],
          nextStepIds: ["deadlines", "rights"],
        },
      ],
    },
    {
      id: "governing-docs",
      category: "Documents",
      prompt: "Do you have the CC&R, rule, and fine-schedule text cited against you?",
      maxPoints: 12,
      options: [
        {
          id: "full-excerpts",
          label: "Yes — current excerpts matching the citation",
          points: 12,
          strength: "You can compare the board’s claim to controlling text.",
        },
        {
          id: "partial",
          label: "Partial — I have some documents but not the fine schedule",
          points: 5,
          weakness: "Without the fine schedule, amount and authority are harder to challenge.",
          missingDocuments: [
            "Published fine schedule",
            "Board adoption minutes for the schedule (if available)",
          ],
          nextStepIds: ["records"],
        },
        {
          id: "none",
          label: "No — I have not pulled the governing text yet",
          points: 0,
          weakness: "Appealing without the cited rule invites procedure-first denials.",
          missingDocuments: [
            "CC&R / rule pages cited in the notice",
            "Current fine schedule",
            "Bylaws appeal or hearing clause",
          ],
          nextStepIds: ["records", "rights"],
        },
      ],
    },
    {
      id: "violation-file",
      category: "Documents",
      prompt: "Have you requested or obtained the association’s violation file?",
      help: "Photos, inspector notes, and prior history often live in the file.",
      maxPoints: 10,
      options: [
        {
          id: "have-file",
          label: "Yes — I have photos, notes, or a file export",
          points: 10,
          strength: "You can test the association’s evidence against your own.",
        },
        {
          id: "requested",
          label: "Requested in writing — waiting on a response",
          points: 6,
          strength: "A dated records request helps if the board withholds the file.",
          missingDocuments: [
            "Association violation photos and inspector notes",
            "Prior enforcement history for the same issue (if any)",
          ],
          nextStepIds: ["records"],
        },
        {
          id: "not-requested",
          label: "Not yet requested",
          points: 0,
          weakness: "You may be arguing without seeing the evidence the board relies on.",
          missingDocuments: [
            "Written records request for the violation file",
            "Association inspection photos / notes",
          ],
          nextStepIds: ["records", "evidence"],
        },
      ],
    },
    {
      id: "evidence-quality",
      category: "Evidence",
      prompt: "How strong is your owner-side evidence packet?",
      maxPoints: 14,
      options: [
        {
          id: "indexed",
          label: "Dated photos/logs with an exhibit index",
          points: 14,
          strength: "Indexed, dated exhibits are easier for a board to follow.",
        },
        {
          id: "loose",
          label: "Some photos or emails, but not organized",
          points: 6,
          weakness: "Unsorted evidence is easy for boards to dismiss or overlook.",
          missingDocuments: [
            "Exhibit index (A, B, C…)",
            "One-page timeline of key events",
          ],
          nextStepIds: ["evidence"],
        },
        {
          id: "thin",
          label: "Little or no evidence yet",
          points: 0,
          weakness: "A thin evidence file weakens both hearings and written appeals.",
          missingDocuments: [
            "Dated photos or maintenance logs",
            "Correspondence export",
            "Comparable-neighbor notes (if selective enforcement is an issue)",
          ],
          nextStepIds: ["evidence"],
        },
      ],
    },
    {
      id: "selective-enforcement",
      category: "Evidence",
      prompt: "If uneven enforcement matters, do you have comparable examples?",
      maxPoints: 8,
      options: [
        {
          id: "comparables",
          label: "Yes — documented neighbor comparables",
          points: 8,
          strength: "Comparable examples support selective-enforcement arguments.",
        },
        {
          id: "not-relevant",
          label: "Not relevant to my dispute",
          points: 8,
          strength: "You are focusing on procedure and facts that match your case.",
        },
        {
          id: "suspect-no-proof",
          label: "I suspect selective enforcement but lack proof",
          points: 2,
          weakness: "Selective-enforcement claims need ethical, documented comparisons.",
          missingDocuments: [
            "Dated comparable photos of similarly situated lots",
            "Notes on addresses, dates, and visible conditions",
          ],
          nextStepIds: ["evidence"],
        },
        {
          id: "no",
          label: "No comparable evidence",
          points: 0,
          nextStepIds: ["evidence"],
        },
      ],
    },
    {
      id: "written-ask",
      category: "Appeal letter",
      prompt: "Do you have a clear written remedy request ready to send?",
      help: "Example: waive, reduce, re-notice, or reverse.",
      maxPoints: 12,
      options: [
        {
          id: "complete-letter",
          label: "Yes — draft letter with facts, citations, and one clear ask",
          points: 12,
          strength: "A complete written ask is the core of most internal appeals.",
        },
        {
          id: "rough-draft",
          label: "Rough draft — still missing citations or exhibits",
          points: 5,
          weakness: "Incomplete letters often get delayed or denied on procedure.",
          missingDocuments: [
            "Final appeal letter with one remedy sentence",
            "Attached exhibit index",
          ],
          nextStepIds: ["letter", "sample-letter", "wizard"],
        },
        {
          id: "none",
          label: "No written appeal drafted yet",
          points: 0,
          weakness: "Without a written ask, the board has nothing concrete to grant.",
          missingDocuments: [
            "Signed appeal or dispute letter",
            "Delivery method planned (certified mail / portal)",
          ],
          nextStepIds: ["letter", "wizard", "sample-letter"],
        },
      ],
    },
    {
      id: "delivery-proof",
      category: "Appeal letter",
      prompt: "Can you prove how and when you send (or sent) your appeal?",
      maxPoints: 8,
      options: [
        {
          id: "certified-or-portal",
          label: "Yes — certified mail, courier, or portal export planned/saved",
          points: 8,
          strength: "Delivery proof protects you if the association claims non-receipt.",
        },
        {
          id: "email-only",
          label: "Email or text only — limited proof",
          points: 3,
          weakness: "Informal delivery is easier for associations to dispute later.",
          missingDocuments: [
            "Certified-mail receipt or portal submission confirmation",
          ],
          nextStepIds: ["letter"],
        },
        {
          id: "none",
          label: "No delivery plan yet",
          points: 0,
          weakness: "Appeals without delivery proof create avoidable factual fights.",
          missingDocuments: [
            "Delivery plan and proof template (certified mail / portal PDF)",
          ],
          nextStepIds: ["letter", "wizard"],
        },
      ],
    },
    {
      id: "hearing-prep",
      category: "Hearing",
      prompt: "If a hearing is available or scheduled, how prepared are you?",
      maxPoints: 8,
      options: [
        {
          id: "ready",
          label: "Prepared — exhibits, opening, and written-decision request",
          points: 8,
          strength: "Hearing prep reduces the chance of an oral-only, undocumented outcome.",
        },
        {
          id: "scheduled-unprepared",
          label: "Hearing is set, but I am not fully prepared",
          points: 3,
          weakness: "An unprepared hearing wastes a key procedural opportunity.",
          missingDocuments: [
            "Indexed hearing exhibit packet",
            "One-minute opening outline",
          ],
          nextStepIds: ["hearing", "evidence"],
        },
        {
          id: "no-hearing-yet",
          label: "No hearing scheduled / not applicable yet",
          points: 5,
          nextStepIds: ["hearing"],
        },
        {
          id: "refused",
          label: "Board refused a hearing despite document language",
          points: 4,
          weakness: "Preserve the refusal in writing—it can matter later.",
          missingDocuments: [
            "Written hearing request",
            "Board refusal or silence record",
          ],
          nextStepIds: ["hearing", "rights"],
        },
      ],
    },
    {
      id: "escalation-pressure",
      category: "Risk",
      prompt: "How urgent is collections, lien, or daily-fine pressure?",
      maxPoints: 6,
      options: [
        {
          id: "none",
          label: "Low — no lien/collections pressure yet",
          points: 6,
          strength: "Lower escalation pressure gives you time to build a clean record.",
        },
        {
          id: "daily-fines",
          label: "Daily fines are accruing",
          points: 2,
          weakness: "Accruing penalties raise the cost of delay—ask in writing if accrual pauses during review.",
          nextStepIds: ["pay-checklist", "deadlines", "wizard"],
        },
        {
          id: "lien-threat",
          label: "Lien, collections, or foreclosure language has appeared",
          points: 0,
          weakness: "Collections language means verification and preservation of rights come first.",
          missingDocuments: [
            "Full ledger breakdown (fines vs assessments vs fees)",
            "Lien / collections notice copy",
          ],
          nextStepIds: ["lien", "pay-checklist", "wizard"],
        },
      ],
    },
  ],
  nextSteps: NEXT_STEPS,
};
