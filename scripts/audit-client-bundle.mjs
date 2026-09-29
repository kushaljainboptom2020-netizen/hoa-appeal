/**
 * Traces the module graph reachable from every "use client" entry point and
 * reports heavy data modules that would end up in the browser bundle.
 *
 * Catches the barrel-file mistake: a client component importing one small
 * helper from an index.ts that also imports a megabyte of generated content.
 *
 *   node scripts/audit-client-bundle.mjs
 *
 * Exits non-zero if any client entry can reach a module above THRESHOLD_KB,
 * so it can be wired into CI.
 */

import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const THRESHOLD_KB = Number(process.env.THRESHOLD_KB ?? 100);

/**
 * Client entries that are allowed to reach a heavy module because they are
 * themselves only mounted through a lazy boundary (components/perf/LazyIsland),
 * so the weight lands in an on-demand chunk rather than the initial payload.
 * Verify with `node scripts/measure-bundles.mjs`.
 */
const LAZY_ENTRIES = new Set([
  "components/InteractiveUSMap.tsx",
  "components/map/UsMapSvg.tsx",
  "components/map/UsStatesMap.tsx",
]);

/** Directories we never walk into. */
const SKIP_DIRS = new Set([
  "node_modules",
  ".next",
  ".git",
  "SEO_AUDIT",
  "public",
  "scripts",
]);

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue;
    const full = path.join(dir, entry);
    const info = statSync(full);
    if (info.isDirectory()) walk(full, out);
    else if (/\.(ts|tsx)$/.test(entry) && !/\.test\.tsx?$/.test(entry))
      out.push(full);
  }
  return out;
}

/** Resolve an import specifier to a file on disk, or null for packages. */
function resolveImport(spec, fromFile) {
  let base;
  if (spec.startsWith("@/")) base = path.join(ROOT, spec.slice(2));
  else if (spec.startsWith(".")) base = path.resolve(path.dirname(fromFile), spec);
  else return null; // bare package specifier

  const candidates = [
    base,
    `${base}.ts`,
    `${base}.tsx`,
    path.join(base, "index.ts"),
    path.join(base, "index.tsx"),
  ];
  for (const c of candidates) {
    if (existsSync(c) && statSync(c).isFile()) return c;
  }
  return null;
}

// `import type { X }` and `import { type X }` are erased at compile time and
// never reach the bundle, so they must not count as edges.
const IMPORT_RE =
  /(?:^|\n)\s*(?:import|export)\s+([\s\S]*?)\s*from\s*["']([^"']+)["']/g;

function valueImports(file) {
  const src = readFileSync(file, "utf8");
  const edges = [];
  for (const match of src.matchAll(IMPORT_RE)) {
    const clause = match[1];
    const spec = match[2];
    if (/^\s*type\s/.test(clause)) continue; // import type { ... }
    // A clause that is *only* inline type specifiers is also erased.
    const named = clause.match(/\{([\s\S]*)\}/);
    if (named) {
      const parts = named[1]
        .split(",")
        .map((p) => p.trim())
        .filter(Boolean);
      const hasDefaultOrNamespace = /^[^{]*[A-Za-z_$]/.test(clause.split("{")[0]);
      if (parts.length && parts.every((p) => p.startsWith("type ")) && !hasDefaultOrNamespace)
        continue;
    }
    edges.push(spec);
  }
  return edges;
}

const kb = (f) => statSync(f).size / 1024;
const rel = (f) => path.relative(ROOT, f).split(path.sep).join("/");

/** Depth-first reachability, returning heavy modules with one example path. */
function reachableHeavy(entry) {
  const seen = new Set();
  const heavy = new Map();

  const visit = (file, trail) => {
    if (seen.has(file)) return;
    seen.add(file);

    const size = kb(file);
    if (size >= THRESHOLD_KB && file !== entry) {
      if (!heavy.has(file)) heavy.set(file, { size, trail: [...trail, file] });
    }

    for (const spec of valueImports(file)) {
      const target = resolveImport(spec, file);
      if (target) visit(target, [...trail, file]);
    }
  };

  visit(entry, []);
  return heavy;
}

const files = walk(ROOT);
const clientEntries = files.filter((f) =>
  /^\s*["']use client["']/.test(readFileSync(f, "utf8"))
);

console.log(
  `\nScanned ${files.length} source files, found ${clientEntries.length} "use client" entries.`
);
console.log(`Flagging any reachable module >= ${THRESHOLD_KB} KB.\n`);

let offenders = 0;
for (const entry of clientEntries.sort()) {
  const heavy = reachableHeavy(entry);
  if (!heavy.size) continue;

  const total = [...heavy.values()].reduce((t, h) => t + h.size, 0);

  if (LAZY_ENTRIES.has(rel(entry))) {
    console.log(
      `~ ${rel(entry)}  (+${total.toFixed(0)} KB, allowed: mounted lazily)`
    );
    continue;
  }

  offenders += 1;
  console.log(`✗ ${rel(entry)}  (+${total.toFixed(0)} KB of data)`);
  for (const [file, { size, trail }] of heavy) {
    console.log(`    ${size.toFixed(0).padStart(5)} KB  ${rel(file)}`);
    console.log(`            via ${trail.map(rel).join("\n             -> ")}`);
  }
  console.log("");
}

if (!offenders) {
  console.log("No client entry pulls in a heavy data module.\n");
  process.exit(0);
}

console.log(`${offenders} client entr${offenders === 1 ? "y" : "ies"} pull in heavy data.\n`);
process.exit(1);
