/**
 * Prints the performance metrics we care about from Lighthouse JSON reports.
 *
 *   node scripts/lh-summary.mjs lh-baseline-home.json lh-after-home.json
 */

import { readFileSync, existsSync } from "node:fs";

const AUDITS = [
  ["first-contentful-paint", "FCP"],
  ["largest-contentful-paint", "LCP"],
  ["total-blocking-time", "TBT"],
  ["cumulative-layout-shift", "CLS"],
  ["speed-index", "SI"],
  ["interactive", "TTI"],
];

const pad = (s, n) => String(s).padEnd(n);
const padL = (s, n) => String(s).padStart(n);

const files = process.argv.slice(2).filter((f) => existsSync(f));
if (!files.length) {
  console.error("No Lighthouse JSON reports found.");
  process.exit(1);
}

console.log("");
console.log(
  `${pad("report", 30)}${padL("score", 7)}${AUDITS.map(([, l]) => padL(l, 10)).join("")}${padL("own JS", 12)}${padL("3rd-party", 11)}`
);
console.log("-".repeat(30 + 7 + AUDITS.length * 10 + 23));

for (const file of files) {
  const r = JSON.parse(readFileSync(file, "utf8"));
  const score = Math.round((r.categories?.performance?.score ?? 0) * 100);

  const cells = AUDITS.map(([id]) => {
    const a = r.audits?.[id];
    if (!a) return padL("-", 10);
    return padL(a.displayValue ?? String(a.numericValue ?? "-"), 10);
  }).join("");

  // Split script bytes by origin: our own bundles vs everything else.
  const items = r.audits?.["network-requests"]?.details?.items ?? [];
  const scripts = items.filter((i) => (i.mimeType ?? "").includes("javascript"));
  const isFirstParty = (i) => (i.url ?? "").includes("/_next/");
  const sum = (list) => list.reduce((t, i) => t + (i.transferSize ?? 0), 0);

  const own = sum(scripts.filter(isFirstParty));
  const third = sum(scripts.filter((i) => !isFirstParty(i)));

  console.log(
    `${pad(file.replace(/\.json$/, ""), 30)}${padL(score, 7)}${cells}${padL(`${(own / 1024).toFixed(0)} KB`, 12)}${padL(`${(third / 1024).toFixed(0)} KB`, 11)}`
  );
}
console.log("");
