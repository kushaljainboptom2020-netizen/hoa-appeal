/**
 * Content quality audit across guides, states, success stories, and static pages.
 * Run: node scripts/audit-content-quality.mjs
 * Writes: scripts/audit-content-quality.report.json
 */
import { writeFileSync, readFileSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const require = createRequire(import.meta.url);

const GUIDE_PAD_MARKERS = [
  "match every portal screenshot to a calendar entry",
  "Confirm details on",
  "against your bylaws",
  "starts with the facts on your notice",
  "Operationalize",
  "Save PDFs that relate specifically to",
];

const STATE_PAD_MARKERS = [
  "should photograph lot markers and street addresses",
  "Ask management in writing whether the fine schedule was adopted at an open meeting",
  "Do not rely solely on oral assurances from a property manager",
  "It depends on whether your community was formed under",
];

const GERUND_BUGS = [
  "Challengeing",
  "Sequenceing",
  "Compareing",
  "Operationalizeing",
  "Translateing",
  "Document document",
];

function wordCount(text) {
  return String(text || "")
    .split(/\s+/)
    .filter(Boolean).length;
}

function collectStrings(value, out = []) {
  if (typeof value === "string") {
    out.push(value);
    return out;
  }
  if (Array.isArray(value)) {
    for (const item of value) collectStrings(item, out);
    return out;
  }
  if (value && typeof value === "object") {
    for (const nested of Object.values(value)) collectStrings(nested, out);
  }
  return out;
}

function avgSentenceLength(text) {
  const sentences = text.split(/[.!?]+/).map((s) => s.trim()).filter(Boolean);
  if (sentences.length === 0) return 0;
  const total = sentences.reduce((sum, s) => sum + wordCount(s), 0);
  return total / sentences.length;
}

function countOccurrences(haystack, needles) {
  const lower = haystack.toLowerCase();
  let count = 0;
  for (const needle of needles) {
    const n = needle.toLowerCase();
    let idx = 0;
    while (true) {
      idx = lower.indexOf(n, idx);
      if (idx === -1) break;
      count += 1;
      idx += n.length;
    }
  }
  return count;
}

function scoreClamp(n) {
  return Math.max(0, Math.min(100, Math.round(n)));
}

function grade(score) {
  if (score >= 85) return "strong";
  if (score >= 70) return "adequate";
  if (score >= 55) return "weak";
  return "critical";
}

function evaluatePage({
  id,
  type,
  url,
  title,
  text,
  words,
  sources = [],
  sourcesWithUrl = 0,
  relatedBuckets = null,
  hasAttribution = false,
  hasJsonLd = false,
  hasFaq = false,
  hasHeadings = true,
  hasAriaNav = false,
  externalLinks = 0,
  internalLinkCount = 0,
  padHits = 0,
  grammarBugs = 0,
  uniqueRatio = 1,
}) {
  const weaknesses = [];
  const improvements = [];

  // Originality
  let originality = 90 - padHits * 8 - grammarBugs * 10 - (1 - uniqueRatio) * 40;
  if (padHits >= 4) weaknesses.push("Heavy template/pad phrasing reduces originality");
  if (grammarBugs > 0) weaknesses.push("Generator grammar artifacts (e.g. Challengeing)");
  if (uniqueRatio < 0.55) weaknesses.push("High cross-page sentence overlap / repetitive phrasing");

  // Align depth scoring with site validation (guides/states include supporting fields)
  let depthWords = words;
  if (type === "guide" || type === "state") {
    depthWords = words + sources.length * 40 + (hasFaq ? 120 : 0);
  }

  let intent = 70;
  if (type === "guide" || type === "state") {
    intent = depthWords >= 1800 ? 82 : 55;
    if (hasFaq) intent += 6;
    if (sources.length >= 2) intent += 4;
    if (depthWords < 1600) weaknesses.push("Below educational depth expected for search intent");
  } else if (type === "success-story") {
    intent = words >= 450 ? 78 : words >= 280 ? 68 : 40;
    if (words < 280) weaknesses.push("Success story is thin for standalone search intent");
  } else if (type === "hub") {
    intent = 72;
  } else if (type === "trust") {
    intent = words >= 350 ? 80 : 60;
  } else {
    intent = words >= 200 ? 70 : 55;
  }

  // Readability
  const asl = avgSentenceLength(text);
  let readability = 85;
  if (asl > 28) {
    readability -= Math.min(25, (asl - 28) * 2);
    weaknesses.push(`Long average sentence length (~${asl.toFixed(1)} words)`);
  }
  if (asl < 12 && words > 200) readability -= 5;
  if (grammarBugs > 0) readability -= 15;

  // Topical completeness
  let completeness = 60;
  if (type === "guide" || type === "state") {
    completeness = 55;
    if (words >= 1800) completeness += 20;
    if (hasFaq) completeness += 10;
    if (sources.length >= 2) completeness += 8;
    if (relatedBuckets) completeness += 7;
  } else if (type === "success-story") {
    completeness = words >= 450 ? 70 : 45;
  } else if (type === "trust") {
    completeness = words >= 400 ? 78 : 60;
  } else {
    completeness = 68;
  }

  // Internal linking
  let internal = Math.min(95, 40 + internalLinkCount * 8);
  if (relatedBuckets) {
    const buckets = [
      relatedBuckets.guides?.length || 0,
      relatedBuckets.states?.length || 0,
      relatedBuckets.tools?.length || 0,
      relatedBuckets.successStories?.length || 0,
    ];
    const filled = buckets.filter((n) => n > 0).length;
    internal = 50 + filled * 12;
    if (filled < 4) weaknesses.push("Related content missing one or more buckets");
    else improvements.push("Related content buckets complete");
  }
  if (internalLinkCount < 2 && type !== "legal") {
    weaknesses.push("Sparse internal linking");
  }

  // External citations
  let citations = 40;
  if (sources.length === 0) {
    citations = type === "guide" || type === "state" ? 25 : 55;
    if (type === "guide" || type === "state") {
      weaknesses.push("No external source citations");
    }
  } else {
    citations = 55 + Math.min(25, sources.length * 8);
    const urlRatio = sourcesWithUrl / Math.max(1, sources.length);
    citations = Math.round(citations * (0.55 + urlRatio * 0.45));
    if (urlRatio < 0.5) {
      weaknesses.push("Many citations lack clickable external URLs");
    }
  }

  // Trustworthiness
  let trust = 55;
  if (hasAttribution) trust += 20;
  else if (type === "guide" || type === "state") {
    weaknesses.push("Missing author/reviewer attribution");
  }
  if (sources.length >= 2) trust += 10;
  if (
    /\bnot legal advice\b/i.test(text) ||
    /cannot replace (advice from )?a licensed attorney/i.test(text) ||
    /educational (guide|example|playbook|resource|article).{0,80}attorney/i.test(text)
  ) {
    trust += 8;
  } else if (hasAttribution && (type === "guide" || type === "state")) {
    // Guides/states render AttorneyDisclaimer in the page shell.
    trust += 6;
    improvements.push("Disclaimer presented via page shell attribution/disclaimer components");
  } else if (type === "guide" || type === "state" || type === "success-story") {
    weaknesses.push("Weak or missing non-legal-advice disclaimer signal in body");
  }

  // E-E-A-T
  let eeat = 50;
  if (hasAttribution) eeat += 25;
  if (type === "trust" || type === "author") eeat += 20;
  if (sources.length >= 2) eeat += 10;
  if (hasJsonLd) eeat += 8;
  if (grammarBugs > 0 || padHits >= 5) {
    eeat -= 15;
    weaknesses.push("Template artifacts undercut E-E-A-T review claims");
  }

  // Structured data
  let structured = hasJsonLd ? 88 : type === "hub" || type === "legal" ? 60 : 35;
  if (!hasJsonLd && (type === "guide" || type === "state" || type === "success-story")) {
    weaknesses.push("Missing page-level structured data");
  }

  // Accessibility
  let a11y = 70;
  if (hasHeadings) a11y += 10;
  else weaknesses.push("Weak heading structure");
  if (hasAriaNav) a11y += 10;
  if (type === "guide" || type === "state") a11y += 5; // TOC present in shells
  a11y -= grammarBugs * 2;

  originality = scoreClamp(originality);
  intent = scoreClamp(intent);
  readability = scoreClamp(readability);
  completeness = scoreClamp(completeness);
  internal = scoreClamp(internal);
  citations = scoreClamp(citations);
  trust = scoreClamp(trust);
  eeat = scoreClamp(eeat);
  structured = scoreClamp(structured);
  a11y = scoreClamp(a11y);

  const overall = scoreClamp(
    originality * 0.14 +
      intent * 0.12 +
      readability * 0.1 +
      completeness * 0.12 +
      internal * 0.1 +
      citations * 0.1 +
      trust * 0.1 +
      eeat * 0.1 +
      structured * 0.06 +
      a11y * 0.06
  );

  const flagManual =
    overall < 60 ||
    originality < 55 ||
    (type === "success-story" && words < 280) ||
    padHits >= 6 ||
    grammarBugs > 0 ||
    (type === "guide" && uniqueRatio < 0.35) ||
    (type === "state" && uniqueRatio < 0.4);

  return {
    id,
    type,
    url,
    title,
    words,
    scores: {
      overall,
      originality,
      searchIntent: intent,
      readability,
      topicalCompleteness: completeness,
      internalLinking: internal,
      externalCitations: citations,
      trustworthiness: trust,
      eeat,
      structuredData: structured,
      accessibility: a11y,
    },
    grade: grade(overall),
    padHits,
    grammarBugs,
    uniqueRatio: Number(uniqueRatio.toFixed(3)),
    weaknesses,
    improvements,
    flagManualReview: flagManual,
  };
}

async function main() {
  // Dynamic import compiled TS via vitest-like path won't work; parse generated JSON-ish modules by evaluating through tsx if available.
  // Prefer spawning tsx evaluator.
  const { spawnSync } = await import("child_process");
  const extractor = `
import { GUIDE_ARTICLES } from "../lib/content/guides/index.ts";
import { getAllStateLegalContent } from "../lib/content/states/index.ts";
import { SUCCESS_STORIES } from "../lib/content/success-stories/index.ts";
import { getStateByCode } from "../lib/seo/statePages.ts";
import { getAllTeamMembers } from "../lib/content/team/index.ts";

function flatten(v, acc=[]) {
  if (typeof v === "string") { acc.push(v); return acc; }
  if (Array.isArray(v)) { for (const i of v) flatten(i, acc); return acc; }
  if (v && typeof v === "object") { for (const x of Object.values(v)) flatten(x, acc); }
  return acc;
}

const guides = GUIDE_ARTICLES.map(g => ({
  slug: g.slug,
  title: g.title,
  category: g.category,
  words: flatten({intro:g.intro,sections:g.sections,conclusion:g.conclusion,faq:g.faq}).join(" ").split(/\\s+/).filter(Boolean).length,
  text: flatten({intro:g.intro,sections:g.sections,conclusion:g.conclusion,faq:g.faq,title:g.title}).join("\\n"),
  sources: g.sources || [],
  relatedContent: g.relatedContent,
  attribution: !!g.attribution?.authorSlug,
  faqCount: g.faq?.length || 0,
  relatedGuideSlugs: g.relatedGuideSlugs || [],
  internalLinks: g.internalLinks || [],
}));

const states = getAllStateLegalContent().map(s => {
  const cfg = getStateByCode(s.code);
  return {
    code: s.code,
    slug: cfg?.slug,
    name: cfg?.name,
    words: flatten({
      overview:s.overview, commonViolations:s.commonViolations, appealProcess:s.appealProcess,
      statutes:s.statutes, timelines:s.timelines, hearingProcess:s.hearingProcess,
      evidenceChecklist:s.evidenceChecklist, appealStrategy:s.appealStrategy, faq:s.faq
    }).join(" ").split(/\\s+/).filter(Boolean).length,
    text: flatten({
      overview:s.overview, commonViolations:s.commonViolations, appealProcess:s.appealProcess,
      statutes:s.statutes, timelines:s.timelines, hearingProcess:s.hearingProcess,
      evidenceChecklist:s.evidenceChecklist, appealStrategy:s.appealStrategy, faq:s.faq
    }).join("\\n"),
    sources: s.sources || [],
    relatedContent: s.relatedContent,
    attribution: !!s.attribution?.authorSlug,
    faqCount: s.faq?.length || 0,
    internalLinks: s.internalLinks || [],
  };
});

const stories = SUCCESS_STORIES.map(s => ({
  ...s,
  words: flatten({
    summary:s.summary,
    outcome:s.outcome,
    highlights:s.highlights,
    body:s.body||[],
    disclaimer:s.disclaimer||"",
  }).join(" ").split(/\\s+/).filter(Boolean).length,
  text: flatten({
    title:s.title,
    summary:s.summary,
    outcome:s.outcome,
    highlights:s.highlights,
    body:s.body||[],
    disclaimer:s.disclaimer||"",
  }).join("\\n"),
}));

console.log(JSON.stringify({ guides, states, stories, teamCount: getAllTeamMembers().length }));
`;

  const extractPath = join(root, "scripts", "_audit-extract.tmp.mjs");
  // Use npx tsx to evaluate TypeScript modules
  const tsExtract = join(root, "scripts", "_audit-extract.tmp.ts");
  writeFileSync(tsExtract, extractor, "utf8");
  const run = spawnSync("npx", ["tsx", tsExtract], {
    cwd: root,
    encoding: "utf8",
    maxBuffer: 50 * 1024 * 1024,
    shell: true,
  });
  if (run.status !== 0) {
    console.error(run.stderr || run.stdout);
    process.exit(1);
  }
  const payload = JSON.parse(run.stdout.trim().split("\n").filter(Boolean).at(-1));

  // Static pages (approximate from source files)
  const staticPages = [
    ["/", "hub", "Home — appeal letter tool", "app/page.tsx"],
    ["/guides", "hub", "Guides hub", "app/guides/page.tsx"],
    ["/success-stories", "hub", "Success stories hub", "app/success-stories/page.tsx"],
    ["/authors", "hub", "Authors hub", "app/authors/page.tsx"],
    ["/about", "trust", "About", "app/about/page.tsx"],
    ["/editorial-policy", "trust", "Editorial policy", "app/editorial-policy/page.tsx"],
    ["/fact-checking", "trust", "Fact checking", "app/fact-checking/page.tsx"],
    ["/ai-transparency", "trust", "AI transparency", "app/ai-transparency/page.tsx"],
    ["/contact", "hub", "Contact", "app/contact/page.tsx"],
    ["/privacy-policy", "legal", "Privacy policy", "app/privacy-policy/page.tsx"],
    ["/terms-of-service", "legal", "Terms of service", "app/terms-of-service/page.tsx"],
  ].map(([url, type, title, file]) => {
    const abs = join(root, file);
    const raw = existsSync(abs) ? readFileSync(abs, "utf8") : "";
    const text = raw
      .replace(/<[^>]+>/g, " ")
      .replace(/[{}`]/g, " ")
      .replace(/\s+/g, " ");
    return {
      id: url,
      type,
      url,
      title,
      text,
      words: wordCount(text),
      hasJsonLd: url === "/",
      hasAriaNav: true,
      internalLinkCount: (raw.match(/href=/g) || []).length,
      externalLinks: (raw.match(/https?:\/\//g) || []).length,
    };
  });

  // uniqueness: sentence fingerprint across guides
  const guideSentenceMap = new Map();
  for (const g of payload.guides) {
    for (const sentence of g.text.split(/[.!?]+/).map((s) => s.trim()).filter((s) => s.length > 40)) {
      const key = sentence.toLowerCase().replace(/\s+/g, " ");
      guideSentenceMap.set(key, (guideSentenceMap.get(key) || 0) + 1);
    }
  }

  const pages = [];

  for (const g of payload.guides) {
    const sentences = g.text.split(/[.!?]+/).map((s) => s.trim()).filter((s) => s.length > 40);
    const unique = sentences.filter((s) => (guideSentenceMap.get(s.toLowerCase().replace(/\s+/g, " ")) || 0) === 1);
    const uniqueRatio = sentences.length ? unique.length / sentences.length : 1;
    const padHits = countOccurrences(g.text, GUIDE_PAD_MARKERS);
    const grammarBugs = countOccurrences(g.text, GERUND_BUGS);
    pages.push(
      evaluatePage({
        id: g.slug,
        type: "guide",
        url: `/guides/${g.slug}`,
        title: g.title,
        text: g.text,
        words: g.words,
        sources: g.sources,
        sourcesWithUrl: g.sources.filter((s) => s.url).length,
        relatedBuckets: g.relatedContent,
        hasAttribution: g.attribution,
        hasJsonLd: true,
        hasFaq: g.faqCount >= 5,
        hasHeadings: true,
        hasAriaNav: true,
        internalLinkCount:
          (g.relatedContent?.guides?.length || 0) +
          (g.relatedContent?.states?.length || 0) +
          (g.relatedContent?.tools?.length || 0) +
          (g.relatedContent?.successStories?.length || 0) +
          (g.internalLinks?.length || 0),
        padHits,
        grammarBugs,
        uniqueRatio,
      })
    );
  }

  const stateSentenceMap = new Map();
  for (const s of payload.states) {
    for (const sentence of s.text.split(/[.!?]+/).map((x) => x.trim()).filter((x) => x.length > 40)) {
      const key = sentence
        .toLowerCase()
        .replace(/\b(alabama|alaska|arizona|arkansas|california|colorado|connecticut|delaware|florida|georgia|hawaii|idaho|illinois|indiana|iowa|kansas|kentucky|louisiana|maine|maryland|massachusetts|michigan|minnesota|mississippi|missouri|montana|nebraska|nevada|new hampshire|new jersey|new mexico|new york|north carolina|north dakota|ohio|oklahoma|oregon|pennsylvania|rhode island|south carolina|south dakota|tennessee|texas|utah|vermont|virginia|washington|west virginia|wisconsin|wyoming)\b/g, "{state}")
        .replace(/\s+/g, " ");
      stateSentenceMap.set(key, (stateSentenceMap.get(key) || 0) + 1);
    }
  }

  for (const s of payload.states) {
    const sentences = s.text.split(/[.!?]+/).map((x) => x.trim()).filter((x) => x.length > 40);
    const normalized = sentences.map((sentence) =>
      sentence
        .toLowerCase()
        .replace(/\b(alabama|alaska|arizona|arkansas|california|colorado|connecticut|delaware|florida|georgia|hawaii|idaho|illinois|indiana|iowa|kansas|kentucky|louisiana|maine|maryland|massachusetts|michigan|minnesota|mississippi|missouri|montana|nebraska|nevada|new hampshire|new jersey|new mexico|new york|north carolina|north dakota|ohio|oklahoma|oregon|pennsylvania|rhode island|south carolina|south dakota|tennessee|texas|utah|vermont|virginia|washington|west virginia|wisconsin|wyoming)\b/g, "{state}")
        .replace(/\s+/g, " ")
    );
    const unique = normalized.filter((k) => (stateSentenceMap.get(k) || 0) === 1);
    const uniqueRatio = normalized.length ? unique.length / normalized.length : 1;
    pages.push(
      evaluatePage({
        id: s.code,
        type: "state",
        url: `/appeal-hoa-fine/${s.slug}`,
        title: `${s.name} HOA fine appeal`,
        text: s.text,
        words: s.words,
        sources: s.sources,
        sourcesWithUrl: s.sources.filter((x) => x.url).length,
        relatedBuckets: s.relatedContent,
        hasAttribution: s.attribution,
        hasJsonLd: true,
        hasFaq: s.faqCount >= 5,
        hasHeadings: true,
        hasAriaNav: true,
        internalLinkCount:
          (s.relatedContent?.guides?.length || 0) +
          (s.relatedContent?.states?.length || 0) +
          (s.relatedContent?.tools?.length || 0) +
          (s.relatedContent?.successStories?.length || 0) +
          (s.internalLinks?.length || 0),
        padHits: countOccurrences(s.text, STATE_PAD_MARKERS),
        grammarBugs: countOccurrences(s.text, GERUND_BUGS),
        uniqueRatio,
      })
    );
  }

  for (const story of payload.stories) {
    pages.push(
      evaluatePage({
        id: story.slug,
        type: "success-story",
        url: `/success-stories/${story.slug}`,
        title: story.title,
        text: story.text,
        words: story.words,
        sources: [],
        relatedBuckets: null,
        hasAttribution: false,
        hasJsonLd: true,
        hasFaq: false,
        hasHeadings: true,
        hasAriaNav: true,
        internalLinkCount: (story.guideSlugs?.length || 0) + 2,
        padHits: 0,
        grammarBugs: 0,
        uniqueRatio: 0.9,
      })
    );
  }

  for (const page of staticPages) {
    pages.push(
      evaluatePage({
        ...page,
        sources: [],
        sourcesWithUrl: 0,
        relatedBuckets: null,
        hasAttribution: page.type === "trust",
        hasFaq: false,
        hasHeadings: true,
        padHits: 0,
        grammarBugs: 0,
        uniqueRatio: 0.85,
      })
    );
  }

  pages.sort((a, b) => a.scores.overall - b.scores.overall);

  const byType = {};
  for (const page of pages) {
    byType[page.type] ??= { count: 0, overallSum: 0, flagged: 0 };
    byType[page.type].count += 1;
    byType[page.type].overallSum += page.scores.overall;
    if (page.flagManualReview) byType[page.type].flagged += 1;
  }

  const summary = {
    generatedAt: new Date().toISOString(),
    totalPages: pages.length,
    averageOverall: scoreClamp(
      pages.reduce((s, p) => s + p.scores.overall, 0) / pages.length
    ),
    flaggedForManualReview: pages.filter((p) => p.flagManualReview).length,
    gradeDistribution: pages.reduce((acc, p) => {
      acc[p.grade] = (acc[p.grade] || 0) + 1;
      return acc;
    }, {}),
    byType: Object.fromEntries(
      Object.entries(byType).map(([type, v]) => [
        type,
        {
          count: v.count,
          averageOverall: scoreClamp(v.overallSum / v.count),
          flagged: v.flagged,
        },
      ])
    ),
    topWeaknesses: Object.entries(
      pages
        .flatMap((p) => p.weaknesses)
        .reduce((acc, w) => {
          acc[w] = (acc[w] || 0) + 1;
          return acc;
        }, {})
    )
      .sort((a, b) => b[1] - a[1])
      .slice(0, 12)
      .map(([weakness, count]) => ({ weakness, count })),
  };

  const report = { summary, pages };
  const outPath = join(root, "scripts", "audit-content-quality.report.json");
  writeFileSync(outPath, JSON.stringify(report, null, 2), "utf8");
  try {
    // cleanup temp
    const { unlinkSync } = await import("fs");
    unlinkSync(tsExtract);
  } catch {
    // ignore
  }

  console.log(
    JSON.stringify(
      {
        outPath,
        totalPages: summary.totalPages,
        averageOverall: summary.averageOverall,
        flaggedForManualReview: summary.flaggedForManualReview,
        gradeDistribution: summary.gradeDistribution,
        byType: summary.byType,
        topWeaknesses: summary.topWeaknesses,
        worst10: pages.slice(0, 10).map((p) => ({
          url: p.url,
          overall: p.scores.overall,
          grade: p.grade,
          flag: p.flagManualReview,
        })),
      },
      null,
      2
    )
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
