import { SAMPLE_LETTERS } from "./catalog";
import type { SampleLetter } from "./types";

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
export { SAMPLE_LETTERS } from "./catalog";
