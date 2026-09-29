# 11 — Trust, E-E-A-T, and transparency

Audit date: 28 September 2026. This is the Phase 10 deliverable. Schema is in `10_SCHEMA_AUDIT.md` so the two reviews stay separate.

The site already has the right kinds of pages: About, authors, editorial policy, fact-checking, AI transparency, contact, privacy, and terms. Several of those pages are more careful than the homepage. The failure is that marketing and proof claims go further than the policies, and the bylines are not tied to identifiable people.

This audit does not delete those pages. Inventory actions for stories and authors are `NOINDEX` or `REWRITE`, not `DELETE`. The original request was cut off at "Do not delete us"; nothing here recommends removing trust URLs from the project.

## Claims that are not substantiated

| Claim | Where | Problem |
| --- | --- | --- |
| "100% Free & Legal Statute Compliant" | `components/HeroSection.tsx` | "Legal statute compliant" is an absolute legal conclusion. The letter is a template. The terms page says the letters are template-based and the site does not provide legal representation. |
| "50-State Statutory Compliance" | Same file, trust badges | Coverage of 50 state URLs is not compliance with 50 statutes. |
| "Over $150,000 in unfair fines appealed across 50 states." | Same file | No methodology, case log, or date range in the repository. |
| "Instantly create a legally structured dispute and appeal letter" | `lib/seo/jsonLd.ts` SoftwareApplication description | Same compliance claim, in structured data. |
| "aligned with {state} HOA law" | HowTo step 3 in `lib/seo/jsonLd.ts` | The generator inserts a statute clause. That is not a determination that the letter matches the law. |
| "These anonymized stories explain what worked in real HOA fine disputes." | `app/success-stories/page.tsx` | The six stories name outcomes ("Board reduced a daily accrual schedule…", "Association withdrew the fine…") and timelines ("23 days from notice to revised decision") with no docket, decision, or composite label in the body. Sources are the governing documents in general, "state statutes," and the site's editorial policy. |
| Author and reviewer expertise | `lib/content/team/profiles.ts` | Jordan Hale, Morgan Ellis, Casey Nguyen, and Riley Brooks have titles and duty lists. Bios say they are not attorneys. The repository does not show bar numbers, employers, education, or any evidence these are real people rather than editorial personas. Sample letters are signed with overlapping names. |

Bylines are assigned, not researched, in `lib/content/editorial/attribution.ts`:

- Every page uses published 1 June 2026, reviewed 12 July 2026, and updated 15 July 2026.
- State author/reviewer is chosen by whether the state code starts with A–M.
- Guide author/reviewer is chosen by category.

A shared review date on 181 URLs does not document a review of each statute.

## What the trust pages get right

- About (`app/about/page.tsx`) says MyHOAAppeal is not a law firm and that generated content is educational and template-based.
- Editorial policy, fact-checking, and AI transparency say reviewers are not attorneys, that fact-checking does not freeze the statute, and that AI drafts still need a human source check.
- Contact says support does not provide legal advice.
- `components/state-legal/AttorneyDisclaimer.tsx` says the site is not a law firm and that deadlines may not be extended because someone relied on the site.
- The readiness calculator disclaimer says the score is not a prediction.

Those statements should stay. They currently sit next to the homepage badge that says the opposite.

## Corrections, dates, and method

The fact-checking and editorial pages describe a correction process and primary-source review. The production path does not match that description:

- Guide and FAQ bodies are generated from token lists.
- State legal hooks in `lib/seo/statePages.ts` are separate from the long profile and sometimes contradict it (Alabama, New York, Texas, Colorado).
- Many `sources` entries have a citation string and no URL. Statute objects have no URL field at all.
- The comparison table presents profile `noticeWindow` strings ("14 days", "30 days") as hearing notice even when the profile says the number comes from CC&Rs.

Until the method matches the policy, the policy pages should not say that each legal claim was checked against the official code.

## Remediation

1. Remove "Legal Statute Compliant," "50-State Statutory Compliance," and the $150,000 line unless a real, documented dataset is published with it. Do not replace them with a softer version of the same claim.
2. Change SoftwareApplication and HowTo copy so it describes a letter template, not a legally aligned document.
3. Success stories: either noindex them until they are clearly labeled as fictional or composite educational examples with no real-outcome wording, or rewrite them that way and then allow indexing. Do not leave "real HOA fine disputes" in the index.
4. Authors: publish real, accountable people, or change bylines to an organizational editorial credit and stop emitting Person schema for personas. Do not invent credentials to fill the gap.
5. Set `dateModified` from the last real edit of that URL. Stop stamping one review date on every page.
6. Align the editorial and fact-checking pages with the actual workflow after the generators are retired or narrowed.

Inventory actions: homepage, about, authors, editorial policy, and fact-checking `REWRITE`; AI transparency, contact, privacy, and terms `KEEP`; success-story URLs `NOINDEX`.
