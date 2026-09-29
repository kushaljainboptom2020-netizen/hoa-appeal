import { EXTRA_SAMPLE_LETTERS } from "./extra";
import { SAMPLE_LETTERS as CORE_SAMPLE_LETTERS } from "./catalog";
import type { SampleLetter } from "./types";

export const SAMPLE_LETTERS: SampleLetter[] = [
  ...CORE_SAMPLE_LETTERS,
  ...EXTRA_SAMPLE_LETTERS,
];

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
