import { describe, expect, it } from "vitest";
import { GUIDE_CATALOG } from "@/lib/content/guides/catalog";
import {
  calculateReadiness,
  getMaxReadinessScore,
  getReadinessCalculator,
  getReadinessQuestions,
} from "@/lib/content/readiness";
import type { ReadinessAnswers } from "@/lib/content/readiness/types";

const guideSlugs = new Set(GUIDE_CATALOG.map((g) => g.slug));

function pickAnswers(
  picker: (questionId: string, optionIds: string[]) => string
): ReadinessAnswers {
  const answers: ReadinessAnswers = {};
  for (const question of getReadinessQuestions()) {
    answers[question.id] = picker(
      question.id,
      question.options.map((o) => o.id)
    );
  }
  return answers;
}

describe("HOA appeal readiness calculator", () => {
  const calculator = getReadinessCalculator();

  it("defines a complete scored questionnaire with disclaimer", () => {
    expect(calculator.disclaimer.toLowerCase()).toContain("informational only");
    expect(calculator.questions.length).toBeGreaterThanOrEqual(8);
    expect(getMaxReadinessScore()).toBeGreaterThan(50);

    for (const question of calculator.questions) {
      expect(question.options.length).toBeGreaterThanOrEqual(2);
      expect(question.maxPoints).toBeGreaterThan(0);
      const maxOption = Math.max(...question.options.map((o) => o.points));
      expect(maxOption).toBeLessThanOrEqual(question.maxPoints);
      for (const option of question.options) {
        expect(option.points).toBeGreaterThanOrEqual(0);
        expect(option.points).toBeLessThanOrEqual(question.maxPoints);
      }
    }
  });

  it("resolves next-step ids and guide hrefs against real routes", () => {
    const stepIds = new Set(calculator.nextSteps.map((s) => s.id));
    for (const question of calculator.questions) {
      for (const option of question.options) {
        for (const stepId of option.nextStepIds ?? []) {
          expect(stepIds.has(stepId), `unknown next step ${stepId}`).toBe(true);
        }
      }
    }
    for (const step of calculator.nextSteps) {
      if (step.href.startsWith("/guides/")) {
        const slug = step.href.replace("/guides/", "");
        if (slug && !slug.includes("/")) {
          expect(guideSlugs.has(slug), `unknown guide ${slug}`).toBe(true);
        }
      }
    }
  });

  it("scores a strong packet near the top of the range", () => {
    const answers = pickAnswers((_qid, optionIds) => optionIds[0]!);
    const result = calculateReadiness(answers);
    expect(result.percent).toBeGreaterThanOrEqual(80);
    expect(result.band).toMatch(/strong|excellent/);
    expect(result.strengths.length).toBeGreaterThan(0);
    expect(result.score).toBeLessThanOrEqual(result.maxScore);
  });

  it("flags weaknesses and missing documents for a weak packet", () => {
    const answers = pickAnswers((_qid, optionIds) => optionIds[optionIds.length - 1]!);
    const result = calculateReadiness(answers);
    expect(result.percent).toBeLessThan(50);
    expect(result.band).toBe("low");
    expect(result.weaknesses.length).toBeGreaterThan(0);
    expect(result.missingDocuments.length).toBeGreaterThan(0);
    expect(result.nextSteps.length).toBeGreaterThan(0);
    expect(result.nextSteps.every((s) => s.href.length > 0)).toBe(true);
  });

  it("keeps the informational disclaimer available on the definition", () => {
    expect(calculator.disclaimer).toMatch(/not legal advice/i);
  });
});
