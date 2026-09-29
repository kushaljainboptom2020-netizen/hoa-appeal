# 01 — Project architecture

Audit date: 28 September 2026. This file describes the repository. It does not change production code.

The public site is `https://www.myhoaappeal.com`. The canonical host is set in `lib/config/site.ts` (`NEXT_PUBLIC_SITE_URL`, defaulting to that www URL).

## Technology stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16.2.6, App Router |
| UI | React 19.2.4, Tailwind CSS 4, lucide-react |
| Compiler | `reactCompiler: true` in `next.config.ts` |
| Language | TypeScript 5 |
| Content | TypeScript catalogs plus Node generators. No CMS, no database, no API routes |
| SEO types | `schema-dts` (dev dependency) |
| Analytics | `@next/third-parties` Google Analytics, only if `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set |
| Ads | AdSense account meta tag hardcoded in `app/layout.tsx`; script in `components/seo/ProductionHeadScripts.tsx` only if `NEXT_PUBLIC_ADSENSE_CLIENT_ID` is set; `public/ads.txt` |
| Tests | Vitest |
| Fonts | `next/font` Geist and Geist Mono in `app/layout.tsx` |

There is no `middleware.ts`, no route handlers, and no custom `not-found.tsx`, `error.tsx`, or `global-error.tsx`.

## Route structure

Twenty-three `app/**/page.tsx` modules. Six dynamic routes set `dynamicParams = false` and call `notFound()` for unknown params. `generateStaticParams` emits every catalog slug.

| URL pattern | Source |
| --- | --- |
| `/` | `app/page.tsx` — letter wizard, no page-level metadata (inherits the layout) |
| `/appeal-hoa-fine/[state]` | 50 states |
| `/guides`, `/guides/[slug]` | 50 guides |
| `/faq`, `/faq/[slug]` | 50 FAQs, each paired to one guide |
| `/samples`, `/samples/[slug]` | 4 letters |
| `/success-stories`, `/success-stories/[slug]` | 6 stories |
| `/authors`, `/authors/[slug]` | 4 profiles |
| `/map`, `/state-laws`, `/decision-tree`, `/readiness-calculator` | Tools and hubs |
| `/about`, `/contact`, `/editorial-policy`, `/fact-checking`, `/ai-transparency`, `/privacy-policy`, `/terms-of-service` | Trust and legal |

`app/sitemap.ts` lists 181 HTML URLs. Permanent redirects in `next.config.ts`: `/privacy`, `/terms`, `/editorial`, `/ai`, `/team`. Static files outside the sitemap: `/ads.txt` and 50 worksheet PDFs at `/guides/worksheets/{guide-slug}-worksheet.pdf`.

`trailingSlash` is unset (Next.js default: no trailing slash). `canonicalPath()` in `lib/seo/siteUrl.ts` also strips a trailing slash. The www host is the only canonical host in code. HTTPS is assumed by `SITE_URL`; this audit did not probe the live server.

## Content structure

Content is assembled at build time from hand-written catalogs and generated bodies.

| Family | Hand-written | Generated | Gate |
| --- | --- | --- | --- |
| States | Base profiles inside `scripts/generate-state-profiles.mjs` | `lib/content/states/profiles.generated.ts`, expanded by `scripts/build-expansion-content.mjs` | `lib/content/states/index.ts` requires exactly 50 profiles, 1,800–2,500 words, an author, a reviewer, and at least one source |
| Guides | `lib/content/guides/catalog.ts` (50 titles) | `guides.generated.ts`, `assets.generated.ts` | Word band enforced by the guide generator/tests |
| FAQs | `lib/content/faq/catalog.ts` | `faq.generated.ts` | One FAQ per guide |
| Samples | `lib/content/samples/catalog.ts` | None | 4 letters |
| Success stories | `lib/content/success-stories/index.ts` | None | 6 stories |
| Team | `lib/content/team/profiles.ts` | None | 2 authors, 2 reviewers |
| Fine caps | `lib/content/fine-caps/index.ts` | None | Featured records for CA, FL, CO, VA; one fallback for the other 46 |
| Decision tree | `lib/content/decision-tree/tree.ts` | None | 3 question nodes, 10 outcomes |
| Readiness | `lib/content/readiness/questions.ts` | None | 10 scored questions |
| State comparison | Derived in `lib/content/state-laws/index.ts` | None | 50 rows from profiles plus fine caps |
| Map summaries | Derived in `lib/content/map/summaries.ts` | None | One card per state |
| Related links | `lib/content/related/index.ts` | None | Token overlap |
| Attribution | `lib/content/editorial/attribution.ts` | None | Same published/reviewed/updated dates for the whole site; state bylines split by the first letter of the state code |

Measured word counts from the site's own counters on 28 September 2026:

- States: 1,941–2,399 words, average 2,164
- Guides: 1,902–2,111 words, average 2,013
- FAQs: 994–1,109 words, average 1,059

Those bands are a production rule, not a quality measure. Alabama is the main state without expansion padding because its base profile already cleared the word floor.

## Reusable components

- Letter tool: `components/AppealLandingPage.tsx`, `components/wizard/*`, `components/HeroSection.tsx`
- State legal layout: `components/state-legal/*` (overview, statutes, timeline, FAQ accordion, sources, disclaimer)
- Guides and FAQs: `components/guides/GuideResource.tsx`, `components/faq/FaqResource.tsx`
- Trust chrome: `components/legal/LegalPageLayout.tsx`, `components/eeat/*`
- Navigation: `components/SiteNavbar.tsx`, `components/SiteFooter.tsx`, `components/seo/HubExploreLinks.tsx`, `components/StateGrid.tsx`, `components/seo/PageBreadcrumbs.tsx`
- Related links: `components/related/RelatedContentSection.tsx`
- Schema: `components/JsonLd.tsx`
- Ads: `components/monetization/AdSensePlaceholder.tsx` (empty reserved box, not a live `<ins>` unit)

## Metadata, sitemap, robots, canonical, schema

- Root metadata, canonical, Open Graph locale, and AdSense account meta: `app/layout.tsx`
- Per-type builders: `lib/seo/statePages.ts`, `lib/seo/guides.ts`, `lib/seo/faq.ts`, `lib/seo/samples.ts`
- Title and description soft caps (60 and 160 characters): `lib/seo/metaFormat.ts`
- Sitemap: `app/sitemap.ts`. `lastModified` uses each item's `updatedAtIso`, which is the shared date `2026-07-15`
- Robots: `app/robots.ts` allows `/` and points at `/sitemap.xml`. No `noindex` was found in the TypeScript source
- Sitewide JSON-LD: Organization and WebSite from `lib/seo/jsonLd.ts`
- Page JSON-LD: SoftwareApplication on the home page; HowTo + Article + BreadcrumbList on state pages; Article + FAQPage + BreadcrumbList on guides; FAQPage + BreadcrumbList on FAQ URLs; Article on samples and success stories; Table + ItemList on `/state-laws`; Person on author pages

Twitter card metadata is set on guides, FAQs, and samples. State pages set Open Graph article tags and do not set a Twitter card. No Open Graph image is defined.

## Analytics, privacy, images, links, errors, deploy

- Analytics and AdSense load only when their environment variables are set. The publisher id `ca-pub-7862241510527930` is still hardcoded in the layout `other` meta and in `public/ads.txt`.
- Privacy and terms pages disclose analytics and AdSense. There is no cookie-consent banner.
- The only content `<img>` is `components/guides/GuideInfographicFigure.tsx`: lazy-loaded SVG, `alt` set to the figure title, no width/height attributes.
- Internal links: navbar, footer, state grid, hub explorer, related-content buckets, and in-article links. The navbar label "State Laws" points at `/map`, while `/state-laws` is a separate comparison page linked from the footer.
- Redirects: five permanent aliases listed above. No redirect map beyond that.
- Unknown dynamic slugs hit the framework default 404.
- Deploy config in-repo is `next.config.ts` only. No `vercel.json` was required for this audit. Worksheet PDFs live under `public/`.

## Risks discovered

1. Scaled content. Guides, FAQs, and most state expansions are slot-filled from shared skeletons. A word-count gate rewards length.
2. Legal overclaim. SEO hooks, the fine-cap fallback ("Standard 10–14 day statutory notice requirement"), and several featured caps state duties the cited text does not support without qualification. See `04_LEGAL_ACCURACY_AUDIT.md`.
3. Trust claims. Homepage "Legal Statute Compliant" and "$150,000 in unfair fines appealed" have no case log. Success stories read as real results. Author bylines are assigned mechanically.
4. Cannibalization. Fifty FAQ URLs restate fifty guides. State, map, and comparison pages repeat the same notice windows.
5. Structured data. HowTo steps sell the letter tool. FAQPage is emitted on generated guides. SoftwareApplication copy says the letter is "legally structured."
6. Indexing of weak proof. Success stories and template worksheet PDFs are crawlable. PDFs are not in the sitemap and have no noindex mechanism.
7. Technical gaps. No custom 404, no cookie banner, shared `lastmod` on essentially the whole sitemap, and `changeFrequency: "daily"` on hubs that are not updated daily.
