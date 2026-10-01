import type { StateSeoConfig } from "@/lib/seo/statePages";
import type { StateContentProfile } from "./buildContent";
import type { StateLegalContent, VerificationStatus } from "./types";

/**
 * State-page copy after the September 2026 audit.
 * Verified paragraphs are the recommended wording from SEO_AUDIT/04.
 * Other states say a statewide day count or fine cap was not confirmed.
 */

const VERIFIED = new Set([
  "AL",
  "AK",
  "AZ",
  "CA",
  "CO",
  "FL",
  "NY",
  "TX",
  "VA",
]);

const ACT_NAME: Record<string, string> = {
  AK: "Alaska Uniform Common Interest Ownership Act (AS 34.08)",
  CO: "Colorado Common Interest Ownership Act (C.R.S. §§ 38-33.3-101 and following)",
};

const QUICK_ANSWER: Record<string, string> = {
  AL: "Alabama condominium associations are organized under the Alabama Uniform Condominium Act, Ala. Code § 35-8A. Planned-community associations may fall under the Alabama Homeowners' Association Act, Ala. Code § 35-20, or only under recorded CC&Rs, depending on when the association was formed and whether it opted in. Confirm which statute applies before relying on a hearing right. This site does not state a statewide number of days' notice.",
  AK: "AS 34.08 is the Alaska Uniform Common Interest Ownership Act. It is not only a condominium statute. Check AS 34.08.010 for which communities it covers before citing a notice or fine procedure. This page does not confirm a 30-day statewide notice window.",
  AZ: "For planned communities covered by A.R.S. § 33-1803, the board may impose reasonable monetary penalties after notice and an opportunity to be heard. A member who receives a written property-condition notice may respond by certified mail within 21 calendar days. Cure deadlines in the declaration can be shorter or longer. Condominiums are covered by a different article. This page does not state a 10-day statutory cure period.",
  CA: "Under Civil Code § 5850, as amended by AB 130 (Stats. 2025, ch. 22), a monetary penalty may not exceed the lesser of the association's published schedule or $100 per violation, unless the board makes a written open-meeting finding that the violation may result in an adverse health or safety impact. Under § 5855, the board must give at least 10 days' prior written notice before a meeting to consider or impose discipline. Read both sections. Do not describe a missed notice as automatically voiding the fine. These sections apply to common interest developments under the Davis-Stirling Act, not to every association that uses the word HOA.",
  CO: "CCIOA is C.R.S. §§ 38-33.3-101 and following, not Title 38, Article 33. Section 38-33.3-209.5 sets different notice rules for health-or-safety violations (72 hours in the text reviewed) and other violations (certified mail and 30 days to cure before a fine, with total fines for that violation not to exceed $500). Two consecutive 30-day cure periods are the condition stated before legal action. Confirm the current codified section on the General Assembly site.",
  FL: "For associations governed by § 720.305, a fine may not exceed $100 per violation, or $1,000 in the aggregate for a continuing violation, unless the governing documents allow a different amount. The board may not impose the fine unless it first gives at least 14 days' written notice of the owner's right to a hearing before a committee that meets the statute's independence rules. Condominiums are under Chapter 718, not Chapter 720. The statute says the fine may not be imposed without that notice. It does not use the word invalidate, and the hearing is not described as a hearing before the board.",
  NY: "New York condominiums are created under Real Property Law Article 9-B. Cooperative corporations and many planned communities are not governed by that article. Do not state that New York law requires a fine hearing, or a 30-day notice, for co-ops and HOAs. Read the bylaws and, for condominiums, the specific Real Property Law section being cited.",
  TX: "If Chapter 209 applies, § 209.006 requires written notice by certified mail before the association levies a fine. For a curable violation that is not a threat to public health or safety, the notice must give a reasonable time to cure and must say that the owner may request a hearing under § 209.007 on or before the 30th day after the notice was mailed. Subsection (d) is a repeat-violation exception, not the hearing statute. Condominiums and associations outside § 209.003 need a different analysis. The 30th day is not a rule that the notice itself must give 30 days before a fine.",
  VA: "For associations subject to Va. Code § 55.1-1819, confirm on the Virginia LIS site the charge limits ($50 single offense or $10 per day, not assessed beyond 90 days, in the text commonly published) and the sequence of a cure opportunity plus at least 14 days' notice of a hearing. The Condominium Act is separate. Do not apply § 55.1-1819 to an association the act does not cover. This site has not captured the current LIS HTML for that section in the audit file, so treat the dollar figures as items to confirm.",
};

