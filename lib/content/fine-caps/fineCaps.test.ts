import { describe, expect, it } from "vitest";
import { US_STATES } from "@/lib/wizard/constants";
import {
  FINE_CALCULATOR_CATEGORIES,
  formatDefenseClause,
  getFineCalculatorCategory,
  getStateFineCap,
} from "@/lib/content/fine-caps";

describe("state HOA fine cap lookup", () => {
  it("returns California $100 cap and 10-day hearing notice", () => {
    const result = getStateFineCap("CA");
    expect(result.isFallback).toBe(false);
    expect(result.stateName).toBe("California");
    expect(result.maxFineLabel).toContain("$100");
    expect(result.noticeWindow).toMatch(/10-day/i);
    expect(result.citation).toMatch(/5850/);
  });

  it("returns Florida daily cap, $1,000 aggregate, and 14-day committee notice", () => {
    const result = getStateFineCap("FL");
    expect(result.isFallback).toBe(false);
    expect(result.maxFineLabel).toMatch(/\$100 per day/i);
    expect(result.maxFineLabel).toMatch(/\$1,000/);
    expect(result.noticeWindow).toMatch(/14-day/i);
    expect(result.defenseClause).toMatch(/720\.305/);
  });

  it("returns Colorado $500 cap and two 30-day cure periods", () => {
    const result = getStateFineCap("CO");
    expect(result.isFallback).toBe(false);
    expect(result.maxFineLabel).toMatch(/\$500/);
    expect(result.noticeWindow).toMatch(/30-day/);
    expect(result.citation).toMatch(/38-33\.3-209\.5/);
  });

  it("returns Virginia $50 / $10-per-day cap", () => {
    const result = getStateFineCap("VA");
    expect(result.isFallback).toBe(false);
    expect(result.maxFineLabel).toMatch(/\$50/);
    expect(result.maxFineLabel).toMatch(/\$10/);
    expect(result.citation).toMatch(/55\.1-1819/);
  });

  it("falls back for other states such as Texas", () => {
    const result = getStateFineCap("TX");
    expect(result.isFallback).toBe(true);
    expect(result.stateName).toBe("Texas");
    expect(result.noticeWindow).toMatch(/10–14 day/);
    expect(result.defenseClause.toLowerCase()).toMatch(/cc&rs|cc&r/);
  });

  it("maps calculator categories onto wizard violation values", () => {
    expect(FINE_CALCULATOR_CATEGORIES).toHaveLength(5);
    expect(getFineCalculatorCategory("landscaping")?.wizardValue).toBe(
      "landscaping"
    );
    expect(getFineCalculatorCategory("trash")?.wizardValue).toBe("trash");
    expect(getFineCalculatorCategory("parking")?.wizardValue).toBe("vehicle");
    expect(getFineCalculatorCategory("architectural")?.wizardValue).toBe(
      "unapproved"
    );
    expect(getFineCalculatorCategory("general")?.wizardValue).toBe("other");
  });

  it("appends category context to the defense clause", () => {
    const fl = getStateFineCap("FL");
    const clause = formatDefenseClause(fl, "Parking/Vehicle");
    expect(clause).toContain(fl.defenseClause);
    expect(clause.toLowerCase()).toContain("parking/vehicle");
  });

  it("covers every US state via featured or fallback records", () => {
    for (const state of US_STATES) {
      const result = getStateFineCap(state.value);
      expect(result.stateCode).toBe(state.value);
      expect(result.maxFineLabel.length).toBeGreaterThan(0);
      expect(result.noticeWindow.length).toBeGreaterThan(0);
    }
  });
});
