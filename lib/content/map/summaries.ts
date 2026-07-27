import { STATE_CONTENT_PROFILES } from "@/lib/content/states/profiles.generated";
import { getAllStateLegalContent } from "@/lib/content/states";
import { getStateByCode } from "@/lib/seo/statePages";
import type { StateMapSummary } from "./types";

const MAX_DEADLINES = 4;
const MAX_VIOLATIONS = 4;

function buildSummaries(): StateMapSummary[] {
  const summaries: StateMapSummary[] = [];

  for (const content of getAllStateLegalContent()) {
    const config = getStateByCode(content.code);
    if (!config) {
      throw new Error(`No SEO config for map summary code: ${content.code}`);
    }

    const profile = STATE_CONTENT_PROFILES[content.code];
    const noticeWindow =
      profile?.noticeWindow?.trim() ||
      "Check your governing documents for notice and cure windows";

    const overview =
      content.overview.paragraphs[0]?.trim() ||
      `Overview of HOA fine appeal rules in ${config.name}.`;

    const appealDeadlines = content.timelines.events
      .slice(0, MAX_DEADLINES)
      .map((event) => ({
        label: event.label,
        duration: event.duration,
      }));

    const commonViolations = content.commonViolations.violations
      .slice(0, MAX_VIOLATIONS)
      .map((v) => v.title);

    summaries.push({
      code: config.code,
      name: config.name,
      slug: config.slug,
      href: `/appeal-hoa-fine/${config.slug}`,
      overview,
      noticeWindow,
      appealDeadlines,
      commonViolations,
      statuteReference: config.statuteReference,
    });
  }

  return summaries.sort((a, b) => a.name.localeCompare(b.name));
}

const summaries = buildSummaries();
const byCode = new Map(summaries.map((s) => [s.code, s]));

export function getStateMapSummaries(): StateMapSummary[] {
  return summaries;
}

export function getStateMapSummaryByCode(
  code: string
): StateMapSummary | undefined {
  return byCode.get(code.toUpperCase());
}
