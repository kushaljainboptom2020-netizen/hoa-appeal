import { describe, expect, it } from "vitest";
import {
  assertAllFaqsValid,
  FAQ_ARTICLES,
  countFaqWords,
  getAllFaqSlugs,
} from "./index";
import { getAllGuideSlugs } from "@/lib/content/guides";

describe("FAQ knowledge base content", () => {
  it("includes exactly 50 FAQs", () => {
    expect(FAQ_ARTICLES).toHaveLength(50);
    expect(getAllFaqSlugs()).toHaveLength(50);
  });

  it("pairs each FAQ to a unique guide slug", () => {
    const paired = FAQ_ARTICLES.map((faq) => faq.pairedGuideSlug).sort();
    const guides = getAllGuideSlugs().sort();
    expect(paired).toEqual(guides);
  });

  it("keeps every FAQ between 800 and 1600 words", () => {
    const outliers: string[] = [];
    for (const faq of FAQ_ARTICLES) {
      const words = countFaqWords(faq);
      if (words < 800 || words > 1600) {
        outliers.push(`${faq.slug}: ${words}`);
      }
    }
    expect(outliers, `Word count outliers:\n${outliers.join("\n")}`).toEqual([]);
  });

  it("passes aggregate validation", () => {
    expect(() => assertAllFaqsValid()).not.toThrow();
  });

  it("keeps direct answers unique across FAQs", () => {
    const seen = new Map<string, string>();
    const dupes: string[] = [];
    for (const faq of FAQ_ARTICLES) {
      const prior = seen.get(faq.directAnswer);
      if (prior) dupes.push(`${faq.slug} shares direct answer with ${prior}`);
      else seen.set(faq.directAnswer, faq.slug);
    }
    expect(dupes, `Duplicate direct answers:\n${dupes.join("\n")}`).toEqual([]);
  });

  it("includes required structural fields on every article", () => {
    for (const faq of FAQ_ARTICLES) {
      expect(faq.directAnswer.length).toBeGreaterThan(40);
      expect(faq.explanation.length).toBeGreaterThanOrEqual(3);
      expect(faq.sources.length).toBeGreaterThanOrEqual(2);
      expect(faq.relatedGuideSlugs.length).toBeGreaterThanOrEqual(2);
      expect(faq.relatedFaqSlugs.length).toBeGreaterThanOrEqual(2);
      expect(faq.internalLinks.length).toBeGreaterThanOrEqual(3);
      expect(faq.stateConsiderations.relatedStateCodes.length).toBeGreaterThanOrEqual(3);
      expect(faq.cta.href).toBeTruthy();
      expect(faq.cta.headline).toBeTruthy();
      expect(faq.relatedContent.guides.length).toBeGreaterThanOrEqual(2);
      expect(faq.relatedContent.states.length).toBeGreaterThanOrEqual(1);
      expect(faq.relatedContent.faqs.length).toBeGreaterThanOrEqual(1);
      expect(faq.relatedContent.tools.length).toBeGreaterThanOrEqual(1);
      expect(faq.relatedContent.successStories.length).toBeGreaterThanOrEqual(1);
    }
  });
});