const OFFICIAL: Record<string, { citation: string; url: string }[]> = {
  AL: [
    {
      citation: "Code of Alabama, legislature site (Alison)",
      url: "https://alisondb.legislature.state.al.us/alison/codeofalabama/1975/coatoc.htm",
    },
  ],
  AK: [
    {
      citation: "Alaska Statutes, chapter 34.08",
      url: "https://www.akleg.gov/basis/statutes.asp#34.08",
    },
  ],
  AZ: [
    {
      citation: "A.R.S. § 33-1803",
      url: "https://www.azleg.gov/ars/33/01803.htm",
    },
  ],
  CA: [
    {
      citation: "California Civil Code § 5850",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=5850",
    },
    {
      citation: "California Civil Code § 5855",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=5855",
    },
  ],
  CO: [
    {
      citation: "Colorado Revised Statutes",
      url: "https://leg.colorado.gov/colorado-revised-statutes",
    },
  ],
  FL: [
    {
      citation: "Florida Statutes Chapter 720",
      url: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0720/0720ContentsIndex.html",
    },
  ],
  NY: [
    {
      citation: "New York Real Property Law",
      url: "https://www.nysenate.gov/legislation/laws/RPP",
    },
  ],
  TX: [
    {
      citation: "Texas Property Code Chapter 209",
      url: "https://statutes.capitol.texas.gov/Docs/PR/htm/PR.209.htm",
    },
  ],
  VA: [
    {
      citation: "Virginia Code Title 55.1, Chapter 18",
      url: "https://law.lis.virginia.gov/vacode/title55.1/chapter18/",
    },
  ],
};

/** Practical dispute settings. Not legal rules. */
const LOCAL_SETTING: Record<string, string> = {
  AL: "pine straw, mildew, and coastal storm cleanup",
  AK: "snow, ice, and extreme-cold maintenance",
  AZ: "xeriscape rules and desert watering limits",
  AR: "driveway access on sloped Ozark lots",
  CA: "defensible-space vegetation and drought landscaping",
  CO: "snow removal on steep mountain driveways",
  CT: "ice dams and coastal salt on buildings",
  DE: "flood-zone and canal-front maintenance",
  FL: "storm shutters and tropical landscaping",
  GA: "red-clay staining and humid-season lawns",
  HI: "trade-wind landscaping and condo-versus-planned-community projects",
  ID: "wildland-urban fire clearance",
  IL: "snow removal, plus the difference between a condominium and a planned community",
  IN: "suburban lawn and parking rules around large metros",
  IA: "wind damage and storm debris",
  KS: "hail damage and prairie-wind debris",
  KY: "fence and pasture-edge landscaping disputes",
  LA: "storm debris and flood-zone maintenance",
  ME: "snow load, ice, and seasonal camps",
  MD: "watershed runoff and dense suburban architectural rules",
  MA: "historic-district adjacency and freeze-thaw maintenance",
  MI: "lake-effect snow and shoreline lots",
  MN: "ice dams and winter access",
  MS: "humidity, storm recovery, and lawn standards",
  MO: "storm debris in suburban and lake communities",
  MT: "wildfire clearance at the forest edge",
  NE: "hail damage and windblown debris",
  NV: "desert landscaping and heat-related plant loss",
  NH: "snow removal and seasonal lake communities",
  NJ: "tight-lot architectural uniformity",
  NM: "stucco, adobe, and water-use landscaping",
  NY: "the difference between a condominium, a cooperative, and a planned community",
  NC: "coastal storm preparation and suburban covenant disputes",
  ND: "frost heave and extreme-cold maintenance",
  OH: "four-season lawn, snow, and storm cleanup",
  OK: "storm debris and shelter-access disputes",
  OR: "moss, gutters, and rain-related maintenance",
  PA: "sidewalk snow and lake-community rules",
  RI: "salt air and tight coastal lot lines",
  SC: "humidity, palmetto landscaping, and coastal storms",
  SD: "blizzard debris and winter access",
  TN: "steep-lot drainage and resort-community rules",
  TX: "master-planned landscaping and summer heat",
  UT: "snow load and desert water limits, depending on the region",
  VT: "mud-season roads and freeze-thaw damage",
  VA: "architectural standards in suburban covenant communities",
  WA: "moss, roofs, and rain saturation",
  WV: "hillside drainage and steep lots",
  WI: "lake-lot rules and freeze-thaw maintenance",
  WY: "wind exposure and ranch-edge fencing",
};

