import { getStateFineCap } from "@/lib/content/fine-caps";
import { STATE_CONTENT_PROFILES } from "@/lib/content/states/profiles.generated";
import { STATE_SEO_CONFIG } from "@/lib/seo/statePages";
import { SITE_URL } from "@/lib/seo/siteUrl";
import type { StateLawComparisonRow } from "./types";

const SHORT_STATUTE_LABELS: Partial<Record<string, string>> = {
  AK: "AS 34.08 Uniform Common Interest Ownership Act",
  CO: "CCIOA (C.R.S. §§ 38-33.3)",
  NY: "RPL Article 9-B (condominiums; not co-ops)",
  AL: "Ala. Code § 35-8A and possibly § 35-20",
  CA: "CA Davis-Stirling Act",
  FL: "Fla. Stat. § 720",
  TX: "TX Prop Code Ch 209",
};

export function getStateLawComparisonRows(): StateLawComparisonRow[] {
  return STATE_SEO_CONFIG.map((state) => {
    const profile = STATE_CONTENT_PROFILES[state.code];
    if (!profile) {
      throw new Error(`Missing content profile for ${state.code}`);
    }

    const cap = getStateFineCap(state.code);
    const hearingNotice = cap.noticeWindow;

    return {
      code: state.code,
      name: state.name,
      slug: state.slug,
      letterHref: `/appeal-hoa-fine/${state.slug}`,
      governingStatute:
        SHORT_STATUTE_LABELS[state.code] ?? profile.primaryActShort,
      maxFineCap: cap.maxFineLabel,
      hearingNotice,
    };
  });
}

export function filterStateLawRows(
  rows: StateLawComparisonRow[],
  query: string
): StateLawComparisonRow[] {
  const needle = query.trim().toLowerCase();
  if (!needle) return rows;

  return rows.filter((row) => {
    const haystack = [
      row.name,
      row.code,
      row.slug,
      row.governingStatute,
      row.maxFineCap,
      row.hearingNotice,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(needle);
  });
}

export function absoluteLetterUrl(row: StateLawComparisonRow): string {
  return `${SITE_URL}${row.letterHref}`;
}

export type { StateLawComparisonRow };
