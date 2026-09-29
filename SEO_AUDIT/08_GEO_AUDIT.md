# 08 — AI search and citation audit

Audit date: 28 September 2026.

Answer engines quote passages that can stand alone: a direct answer, a limit, and a source. They also quote confident sentences that are wrong. The goal is to make the true sentences easy to lift and the overconfident sentences harder to mistake for law.

This audit does not add an "AI SEO" block, a keyword list, or pages aimed at synthetic questions.

## What is already extractable

- FAQ pages have a visible "Direct answer" heading (`components/faq/FaqResource.tsx`). The answers are still the generator's jurisdiction-free "must" sentence, so the extractable part is the dangerous part.
- State pages have statute lists, timelines, and a sources block that tells the reader to verify current text. Many source rows have no URL, so a citation cannot be checked.
- The readiness calculator and attorney disclaimer are clear about what the site is not.
- Organization and WebSite schema identify the publisher. Person schema identifies editorial names that are not verifiable (see the trust audit).

## What will be quoted incorrectly

1. Homepage and SoftwareApplication text: "legally structured," "statute compliant," "$150,000."
2. Texas hook: "at least 30 days' written notice … before a fine may be imposed." The official § 209.006 text uses the 30th day as the hearing-request deadline, not as the cure period.
3. Florida hearing hook: "hearing before the board." § 720.305 places the hearing before an independent committee.
4. Alabama hook: a universal duty of notice and a hearing. The profile says the opposite, and Chapter 35-20 is missing.
5. Comparison table cells such as Alabama "14 days" and New York "30 days," presented as hearing notice.
6. Fallback calculator text: a "standard 10–14 day statutory notice requirement."
7. FAQ direct answers that omit the state.
8. Success-story outcomes with a number of days and a result.

If an answer engine cites this site, those are the sentences most likely to be repeated.

## Target shape for a cornerstone section

Use this only where the page is actually answering a question. Do not wrap every heading in the same seven labels.

- **Question.** The homeowner's words.
- **Direct answer.** Two or three sentences. Name the jurisdiction and the association type.
- **Important qualification.** What the statute does not cover, or what the CC&Rs control instead.
- **Evidence.** Official section link. If the section was not opened, do not state the rule.
- **Practical explanation.** What to pull from the notice and the declaration.
- **Example.** A fictional, labeled example. Not a success story.
- **What to do next.** A link to the letter tool, the state page, or "talk to a lawyer" when the stake is a lien or suit.
- **Related.** One or two URLs, not the whole catalog.

## Entity and attribution

- The publisher is MyHOAAppeal, educational, not a law firm. Say that near the first legal sentence, not only in the footer disclaimer.
- Author and reviewer names should not be the entity an answer engine trusts until they are real people with a scope of review. Organizational attribution is safer than a fictional Person.
- `dateModified` should be the date that page's sources were checked. A sitewide 15 July 2026 stamp will be quoted as freshness for pages that were generated together.
- Statute names should match the official short title. Alaska's profile says "Uniform Condominium Act" for AS 34.08; the chapter is the Uniform Common Interest Ownership Act. Colorado's SEO line says Article 33; CCIOA is Article 33.3.

## Headings

Prefer a question the page answers: "Does Florida Statute 720.305 cap HOA fines?" Avoid verb-plus-topic headings ("Operationalize notice content boards must provide"). Those headings are not questions, and the paragraphs under them are not answers.

Glossary entries, if kept, should be one definition plus "this is not the same as…" Association, condominium, cooperative, assessment, fine, and lien are the terms that prevent the other pages from being misread.

## Internal relationships

An answer engine follows links. Each state page should link to the official code, to `/state-laws` only for the comparison method, and to the one guide that matches the reader's next task. It should not link to itself as a "related" letter generator.

After FAQ URLs are merged, the guide's question headings become the citable units. One URL with a sourced answer is easier to cite than two URLs that disagree.

## Do not do

- Do not add hidden FAQ schema for questions that are not on the page.
- Do not write "According to MyHOAAppeal" as a source.
- Do not create pages for "what does ChatGPT say about HOA fines in {state}."
- Do not mark a page as reviewed by an attorney.
