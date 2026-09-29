# 06 — Topical architecture

Audit date: 28 September 2026. This map uses the URLs that already exist. It does not propose a larger URL set.

The site currently organizes around catalogs: 50 states, 50 guides, 50 FAQs, 6 stories, 4 samples. Search and users organize around problems. The clusters below are those problems. A URL can sit in one primary cluster.

## Clusters

### A. HOA fine appeals

What the owner does after a fine notice: process, letter, hearing, and the letter tool.

- Hub: `/guides/hoa-fine-appeal-process`, `/guides/how-to-write-an-hoa-appeal-letter`, `/guides/sample-hoa-appeal-letter-structure`, `/guides/checklist-before-paying-an-hoa-fine`
- Tool: `/` (wizard), `/samples` and four sample URLs
- Hearing sequence: `/guides/hoa-meeting-preparation`, `/guides/hoa-hearing-what-to-expect`, `/guides/after-the-hoa-hearing-next-steps`
- Weak duplicates: the FAQ twin of each of these

### B. Notice and hearing rights

- `/guides/understanding-your-rights`, `/guides/hoa-due-process-rights`, `/guides/homeowner-bill-of-rights-hoa-enforcement`
- `/guides/hoa-fine-timelines-and-deadlines`, `/guides/cure-periods-before-hoa-fines`, `/guides/certified-mail-and-notice-proof`
- State pages, only for the procedure that state's statute actually contains

These three "rights" guides are one topic written three ways. Keep one cornerstone and fold the others into it.

### C. Evidence and documentation

- `/guides/how-to-collect-evidence` as the hub
- Supporting pages worth keeping if rewritten: photos, records requests, neighbor comparisons, exhibits, selective enforcement, retaliation
- `/guides/seasonal-and-weather-related-cure-delays` belongs here as a proof problem, not as its own legal regime

### D. Enforcement problems

Violation-specific disputes and board-conduct problems.

- Landscaping, parking, noise, pets, architectural review, short-term rentals, emergency or safety fines
- Arbitrary fines, conflicts of interest, management-company authority, amendments versus enforcement, open meetings, minutes
- These can stay as separate pages because the user's facts differ. They cannot stay as the same eight-verb article with a noun swapped.

### E. State-specific rules

- `/appeal-hoa-fine/{state}` — one page per state is justified. Fifty pages that share an expansion skeleton are not fifty pieces of research.
- `/state-laws` — comparison hub. It should only show a cell when the figure is tied to a section and a qualification. Empty or "see governing documents" is better than a borrowed "14 days."
- `/map` — navigation into cluster E, not a second legal article. The hover text currently promises "appeal deadlines."

### F. Sample letters

- `/samples` plus four letters (lawn, trash, parking, architectural)
- `/guides/sample-hoa-appeal-letter-structure` overlaps this cluster. The outline guide should point at the samples instead of restating them.

### G. Escalation and next steps

- Liens, collections, foreclosure risk, assessments versus fines, daily fines, privilege suspensions, mediation, court, when to hire an attorney, insurance coordination
- This is the highest-harm cluster. Pages should send people to a lawyer when the stake is a lien or foreclosure, and should not invent limitation periods.

### H. Tools

- `/` letter wizard
- `/decision-tree`
- `/readiness-calculator`
- Worksheet PDFs as downloads from a guide, not as indexable documents

## Orphans and weak hubs

- Success stories are linked from the hub explorer and related-content buckets, but they are not a knowledge cluster. They function as proof. Until they are honest composites or removed from the index, they should not sit in the main nav path. The footer already omits them; the hub explorer includes them.
- Author pages are linked from bylines. They are not orphaned. They are weakly trustworthy (see the trust audit).
- Worksheet PDFs are linked from the decision tree and guide assets. They are not in the sitemap. They are orphan-adjacent: easy to crawl, hard to navigate except from a guide.
- `/state-laws` is in the footer and easy to miss in the navbar, which labels `/map` as "State Laws." That is a mislabeled hub. Point "State Laws" at `/state-laws` and keep the map as "Map."
- FAQ hub is not an independent topic. It is a second index of cluster A–G.

## Overlap and cannibalization

| Pair or set | What competes | Action |
| --- | --- | --- |
| `/faq/{slug}` and `/guides/{paired}` | Same question, two URLs, FAQPage schema on both | Merge the answer into the guide. Noindex or redirect the FAQ URL only after the guide carries the answer. Do not redirect until the destination actually answers the question. |
| Three rights guides | Due process, "your rights," "bill of rights" | Merge into one notice-and-hearing cornerstone |
| Letter structure guide and `/samples` | How a letter is built | Keep samples as the examples. Shorten the outline guide to a checklist that links to them. |
| State page, map tooltip, `/state-laws` row | Same notice window three times | One researched statement on the state page. Map and table link to it. |
| Homepage wizard and `/appeal-hoa-fine/{state}` | Same tool, state headline swapped | Keep both. The state URL should lead with the statute explanation, not a second copy of the marketing hero. |
| Evidence sub-guides | Photos, exhibits, and "how to collect evidence" | Keep the hub. Sub-pages only if each one teaches a different task. |

## Missing cornerstones

These are gaps in the existing clusters, not a request for fifty new URLs.

1. A single "what to do this week" appeal page that states, up front, that procedure depends on the state and the CC&Rs.
2. A records-request page that distinguishes statutory inspection rights from a courtesy request. `requesting-hoa-records-and-violation-files` is the slug; the body is still the generator.
3. A condominium-versus-HOA page that refuses to apply Chapter 720, Chapter 209, or Davis-Stirling outside their definitions. The slug exists.
4. No glossary should be a keyword page. `hoa-legal-terminology-glossary` is useful only if entries are short definitions with sources.

Do not add city pages, violation-plus-state pages, or "HOA fine appeal {city}" URLs.

## Internal links

Useful links already exist: footer tools, state grid, related-content buckets, breadcrumbs on hubs and articles. Gaps:

- Navbar "State Laws" goes to the map.
- Related links on state pages include a self-link to the same state URL ("appeal letter generator").
- Guide CTAs all point at the wizard. They should also point at the one relevant state page and the one relevant sample, not at every sibling.
- FAQ pages link back to guides and also compete with them. After a merge, those links should be headings on the guide.

## Order of work

1. Fix trust and false legal sentences on the homepage, calculator, comparison table, and the nine high-priority state pages.
2. Merge FAQ URLs into guides after the guide is worth merging into.
3. Collapse the three rights guides.
4. Relabel the navbar.
5. Leave the 50 state URLs in place. Rewrite them from the base research. Do not add states or cities.
