# 07 — Search intent map

Audit date: 28 September 2026.

Intent is the job the searcher is trying to finish. Exact-match phrases are not a writing target. A page should rank only when it is the best URL on this site for that job. Two URLs for one job is cannibalization, even if both are long.

Stages: **aware** (what is happening), **prepare** (gather documents and deadlines), **act** (write or send the letter), **escalate** (lien, lawyer, court).

## Pages that should rank

| URL | Primary intent | Topic | Stage | Rank? |
| --- | --- | --- | --- | --- |
| `/` | Transactional | Make an appeal letter from the owner's facts | Act | Yes, for the tool |
| `/guides/hoa-fine-appeal-process` | Informational | Sequence from notice to decision | Prepare | Yes, after a rewrite. This is the cluster A cornerstone |
| `/guides/how-to-write-an-hoa-appeal-letter` | Informational | What to put in the letter | Act | Yes. Do not also target "free letter generator"; that is the homepage |
| `/samples` and four sample URLs | Informational | See a full example for lawn, trash, parking, or architectural disputes | Act | Yes, labeled as samples |
| `/decision-tree` | Informational tool | Which next step fits this notice | Prepare | Yes |
| `/readiness-calculator` | Informational tool | What is missing from the file | Prepare | Yes. The score is not an outcome prediction |
| `/state-laws` | Informational | Compare state frameworks | Aware | Yes, only if each cell is sourced and qualified |
| `/appeal-hoa-fine/{state}` | Mixed | That state's association statute plus the letter tool | Prepare / act | Yes, one URL per state, after the legal rewrite |
| `/guides/how-to-collect-evidence` | Informational | Build the file | Prepare | Yes, cornerstone for cluster C |
| `/guides/dealing-with-lien-threats` | Informational | What to do when a lien is mentioned | Escalate | Yes. Must not promise a defense |
| `/guides/when-to-hire-an-hoa-attorney` | Informational | When DIY stops | Escalate | Yes |
| `/about`, `/editorial-policy`, `/fact-checking`, `/ai-transparency`, `/contact`, `/privacy-policy`, `/terms-of-service` | Navigational | Who publishes this and on what terms | Trust | Yes, as trust pages, not as fine-appeal queries |
| `/authors` | Navigational | Who writes | Trust | Only if the people are real |

Secondary topics for the cornerstone guides are the questions already in the FAQ catalog (notice, hearing, cure, evidence). Those questions should be headings on the guide, not extra URLs.

## Pages that should not rank as written

| URL | Why |
| --- | --- |
| `/faq/{slug}` (all 50) | Same intent as the paired guide. Transactional intent: none. Recommended action: merge, then redirect or noindex |
| `/faq` hub | A second guide index |
| `/success-stories` and six story URLs | Commercial proof. They should not rank for "HOA fine appeal success" while the outcomes are unsourced |
| `/guides/worksheets/*.pdf` | Download, not a document to rank |
| `/guides/understanding-your-rights`, `/guides/hoa-due-process-rights`, `/guides/homeowner-bill-of-rights-hoa-enforcement` | One intent split across three URLs. Keep one after the merge |
| `/guides/sample-hoa-appeal-letter-structure` | Same intent as `/samples`. Keep as a short outline or merge |
| `/map` | Navigational. It should not rank for "{state} HOA fine law"; the state URL should |

## State family

Every `/appeal-hoa-fine/{state}` URL has the same mixed intent: the person wants the rule in that state and a letter they can edit. Secondary topics: notice, hearing, cure, records, and where the CC&Rs control instead. User stage: prepare, then act.

They should rank for that state. They should not rank by repeating "HOA fine appeal" with the state name inserted into a shared paragraph. The title `Free {State} HOA Fine Appeal Letter` matches the tool. The H1 `Fight Unfair HOA Fines in {State}` matches a dispute. Pick one job in the title and H1 after the rewrite so the URL is not half advertisement and half statute.

## Guides by job

Rewrite in place. Do not spawn a new slug. "Should rank" means the topic is a real job. It does not mean the current body deserves to rank.

**Appeals and letters (cluster A).** Rank after rewrite: appeal process, how to write the letter, hearing prep, what happens at a hearing, after the hearing, checklist before paying. Merge or narrow: sample letter structure (see samples). Violation pages in this category (architectural, landscaping, parking, noise, pets, short-term rental) are cluster D and can rank for that fact pattern if the page is actually about that fact pattern.

**Notice and rights (cluster B).** One page should rank. Timelines, cure periods, and certified mail can rank as separate jobs because the user question differs (when, how long, how to prove delivery). Statute-of-limitations and "bill of rights" should not rank until they cite real sections or drop the legal-sounding title. `state-hoa-law-basics-for-homeowners` should point to `/state-laws` and the state URLs rather than compete with them. `condominium-vs-hoa-fine-differences` and `reading-hoa-statutes-and-ccrs` should rank as explainers.

**Evidence (cluster C).** Rank: collect evidence (hub), records requests, selective enforcement, certified mail. Photos, exhibits, and neighbor comparisons can stay if each one is a procedure. Retaliation and arbitrary fines can stay if they explain how to document, and if they do not claim a statewide legal element that was not sourced.

**Money and escalation (cluster G).** Rank, with attorney prompts: liens, collections, foreclosure risk, assessments versus fines, daily fines, amenity suspensions. Emergency or safety fines and insurance claims are narrower jobs; keep them only if rewritten. Fine schedules and caps should defer numbers to the state page.

**Rules and boards.** Glossary: rank only as a definition list people use, not as an article that repeats the generator. Minutes, open meetings, conflicts, management companies, and amendments are distinct jobs.

**Mediation and hiring a lawyer.** Distinct escalate-stage jobs. Rank.

## FAQ twins

Each FAQ slug's intent is the question in its H1. That intent is already the paired guide's intent. Examples: `can-an-hoa-fine-me-without-notice` and `understanding-your-rights`; `how-do-i-write-an-hoa-appeal-letter` and `how-to-write-an-hoa-appeal-letter`. The full pair list is the `pairedGuideSlug` field in `lib/content/faq/catalog.ts` and the overlap column of `02_URL_INVENTORY.csv`. None of the 50 FAQ URLs should rank on their own.

## Samples and stories

| URL | Intent | Stage | Rank? |
| --- | --- | --- | --- |
| Lawn, trash, parking, architectural samples | See a model letter for that violation | Act | Yes |
| Six success stories | Believe a result happened | Trust | No, until sourced or clearly fictional |

## Supporting questions to answer on the cornerstone pages

Use these as headings where they match the page. Do not create URLs for them.

- What has to be in the notice, and where do I look that up?
- Is the deadline in the statute or in the CC&Rs?
- Does this rule apply to a condominium, a co-op, or a planned community?
- What do I send, and how do I prove delivery?
- What if I already paid?
- What if the letter mentions a lien?

Transactional intent stays on `/` and the state letter tool. Informational intent stays on the guides. Do not put "free letter" into every guide title.
