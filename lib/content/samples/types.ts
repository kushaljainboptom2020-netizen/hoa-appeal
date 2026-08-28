import type { EditorialAttribution } from "@/lib/content/editorial/attribution";

export type SampleLetterBody = {
  date: string;
  addressee: string[];
  subject: string;
  greeting: string;
  paragraphs: string[];
  signOff: string;
};

export type SampleLetter = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  keyword: string;
  letter: SampleLetterBody;
  attribution: EditorialAttribution;
};
