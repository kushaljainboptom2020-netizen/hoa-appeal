# 03 — Content quality audit

Audit date: 28 September 2026. Production files were not edited.

Quality was judged by whether a page answers a distinct homeowner problem in natural language, not by word count. The site's own counters already force state pages into 1,800–2,500 words and guides into a similar band. That rule is itself a quality risk: `scripts/build-expansion-content.mjs` adds shared rhetorical skeletons until the count is met.

A prior machine report, `scripts/audit-content-quality.report.json` (27 July 2026), scored 117 pages at an average of 83 and flagged cross-page sentence overlap on 50 pages. That report predates the FAQ and sample catalogs. This audit re-read the generators and the assembled bodies.

## Severity summary

| Pattern | Where | Frequency | Severity |
| --- | --- | --- | --- |
| Topic phrase dropped into an unnatural sentence | All 50 FAQ bodies; guide sections | 50/50 FAQs; guide sections repeat the same frames | Critical |
| Shared closer and CTA | Every guide and every FAQ | 50 + 50 | High |
| State-name expansion skeletons | State profiles except Alabama (and a few thin expansions) | "Compare formation documents carefully" on 45 states; "Local management habits…" on 45; "Winning a {state}" on 15; "boards rarely lose leverage" on 16; "Procedure first, equity second" on 10 | Critical |
| Identical section chrome | All 50 state URLs | 50 | High |
| Grammar broken by slot fill | State expansions and FAQ headings | Recurring | High |
| Word-count padding as a release gate | `lib/content/states/index.ts` | All states | High |
| Unsubstantiated social proof | Homepage, success stories | 1 homepage claim; 6 stories | Critical (see `11_TRUST_EEAT_AUDIT.md`) |
| Keyword-variant URLs | FAQ paired 1:1 with guides | 50 pairs | High |
| Samples sharing one letter skeleton | 4 sample letters | 4 | Medium |

## FAQ and guide generators

`scripts/generate-faq-content.mjs` writes `lib/content/faq/faq.generated.ts`. Every direct answer opens with a jurisdiction-free legal claim and then inserts the topic:

> "Many associations must give written notice and an opportunity to be heard before fines become final, but the exact requirements come from your CC&Rs and state association statute—not informal manager messages."

The same file then builds headings by inserting the topic into a fixed stem. From `can-an-hoa-fine-me-without-notice`:

> "Why fines without written notice matters before you argue the merits"

> "Owners staring at a surprise ledger charge should treat why fines without written notice matters before you argue the merits as a checklist problem."

That sentence is not something a person would say. The topic phrase was placed where a noun phrase does not fit. The next paragraph repeats "The practical stakes are concrete…" and "Avoid ignoring a short appeal window…" across explanation blocks on the same page. All 50 FAQs contain "State association and condominium acts vary" and "Use MyHOAAppeal to produce".

Guides are built by `scripts/generate-guide-content.mjs`. Section headings are eight verbs (`Translate`, `Operationalize`, `Audit`, `Document`, `Challenge`, `Sequence`, `Compare`, `Preserve`) plus a topic fragment. The first guide, `understanding-your-rights`, shows the fill:

> "When owners staring at a first violation letter rush, they often skip map notice."

> "Keep a reverse calendar of every deadline that touches homeowner rights when fined."

"Skip map notice" and "reverse calendar … that touches homeowner rights when fined" are generator artifacts. All 50 guides end with "This article is educational and is not legal advice" and the same product CTA. The guide index page (`app/guides/page.tsx`) describes the library as "practical, SEO-focused guides." That sentence tells a reader the pages exist for search, not for them.

Guide section-heading sets are unique per slug (50 patterns) because the topic fragment changes. The underlying paragraph frames are not unique. Uniqueness of a heading string is not originality.

## State expansions

`scripts/build-expansion-content.mjs` fills skeletons with `act`, `city`, `notice`, and `violation` tokens. The file comments say the sentences are not shared filler. The skeletons are shared. Counts below are states whose generated profile contains the phrase.

- "Compare formation documents carefully" — 45 states. The California FAQ then says Davis-Stirling "may control notice and hearing only when your community was formed under that statute or later opted in." That opt-in framing is the skeleton, not a researched statement about Davis-Stirling coverage.
- "Local management habits and document age matter more than national templates." — 45 states.
- "Winning a {state} HOA fine fight usually means…" — 15 states. Alaska is rendered as "Winning a Alaska HOA fine fight".
- "{State} boards rarely lose leverage when owners argue policy in the abstract." — 16 states.
- "Procedure first, equity second" — 10 states. California continues into a lowercase fragment: "wildfire defensible space and coastal-to-desert diversity makes some cures expensive".

`lib/content/states/buildContent.ts` says factual inputs are "no shared paragraph text." That comment describes the base profile fields. It does not describe the expansions merged into `profiles.generated.ts`.

The rendered state page also shares headings, appeal-step labels, evidence categories, and internal-link sentences that interpolate the state name (`buildContent.ts`, `internalLinksFor`). A reader who opens two state URLs sees the same outline with the state swapped.

Alabama is the exception on expansions: its base profile is long enough. It still uses the shared page template, and its SEO hook conflicts with its own hearing section (see the legal audit).

## Other families

Sample letters in `lib/content/samples/catalog.ts` share one structure: notice defect, facts, neighbor comparison, numbered request, hearing request, disclaimer. That is acceptable for four clearly labeled samples. The sign-off names overlap the editorial personas (Morgan / Casey). Treat them as fictional samples in the byline, not as homeowner letters from the editorial staff.

Success stories share timeline, outcome, highlights, and three generic sources (CC&Rs, "state statutes," and the site's own editorial policy). The index page says "what worked in real HOA fine disputes." The stories do not say they are composites. That is a trust defect, not a thin-word-count defect.

The decision tree and readiness calculator are original interactive copy with a visible educational limit on the calculator. They are the strongest non-tool pages in the set.

## What this is not

Long pages are not the problem. Alabama's base overview is specific (condominium act versus CC&R-governed planned communities, pine straw, mildew, no ombudsman). That kind of passage should survive a rewrite. The expansion layer, the FAQ generator, and the guide verb scaffold should not.

## Remediation

1. Stop generating bodies to hit a word floor. Delete the 1,800–2,500 gate as a publication requirement, or replace it with a checklist (source, qualification, distinct answer) that can pass a short page.
2. Rewrite cornerstone guides in prose. Do not run `content:guides` or `content:faq` again over the same skeletons.
3. Merge each FAQ into its paired guide as a real question-and-answer block, then stop indexing the `/faq/{slug}` URL. A 1,000-word page that repeats the guide is not an FAQ.
4. On state pages, keep the researched base profile where it is specific. Remove expansion paragraphs that start with the skeletons listed above. Fix grammar that the slots produced ("Winning a Alaska").
5. Remove the words "SEO-focused" from the guide hub.
6. Do not add more state, violation, or question URLs until the existing families are differentiated.

Recommended actions in `02_URL_INVENTORY.csv` follow this: guides `REWRITE`, FAQ URLs `MERGE`, state URLs `REWRITE`.
