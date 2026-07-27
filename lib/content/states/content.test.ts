import { describe, expect, it } from "vitest";
import {
  assertAllStatesHaveLegalContent,
  getAllStateLegalContent,
  countStateContentWords,
} from "./index";

describe("state legal content", () => {
  it("includes all 50 states with 1800–2500 words each", () => {
    const all = getAllStateLegalContent();
    expect(all).toHaveLength(50);

    const outliers: string[] = [];
    for (const content of all) {
      const words = countStateContentWords(content);
      if (words < 1800 || words > 2500) {
        outliers.push(`${content.code}: ${words}`);
      }
    }

    expect(outliers, `Word count outliers:\n${outliers.join("\n")}`).toEqual([]);
  });

  it("passes aggregate validation", () => {
    expect(() => assertAllStatesHaveLegalContent()).not.toThrow();
  });

  it("keeps overview paragraphs unique across states", () => {
    const all = getAllStateLegalContent();
    const seen = new Map<string, string>();
    const dupes: string[] = [];

    for (const content of all) {
      for (const paragraph of content.overview.paragraphs) {
        const prior = seen.get(paragraph);
        if (prior) {
          dupes.push(`${content.code} shares overview text with ${prior}`);
        } else {
          seen.set(paragraph, content.code);
        }
      }
    }

    expect(dupes, `Duplicate overview paragraphs:\n${dupes.join("\n")}`).toEqual(
      []
    );
  });

  it("includes every required legal resource section", () => {
    for (const content of getAllStateLegalContent()) {
      expect(content.overview.paragraphs.length).toBeGreaterThanOrEqual(3);
      expect(content.commonViolations.violations.length).toBeGreaterThanOrEqual(3);
      expect(content.appealProcess.steps.length).toBeGreaterThanOrEqual(4);
      expect(content.statutes.items.length).toBeGreaterThanOrEqual(2);
      expect(content.timelines.events.length).toBeGreaterThanOrEqual(3);
      expect(content.hearingProcess.paragraphs.length).toBeGreaterThanOrEqual(1);
      expect(content.evidenceChecklist.categories.length).toBeGreaterThanOrEqual(2);
      expect(content.appealStrategy.phases.length).toBeGreaterThanOrEqual(2);
      expect(content.faq.length).toBeGreaterThanOrEqual(6);
      expect(content.internalLinks.length).toBeGreaterThanOrEqual(4);
      expect(content.relatedGuideSlugs.length).toBeGreaterThanOrEqual(2);
      expect(content.sources.length).toBeGreaterThanOrEqual(2);
      expect(content.relatedContent.guides.length).toBeGreaterThanOrEqual(2);
      expect(content.relatedContent.states.length).toBeGreaterThanOrEqual(1);
      expect(content.relatedContent.tools.length).toBeGreaterThanOrEqual(1);
      expect(content.relatedContent.successStories.length).toBeGreaterThanOrEqual(1);
    }
  });
});
