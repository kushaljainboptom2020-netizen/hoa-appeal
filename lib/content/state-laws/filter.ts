import type { StateLawComparisonRow } from "./types";

/**
 * Client-safe row filtering.
 *
 * Kept in its own module because the client table imports it. The sibling
 * `index.ts` pulls in the 50-state content profiles to *build* rows, and
 * importing this function from there would ship that whole dataset to the
 * browser.
 */
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
