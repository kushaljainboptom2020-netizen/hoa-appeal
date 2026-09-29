import { writeFileSync } from "node:fs";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { GUIDE_ARTICLES } from "@/lib/content/guides";
import { SAMPLE_LETTERS } from "@/lib/content/samples";
import { getAllStateLegalContent } from "@/lib/content/states";
import { STATE_SEO_CONFIG } from "@/lib/seo/statePages";

type Hit = { kind: string; where: string; detail: string };

const STATE_NAMES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

function collect(): Hit[] {
  const hits: Hit[] = [];
  const add = (kind: string, where: string, detail: string) => {
    hits.push({ kind, where, detail });
  };
  const paragraphs = new Map<string, string>();
  const stateNames = new Map(STATE_SEO_CONFIG.map((state) => [state.code, state.name]));

  for (const guide of GUIDE_ARTICLES) {
    const chunks = [
      ...guide.intro,
      ...guide.sections.flatMap((section) => section.paragraphs),
    ];
    const text = chunks.join("\n");
    if (/while you focus on/i.test(text)) add("scaled-opener", guide.slug, "While you focus on");
    if (/lorem ipsum|\bTODO\b|\bTBD\b/i.test(text)) add("placeholder", guide.slug, "placeholder language");
    if (
      /\b720\.305\b|\bChapter 720\b/.test(text) &&
      !/florida/i.test(`${guide.slug} ${guide.title}`) &&
      !/do not create duties|apply only within Florida/i.test(text)
    ) {
      add("florida-cite", guide.slug, "Florida statute cite on a non-Florida guide");
    }
    for (const paragraph of chunks) {
      const key = paragraph.trim();
      if (key.length < 80) continue;
      const prior = paragraphs.get(key);
      if (prior) add("duplicate-paragraph", guide.slug, `same paragraph as ${prior}`);
      else paragraphs.set(key, guide.slug);
    }
  }

  for (const state of getAllStateLegalContent()) {
    const text = [
      ...state.overview.paragraphs,
      ...(state.overview.bullets ?? []),
      ...state.commonViolations.paragraphs,
      ...state.commonViolations.violations.map((item) => `${item.title} ${item.description}`),
      ...state.appealProcess.paragraphs,
      ...state.statutes.paragraphs,
      ...state.statutes.items.map((item) => `${item.citation} ${item.summary}`),
      ...state.timelines.paragraphs,
      ...state.hearingProcess.paragraphs,
      ...state.faq.map((item) => `${item.question} ${item.answer}`),
    ].join("\n");
    const name = stateNames.get(state.code) ?? state.code;
    if (/compare formation documents carefully|procedure first, equity second|winning a /i.test(text)) {
      add("expansion-skeleton", state.code, "old expansion phrase");
    }
    if (/lorem ipsum|\bTODO\b|\bTBD\b/i.test(text)) add("placeholder", state.code, "placeholder language");
    if (state.code !== "FL" && /\b720\.305\b|\bChapter 720\b/.test(text)) {
      add("florida-cite", state.code, "Florida statute cite on a non-Florida state page");
    }
    for (const other of STATE_NAMES) {
      if (other === name) continue;
      const haystack = text.replaceAll("West Virginia", "");
      if (new RegExp(`\\b${other}\\b`).test(haystack)) {
        add("wrong-state-name", state.code, `mentions ${other}`);
      }
    }
  }

  for (const sample of SAMPLE_LETTERS) {
    const text = [
      sample.excerpt,
      sample.letter.subject,
      ...sample.letter.paragraphs,
    ].join("\n");
    if (/lorem ipsum|\bTODO\b|\bTBD\b/i.test(text)) add("placeholder", sample.slug, "placeholder language");
    if (/\b720\.305\b|\bChapter 209\b|\bCivil Code §§?\s*585/.test(text)) {
      add("sample-statute", sample.slug, "sample letter cites a specific statute");
    }
  }

  const root = process.cwd();
  const titles = new Map<string, string>();
  function walk(dir: string, acc: string[] = []): string[] {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.name === "node_modules" || entry.name === ".next") continue;
      const path = join(dir, entry.name);
      if (entry.isDirectory()) walk(path, acc);
      else if (entry.name === "page.tsx") acc.push(path);
    }
    return acc;
  }
  for (const file of walk(join(root, "app"))) {
    const source = readFileSync(file, "utf8");
    const rel = file.slice(root.length);
    if (!/<h1[\s>]/.test(source) && !source.includes("from \"@/components")) {
      add("missing-h1", rel, "page source has no h1");
    }
    const titleMatch = source.match(/title:\s*"([^"]+)"/);
    if (titleMatch) {
      const prior = titles.get(titleMatch[1]);
      if (prior) add("duplicate-title", rel, `same title as ${prior}`);
      else titles.set(titleMatch[1], rel);
    }
    if (
      source.includes("export const metadata") &&
      !source.includes("index: false") &&
      !rel.includes("success-stories") &&
      !source.includes("canonical")
    ) {
      add("missing-canonical", rel, "metadata without canonical");
    }
  }

  writeFileSync(
    join(root, "scripts", "audit-remediation-quality.report.json"),
    JSON.stringify({ hitCount: hits.length, hits }, null, 2)
  );
  return hits;
}

describe("remediation quality scan", () => {
  it("flags no scaled filler, wrong-state cites, or duplicate guide paragraphs", () => {
    const hits = collect();
    const blocking = hits.filter((hit) =>
      [
        "scaled-opener",
        "expansion-skeleton",
        "florida-cite",
        "wrong-state-name",
        "placeholder",
        "duplicate-paragraph",
        "sample-statute",
      ].includes(hit.kind)
    );
    expect(blocking, blocking.map((hit) => `${hit.kind} ${hit.where}: ${hit.detail}`).join("\n")).toEqual([]);
  });
});
