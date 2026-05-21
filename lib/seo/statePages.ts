import type { Metadata } from "next";
import { US_STATES } from "@/lib/wizard/constants";

export const GENERIC_STATUTE_FALLBACK =
  "State-specific HOA and community association statutes govern notice requirements, fine procedures, and owner appeal rights. Consult your state's property code and recorded governing documents for exact compliance standards.";

export type StateSeoConfig = {
  code: string;
  name: string;
  slug: string;
  statuteReference: string;
};

const CUSTOM_STATUTES: Partial<Record<string, string>> = {
  FL: "Florida Statutes Chapter 720 governs fine notification rules",
  TX: "Texas Property Code Section 209 mandates a 30-day notice period before fines",
  CA: "California Civil Code Sections 5850-5980 govern HOA fine and dispute procedures",
  AZ: "Arizona Revised Statutes Title 33, Chapter 16 regulates HOA assessments and fines",
  NV: "Nevada Revised Statutes Chapter 116 requires written notice before HOA fines",
  GA: "Georgia Property Owners' Association Act (O.C.G.A. § 44-3-220 et seq.) governs HOA enforcement",
  NC: "North Carolina General Statutes Chapter 47F and 47C establish HOA owner protections",
  NY: "New York Real Property Law Article 9-B governs cooperative and HOA governance",
  IL: "Illinois Condominium Property Act and Common Interest Community Association Act regulate HOA fines",
  CO: "Colorado Common Interest Ownership Act (C.R.S. Title 38, Article 33) governs HOA enforcement",
  VA: "Virginia Property Owners' Association Act (Va. Code § 55.1-1800) sets HOA notice requirements",
  WA: "Washington Uniform Common Interest Ownership Act (RCW 64.90) governs HOA fines",
  PA: "Pennsylvania Uniform Planned Community Act regulates HOA assessments and enforcement",
  NJ: "New Jersey Condominium Act and Planned Real Estate Development Act govern HOA fines",
  OH: "Ohio Revised Code Chapter 5312 governs planned community associations",
  MI: "Michigan Condominium Act and HOA statutes require reasonable fine procedures",
};

const SLUG_BY_CODE: Record<string, string> = {
  AL: "alabama",
  AK: "alaska",
  AZ: "arizona",
  AR: "arkansas",
  CA: "california",
  CO: "colorado",
  CT: "connecticut",
  DE: "delaware",
  FL: "florida",
  GA: "georgia",
  HI: "hawaii",
  ID: "idaho",
  IL: "illinois",
  IN: "indiana",
  IA: "iowa",
  KS: "kansas",
  KY: "kentucky",
  LA: "louisiana",
  ME: "maine",
  MD: "maryland",
  MA: "massachusetts",
  MI: "michigan",
  MN: "minnesota",
  MS: "mississippi",
  MO: "missouri",
  MT: "montana",
  NE: "nebraska",
  NV: "nevada",
  NH: "new-hampshire",
  NJ: "new-jersey",
  NM: "new-mexico",
  NY: "new-york",
  NC: "north-carolina",
  ND: "north-dakota",
  OH: "ohio",
  OK: "oklahoma",
  OR: "oregon",
  PA: "pennsylvania",
  RI: "rhode-island",
  SC: "south-carolina",
  SD: "south-dakota",
  TN: "tennessee",
  TX: "texas",
  UT: "utah",
  VT: "vermont",
  VA: "virginia",
  WA: "washington",
  WV: "west-virginia",
  WI: "wisconsin",
  WY: "wyoming",
};

const CUSTOM_DESCRIPTIONS: Partial<Record<string, string>> = {
  FL: "Instantly generate a legally formatted dispute letter to appeal your Florida HOA fine. Built for Chapter 720 compliance. 100% Free.",
  TX: "Instantly generate a legally formatted dispute letter to appeal your Texas HOA fine. Built for Property Code Section 209's 30-day notice requirements. 100% Free.",
};

export const STATE_SEO_CONFIG: StateSeoConfig[] = US_STATES.map((s) => ({
  code: s.value,
  name: s.label,
  slug: SLUG_BY_CODE[s.value],
  statuteReference: CUSTOM_STATUTES[s.value] ?? GENERIC_STATUTE_FALLBACK,
}));

const slugIndex = new Map(STATE_SEO_CONFIG.map((c) => [c.slug, c]));
const codeIndex = new Map(STATE_SEO_CONFIG.map((c) => [c.code, c]));

export function getStateBySlug(slug: string): StateSeoConfig | undefined {
  return slugIndex.get(slug.toLowerCase());
}

export function getStateByCode(code: string): StateSeoConfig | undefined {
  return codeIndex.get(code.toUpperCase());
}

export function getAllStateSlugs(): string[] {
  return STATE_SEO_CONFIG.map((c) => c.slug);
}

function buildTitle(name: string): string {
  return `Free ${name} HOA Fine Appeal Letter Generator | Fight HOA Violations`;
}

function buildDescription(config: StateSeoConfig): string {
  const custom = CUSTOM_DESCRIPTIONS[config.code];
  if (custom) return custom;

  const statuteHook =
    config.statuteReference === GENERIC_STATUTE_FALLBACK
      ? "Aligned with state HOA notice and appeal requirements."
      : `Built with ${config.name} HOA law in mind: ${config.statuteReference}`;

  return `Instantly generate a legally formatted dispute letter to appeal your ${config.name} HOA fine. ${statuteHook} 100% Free.`;
}

export function buildStateMetadata(config: StateSeoConfig): Metadata {
  return {
    title: buildTitle(config.name),
    description: buildDescription(config),
  };
}

export function getStateHeroCopy(config: StateSeoConfig): {
  headline: string;
  subheadline: string;
} {
  const statuteSnippet =
    config.statuteReference === GENERIC_STATUTE_FALLBACK
      ? "state HOA statutes"
      : config.statuteReference;

  return {
    headline: `Fight Unfair HOA Fines in ${config.name}`,
    subheadline: `Generate a professional, persuasive HOA fine appeal letter tailored to ${config.name} homeowners — with language informed by ${statuteSnippet}.`,
  };
}
