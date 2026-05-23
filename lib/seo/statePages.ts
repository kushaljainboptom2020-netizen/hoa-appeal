import type { Metadata } from "next";
import { US_STATES } from "@/lib/wizard/constants";

/** @deprecated All states now have custom statutes; kept for JSON-LD comparisons. */
export const GENERIC_STATUTE_FALLBACK =
  "State-specific HOA and community association statutes govern notice requirements, fine procedures, and owner appeal rights. Consult your state's property code and recorded governing documents for exact compliance standards.";

type StateDataEntry = {
  statuteReference: string;
  letterStatuteClause: string;
  noticeDefenseHook?: string;
  hearingRightsHook?: string;
};

const STATE_DATA: Record<string, StateDataEntry> = {
  AL: {
    statuteReference:
      "Alabama Uniform Condominium Act (Ala. Code § 35-8A) and community association statutes govern HOA notice, fines, and owner appeal rights",
    letterStatuteClause:
      "the Alabama Uniform Condominium Act and applicable community association statutes",
    noticeDefenseHook:
      "Under Alabama law, associations must provide reasonable written notice and an opportunity to be heard before imposing fines.",
  },
  AK: {
    statuteReference:
      "Alaska Common Interest Ownership Act (AS 34.08) regulates HOA assessments, fines, and owner dispute procedures",
    letterStatuteClause:
      "the Alaska Common Interest Ownership Act (AS 34.08)",
    noticeDefenseHook:
      "Alaska law requires associations to follow proper notice procedures before assessing fines against owners.",
  },
  AR: {
    statuteReference:
      "Arkansas Horizontal Property Act and property owners' association statutes govern HOA enforcement and fine procedures",
    letterStatuteClause:
      "the Arkansas Horizontal Property Act and applicable property owners' association statutes",
  },
  AZ: {
    statuteReference:
      "Arizona Revised Statutes Title 33, Chapter 16 regulates HOA assessments and fines",
    letterStatuteClause:
      "Arizona Revised Statutes Title 33, Chapter 16",
    noticeDefenseHook:
      "Arizona law requires written notice of alleged violations and a reasonable opportunity to cure before fines may be imposed.",
  },
  CA: {
    statuteReference:
      "California Civil Code Sections 5850-5980 govern HOA fine and dispute procedures",
    letterStatuteClause:
      "California Civil Code Sections 5850 through 5980",
    noticeDefenseHook:
      "California Civil Code requires associations to provide written notice of alleged violations and a reasonable opportunity to cure before imposing disciplinary fines.",
  },
  CO: {
    statuteReference:
      "Colorado Common Interest Ownership Act (C.R.S. Title 38, Article 33) governs HOA enforcement",
    letterStatuteClause:
      "the Colorado Common Interest Ownership Act (C.R.S. Title 38, Article 33)",
    noticeDefenseHook:
      "Colorado law requires associations to provide written notice and a reasonable opportunity to cure before imposing fines.",
  },
  CT: {
    statuteReference:
      "Connecticut Common Interest Ownership Act (Conn. Gen. Stat. Chapter 828) governs HOA fines and owner protections",
    letterStatuteClause:
      "the Connecticut Common Interest Ownership Act (Conn. Gen. Stat. Chapter 828)",
  },
  DE: {
    statuteReference:
      "Delaware Uniform Common Interest Ownership Act (25 Del. C. Chapter 38) regulates HOA assessments and enforcement",
    letterStatuteClause:
      "the Delaware Uniform Common Interest Ownership Act (25 Del. C. Chapter 38)",
  },
  FL: {
    statuteReference:
      "Florida Statutes Chapter 720 governs fine notification rules",
    letterStatuteClause:
      "Florida Statutes Chapter 720",
    noticeDefenseHook:
      "Under Florida Statutes Chapter 720, associations must provide proper written notice of alleged violations and comply with statutory fine notification requirements before imposing penalties.",
    hearingRightsHook:
      "Chapter 720 affords owners the right to request a hearing before the board regarding disputed fines.",
  },
  GA: {
    statuteReference:
      "Georgia Property Owners' Association Act (O.C.G.A. § 44-3-220 et seq.) governs HOA enforcement",
    letterStatuteClause:
      "the Georgia Property Owners' Association Act (O.C.G.A. § 44-3-220 et seq.)",
    noticeDefenseHook:
      "Georgia law requires associations to provide written notice of violations and a reasonable opportunity to be heard before fines become final.",
  },
  HI: {
    statuteReference:
      "Hawaii Condominium Property Regimes and planned community statutes govern HOA fines and owner appeal rights",
    letterStatuteClause:
      "Hawaii condominium and planned community statutes",
  },
  ID: {
    statuteReference:
      "Idaho Condominium Property Act (Idaho Code Title 55, Chapter 15) regulates common interest community fines and procedures",
    letterStatuteClause:
      "the Idaho Condominium Property Act (Idaho Code Title 55, Chapter 15)",
  },
  IL: {
    statuteReference:
      "Illinois Condominium Property Act and Common Interest Community Association Act regulate HOA fines",
    letterStatuteClause:
      "the Illinois Condominium Property Act and Common Interest Community Association Act",
    noticeDefenseHook:
      "Illinois law requires associations to provide written notice of alleged violations and a reasonable opportunity to cure before imposing fines.",
  },
  IN: {
    statuteReference:
      "Indiana Homeowners Association Act (Ind. Code Title 32, Article 25.5) governs HOA assessments and enforcement",
    letterStatuteClause:
      "the Indiana Homeowners Association Act (Ind. Code Title 32, Article 25.5)",
  },
  IA: {
    statuteReference:
      "Iowa Uniform Common Interest Ownership Act (Iowa Code Chapter 499B) governs HOA fines and owner rights",
    letterStatuteClause:
      "the Iowa Uniform Common Interest Ownership Act (Iowa Code Chapter 499B)",
  },
  KS: {
    statuteReference:
      "Kansas Uniform Common Interest Ownership Act (K.S.A. Chapter 58, Article 46) regulates HOA assessments and fines",
    letterStatuteClause:
      "the Kansas Uniform Common Interest Ownership Act (K.S.A. Chapter 58, Article 46)",
  },
  KY: {
    statuteReference:
      "Kentucky Condominium Act and property owners' association statutes govern HOA notice and fine procedures",
    letterStatuteClause:
      "Kentucky condominium and property owners' association statutes",
  },
  LA: {
    statuteReference:
      "Louisiana Uniform Condominium Act (La. R.S. Title 9, Chapter 9) governs HOA enforcement and owner protections",
    letterStatuteClause:
      "the Louisiana Uniform Condominium Act (La. R.S. Title 9, Chapter 9)",
  },
  ME: {
    statuteReference:
      "Maine Condominium Act (33 M.R.S. Chapter 31) and HOA statutes regulate fine procedures and owner appeal rights",
    letterStatuteClause:
      "the Maine Condominium Act (33 M.R.S. Chapter 31) and applicable HOA statutes",
  },
  MD: {
    statuteReference:
      "Maryland Homeowners Association Act (Md. Code, Real Property Title 11, Subtitle 3) governs HOA fines and notice requirements",
    letterStatuteClause:
      "the Maryland Homeowners Association Act (Md. Code, Real Property Title 11, Subtitle 3)",
    noticeDefenseHook:
      "Maryland law requires associations to provide written notice of violations and a reasonable opportunity to be heard before fines are imposed.",
  },
  MA: {
    statuteReference:
      "Massachusetts Condominium Act (M.G.L. c. 183A) and planned community statutes govern HOA assessments and enforcement",
    letterStatuteClause:
      "the Massachusetts Condominium Act (M.G.L. c. 183A) and applicable planned community statutes",
  },
  MI: {
    statuteReference:
      "Michigan Condominium Act and HOA statutes require reasonable fine procedures",
    letterStatuteClause:
      "the Michigan Condominium Act and applicable HOA statutes",
    noticeDefenseHook:
      "Michigan law requires associations to follow reasonable notice and hearing procedures before imposing fines.",
  },
  MN: {
    statuteReference:
      "Minnesota Common Interest Ownership Act (Minn. Stat. Chapter 515B) governs HOA fines and owner dispute rights",
    letterStatuteClause:
      "the Minnesota Common Interest Ownership Act (Minn. Stat. Chapter 515B)",
  },
  MS: {
    statuteReference:
      "Mississippi Condominium Law (Miss. Code Title 89, Chapter 8) regulates HOA assessments and enforcement",
    letterStatuteClause:
      "the Mississippi Condominium Law (Miss. Code Title 89, Chapter 8)",
  },
  MO: {
    statuteReference:
      "Missouri Condominium Property Act and horizontal property statutes govern HOA fine procedures",
    letterStatuteClause:
      "the Missouri Condominium Property Act and applicable horizontal property statutes",
  },
  MT: {
    statuteReference:
      "Montana Unit Ownership Act and condominium statutes regulate HOA assessments and owner appeal rights",
    letterStatuteClause:
      "the Montana Unit Ownership Act and applicable condominium statutes",
  },
  NE: {
    statuteReference:
      "Nebraska Condominium Act (Neb. Rev. Stat. Chapter 76, Article 8) governs common interest community fines and procedures",
    letterStatuteClause:
      "the Nebraska Condominium Act (Neb. Rev. Stat. Chapter 76, Article 8)",
  },
  NV: {
    statuteReference:
      "Nevada Revised Statutes Chapter 116 requires written notice before HOA fines",
    letterStatuteClause:
      "Nevada Revised Statutes Chapter 116",
    noticeDefenseHook:
      "Nevada Revised Statutes Chapter 116 requires written notice of alleged violations before an association may impose fines.",
  },
  NH: {
    statuteReference:
      "New Hampshire Condominium Act (RSA 356-B) governs HOA assessments, fines, and owner protections",
    letterStatuteClause:
      "the New Hampshire Condominium Act (RSA 356-B)",
  },
  NJ: {
    statuteReference:
      "New Jersey Condominium Act and Planned Real Estate Development Act govern HOA fines",
    letterStatuteClause:
      "the New Jersey Condominium Act and Planned Real Estate Development Act",
    noticeDefenseHook:
      "New Jersey law requires associations to provide written notice and a reasonable opportunity to cure before imposing fines.",
  },
  NM: {
    statuteReference:
      "New Mexico Condominium Act (NMSA Chapter 47, Article 7) regulates HOA enforcement and fine procedures",
    letterStatuteClause:
      "the New Mexico Condominium Act (NMSA Chapter 47, Article 7)",
  },
  NY: {
    statuteReference:
      "New York Real Property Law Article 9-B governs cooperative and HOA governance",
    letterStatuteClause:
      "New York Real Property Law Article 9-B",
    noticeDefenseHook:
      "New York law requires cooperative and HOA boards to provide adequate notice and a reasonable opportunity to be heard before imposing fines.",
  },
  NC: {
    statuteReference:
      "North Carolina General Statutes Chapter 47F and 47C establish HOA owner protections",
    letterStatuteClause:
      "North Carolina General Statutes Chapters 47F and 47C",
    noticeDefenseHook:
      "North Carolina law requires associations to provide written notice of violations and a reasonable opportunity to cure before imposing fines.",
  },
  ND: {
    statuteReference:
      "North Dakota Condominium Act (N.D.C.C. Chapter 47-04.1) governs HOA assessments and enforcement",
    letterStatuteClause:
      "the North Dakota Condominium Act (N.D.C.C. Chapter 47-04.1)",
  },
  OH: {
    statuteReference:
      "Ohio Revised Code Chapter 5312 governs planned community associations",
    letterStatuteClause:
      "Ohio Revised Code Chapter 5312",
    noticeDefenseHook:
      "Ohio law requires planned community associations to provide reasonable notice before imposing fines.",
  },
  OK: {
    statuteReference:
      "Oklahoma Real Estate Development Act and property owners' association statutes govern HOA fines",
    letterStatuteClause:
      "the Oklahoma Real Estate Development Act and applicable property owners' association statutes",
  },
  OR: {
    statuteReference:
      "Oregon Planned Community Act (ORS Chapter 94) regulates HOA assessments, fines, and owner appeal rights",
    letterStatuteClause:
      "the Oregon Planned Community Act (ORS Chapter 94)",
    noticeDefenseHook:
      "Oregon law requires associations to provide written notice and a reasonable opportunity to cure before imposing fines.",
  },
  PA: {
    statuteReference:
      "Pennsylvania Uniform Planned Community Act regulates HOA assessments and enforcement",
    letterStatuteClause:
      "the Pennsylvania Uniform Planned Community Act",
    noticeDefenseHook:
      "Pennsylvania law requires associations to provide written notice of violations before imposing fines.",
  },
  RI: {
    statuteReference:
      "Rhode Island Condominium Act (R.I. Gen. Laws Chapter 34-36) governs HOA fine procedures and owner rights",
    letterStatuteClause:
      "the Rhode Island Condominium Act (R.I. Gen. Laws Chapter 34-36)",
  },
  SC: {
    statuteReference:
      "South Carolina Horizontal Property Act and property owners' association statutes govern HOA enforcement",
    letterStatuteClause:
      "the South Carolina Horizontal Property Act and applicable property owners' association statutes",
  },
  SD: {
    statuteReference:
      "South Dakota Condominium Act (SDCL Chapter 43-15A) regulates HOA assessments and fine procedures",
    letterStatuteClause:
      "the South Dakota Condominium Act (SDCL Chapter 43-15A)",
  },
  TN: {
    statuteReference:
      "Tennessee Horizontal Property Act and property owners' association statutes govern HOA fines and notice requirements",
    letterStatuteClause:
      "the Tennessee Horizontal Property Act and applicable property owners' association statutes",
    noticeDefenseHook:
      "Tennessee law requires associations to provide written notice of alleged violations before imposing fines.",
  },
  TX: {
    statuteReference:
      "Texas Property Code Section 209 mandates a 30-day notice period before fines",
    letterStatuteClause:
      "Texas Property Code Chapter 209",
    noticeDefenseHook:
      "Under Texas Property Code Section 209, an association must provide at least 30 days' written notice of an alleged violation and a reasonable opportunity to cure before a fine may be imposed.",
    hearingRightsHook:
      "Texas Property Code Chapter 209 affords owners the right to request a hearing before the board regarding disputed fines.",
  },
  UT: {
    statuteReference:
      "Utah Community Association Act (Utah Code Title 57, Chapter 8a) governs HOA assessments, fines, and owner appeal rights",
    letterStatuteClause:
      "the Utah Community Association Act (Utah Code Title 57, Chapter 8a)",
    noticeDefenseHook:
      "Utah law requires associations to provide written notice and a reasonable opportunity to cure before imposing fines.",
  },
  VT: {
    statuteReference:
      "Vermont Common Interest Ownership Act (27 V.S.A. Chapter 33) regulates HOA fines and owner protections",
    letterStatuteClause:
      "the Vermont Common Interest Ownership Act (27 V.S.A. Chapter 33)",
  },
  VA: {
    statuteReference:
      "Virginia Property Owners' Association Act (Va. Code § 55.1-1800) sets HOA notice requirements",
    letterStatuteClause:
      "the Virginia Property Owners' Association Act (Va. Code § 55.1-1800 et seq.)",
    noticeDefenseHook:
      "Virginia law requires property owners' associations to provide written notice of violations and a reasonable opportunity to cure before imposing fines.",
  },
  WA: {
    statuteReference:
      "Washington Uniform Common Interest Ownership Act (RCW 64.90) governs HOA fines",
    letterStatuteClause:
      "the Washington Uniform Common Interest Ownership Act (RCW 64.90)",
    noticeDefenseHook:
      "Washington law requires associations to provide written notice and a reasonable opportunity to cure before imposing fines.",
  },
  WV: {
    statuteReference:
      "West Virginia Unit Property Act and condominium statutes govern HOA assessments and enforcement",
    letterStatuteClause:
      "the West Virginia Unit Property Act and applicable condominium statutes",
  },
  WI: {
    statuteReference:
      "Wisconsin Condominium Act (Wis. Stat. Chapter 703) regulates HOA fines and owner dispute procedures",
    letterStatuteClause:
      "the Wisconsin Condominium Act (Wis. Stat. Chapter 703)",
  },
  WY: {
    statuteReference:
      "Wyoming Unit Ownership Act (Wyo. Stat. Title 34, Chapter 20) governs common interest community fines and procedures",
    letterStatuteClause:
      "the Wyoming Unit Ownership Act (Wyo. Stat. Title 34, Chapter 20)",
  },
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

export type StateSeoConfig = {
  code: string;
  name: string;
  slug: string;
  statuteReference: string;
  letterStatuteClause: string;
  noticeDefenseHook?: string;
  hearingRightsHook?: string;
};

export type StateLetterContext = {
  code: string;
  name: string;
  statuteReference: string;
  letterStatuteClause: string;
  noticeDefenseHook?: string;
  hearingRightsHook?: string;
};

function buildStateConfig(
  code: string,
  name: string
): StateSeoConfig {
  const data = STATE_DATA[code];
  if (!data) {
    throw new Error(`Missing state data for ${code}`);
  }
  return {
    code,
    name,
    slug: SLUG_BY_CODE[code],
    statuteReference: data.statuteReference,
    letterStatuteClause: data.letterStatuteClause,
    noticeDefenseHook: data.noticeDefenseHook,
    hearingRightsHook: data.hearingRightsHook,
  };
}

export const STATE_SEO_CONFIG: StateSeoConfig[] = US_STATES.map((s) =>
  buildStateConfig(s.value, s.label)
);

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

export function getStateLetterContext(code: string): StateLetterContext | undefined {
  const config = getStateByCode(code);
  if (!config) return undefined;
  return {
    code: config.code,
    name: config.name,
    statuteReference: config.statuteReference,
    letterStatuteClause: config.letterStatuteClause,
    noticeDefenseHook: config.noticeDefenseHook,
    hearingRightsHook: config.hearingRightsHook,
  };
}

function buildTitle(name: string): string {
  return `Free ${name} HOA Fine Appeal Letter Generator | Fight HOA Violations`;
}

function buildDescription(config: StateSeoConfig): string {
  const custom = CUSTOM_DESCRIPTIONS[config.code];
  if (custom) return custom;

  return `Instantly generate a legally formatted dispute letter to appeal your ${config.name} HOA fine. Built with ${config.name} HOA law in mind: ${config.statuteReference}. 100% Free.`;
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
  return {
    headline: `Fight Unfair HOA Fines in ${config.name}`,
    subheadline: `Generate a professional, persuasive HOA fine appeal letter tailored to ${config.name} homeowners — with language informed by ${config.statuteReference}.`,
  };
}
