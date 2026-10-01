import { describe, expect, it } from "vitest";
import { getAllStateLegalContent } from "./index";
import { assessStatePageQuality } from "./quality";

describe("state page quality flags", () => {
  it("marks only the nine source-checked states as having a verified claim", () => {
    const verified = new Set(["AL", "AK", "AZ", "CA", "CO", "FL", "NY", "TX", "VA"]);
    for (const content of getAllStateLegalContent()) {
      const assessment = assessStatePageQuality(content);
      expect(assessment.placeholder).toBe(false);
      if (verified.has(content.code)) {
        expect(assessment.hasVerifiedClaim).toBe(true);
      } else {
        expect(assessment.hasVerifiedClaim).toBe(false);
        expect(assessment.editorialReviewRequired).toBe(true);
      }
    }
  });
});
