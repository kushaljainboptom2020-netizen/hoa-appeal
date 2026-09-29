import { describe, expect, it } from "vitest";
import { SAMPLE_LETTERS, getAllSampleSlugs } from "@/lib/content/samples";

const EXPECTED = [
  {
    slug: "sample-hoa-lawn-landscaping-fine-appeal-letter",
    title: "Sample HOA Lawn & Landscaping Fine Appeal Letter",
  },
  {
    slug: "sample-hoa-trash-can-placement-dispute-letter",
    title: "Sample HOA Trash Can Placement Dispute Letter",
  },
  {
    slug: "sample-hoa-unauthorized-parking-fine-dispute",
    title: "Sample HOA Unauthorized Parking Fine Dispute",
  },
  {
    slug: "sample-hoa-architectural-violation-appeal-letter",
    title: "Sample HOA Architectural Violation Appeal Letter",
  },
] as const;

describe("sample letter catalog", () => {
  it("includes the original samples and the added dispute types", () => {
    expect(SAMPLE_LETTERS.length).toBeGreaterThanOrEqual(9);
    for (const item of EXPECTED) {
      expect(getAllSampleSlugs()).toContain(item.slug);
    }
    expect(getAllSampleSlugs()).toContain("sample-hoa-noise-complaint-appeal-letter");
    expect(getAllSampleSlugs()).toContain("sample-hoa-pet-fine-appeal-letter");
    expect(getAllSampleSlugs()).toContain(
      "sample-hoa-holiday-decoration-appeal-letter"
    );
    expect(getAllSampleSlugs()).toContain(
      "sample-hoa-rental-restriction-appeal-letter"
    );
    expect(getAllSampleSlugs()).toContain(
      "sample-hoa-maintenance-fine-appeal-letter"
    );
  });

  it("includes a full letter body for each sample", () => {
    for (const sample of SAMPLE_LETTERS) {
      expect(sample.letter.subject.length).toBeGreaterThan(10);
      expect(sample.letter.greeting.length).toBeGreaterThan(5);
      expect(sample.letter.paragraphs.length).toBeGreaterThanOrEqual(4);
      expect(sample.letter.signOff.length).toBeGreaterThan(5);
    }
  });
});
