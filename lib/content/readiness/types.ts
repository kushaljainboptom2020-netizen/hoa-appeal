export type ReadinessAnswerId = string;

export type ReadinessOption = {
  id: ReadinessAnswerId;
  label: string;
  /** Points awarded toward the question max (0–maxPoints). */
  points: number;
  /** Shown under Strengths when this option is selected and points are high. */
  strength?: string;
  /** Shown under Weaknesses when this option is selected and points are low. */
  weakness?: string;
  /** Documents still missing if this option is chosen. */
  missingDocuments?: string[];
  /** Suggested next-step ids resolved by the result builder. */
  nextStepIds?: string[];
};

export type ReadinessQuestion = {
  id: string;
  category: string;
  prompt: string;
  help?: string;
  maxPoints: number;
  options: ReadinessOption[];
};

export type ReadinessNextStep = {
  id: string;
  label: string;
  description: string;
  href: string;
};

export type ReadinessBand = "low" | "moderate" | "strong" | "excellent";

export type ReadinessResult = {
  score: number;
  maxScore: number;
  percent: number;
  band: ReadinessBand;
  bandLabel: string;
  bandSummary: string;
  strengths: string[];
  weaknesses: string[];
  missingDocuments: string[];
  nextSteps: ReadinessNextStep[];
};

export type ReadinessAnswers = Record<string, ReadinessAnswerId>;

export type ReadinessCalculatorDefinition = {
  heading: string;
  intro: string;
  disclaimer: string;
  questions: ReadinessQuestion[];
  nextSteps: ReadinessNextStep[];
};
