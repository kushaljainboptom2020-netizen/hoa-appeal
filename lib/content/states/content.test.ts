import { describe, expect, it } from "vitest";
import {
  assertAllStatesHaveLegalContent,
  getAllStateLegalContent,
} from "./index";

describe("state legal content", () => {
  it("qualifies every state and does not keep the old word floor", () => {
    const all = getAllStateLegalContent();
    expect(all).toHaveLength(50);
    const problems: string[] = [];
    for (const content of all) {
      const text = content.overview.paragraphs.join(" ");
      if (!/does not|Do not|Confirm|confirm/i.test(text)) {
        problems.push(`${content.code}: missing qualification`);
      }
      if (/Compare formation documents carefully/i.test(text)) {
        problems.push(`${content.code}: expansion skeleton`);
      }
    }
    expect(problems, problems.join("\n")).toEqual([]);
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
      for (const step of content.appealProcess.steps) {
        expect(step.estimatedTime.length).toBeGreaterThan(1);
        expect(step.documentsRequired.length).toBeGreaterThanOrEqual(1);
        expect(step.commonMistakes.length).toBeGreaterThanOrEqual(1);
      }
      for (const event of content.timelines.events) {
        expect(event.duration.length).toBeGreaterThan(1);
        expect(event.documentsRequired.length).toBeGreaterThanOrEqual(1);
        expect(event.commonMistakes.length).toBeGreaterThanOrEqual(1);
      }
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
      expect(content.relatedContent.successStories.length).toBe(0);
    }
  });
});
