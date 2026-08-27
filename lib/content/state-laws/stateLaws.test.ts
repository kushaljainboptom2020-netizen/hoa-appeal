import { describe, expect, it } from "vitest";
import {
  filterStateLawRows,
  getStateLawComparisonRows,
} from "@/lib/content/state-laws";

describe("state law comparison rows", () => {
  const rows = getStateLawComparisonRows();

  it("returns one row for each of the 50 states", () => {
    expect(rows).toHaveLength(50);
    const codes = new Set(rows.map((row) => row.code));
    expect(codes.size).toBe(50);
  });

  it("uses short statute labels for California, Florida, and Texas", () => {
    expect(rows.find((r) => r.code === "CA")?.governingStatute).toBe(
      "CA Davis-Stirling Act"
    );
    expect(rows.find((r) => r.code === "FL")?.governingStatute).toBe(
      "Fla. Stat. § 720"
    );
    expect(rows.find((r) => r.code === "TX")?.governingStatute).toBe(
      "TX Prop Code Ch 209"
    );
  });

  it("uses featured fine-cap notice windows for CA, FL, CO, and VA", () => {
    expect(rows.find((r) => r.code === "CA")?.hearingNotice).toMatch(/10-day/i);
    expect(rows.find((r) => r.code === "FL")?.hearingNotice).toMatch(/14-day/i);
    expect(rows.find((r) => r.code === "CO")?.hearingNotice).toMatch(/30-day/i);
    expect(rows.find((r) => r.code === "VA")?.maxFineCap).toMatch(/\$50/);
  });

  it("filters by state name, statute keyword, and chapter number", () => {
    expect(filterStateLawRows(rows, "florida").map((r) => r.code)).toEqual([
      "FL",
    ]);
    expect(filterStateLawRows(rows, "720").some((r) => r.code === "FL")).toBe(
      true
    );
    expect(filterStateLawRows(rows, "davis").map((r) => r.code)).toEqual([
      "CA",
    ]);
    expect(filterStateLawRows(rows, "   ")).toHaveLength(50);
  });
});
