import { describe, expect, it } from "vitest";
import {
  assertAllGuidesValid,
  GUIDE_ARTICLES,
  countGuideWords,
  getAllGuideSlugs,
} from "./index";

describe("guide hub content", () => {
  it("includes exactly 50 guides", () => {
    expect(GUIDE_ARTICLES).toHaveLength(50);
    expect(getAllGuideSlugs()).toHaveLength(50);
  });

  it("keeps every guide between 1800 and 3000 words", () => {
    const outliers: string[] = [];
    for (const guide of GUIDE_ARTICLES) {
      const words = countGuideWords(guide);
      if (words < 1800 || words > 3000) {
        outliers.push(`${guide.slug}: ${words}`);
      }
    }
    expect(outliers, `Word count outliers:\n${outliers.join("\n")}`).toEqual([]);
  });

  it("passes aggregate validation", () => {
    expect(() => assertAllGuidesValid()).not.toThrow();
  });

  it("keeps intro paragraphs unique across guides", () => {
    const seen = new Map<string, string>();
    const dupes: string[] = [];
    for (const guide of GUIDE_ARTICLES) {
      for (const paragraph of guide.intro) {
        const prior = seen.get(paragraph);
        if (prior) dupes.push(`${guide.slug} shares intro with ${prior}`);
        else seen.set(paragraph, guide.slug);
      }
    }
    expect(dupes, `Duplicate intros:\n${dupes.join("\n")}`).toEqual([]);
  });

  it("keeps conclusion paragraphs unique across guides", () => {
    const seen = new Map<string, string>();
    const dupes: string[] = [];
    for (const guide of GUIDE_ARTICLES) {
      for (const paragraph of guide.conclusion) {
        const prior = seen.get(paragraph);
        if (prior) dupes.push(`${guide.slug} shares conclusion with ${prior}`);
        else seen.set(paragraph, guide.slug);
      }
    }
    expect(dupes, `Duplicate conclusions:\n${dupes.join("\n")}`).toEqual([]);
  });

  it("includes required structural fields on every article", () => {
    for (const guide of GUIDE_ARTICLES) {
      expect(guide.sections.length).toBeGreaterThanOrEqual(4);
      expect(guide.faq.length).toBeGreaterThanOrEqual(5);
      expect(guide.sources.length).toBeGreaterThanOrEqual(2);
      expect(guide.relatedGuideSlugs.length).toBeGreaterThanOrEqual(2);
      expect(guide.internalLinks.length).toBeGreaterThanOrEqual(3);
      expect(guide.cta.href).toBeTruthy();
      expect(guide.cta.headline).toBeTruthy();
      expect(guide.relatedContent.guides.length).toBeGreaterThanOrEqual(2);
      expect(guide.relatedContent.states.length).toBeGreaterThanOrEqual(1);
      expect(guide.relatedContent.faqs.length).toBeGreaterThanOrEqual(1);
      expect(guide.relatedContent.tools.length).toBeGreaterThanOrEqual(1);
      expect(guide.relatedContent.successStories.length).toBeGreaterThanOrEqual(1);
    }
  });

  it("includes original educational assets on every guide", () => {
    for (const guide of GUIDE_ARTICLES) {
      const { educationalAssets: assets } = guide;
      expect(assets.decisionTree.nodes.length).toBeGreaterThanOrEqual(3);
      expect(assets.processFlow.steps.length).toBeGreaterThanOrEqual(5);
      expect(assets.comparisonTable.columns.length).toBe(3);
      expect(assets.comparisonTable.rows.length).toBeGreaterThanOrEqual(4);
      expect(assets.checklist.categories.length).toBeGreaterThanOrEqual(3);
      expect(assets.timeline.events.length).toBeGreaterThanOrEqual(5);
      expect(assets.visualSummary.takeaways.length).toBeGreaterThanOrEqual(4);
      expect(assets.downloadables.length).toBeGreaterThanOrEqual(5);
      expect(assets.downloadables[0]?.href).toContain(guide.slug);
      expect(assets.downloadables[0]?.fileType).toBe("pdf");
      expect(
        assets.downloadables.filter((d) => d.fileType === "svg")
      ).toHaveLength(4);
      expect(assets.infographics.process).toContain(`${guide.slug}-process.svg`);
      expect(assets.infographics.comparison).toContain(
        `${guide.slug}-comparison.svg`
      );
      expect(assets.infographics.timeline).toContain(
        `${guide.slug}-timeline.svg`
      );
      expect(assets.infographics.checklist).toContain(
        `${guide.slug}-checklist.svg`
      );
      expect(assets.decisionTree.heading.toLowerCase()).toContain("decision");
      expect(assets.processFlow.intro.length).toBeGreaterThan(20);
      for (const step of assets.processFlow.steps) {
        expect(step.estimatedTime.length).toBeGreaterThan(2);
        expect(step.documentsRequired.length).toBeGreaterThanOrEqual(2);
        expect(step.commonMistakes.length).toBeGreaterThanOrEqual(1);
      }
      for (const event of assets.timeline.events) {
        expect(event.duration.length).toBeGreaterThan(1);
        expect(event.documentsRequired.length).toBeGreaterThanOrEqual(1);
        expect(event.commonMistakes.length).toBeGreaterThanOrEqual(1);
      }
    }
  });

  it("keeps educational asset intros unique across guides", () => {
    const seen = new Map<string, string>();
    const dupes: string[] = [];
    for (const guide of GUIDE_ARTICLES) {
      const key = guide.educationalAssets.visualSummary.intro;
      const prior = seen.get(key);
      if (prior) dupes.push(`${guide.slug} shares visual summary intro with ${prior}`);
      else seen.set(key, guide.slug);
    }
    expect(dupes, `Duplicate asset intros:\n${dupes.join("\n")}`).toEqual([]);
  });
});
