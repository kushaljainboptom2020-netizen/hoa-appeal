export const STEPS = [
  { id: 1, label: "Basic Info", short: "Info" },
  { id: 2, label: "Violation Details", short: "Violation" },
  { id: 3, label: "Your Defense", short: "Defense" },
  { id: 4, label: "Preview & Export", short: "Preview" },
] as const;

export const TOTAL_STEPS = STEPS.length;
