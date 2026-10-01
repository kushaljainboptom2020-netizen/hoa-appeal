# 17 — SEO quality follow-up report

Date: 1 October 2026.

This pass did not regenerate 50 state pages, invent statutes, or add keyword filler. It closed remaining indexation, trust, navigation, metadata, and privacy gaps after the 28 September 2026 remediation.

## 1. Files changed (high level)

- Root metadata: [`app/layout.tsx`](../app/layout.tsx), [`app/page.tsx`](../app/page.tsx), [`lib/seo/metaFormat.ts`](../lib/seo/metaFormat.ts)
- Sitemap / redirects / audits: [`app/sitemap.ts`](../app/sitemap.ts), [`lib/seo/legacyRedirects.ts`](../lib/seo/legacyRedirects.ts), [`scripts/audit-technical-seo.mjs`](../scripts/audit-technical-seo.mjs)
- FAQ hub: [`app/faq/page.tsx`](../app/faq/page.tsx), [`lib/seo/faq.ts`](../lib/seo/faq.ts)
- Authors: [`app/authors/page.tsx`](../app/authors/page.tsx), [`app/authors/[slug]/page.tsx`](../app/authors/[slug]/page.tsx)
- Schema/meta: [`lib/seo/jsonLd.ts`](../lib/seo/jsonLd.ts), [`lib/seo/statePages.ts`](../lib/seo/statePages.ts), [`lib/seo/guides.ts`](../lib/seo/guides.ts), [`lib/seo/samples.ts`](../lib/seo/samples.ts)
- Nav / chrome: [`components/SiteNavbar.tsx`](../components/SiteNavbar.tsx), [`components/seo/PageChrome.tsx`](../components/seo/PageChrome.tsx), [`components/legal/LegalPageLayout.tsx`](../components/legal/LegalPageLayout.tsx), [`components/SiteFooter.tsx`](../components/SiteFooter.tsx)
- State sources: [`lib/content/states/types.ts`](../lib/content/states/types.ts), [`lib/content/states/remediated.ts`](../lib/content/states/remediated.ts), [`lib/content/states/quality.ts`](../lib/content/states/quality.ts)
- Samples: [`app/samples/[slug]/page.tsx`](../app/samples/[slug]/page.tsx), [`lib/content/samples/index.ts`](../lib/content/samples/index.ts)
- Privacy / GA / hero: [`components/seo/Analytics.tsx`](../components/seo/Analytics.tsx), [`app/privacy-policy/page.tsx`](../app/privacy-policy/page.tsx), [`components/HeroSection.tsx`](../components/HeroSection.tsx)

## 2. What was changed

- Removed the homepage canonical from the root layout so child pages cannot inherit `/`.
- Shared `pageMetadata()` for title, description, canonical, OG, and Twitter (no invented OG image).
- Restored `/faq` as a question index that links into guides (`#guide-faq`). Kept `/faq/[slug]` 301s.
- Collapsed public author people pages; `/authors/:slug` 301s to `/editorial-policy`. `/authors` is an editorial-team page.
- Removed `article:reviewed_by` and Person schema that used internal role-label names.
- Added `verificationStatus` on state sources; visible verification line only when a status is set.
- Unified primary nav (How It Works, State Laws, Guides, Samples, FAQ, About, Contact) and sitewide CTA to `/#appeal-wizard`.
- Homepage H1/title aligned to the letter generator. Sample pages gained customize / attach / mistakes / related-guide / generator sections using existing copy.
- AdSense account meta is env-gated. GA config does not send custom events or wizard fields.

## 3. Why

Each change has a user or crawler benefit: correct canonicals, a usable FAQ entry point without competing articles, honest authorship, discoverable navigation, and sources that do not claim “verified” unless the data says so.

## 4. SEO impact expected

Easier discovery of `/faq`, guides, samples, and state pages from chrome and hubs. Less risk of homepage canonical leakage. Author profile URLs should drop from the index after recrawl. No ranking or impression claims.

## 5. Performance

Hero is a server component; the letter preview remains a client island. Wizard, map, and calculators stay deferred. Production CWV with AdSense/GA was not re-measured in the field.

## 6. Content

No new statutory citations. Guides hub no longer leads with “fifty in-depth.” FAQ index shows a one-sentence educational answer plus a guide link.

## 7. Internal links

FAQ index → paired guides. Footer statute labels are descriptive. Related-content no longer promotes success stories. Map remains in footer/explore, not primary nav.

## 8. Schema

Organization + WebSite unchanged. Homepage WebApplication unchanged. FAQ index uses WebPage + ItemList (not FAQPage). Sample Article author is Organization. State Article dates follow attribution ISO.

## 9. Canonical / indexation

- Indexable: `/`, `/faq`, `/guides`, `/samples`, state URLs, tools, trust pages, `/authors` hub.
- Redirect: `/faq/[slug]`, merged rights guides, `/authors/[slug]`.
- noindex: success stories (unchanged).
- Sitemap includes `/faq`; excludes FAQ slugs, success stories, and author people pages.

## 10. State pages

Same 50 URLs. Nine states remain the only ones with `verificationStatus: verified` on official sources. Other states stay `needs-review` / “not confirmed.” Quality flags exist in `assessStatePageQuality()`; failing pages stay published.

## 11. Trust / E-E-A-T

Public byline remains MyHOAAppeal Editorial. No fake biographies on `/authors`.

## 12. GEO / AI-search

FAQ index questions + short answers + guide links. State sources state jurisdiction and verification status. No `llms.txt`.

## 13. Intentionally not changed

- 41 unverified state legal claims (not filled with invented law)
- Content generators were not re-run
- Success-story URLs kept, still noindex
- No Review/LocalBusiness schema, no fake phone/address
- Worksheet PDFs still robots-disallowed

## 14. MANUAL VERIFICATION REQUIRED

- Attorney review of all 50 `/appeal-hoa-fine/[state]` pages
- Live fetch of legislature URLs, especially Virginia dollar figures
- Apex → www and HTTP → HTTPS on the live host
- Google Search Console coverage after deploy; submit sitemap
- GA4 admin: keep enhanced-measurement form-field capture off
- Confirm `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GA_MEASUREMENT_ID`, `NEXT_PUBLIC_ADSENSE_CLIENT_ID` in production
- Whether internal role-label names should be deleted from `lib/content/team/profiles.ts` entirely (they remain for internal draft organization only)

## 15. External tools / accounts

Search Console, production Lighthouse/CrUX, AdSense review, GA4 property settings.

## 16. Remaining technical risks

- Production JS from AdSense/GA can still dominate lab scores
- FAQ slug pages still exist in the App Router; next.config 301s should win
- Template overlap on 41 state pages remains (honest, not unique law)

## 17. Recommended next steps

1. Deploy and request indexing for `/faq` and `/authors`.
2. Monitor GSC for leftover `/authors/{name}` and `/faq/{slug}` after redirects.
3. Manual legal pass on high-traffic states after FL/TX/CA.
4. Field CWV with ads enabled.
