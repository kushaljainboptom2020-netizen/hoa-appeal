# 10 — Structured data audit

Audit date: 28 September 2026. JSON-LD is emitted by `components/JsonLd.tsx` from builders in `lib/seo/`. The graph must describe text a person can see. Types below are the ones in the code today.

## Keep

| Type | Where | Why it fits |
| --- | --- | --- |
| `Organization` | Every page, via the root layout | Name MyHOAAppeal, URL, support email. No logo, no sameAs, no review. That is appropriate. |
| `WebSite` | Root layout | Name, URL, language `en-US`, publisher pointing at the organization. No `SearchAction`. The technical audit script already expects SearchAction to stay absent. Do not add a sitelinks search box. |
| `BreadcrumbList` | State, guide, FAQ, sample, map, decision tree, state-laws, success stories | Matches the visible breadcrumb trail on those templates. |
| `Article` | Guides, samples, success stories, state pages | The pages are articles. Author and editor are Person nodes. Those Person nodes are only as trustworthy as the profiles (see `11_TRUST_EEAT_AUDIT.md`). |
| `Person` | `/authors/{slug}` | Acceptable only for a real person. Do not add `alumniOf`, `award`, or bar credentials. |
| `WebPage` | Map and decision tree | Describes a tool page without pretending it is a statute. |

## Change or remove

### SoftwareApplication on `/`

`lib/seo/jsonLd.ts` `buildSoftwareApplicationSchema` offers price `0` USD, which matches "free." The description says: "Instantly create a legally structured dispute and appeal letter to fight unreasonable HOA fines."

The visible hero says "Legal Statute Compliant." The terms page says the output is a template and not legal representation. The schema repeats the stronger claim. Replace the description with language that matches the terms: a free letter template the user edits. Do not add `aggregateRating` or `review`. There are no reviews in the product.

`applicationCategory` is `BusinessApplication`. A consumer letter tool is a weak fit. `WebApplication` is the closer type if the visible page is the tool. Use one type, not both, and only after the description is accurate.

### HowTo on state pages

`buildHowToSchema` names four steps. Steps 1, 2, and 4 are homeowner tasks (read the notice, gather evidence, send the letter). Step 3 is "Generate your appeal letter with MyHOAAppeal" and says the letter is "aligned with {state} HOA law." Step 1 also inserts `statuteReference`, which is how Texas's "30-day notice" sentence and Alabama's hearing sentence enter the graph.

HowTo is a poor fit for a product walkthrough, and the step text includes legal claims the legal audit rejected. Remove the HowTo graph from state pages, or reduce it to steps that are actually on the page and that do not state a legal duty. Do not keep a HowTo whose third step exists to rank the tool.

### FAQPage on guides

`buildGuideFaqSchema` marks every generated guide FAQ as `FAQPage`. Those questions and answers are produced by `scripts/generate-guide-content.mjs` and repeat across the catalog. Google's structured-data guidelines require the FAQ content to be visible and a genuine FAQ. The questions are on the page (accordion). The answers are not independent Q&A; they are the same template. Remove FAQPage from guides until a person writes a short list of real questions for that article. The Article type can remain.

### FAQPage on `/faq/{slug}`

Each URL is one question with a "Direct answer" section, so a single `Question`/`Answer` pair matches the visible heading. The answer text is the generator sentence that states a national notice duty. Structured data will broadcast that sentence. After the FAQ URL is merged into its guide, delete this FAQPage with the URL. Do not keep FAQPage on a thin duplicate.

### Table and ItemList on `/state-laws`

`lib/seo/stateLaws.ts` describes the comparison table. The table is visible, so `Table` is not spam by itself. The cells include unqualified notice windows and fine caps (Alabama "14 days," the featured caps missing exceptions). Fix the visible table first. Schema that copies a wrong cell will be wrong in the same way. There is no benefit to a second ItemList of the same 50 states.

### Article on success stories

`Article` is technically fair for a page of prose. It becomes misleading if the headline is a real-world win ("California owner cut a landscaping fine…") and the body does not say the story is fictional or composite. Do not add `Review` or `ClaimReview`. Noindex is the inventory recommendation until the wording is fixed; schema should not outlive that decision.

## Do not add

- `Review`, `AggregateRating`, or `Product` with ratings. No review corpus exists.
- `FAQPage` on the homepage five-question component unless those questions remain visible and are rewritten without compliance claims. `components/HoaAppealFaq.tsx` was not given FAQPage schema today. Leave it that way until the copy is sourced.
- `Attorney` or `LegalService`. The site says it is not a law firm.
- Statute `Legislation` nodes that quote section text the project has not copied from the official source. Linking to the official URL in the visible sources list is enough.

## Implementation note for a later pass

`lib/seo/jsonLd.test.ts` currently expects each guide to emit one FAQPage. Any schema cleanup has to change that test with the builder. That is out of scope for this audit.