function actName(config: StateSeoConfig, profile: StateContentProfile): string {
  return ACT_NAME[config.code] ?? profile.primaryActShort;
}

function quickAnswer(config: StateSeoConfig, profile: StateContentProfile): string {
  const verified = QUICK_ANSWER[config.code];
  if (verified) return verified;
  return `${config.name} pages on this site start from ${actName(config, profile)}. A statewide number of days' notice and a statewide fine cap were not confirmed for this state in the source check. Read the official code linked below and the recorded declaration before you cite a deadline or a dollar limit.`;
}

function sourceList(
  config: StateSeoConfig,
  profile: StateContentProfile
): StateLegalContent["sources"] {
  const official = OFFICIAL[config.code] ?? [];
  const verified = VERIFIED.has(config.code);
  const status: VerificationStatus = verified ? "verified" : "needs-review";
  const fromProfile = profile.sources.filter((source) =>
    Boolean(source.url && /^https?:/i.test(source.url))
  );
  const merged = [
    ...official.map((item) => ({
      citation: item.citation,
      sourceName: item.citation,
      description: `Official code location for ${config.name}. Open it and confirm the current section before you quote it.`,
      url: item.url,
      jurisdiction: config.code,
      verificationStatus: status,
      lastVerified: verified ? "2026-09-28" : undefined,
      notes: verified
        ? "Section text was reviewed in the September 2026 source check. Confirm the live code."
        : "A statewide notice day count or fine cap was not confirmed in the source check.",
    })),
    ...fromProfile.map((source) => ({
      citation: source.citation,
      sourceName: source.citation,
      description: source.description,
      url: source.url,
      jurisdiction: config.code,
      verificationStatus: "needs-review" as const,
    })),
  ];
  const seen = new Set<string>();
  const unique: StateLegalContent["sources"] = merged.filter((source) => {
    const key = source.url ?? source.citation;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  if (unique.length === 0) {
    unique.push({
      citation: actName(config, profile),
      sourceName: actName(config, profile),
      description: `${config.name} association statutes should be read on the legislature's code site. This page does not supply a section URL that was opened for a statewide fine rule.`,
      url: undefined,
      jurisdiction: config.code,
      verificationStatus: "not-found",
    });
  }
  unique.push({
    citation: "Your recorded declaration, bylaws, and rules",
    sourceName: "Association governing documents",
    description: `Private rules for the ${config.name} association. They can add procedures even when a statute is silent, and they cannot be replaced by this page.`,
    url: undefined,
    jurisdiction: config.code,
    associationType: "varies",
    verificationStatus: "needs-review",
    notes: "Always the primary private instrument for the lot.",
  });
  return unique;
}

export function buildRemediatedStateFields(
  config: StateSeoConfig,
  profile: StateContentProfile
): Omit<StateLegalContent, "attribution" | "relatedContent"> {
  const act = actName(config, profile);
  const setting = LOCAL_SETTING[config.code] ?? "ordinary covenant enforcement";
  const verified = VERIFIED.has(config.code);
  const answer = quickAnswer(config, profile);

  return {
    code: config.code,
    overview: {
      heading: "Introduction and quick answer",
      paragraphs: [
        answer,
        verified
          ? `Who it covers in ${config.name} is narrower than the word HOA. Match the statute's definition to the project — condominium, cooperative, or planned community — before you copy a sentence into a letter.`
          : `This ${config.name} page does not turn ${act} into a universal hearing rule. If the act is a condominium statute, a planned-community association may be governed mainly by the declaration. Say that plainly in the letter instead of citing a statewide duty this page has not confirmed.`,
        `A common ${config.name} dispute setting is ${setting}. That is context for photographs and contractor records. It is not a legal element and it does not create a cure period.`,
        `MyHOAAppeal can assemble a letter template from facts you type. The template is not a determination that the fine violates ${config.name} law, and it does not guarantee a board will withdraw the charge.`,
      ],
    },
    commonViolations: {
      heading: "A labeled fictional example",
      paragraphs: [
        `The example below is fictional. It uses a ${config.name} setting (${setting}) so you can see which facts to replace. It does not report a board decision.`,
      ],
      violations: [
        {
          title: `${config.name} landscaping or maintenance packet`,
          description: `Photograph the condition, the notice date, and any weather or contractor delay that relates to ${setting}. Quote the declaration section the association cited. Do not add a ${config.name} day count this page has not confirmed.`,
        },
        {
          title: `${config.name} parking or use dispute`,
          description: `Save the posted rule, a photo of the vehicle or use, and the date the notice arrived. Ask the ${config.name} association which recorded section authorizes the amount. A sample letter on this site is a model, not a result.`,
        },
        {
          title: `${config.name} architectural or exterior dispute`,
          description: `Attach the application, the denial, and photos. In ${config.name}, architectural standards often live in guidelines adopted under the declaration. Confirm the adoption date before you argue the rule was never recorded.`,
        },
      ],
    },
    appealProcess: {
      heading: "How to write the appeal",
      paragraphs: [
        `Write the ${config.name} letter from the notice in front of you. Name the date, the amount, the rule quoted, and the exact change you want. Attach exhibits. Do not claim the fine is void unless a lawyer has read the statute that applies to your association.`,
      ],
      steps: [
        {
          step: 1,
          title: "Quote the notice",
          description: `Copy the violation label, the amount, and the deadline printed on the ${config.name} notice. If a deadline is missing, say so. Do not invent one.`,
          estimatedTime: "The day you receive the notice",
          documentsRequired: ["The notice", "The envelope or portal screenshot"],
          commonMistakes: [
            `Citing a different state's statute on a ${config.name} letter`,
          ],
        },
        {
          step: 2,
          title: "Quote your documents",
          description: `Find the ${config.name} declaration or rule section the association named. If ${act} is relevant, cite it only for the limits described on this page.`,
          estimatedTime: "Before you send the letter",
          documentsRequired: ["Declaration or rule excerpt", "Fine schedule, if you have it"],
          commonMistakes: ["Treating a manager's email as the governing text"],
        },
        {
          step: 3,
          title: "Attach proof",
          description: `For a dispute about ${setting}, attach dated photos and receipts. Label them. A ${config.name} board can ignore a letter that only states a conclusion.`,
          estimatedTime: "Before the date on your notice, if one is printed",
          documentsRequired: ["Photos", "Receipts or contractor notes"],
          commonMistakes: ["Editing photo metadata"],
        },
        {
          step: 4,
          title: "Ask for a written decision",
          description: `Ask the ${config.name} association for the hearing or written review its documents provide, and for a written decision. This request is not proof that a statute requires a hearing.`,
          estimatedTime: "When you mail or deliver the letter",
          documentsRequired: ["Your letter", "Proof of delivery"],
          commonMistakes: ["Assuming a phone call preserved the deadline"],
        },
      ],
    },
    statutes: {
      heading: `What laws govern HOA fines in ${config.name}`,
      paragraphs: [
        verified
          ? `The quick answer above is limited to the sections the audit opened for ${config.name}. Other sections of ${act} were not restated here.`
          : `${act} is the starting citation for ${config.name}. This page does not restate its fine procedure because that text was not opened in the audit. Use the official link in the sources list.`,
      ],
      items: [
        {
          citation: act,
          summary: verified
            ? answer
            : `Starting citation for ${config.name}. Confirm the current text. This line does not add a notice period or a fine cap.`,
        },
        ...profile.statutes.slice(0, 4).map((item) => ({
          citation: item.citation,
          summary: `Citation listed for ${config.name}. Confirm it on the official code site before you rely on it. This page does not adopt the older summary that may have stated a duty without that check.`,
        })),
      ],
    },
    timelines: {
      heading: "Notice, hearing, fines, and cure",
      paragraphs: [
        verified
          ? `Any day count in the ${config.name} quick answer is tied to the section named there, with the limits in that paragraph. Do not copy it onto a different association type.`
          : `No statewide notice day count, hearing rule, fine cap, or cure period is stated for ${config.name} on this page. If your notice prints a date, that date is the one to calendar while you read the declaration and the code.`,
      ],
      events: [
        {
          label: "Date on your notice",
          duration: "Use the date the notice prints",
          notes: `For ${config.name}, calendar the deadline written on the notice. This table does not replace it with a statewide number.`,
          documentsRequired: ["Notice"],
          commonMistakes: [`Using another state's cure period in ${config.name}`],
        },
        {
          label: "Declaration cure language",
          duration: "Whatever the declaration says",
          notes: `If the ${config.name} declaration states a cure period, quote that sentence. If it does not, say the document is silent instead of borrowing a national 10-to-14-day rule. There is no such national rule on this site.`,
          documentsRequired: ["Declaration excerpt"],
          commonMistakes: ["Calling a typical covenant period a statute"],
        },
        {
          label: "Hearing or written review",
          duration: verified ? "Only as stated in the quick answer" : "Not confirmed here",
          notes: verified
            ? `Follow the ${config.name} quick answer, including who holds the hearing and which association type is covered.`
            : `This ${config.name} page does not confirm a statutory pre-fine hearing. Ask for the process in the bylaws, and do not tell the board a hearing is legally required unless you have checked the section.`,
          documentsRequired: ["Bylaws or hearing policy"],
          commonMistakes: ["Describing a missed notice as automatically voiding the fine"],
        },
      ],
    },
    hearingProcess: {
      heading: "Who the law applies to, and qualifications",
      paragraphs: [
        verified
          ? answer
          : `${act} may not cover every community in ${config.name} that calls itself an HOA. Condominiums, cooperatives, and planned communities are often different statutes. This page does not confirm a statewide hearing right.`,
        `Governing documents in ${config.name} may add notice steps, fine schedules, and hearing procedures. They may also be stricter about landscaping or parking than a statute. Read them. They are not optional because a website summarized the state.`,
        `Important limit: nothing on this ${config.name} page is legal advice, a prediction of what the board will do, or a statement that a fine is unenforceable.`,
      ],
      bullets: [
        `Confirm the association type before you cite ${act}`,
        "Quote the declaration section the notice relies on",
        "Do not import a fine cap from a different state",
      ],
    },
    evidenceChecklist: {
      heading: "How to document a dispute",
      paragraphs: [
        `Build a ${config.name} file the board can read in one sitting: the notice, the rule, photos tied to ${setting}, and a short timeline. Ask for the violation file in writing. A statutory inspection right, if one exists, has to come from the code or the declaration, not from this checklist.`,
      ],
      categories: [
        {
          category: "Notice packet",
          items: [
            "The notice and how it arrived",
            "Any deadline printed on it",
            "The rule or fine schedule it cites",
          ],
        },
        {
          category: `${config.name} condition evidence`,
          items: [
            `Dated photos related to ${setting}`,
            "Receipts or contractor notes",
            "A one-page index of exhibits",
          ],
        },
      ],
    },
    appealStrategy: {
      heading: "If the association rejects the appeal",
      paragraphs: [
        `If the ${config.name} board keeps the fine, ask for the written decision and the minutes. A further demand letter, mediation, or lawsuit is a different decision. This page does not set a limitation period.`,
      ],
      phases: [
        {
          title: "Stay on the written record",
          actions: [
            `Save the ${config.name} decision and the delivery proof`,
            "Compare the decision to the rule you quoted",
            "Do not agree in a hallway conversation to a number you have not checked",
          ],
        },
        {
          title: "Get advice when the stake grows",
          actions: [
            "Talk to a lawyer if the letter mentions a lien, foreclosure, or a lawsuit",
            "Do not treat this website as that lawyer",
            `Re-read the ${config.name} quick answer before you cite a statute in a complaint`,
          ],
        },
      ],
    },
    faq: [
      {
        id: `${config.code}-quick`,
        question: `Does ${config.name} set one notice period for every HOA fine?`,
        answer: verified
          ? answer
          : `This page does not confirm a single statewide notice period for ${config.name}. Use the date on your notice and the declaration, and open the official code before you cite ${act}.`,
      },
      {
        id: `${config.code}-who`,
        question: `Does ${act} apply to every ${config.name} community?`,
        answer: `Not necessarily. Condominiums, cooperatives, and planned communities in ${config.name} can fall under different chapters or only under recorded documents. Confirm the definition section.`,
      },
      {
        id: `${config.code}-cap`,
        question: `Is there a statewide fine cap in ${config.name}?`,
        answer: verified
          ? `Only as qualified in the quick answer for ${config.name}. Do not drop the exceptions, and do not apply the figure to an association type the section does not cover.`
          : `This page does not state a statewide dollar cap for ${config.name}. Look at the adopted fine schedule and the declaration, and do not borrow a cap from another state.`,
      },
      {
        id: `${config.code}-cure`,
        question: `Where does a cure period come from in ${config.name}?`,
        answer: `It may be printed on the notice, written in the declaration, or stated in a statute this page has described only if the quick answer cites a section. There is no national 10-to-14-day statutory cure rule.`,
      },
      {
        id: `${config.code}-docs`,
        question: `What should a ${config.name} owner attach?`,
        answer: `Attach the notice, the quoted rule, photos or receipts about ${setting}, and proof of how you sent the letter. Replace every fictional name if you start from a sample.`,
      },
      {
        id: `${config.code}-reject`,
        question: `What if the ${config.name} board says no?`,
        answer: `Keep the written decision. If the next letter mentions a lien or a lawsuit, hire a lawyer. This site cannot tell you the odds or a filing deadline.`,
      },
    ],
    internalLinks: [
      {
        label: "Notice and hearing guide",
        href: "/guides/understanding-your-rights",
        description: `How to read a notice before you cite ${config.name} law.`,
      },
      {
        label: "Evidence guide",
        href: "/guides/how-to-collect-evidence",
        description: `What to put in the file for a dispute about ${setting}.`,
      },
      {
        label: "Sample letters",
        href: "/samples",
        description:
          "Fictional letters. Replace the facts, and do not copy a statute from a sample into the wrong state.",
      },
      {
        label: "State comparison",
        href: "/state-laws",
        description: `See how this ${config.name} page is summarized next to other states, including cells that say a figure was not confirmed.`,
      },
    ],
    relatedGuideSlugs: profile.relatedGuideSlugs,
    sources: sourceList(config, profile),
  };
}
