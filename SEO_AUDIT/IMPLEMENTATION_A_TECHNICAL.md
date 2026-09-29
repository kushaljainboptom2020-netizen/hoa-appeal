# Phase A — Technical SEO

Date of this note: 28 September 2026.

This note records the technical changes that match defects named in the audit files that are in the repo (`SEO_AUDIT/01` through `SEO_AUDIT/11`). `00_EXECUTIVE_SUMMARY.md`, `13_CONTENT_CONSOLIDATION_PLAN.csv`, and `14_IMPLEMENTATION_ROADMAP.md` were not in the repo. Live host behavior was not probed.

## What changed

- `app/robots.ts` still allows `/` and publishes the sitemap. It disallows `/guides/worksheets/` so worksheet PDFs stay out of the index. HTML that should stay out of the index uses meta robots (`noindex` on success stories). Those HTML paths are not disallowed in robots.
- `app/sitemap.ts` omits success stories, `/faq`, `/faq/[slug]`, and the two rights guides that redirect to `/guides/understanding-your-rights`. `/guides` is `monthly`, not `daily`. `lastModified` uses the content-edit date `2026-09-28` for pages edited in this pass, not a shared 15 July 2026 stamp.
- `app/not-found.tsx` links to `/`, `/guides`, and `/state-laws`.
- The navbar labels `/state-laws` as State Laws and `/map` as Map.
- Guide SVG figures set width 1200, height 675, and a fixed aspect ratio. The guide template no longer renders the generated educational-asset block.
- The five existing redirects in `next.config.ts` (`/privacy`, `/terms`, `/editorial`, `/ai`, `/team`) are unchanged. New permanent redirects were added only after the destination pages contained the merged answer: `/faq` to `/guides`, each `/faq/[slug]` to its paired guide, and `/guides/hoa-due-process-rights` plus `/guides/homeowner-bill-of-rights-hoa-enforcement` to `/guides/understanding-your-rights`.

## Left alone on purpose

- Canonical host stays `https://www.myhoaappeal.com` as already configured in the app.
- No apex-to-www redirect and no HTTP-to-HTTPS redirect were added in the app. Whether the live host already does that was not probed.
- No cookie banner, hreflang, SearchAction, or invented Open Graph image.

## Unprobed

Search Console coverage, crawl stats, field Core Web Vitals, manual actions, security issues, rankings, impressions, CTR, country traffic, live apex-to-www behavior, and AdSense approval were not verified. See `16_MANUAL_ACTIONS_REQUIRED.md`.
