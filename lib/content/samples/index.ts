import { EXTRA_SAMPLE_LETTERS } from "./extra";
import { SAMPLE_LETTERS as CORE_SAMPLE_LETTERS } from "./catalog";
import type { SampleLetter } from "./types";

export const SAMPLE_LETTERS: SampleLetter[] = [
  ...CORE_SAMPLE_LETTERS,
  ...EXTRA_SAMPLE_LETTERS,
];

const RELATED_GUIDE_BY_SAMPLE: Record<string, { href: string; label: string }> = {
  "sample-hoa-lawn-landscaping-fine-appeal-letter": {
    href: "/guides/landscaping-and-maintenance-violation-appeals",
    label: "Landscaping and maintenance violation appeals",
  },
  "sample-hoa-trash-can-placement-dispute-letter": {
    href: "/guides/how-to-write-an-hoa-appeal-letter",
    label: "How to write an HOA appeal letter",
  },
  "sample-hoa-unauthorized-parking-fine-dispute": {
    href: "/guides/parking-and-vehicle-hoa-fines",
    label: "Parking and vehicle HOA fines",
  },
  "sample-hoa-architectural-violation-appeal-letter": {
    href: "/guides/architectural-review-denials-and-appeals",
    label: "Architectural review denials and appeals",
  },
  "sample-hoa-noise-complaint-appeal-letter": {
    href: "/guides/noise-and-nuisance-hoa-violations",
    label: "Noise and nuisance HOA violations",
  },
  "sample-hoa-pet-fine-appeal-letter": {
    href: "/guides/pet-related-hoa-fines",
    label: "Pet-related HOA fines",
  },
  "sample-hoa-holiday-decoration-appeal-letter": {
    href: "/guides/how-to-write-an-hoa-appeal-letter",
    label: "How to write an HOA appeal letter",
  },
  "sample-hoa-rental-restriction-appeal-letter": {
    href: "/guides/short-term-rental-hoa-enforcement",
    label: "Short-term rental HOA enforcement",
  },
  "sample-hoa-maintenance-fine-appeal-letter": {
    href: "/guides/landscaping-and-maintenance-violation-appeals",
    label: "Landscaping and maintenance violation appeals",
  },
};

export function relatedGuideForSample(slug: string): { href: string; label: string } {
  return (
    RELATED_GUIDE_BY_SAMPLE[slug] ?? {
      href: "/guides/sample-hoa-appeal-letter-structure",
      label: "Sample HOA appeal letter structure",
    }
  );
}

const bySlug = new Map(SAMPLE_LETTERS.map((sample) => [sample.slug, sample]));

export function getAllSampleLetters(): SampleLetter[] {
  return SAMPLE_LETTERS;
}

export function getAllSampleSlugs(): string[] {
  return SAMPLE_LETTERS.map((sample) => sample.slug);
}

export function getSampleBySlug(slug: string): SampleLetter | undefined {
  return bySlug.get(slug);
}

export type { SampleLetter, SampleLetterBody } from "./types";
