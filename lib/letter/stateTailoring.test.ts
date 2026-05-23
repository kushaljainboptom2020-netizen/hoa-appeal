import { describe, expect, it } from "vitest";
import { compileAppealLetter, compiledLetterToPlainText } from "@/lib/letter/compileLetter";
import { buildDefenseParagraph } from "@/lib/letter/defenseParagraphs";
import type { AppealFormData } from "@/lib/wizard/formState";
import {
  GENERIC_STATUTE_FALLBACK,
  getAllStateSlugs,
  getStateBySlug,
  getStateLetterContext,
  STATE_SEO_CONFIG,
} from "@/lib/seo/statePages";

const baseFormData: AppealFormData = {
  fullName: "Jane Doe",
  propertyAddress: "123 Oak Lane",
  state: "TX",
  hoaManagementCompany: "Test HOA",
  dateOfNotice: "2026-01-15",
  fineAmount: "150",
  violationCategory: "landscaping",
  primaryDefenseStrategy: "Lack of proper written notice period",
  supportingDetails: "",
};

describe("state slugs", () => {
  it("resolves all 50 state slugs", () => {
    expect(getAllStateSlugs()).toHaveLength(50);
    for (const slug of getAllStateSlugs()) {
      expect(getStateBySlug(slug)).toBeDefined();
    }
  });

  it("returns undefined for invalid slug", () => {
    expect(getStateBySlug("invalid")).toBeUndefined();
  });
});

describe("state statute coverage", () => {
  it("gives every state a custom statute (not generic fallback)", () => {
    for (const config of STATE_SEO_CONFIG) {
      expect(config.statuteReference).not.toBe(GENERIC_STATUTE_FALLBACK);
      expect(config.letterStatuteClause.length).toBeGreaterThan(10);
    }
  });
});

describe("compileAppealLetter state tailoring", () => {
  it("includes Texas statute clause in paragraph 3", () => {
    const letter = compileAppealLetter({ ...baseFormData, state: "TX" });
    const text = compiledLetterToPlainText(letter);
    expect(text).toContain("Texas Property Code Chapter 209");
    expect(text).toContain("Texas law");
  });

  it("includes Florida Chapter 720 in paragraph 3", () => {
    const letter = compileAppealLetter({
      ...baseFormData,
      state: "FL",
      primaryDefenseStrategy: "First-time offense requesting waiver",
    });
    const text = compiledLetterToPlainText(letter);
    expect(text).toContain("Florida Statutes Chapter 720");
    expect(text).toContain("Chapter 720 affords owners");
  });

  it("includes California Civil Code for CA", () => {
    const letter = compileAppealLetter({
      ...baseFormData,
      state: "CA",
      primaryDefenseStrategy: "First-time offense requesting waiver",
    });
    const text = compiledLetterToPlainText(letter);
    expect(text).toContain("California Civil Code Sections 5850 through 5980");
  });
});

describe("buildDefenseParagraph notice hooks", () => {
  const strategy = "Lack of proper written notice period";

  it("appends Texas 30-day notice hook only for TX", () => {
    const tx = buildDefenseParagraph(strategy, "", "TX");
    expect(tx).toContain("30 days");
    expect(tx).toContain("Texas Property Code Section 209");

    const ca = buildDefenseParagraph(strategy, "", "CA");
    expect(ca).not.toContain("30 days");
    expect(ca).toContain("California Civil Code");
  });

  it("appends Florida Chapter 720 hook for FL", () => {
    const fl = buildDefenseParagraph(strategy, "", "FL");
    expect(fl).toContain("Florida Statutes Chapter 720");
  });

  it("has no notice hook for states without one", () => {
    const ctx = getStateLetterContext("AR");
    expect(ctx?.noticeDefenseHook).toBeUndefined();
    const ar = buildDefenseParagraph(strategy, "", "AR");
    expect(ar).not.toContain("30 days");
  });
});
