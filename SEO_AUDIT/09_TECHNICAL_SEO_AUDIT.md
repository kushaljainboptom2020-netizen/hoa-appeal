# 09 — Technical SEO audit

Audit date: 28 September 2026. Findings only. No templates, redirects, or metadata were changed. Live HTTP headers, Core Web Vitals field data, and a full external-link crawl were not run. Internal link targets that are built from the catalogs are covered by the project's content tests (`related` slug checks, 50-state gate).

## Crawl and indexing

| Item | Finding |
| --- | --- |
| `robots.txt` | `app/robots.ts` allows `/` for all user agents and declares the sitemap. Nothing is disallowed, including success stories and worksheet PDFs. |
| XML sitemap | `app/sitemap.ts` emits 181 HTML URLs. No sitemap index. One file is appropriate at this size. |
| Not in the sitemap | `/ads.txt`, 50 worksheet PDFs, and the five redirect sources. |
| `lastmod` | Almost every URL uses 15 July 2026 because attribution dates are shared. That date does not mean the page was reviewed that day. |
| `changeFrequency` | `/guides` and `/faq` are `daily`. The bodies are generated catalogs, not a daily publication. |
| Meta robots | No `noindex` in the TypeScript source. Every HTML URL is eligible for indexing, including six unsourced success stories. |
| Canonicals | `canonicalPath()` builds `https://www.myhoaappeal.com` plus the path, with no trailing slash. Root canonical is the bare origin. Dynamic pages set their own canonical. Author pages build the canonical with `SITE_URL` directly; the result matches `canonicalPath` as long as `SITE_URL` has no trailing slash. |
| Trailing slash | `trailingSlash` is unset. Canonicals strip slashes. Consistent. |
| www | Code canonicalizes to www. This audit did not request the live host to confirm the apex 301. |
| HTTPS | Assumed by `SITE_URL`. Not probed. |
| Hreflang | None. Appropriate. The statute pages are United States law. Do not add `en-CA`, `en-GB`, or `en-AU` alternates for those URLs. |
| Status codes | Unknown slugs call `notFound()` with `dynamicParams = false`. There is no `app/not-found.tsx`, so the response is the framework default 404. Five aliases in `next.config.ts` are permanent redirects: `/privacy`, `/terms`, `/editorial`, `/ai`, `/team`. No other redirect map. |
| Pagination | None. Hubs list all children on one page. |
| Internal depth | Footer, state grid, and hub explorer put tools and all 50 states within one or two clicks of the homepage. FAQ URLs are an extra index of the same topics, not a depth problem. |
| Breadcrumbs | Visible `PageBreadcrumbs` on hubs, guides, FAQs, samples, and state pages, plus BreadcrumbList JSON-LD. Homepage has no breadcrumb, which is fine. |

## Titles, descriptions, headings

- State titles are `Free {State} HOA Fine Appeal Letter` (under 60 characters). The H1 is `Fight Unfair HOA Fines in {State}`. Title and H1 describe different jobs (tool versus dispute).
- Only Florida and Texas have custom meta descriptions. The other 48 states share one sentence with the state name swapped.
- `seoTitle` / `seoDescription` cut guide, FAQ, and sample metadata at 60 and 160 characters. Several catalog `metaTitle` strings include `| MyHOAAppeal` and will drop the brand or ellipsize. Truncation is consistent, not unique copy.
- Layout title and description are the homepage's, because `app/page.tsx` does not export metadata. The H1 is "Fight Unfair HOA Fines in Minutes."
- Guide and FAQ H1s match the article title or question. One H1 per page in the templates that were read.
- The guide hub intro says the library is "SEO-focused." That is a content issue recorded in the quality audit.

## Structured data, social tags, images

Schema defects are detailed in `10_SCHEMA_AUDIT.md`. Short version: Organization and WebSite are appropriate; FAQPage on generated guides, HowTo steps that sell the tool, and "legally structured" SoftwareApplication copy are not.

Open Graph `locale` is `en_US` sitewide. Article pages set `og:type`, title, description, URL, and published/modified times. No `og:image`. Twitter cards exist on guides, FAQs, and samples only (`summary_large_image` without an image).

The content image component sets `alt` to the figure title, `loading="lazy"`, and `decoding="async"`. It does not set width, height, or `aspect-ratio`. SVG infographics can shift layout. Most other visuals are lucide icons or the US map SVG.

## Rendering, accessibility, performance

- Guide and state prose is rendered from server components. The wizard, map, comparison filter, calculators, and accordions are client components. Next.js still server-renders client components; the legal paragraphs are not fetched after load.
- State FAQ answers are in the HTML. Closed panels use the `hidden` attribute and `class="hidden"`. The first item is open. Extractors that skip `hidden` will miss the other answers even though the nodes are in the document.
- A skip link to `#main-content` is in the root layout. Accordion buttons expose `aria-expanded` and `aria-controls`.
- Fonts use `next/font` (self-hosted, CSS variables). That avoids a render-blocking third-party font request.
- Performance risks, not measured scores: the homepage hydrates the wizard, hero effects, and state grid; state pages add the calculator and several client islands; the map ships SVG paths for 50 states; guide pages add multiple SVG infographics. No bundle analysis was run. AdSense and GA scripts are gated on environment variables; the AdSense account meta tag is always in the layout.
- Caching and compression are platform defaults. Nothing in `next.config.ts` sets custom headers.

## Ads and privacy

`public/ads.txt` matches publisher `pub-7862241510527930`. Ad slots are empty placeholders (`AdSensePlaceholder`), not live ad units. There is no cookie banner. Privacy and terms disclose analytics and AdSense. A banner is a compliance and UX question, not an indexing requirement. Do not add a consent tool that blocks the main content from rendering.

## Fixes worth doing later, in this order

1. `noindex` success stories until they are rewritten, and keep worksheet PDFs out of the index (response header or robots rule). Do not add them to the sitemap.
2. Custom 404 that links to the guide hub, state list, and letter tool.
3. Confirm the live apex host 301s to www and that HTTP 301s to HTTPS.
4. Replace the shared `lastmod` and `daily` change frequency with real edit dates.
5. Give state titles and H1s the same job. Give non-Florida, non-Texas descriptions a real sentence only after the legal rewrite, not a new spun template.
6. Set width and height or a fixed aspect ratio on guide SVGs.
7. Point the navbar "State Laws" item at `/state-laws`.

Do not change URLs. Do not add redirects for FAQ URLs until the paired guide contains the merged answer.
