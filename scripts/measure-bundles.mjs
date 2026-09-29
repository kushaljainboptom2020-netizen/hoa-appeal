/**
 * Measures the real per-route client payload from a production build.
 *
 * Reads the prerendered HTML in .next/server/app, extracts every <script src>
 * that points at a build chunk, and sums the raw and gzipped bytes. This is
 * what a browser actually downloads for a cold visit, which is a truer number
 * than the per-route table `next build` prints.
 *
 *   node scripts/measure-bundles.mjs            # print a table
 *   node scripts/measure-bundles.mjs --json out.json
 *   node scripts/measure-bundles.mjs --compare baseline.json
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { gzipSync } from "node:zlib";
import path from "node:path";

const APP_DIR = path.join(".next", "server", "app");

/** Routes we track. Label -> prerendered HTML file. */
const ROUTES = [
  ["/", "index.html"],
  ["/appeal-hoa-fine/texas", path.join("appeal-hoa-fine", "texas.html")],
  ["/state-laws", "state-laws.html"],
  ["/map", "map.html"],
  [
    "/guides/understanding-your-rights",
    path.join("guides", "understanding-your-rights.html"),
  ],
  ["/guides", "guides.html"],
  ["/about", "about.html"],
];

const SCRIPT_SRC = /<script[^>]+src="(\/_next\/[^"]+\.js)"/g;
const STYLESHEET = /<link[^>]+rel="stylesheet"[^>]+href="(\/_next\/[^"]+\.css)"/g;

function assetPath(url) {
  return path.join(".next", url.replace("/_next/", "").split("/").join(path.sep));
}

function sizes(file) {
  if (!existsSync(file)) return { raw: 0, gzip: 0 };
  const bytes = readFileSync(file);
  return { raw: bytes.length, gzip: gzipSync(bytes, { level: 9 }).length };
}

function collect(html, pattern) {
  const found = new Set();
  for (const match of html.matchAll(pattern)) found.add(match[1]);
  return [...found];
}

function measureRoute(htmlFile) {
  const full = path.join(APP_DIR, htmlFile);
  if (!existsSync(full)) return null;

  const html = readFileSync(full, "utf8");
  const scripts = collect(html, SCRIPT_SRC);
  const styles = collect(html, STYLESHEET);

  const js = { raw: 0, gzip: 0 };
  for (const url of scripts) {
    const s = sizes(assetPath(url));
    js.raw += s.raw;
    js.gzip += s.gzip;
  }

  const css = { raw: 0, gzip: 0 };
  for (const url of styles) {
    const s = sizes(assetPath(url));
    css.raw += s.raw;
    css.gzip += s.gzip;
  }

  const htmlSize = sizes(full);

  return {
    jsRaw: js.raw,
    jsGzip: js.gzip,
    cssGzip: css.gzip,
    htmlGzip: htmlSize.gzip,
    // What the browser pulls down before anything lazy kicks in.
    initialGzip: js.gzip + css.gzip + htmlSize.gzip,
    requests: scripts.length + styles.length,
  };
}

const kb = (n) => `${(n / 1024).toFixed(1)}`;

function main() {
  if (!existsSync(APP_DIR)) {
    console.error(`No build found at ${APP_DIR}. Run \`npm run build\` first.`);
    process.exit(1);
  }

  const results = {};
  for (const [label, file] of ROUTES) {
    const measured = measureRoute(file);
    if (measured) results[label] = measured;
    else console.error(`  (skipped ${label} — ${file} not in build)`);
  }

  const compareIndex = process.argv.indexOf("--compare");
  const baseline =
    compareIndex !== -1 && existsSync(process.argv[compareIndex + 1])
      ? JSON.parse(readFileSync(process.argv[compareIndex + 1], "utf8"))
      : null;

  const pad = (s, n) => String(s).padEnd(n);
  const padL = (s, n) => String(s).padStart(n);

  console.log("");
  console.log(
    `${pad("route", 34)}${padL("JS raw", 10)}${padL("JS gzip", 10)}${padL("CSS gz", 9)}${padL("HTML gz", 9)}${padL("initial", 10)}${padL("reqs", 6)}`
  );
  console.log("-".repeat(88));

  for (const [label, r] of Object.entries(results)) {
    console.log(
      `${pad(label, 34)}${padL(kb(r.jsRaw), 10)}${padL(kb(r.jsGzip), 10)}${padL(kb(r.cssGzip), 9)}${padL(kb(r.htmlGzip), 9)}${padL(kb(r.initialGzip), 10)}${padL(r.requests, 6)}`
    );
  }

  if (baseline) {
    console.log("");
    console.log("Change vs baseline (gzip KB, negative is better)");
    console.log("-".repeat(88));
    for (const [label, r] of Object.entries(results)) {
      const b = baseline[label];
      if (!b) continue;
      const dJs = (r.jsGzip - b.jsGzip) / 1024;
      const dInit = (r.initialGzip - b.initialGzip) / 1024;
      const pct = b.jsGzip ? ((dJs * 1024) / b.jsGzip) * 100 : 0;
      console.log(
        `${pad(label, 34)}${padL(`JS ${dJs >= 0 ? "+" : ""}${dJs.toFixed(1)}`, 14)}${padL(`(${pct >= 0 ? "+" : ""}${pct.toFixed(0)}%)`, 9)}${padL(`initial ${dInit >= 0 ? "+" : ""}${dInit.toFixed(1)}`, 18)}${padL(`reqs ${r.requests - b.requests >= 0 ? "+" : ""}${r.requests - b.requests}`, 10)}`
      );
    }
  }

  const jsonIndex = process.argv.indexOf("--json");
  if (jsonIndex !== -1 && process.argv[jsonIndex + 1]) {
    writeFileSync(process.argv[jsonIndex + 1], JSON.stringify(results, null, 2));
    console.log(`\nWrote ${process.argv[jsonIndex + 1]}`);
  }
  console.log("");
}

main();
