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
  it("lists exactly four keyword-targeted sample letters", () => {
    expect(SAMPLE_LETTERS).toHaveLength(4);
    expect(getAllSampleSlugs()).toEqual(EXPECTED.map((item) => item.slug));
    expect(SAMPLE_LETTERS.map((sample) => sample.title)).toEqual(
      EXPECTED.map((item) => item.title)
    );
  });

  it("includes a full letter body for each sample", () => {
    for (const sample of SAMPLE_LETTERS) {
      expect(sample.letter.subject.length).toBeGreaterThan(10);
      expect(sample.letter.greeting.length).toBeGreaterThan(5);
      expect(sample.letter.paragraphs.length).toBeGreaterThanOrEqual(5);
      expect(sample.letter.signOff.length).toBeGreaterThan(5);
    }
  });
});
