/** Shared shape for scroll-interactive process timelines across guides and states. */
export type InteractiveTimelineStep = {
  id: string;
  step: number;
  title: string;
  description: string;
  /** Typical window or effort estimate shown on the step header. */
  estimatedTime: string;
  documentsRequired: string[];
  commonMistakes: string[];
};

export type InteractiveTimelineModel = {
  intro?: string;
  steps: InteractiveTimelineStep[];
};

type EnrichableStep = {
  step: number;
  title: string;
  description: string;
  estimatedTime?: string;
  documentsRequired?: string[];
  commonMistakes?: string[];
};

type EnrichableEvent = {
  label: string;
  duration: string;
  notes: string;
  documentsRequired?: string[];
  commonMistakes?: string[];
};

const DEFAULT_STEP_DOCS: string[][] = [
  [
    "Violation notice / invoice",
    "Delivery proof or portal export",
    "Calendar note of date received",
  ],
  [
    "CC&R / rule excerpt cited",
    "Published fine schedule",
    "Bylaws appeal clause",
  ],
  [
    "Dated photos or logs",
    "Correspondence thread",
    "Comparable-neighbor notes",
  ],
  [
    "Written cure or appeal letter",
    "Exhibit index (A, B, C…)",
    "Hearing / ADR request",
  ],
  [
    "Hearing agenda or minutes request",
    "Indexed exhibit packet",
    "One-sentence remedy ask",
  ],
  [
    "Written decision (or refusal record)",
    "Updated ledger screenshot",
    "Post-decision deadline calendar",
  ],
];

const DEFAULT_STEP_MISTAKES: string[][] = [
  [
    "Relying on a verbal warning without saving the written notice",
    "Missing the received date on the envelope or portal export",
  ],
  [
    "Arguing fairness before confirming the board cited a real rule",
    "Using an outdated fine schedule printout",
  ],
  [
    "Photos without dates or landmarks",
    "Dumping unsorted emails instead of an exhibit index",
  ],
  [
    "Missing the internal appeal deadline while still gathering evidence",
    "Asking for multiple remedies in conflicting sentences",
  ],
  [
    "Showing up without copies of exhibits for the board",
    "Skipping a written decision request after the hearing",
  ],
  [
    "Assuming silence means the fine is waived",
    "Paying without noting payment under protest when escalation continues",
  ],
];

const DEFAULT_EVENT_DOCS: string[][] = [
  ["Inspection photos", "Inspector notes or portal entry"],
  ["Violation letter", "CC&R citation page", "Stated cure deadline"],
  ["Cure photos / vendor invoice", "Written dispute letter if not curing"],
  ["Fine invoice or ledger entry", "Fine-schedule excerpt matching the amount"],
  ["Appeal letter with delivery proof", "Hearing request confirmation"],
  ["Collections / lien notice", "Full ledger breakdown request"],
];

const DEFAULT_EVENT_MISTAKES: string[][] = [
  ["Ignoring early inspection photos that later become exhibit A"],
  ["Treating mail date and receipt date as the same without proof"],
  ["Curing without asking for written confirmation"],
  ["Paying a ledger amount that does not match the published schedule"],
  ["Missing the appeal window printed in the bylaws"],
  ["Letting daily fines accrue while waiting on an informal phone call"],
];

function pickCycle<T>(rows: T[][], index: number): T[] {
  return rows[index % rows.length] ?? rows[0] ?? [];
}

/** Normalize process steps into the interactive timeline model. */
export function toInteractiveStepsFromProcess(
  steps: EnrichableStep[],
  idPrefix = "step"
): InteractiveTimelineStep[] {
  return steps.map((step, index) => ({
    id: `${idPrefix}-${step.step}`,
    step: step.step,
    title: step.title,
    description: step.description,
    estimatedTime:
      step.estimatedTime?.trim() ||
      defaultEstimatedTimeForStep(index, steps.length),
    documentsRequired:
      step.documentsRequired?.length
        ? step.documentsRequired
        : pickCycle(DEFAULT_STEP_DOCS, index),
    commonMistakes:
      step.commonMistakes?.length
        ? step.commonMistakes
        : pickCycle(DEFAULT_STEP_MISTAKES, index),
  }));
}

/** Normalize calendar/timeline events into the interactive timeline model. */
export function toInteractiveStepsFromEvents(
  events: EnrichableEvent[],
  idPrefix = "event"
): InteractiveTimelineStep[] {
  return events.map((event, index) => ({
    id: `${idPrefix}-${index + 1}`,
    step: index + 1,
    title: event.label,
    description: event.notes,
    estimatedTime: event.duration,
    documentsRequired:
      event.documentsRequired?.length
        ? event.documentsRequired
        : pickCycle(DEFAULT_EVENT_DOCS, index),
    commonMistakes:
      event.commonMistakes?.length
        ? event.commonMistakes
        : pickCycle(DEFAULT_EVENT_MISTAKES, index),
  }));
}

function defaultEstimatedTimeForStep(index: number, total: number): string {
  const defaults = [
    "Same day (30–90 min)",
    "1–3 days",
    "2–5 days",
    "Per notice window (often 7–14 days)",
    "1–2 hours prep + hearing date",
    "1–7 days after decision",
  ];
  if (index < defaults.length) return defaults[index]!;
  if (index === total - 1) return "As stakes require";
  return "Document-driven window";
}
