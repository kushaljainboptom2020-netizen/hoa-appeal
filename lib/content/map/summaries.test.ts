import { describe, expect, it } from "vitest";
import {
  getStateMapSummaries,
  getStateMapSummaryByCode,
} from "./summaries";

describe("state map summaries", () => {
  it("includes all 50 states with required fields", () => {
    const all = getStateMapSummaries();
    expect(all).toHaveLength(50);

    for (const summary of all) {
      expect(summary.code).toMatch(/^[A-Z]{2}$/);
      expect(summary.name.length).toBeGreaterThan(1);
      expect(summary.slug.length).toBeGreaterThan(1);
      expect(summary.href).toBe(`/appeal-hoa-fine/${summary.slug}`);
      expect(summary.overview.length).toBeGreaterThan(20);
      expect(summary.noticeWindow.length).toBeGreaterThan(1);
      expect(summary.appealDeadlines.length).toBeGreaterThanOrEqual(1);
      expect(summary.commonViolations.length).toBeGreaterThanOrEqual(1);
      expect(summary.statuteReference.length).toBeGreaterThan(1);

      for (const deadline of summary.appealDeadlines) {
        expect(deadline.label.length).toBeGreaterThan(0);
        expect(deadline.duration.length).toBeGreaterThan(0);
      }
    }
  });

  it("looks up summaries by code", () => {
    const texas = getStateMapSummaryByCode("tx");
    expect(texas?.code).toBe("TX");
    expect(texas?.slug).toBe("texas");
    expect(texas?.href).toBe("/appeal-hoa-fine/texas");
  });
});
