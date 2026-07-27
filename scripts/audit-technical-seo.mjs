/**
 * Technical SEO checklist (source-level).
 * Run: node scripts/audit-technical-seo.mjs
 * Exit 1 on failures.
 */
import { readFileSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const failures = [];

function read(relPath) {
  return readFileSync(join(root, relPath), "utf8");
}

function assert(condition, message) {
  if (!condition) failures.push(message);
}

// --- robots ---
const robots = read("app/robots.ts");
assert(robots.includes("allow: \"/\""), "robots.ts should allow all crawlers");
assert(robots.includes("sitemap"), "robots.ts should declare sitemap");

// --- SearchAction must be gone ---
const jsonLd = read("lib/seo/jsonLd.ts");
assert(
  !jsonLd.includes("SearchAction"),
  "lib/seo/jsonLd.ts must not include SearchAction until real search exists"
);

// --- canonical helper ---
const siteUrl = read("lib/seo/siteUrl.ts");
assert(
  siteUrl.includes("canonicalPath"),
  "lib/seo/siteUrl.ts must export canonicalPath"
);

// --- static pages with canonical ---
const staticPages = [
  "app/layout.tsx",
  "app/guides/page.tsx",
  "app/faq/page.tsx",
  "app/success-stories/page.tsx",
  "app/authors/page.tsx",
  "app/about/page.tsx",
  "app/contact/page.tsx",
  "app/editorial-policy/page.tsx",
  "app/fact-checking/page.tsx",
  "app/ai-transparency/page.tsx",
  "app/privacy-policy/page.tsx",
  "app/terms-of-service/page.tsx",
];
for (const page of staticPages) {
  assert(existsSync(join(root, page)), `missing ${page}`);
  const src = read(page);
  assert(
    src.includes("canonical") || src.includes("canonicalPath"),
    `${page} should set an explicit canonical`
  );
}

// --- About brand ---
const about = read("app/about/page.tsx");
assert(!about.includes("HOAShield"), "about page should not mention HOAShield");

// --- skip / main landmarks ---
const layout = read("app/layout.tsx");
assert(
  layout.includes('href="#main-content"'),
  "layout should keep skip link to #main-content"
);
assert(
  !layout.includes('id="main-content"'),
  "layout must not wrap all children in #main-content"
);

const successStory = read("app/success-stories/[slug]/page.tsx");
assert(
  !successStory.includes("Skip to main content"),
  "success story page should not duplicate the skip link"
);

// --- unused StateInternalLinks deleted ---
assert(
  !existsSync(join(root, "components/state-legal/StateInternalLinks.tsx")),
  "StateInternalLinks.tsx should be deleted (superseded by RelatedContentSection)"
);

// --- sitemap coverage cues ---
const sitemap = read("app/sitemap.ts");
for (const token of [
  "getAllGuideSlugs",
  "getAllFaqSlugs",
  "getAllStateSlugs",
  "getAllSuccessStorySlugs",
  "getAllTeamSlugs",
  "/editorial-policy",
  "/fact-checking",
]) {
  assert(sitemap.includes(token), `sitemap.ts should reference ${token}`);
}

// --- PageBreadcrumbs present ---
assert(
  existsSync(join(root, "components/seo/PageBreadcrumbs.tsx")),
  "PageBreadcrumbs component missing"
);
assert(
  existsSync(join(root, "components/seo/HubExploreLinks.tsx")),
  "HubExploreLinks component missing"
);

// --- state meta templates short ---
const statePages = read("lib/seo/statePages.ts");
assert(
  statePages.includes("Free ${name} HOA Fine Appeal Letter"),
  "state titles should use the shortened template"
);
assert(
  !statePages.includes("Fight HOA Violations"),
  "state titles should drop '| Fight HOA Violations'"
);
const buildDescriptionMatch = statePages.match(
  /function buildDescription[\s\S]*?^}/m
);
assert(Boolean(buildDescriptionMatch), "buildDescription function missing");
assert(
  buildDescriptionMatch &&
    !buildDescriptionMatch[0].includes("statuteReference"),
  "state meta descriptions should not dump full statuteReference"
);

// --- guide/faq slug files exist (sitemap coverage proxy) ---
function countGeneratedSlugs(catalogHint) {
  const catalogPath = join(root, catalogHint);
  if (!existsSync(catalogPath)) return 0;
  const text = read(catalogHint);
  return (text.match(/slug:\s*"/g) || []).length;
}

const guideSlugs = countGeneratedSlugs("lib/content/guides/catalog.ts");
const faqSlugs = countGeneratedSlugs("lib/content/faq/catalog.ts");
assert(guideSlugs >= 50, `expected ≥50 guide catalog slugs, found ${guideSlugs}`);
assert(faqSlugs >= 50, `expected ≥50 FAQ catalog slugs, found ${faqSlugs}`);

if (failures.length) {
  console.error("Technical SEO audit FAILED:\n");
  for (const failure of failures) {
    console.error(` - ${failure}`);
  }
  process.exit(1);
}

console.log("Technical SEO audit passed.");
console.log(
  `Checked ${staticPages.length} static pages, robots, sitemap, JSON-LD, landmarks, and catalogs (${guideSlugs} guides / ${faqSlugs} FAQs).`
);
