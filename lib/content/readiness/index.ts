import { READINESS_CALCULATOR } from "./questions";
import type {
  ReadinessAnswers,
  ReadinessBand,
  ReadinessNextStep,
  ReadinessResult,
} from "./types";

const nextStepById = new Map(
  READINESS_CALCULATOR.nextSteps.map((step) => [step.id, step])
);

export function getReadinessCalculator() {
  return READINESS_CALCULATOR;
}

export function getReadinessQuestions() {
  return READINESS_CALCULATOR.questions;
}

export function getMaxReadinessScore(): number {
  return READINESS_CALCULATOR.questions.reduce(
    (sum, question) => sum + question.maxPoints,
    0
  );
}

function bandForPercent(percent: number): {
  band: ReadinessBand;
  bandLabel: string;
  bandSummary: string;
} {
  if (percent >= 85) {
    return {
      band: "excellent",
      bandLabel: "Excellent readiness",
      bandSummary:
        "Your packet looks strong on paper. Double-check delivery proof and written-decision follow-up before you stop working the file.",
    };
  }
  if (percent >= 65) {
    return {
      band: "strong",
      bandLabel: "Strong readiness",
      bandSummary:
        "You have a solid base. Close the remaining document and evidence gaps before the deadline.",
    };
  }
  if (percent >= 40) {
    return {
      band: "moderate",
      bandLabel: "Moderate readiness",
      bandSummary:
        "Important pieces are in place, but weaknesses could undermine a hearing or written appeal.",
    };
  }
  return {
    band: "low",
    bandLabel: "Low readiness",
    bandSummary:
      "Focus first on notice, deadlines, and a written ask—then build evidence around those anchors.",
  };
}

function uniquePreserveOrder(items: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const item of items) {
    const key = item.trim();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(key);
  }
  return out;
}

/** Score answers and build strengths, weaknesses, missing docs, and next steps. */
export function calculateReadiness(answers: ReadinessAnswers): ReadinessResult {
  const questions = READINESS_CALCULATOR.questions;
  let score = 0;
  const strengths: string[] = [];
  const weaknesses: string[] = [];
  const missingDocuments: string[] = [];
  const nextStepIds: string[] = [];

  for (const question of questions) {
    const answerId = answers[question.id];
    const option = question.options.find((o) => o.id === answerId);
    if (!option) continue;

    score += Math.min(option.points, question.maxPoints);

    const ratio = question.maxPoints === 0 ? 0 : option.points / question.maxPoints;
    if (option.strength && ratio >= 0.6) strengths.push(option.strength);
    if (option.weakness && ratio < 0.7) weaknesses.push(option.weakness);
    if (option.missingDocuments?.length) {
      missingDocuments.push(...option.missingDocuments);
    }
    if (option.nextStepIds?.length) nextStepIds.push(...option.nextStepIds);
  }

  const maxScore = getMaxReadinessScore();
  const percent = maxScore === 0 ? 0 : Math.round((score / maxScore) * 100);
  const band = bandForPercent(percent);

  // Always offer decision tree + guides as gentle fallbacks when gaps exist.
  if (percent < 85) nextStepIds.push("decision-tree", "guides");
  if (percent < 50) nextStepIds.push("wizard", "rights");

  const nextSteps: ReadinessNextStep[] = uniquePreserveOrder(nextStepIds)
    .map((id) => nextStepById.get(id))
    .filter((step): step is ReadinessNextStep => Boolean(step))
    .slice(0, 6);

  return {
    score,
    maxScore,
    percent,
    ...band,
    strengths: uniquePreserveOrder(strengths),
    weaknesses: uniquePreserveOrder(weaknesses),
    missingDocuments: uniquePreserveOrder(missingDocuments),
    nextSteps,
  };
}

export function areAllQuestionsAnswered(answers: ReadinessAnswers): boolean {
  return READINESS_CALCULATOR.questions.every((q) => Boolean(answers[q.id]));
}
