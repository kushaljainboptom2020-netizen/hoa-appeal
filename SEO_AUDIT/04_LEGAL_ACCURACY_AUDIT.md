# 04 — Legal accuracy audit

Audit date: 28 September 2026. This is an editorial source check, not a legal opinion and not a finding that any page is compliant.

## Method

Material claims were taken from `lib/seo/statePages.ts` (the sentence inserted into the letter and the hero), `lib/content/fine-caps/index.ts` (the comparison table and calculator), and the state profile fields `primaryActShort`, `noticeWindow`, `hasStatutoryHearingRight`, statute list, and hearing lead in `lib/content/states/profiles.generated.ts`.

Status values:

- **Supported by the source already cited** — the official text that was opened matches the claim, including its limits.
- **Contradicted inside the repo** — two site strings disagree, or the site's own profile disagrees with its hook.
- **Unverified — manual legal review** — the official section was not re-read for this audit. That is not a confirmation.

Official text was opened for a priority set only: California, Florida, Texas, Colorado, Virginia, Arizona, Alabama, Alaska (naming), and New York (framework conflict). Sources were legislature or code sites, or a session-law PDF from the legislature. Law-firm and SEO pages were not used as the authority for a claim. Where a secondary reproduction was the only full text available, the claim stays flagged for confirmation on the official code site.

Every state not in that priority set is **Unverified — manual legal review**. `05_STATE_PAGE_MATRIX.csv` records that for all 50 rows (`Required Legal Review` = Yes).

## Cross-cutting defects

These apply even where a single state profile is careful.

1. **Invented national notice rule.** For the 46 states without a featured cap, `lib/content/fine-caps/index.ts` sets `noticeWindow` to "Standard 10–14 day statutory notice requirement" and the defense clause to "defective 10–14 day written notice is a primary defense in most states." There is no statute that creates that national window. The comparison table hides this for fallback states by showing `profile.noticeWindow` instead (`lib/content/state-laws/index.ts`). The calculator still uses the fallback defense clause.

2. **Hooks are a second legal article.** `noticeDefenseHook` is written separately from the long profile and uses "must" and "requires." Alabama, Colorado, New York, and Texas show that the hook can contradict the profile or the statute.

3. **Comparison column overfits.** `/state-laws` is titled "HOA Fine Caps and Hearing Notice by State." For fallback states the "hearing notice" cell is whatever string was stored as `noticeWindow`, including Alabama's "14 days," which the Alabama profile describes as a typical CC&R cure period, not a statutory hearing notice.

4. **Association type is often dropped.** Florida Chapter 720 is an HOA statute, not the condominium statute (Chapter 718). Texas Chapter 209 applies to residential subdivisions with mandatory membership and assessment authority, and its definition of residential subdivision is aimed at single-family homes, townhomes, or duplexes. California's Davis-Stirling Act applies to common interest developments as defined in that act. The hooks often say "associations" or "HOA" without that limit.

5. **Guides and FAQs state duties with no jurisdiction.** The FAQ generator's direct answer says many associations "must" give written notice and a hearing before fines become final. That is not true as a national rule. Guides rarely cite a section URL.

## Priority claims

### Alabama

| Field | Finding |
| --- | --- |
| Claim | Hook: "Under Alabama law, associations must provide reasonable written notice and an opportunity to be heard before imposing fines." Profile hearing lead: "Alabama law does not guarantee every planned-community owner a statutory pre-fine hearing." Profile overview: unlike states with a dedicated planned-community statute, many Alabama HOAs are governed almost entirely by CC&Rs. Comparison cell: hearing notice "14 days." |
| Source on the page | Ala. Code § 35-8A (Uniform Condominium Act), sections 302, 303, 313, 403, 417. No Chapter 35-20 citation. |
| Official text checked | Justia reproduction of Code of Alabama § 35-20-11 (2024), Alabama Homeowners' Association Act: the board, to the extent authorized by the declaration and governing documents, may assess reasonable penalties after the member is afforded the opportunity to be heard and represented by counsel before the board. Confirm on the Alabama Legislature site (Alison). Applicability of Chapter 20 (which associations, and from which formation date) was **not** confirmed from the official applicability section in this pass. |
| Jurisdiction | Alabama. Condominiums and planned-community HOAs are different chapters. |
| Applicability | Not established for "associations" as a class. Chapter 35-20 is not cited. Chapter 35-8A is the condominium act. |
| Qualification | Even the § 35-20-11 text that was reviewed conditions penalties on declaration authority and a hearing opportunity. It does not state a 14-day notice period. |
| Status | **Contradicted inside the repo** (hook versus profile). **Unverified — manual legal review** for whether Chapter 35-20 applies to a given association. The page omits Chapter 35-20 entirely, so "no dedicated planned-community statute" is not a statement this audit will adopt. |
| Recommended wording | "Alabama condominium associations are organized under the Alabama Uniform Condominium Act, Ala. Code § 35-8A. Planned-community associations may fall under the Alabama Homeowners' Association Act, Ala. Code § 35-20, or only under recorded CC&Rs, depending on when the association was formed and whether it opted in. Confirm which statute applies before relying on a hearing right. This site does not state a statewide number of days' notice." |
| Manual legal review | Yes |

### Alaska

| Field | Finding |
| --- | --- |
| Claim | Profile short name: "Alaska Uniform Condominium Act." SEO statute reference: "Alaska Common Interest Ownership Act (AS 34.08)." Hook: "Alaska law requires associations to follow proper notice procedures before assessing fines against owners." |
| Source on the page | AS 34.08, linked at `https://www.akleg.gov/basis/statutes.asp#34.08` |
| Official text checked | Alaska statutes title listing shows Chapter 34.08 as "COMMON INTEREST OWNERSHIP," separate from Chapter 34.07 Horizontal Property Regimes. The short title is the Uniform Common Interest Ownership Act (AS 34.08.995 in standard citations). The act's coverage of condominiums versus planned communities, and of pre-1986 communities, was **not** re-read section by section. |
| Jurisdiction | Alaska |
| Applicability | AS 34.08 is not accurately named by calling it only a condominium act. |
| Qualification | "Proper notice procedures" does not identify a section or a number of days. Profile `noticeWindow` is "30 days," which was not verified. |
| Status | **Contradicted inside the repo** (two names for one citation). The 30-day window is **Unverified — manual legal review**. |
| Recommended wording | "AS 34.08 is the Alaska Uniform Common Interest Ownership Act. It is not only a condominium statute. Check AS 34.08.010 for which communities it covers before citing a notice or fine procedure." |
| Manual legal review | Yes |

### Arizona

| Field | Finding |
| --- | --- |
| Claim | Hook: "Arizona law requires written notice of alleged violations and a reasonable opportunity to cure before fines may be imposed." Profile `noticeWindow`: "10 days." |
| Source on the page | A.R.S. Title 33, Chapter 16; statute list includes § 33-1803. Chapter URL `https://www.azleg.gov/ars/33/` |
| Official text checked | `https://www.azleg.gov/ars/33/01803.htm` (A.R.S. § 33-1803). Subsection B: after notice and an opportunity to be heard, the board may impose reasonable monetary penalties. It also limits late charges on penalties. Subsection C: a member who receives a written notice that the property's condition violates the community documents may respond by certified mail within 21 calendar days. The excerpt does not create a 10-day cure period or use the phrase "opportunity to cure" as the precondition for a fine. |
| Jurisdiction | Arizona planned communities under Title 33, Chapter 16. Condominiums are a different article (the profile also cites § 33-1242). |
| Applicability | § 33-1803 is a planned-community penalty section, not a rule for every Arizona association. |
| Qualification | The statutory precondition in the text reviewed is notice and an opportunity to be heard, plus the response procedure in subsections C and D. A cure period may still exist in the CC&Rs. |
| Status | The hearing/notice portion is **Supported by the source already cited** only if restated as notice and an opportunity to be heard under § 33-1803 for planned communities. "Reasonable opportunity to cure" and "10 days" are **not** supported by the text that was opened. |
| Recommended wording | "For planned communities covered by A.R.S. § 33-1803, the board may impose reasonable monetary penalties after notice and an opportunity to be heard. A member who receives a written property-condition notice may respond by certified mail within 21 calendar days. Cure deadlines in the declaration can be shorter or longer. Condominiums are covered by a different article." |
| Manual legal review | Yes, for condominium § 33-1242 and for any cure language elsewhere in Chapter 16 |

### California

| Field | Finding |
| --- | --- |
| Claim | Featured cap: "$100 per violation" and "10-day hearing notice required," citation "Cal. Civ. Code § 5850 / AB 130." Defense clause: failure to provide the 10-day hearing notice "can invalidate the fine under" § 5850. Profile `noticeWindow`: "30 days." Hook: written notice and a reasonable opportunity to cure before disciplinary fines. Statute reference: Civil Code sections 5850–5980. |
| Source on the page | `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=5850` |
| Official text checked | leginfo Civil Code § 5850, amended by Stats. 2025, Ch. 22 (AB 130), effective 30 June 2025. A monetary penalty shall not exceed the lesser of the amount in the schedule in effect at the time of the violation or $100 per violation. A higher schedule amount is allowed if the violation may result in an adverse health or safety impact, after a written finding in an open board meeting. Late charges or interest on a monetary penalty are prohibited. leginfo Civil Code § 5855(a): when the board is to meet to consider or impose discipline, it shall notify the member in writing at least 10 days prior to the meeting. The opened § 5855 excerpt does not say the fine is "invalid." |
| Jurisdiction | California common interest developments under the Davis-Stirling Act. |
| Applicability | Both sections are disciplinary provisions of that act, not a rule for non-CID associations. |
| Qualification | The cap is the lesser of the schedule or $100, with a health-or-safety exception. The 10-day notice is in § 5855, not § 5850. The profile's 30-day window is a different concept (often discussed for internal dispute resolution) and was not re-verified here. |
| Status | The $100 figure and the 10-day hearing notice are **Supported by the source already cited** only with those qualifications. The defense clause's section cite and the word "invalidate" are not supported. The profile's "30 days" **contradicts** the calculator's "10-day" label if both are presented as the notice rule. |
| Recommended wording | "Under Civil Code § 5850, as amended by AB 130 (Stats. 2025, ch. 22), a monetary penalty may not exceed the lesser of the association's published schedule or $100 per violation, unless the board makes a written open-meeting finding that the violation may result in an adverse health or safety impact. Under § 5855, the board must give at least 10 days' prior written notice before a meeting to consider or impose discipline. Read both sections. Do not describe a missed notice as automatically voiding the fine." |
| Manual legal review | Yes, for the cure language added to § 5855 and for any 30-day internal-dispute-resolution claim |

### Colorado

| Field | Finding |
| --- | --- |
| Claim | Featured cap: "$500 total cap" and "Two 30-day cure periods required," citation C.R.S. § 38-33.3-209.5. Defense: "Skipping both 30-day cure periods is a statutory defect." SEO reference: "C.R.S. Title 38, Article 33." Profile hearing lead: "Unlike Florida, Colorado CCIOA does not mandate a statutory board hearing before every fine." Profile `hasStatutoryHearingRight`: false. Profile statute list: §§ 38-33.3-106, 209, 251, 302, 316. It does not list § 209.5. Profile overview also says CCIOA is "Title 38, Article 33." |
| Source on the page | `https://leg.colorado.gov/colorado-revised-statutes` (code home, not the section) |
| Official text checked | Colorado General Assembly enrolled bill for HB22-1137 and the codified text of § 38-33.3-209.5 as reproduced from that act: for a non-health-or-safety violation, certified-mail notice that the owner has 30 days to cure or the association may fine, and the total fines for the violation may not exceed $500. The association shall grant two consecutive 30-day periods to cure before it may take legal action. A violation the association reasonably determines threatens public safety or health uses a 72-hour notice. CCIOA section numbers in the profile are 38-33.3, which is Article 33.3, not Article 33. |
| Jurisdiction | Colorado common interest communities under CCIOA. |
| Applicability | The cure and cap rules reviewed are in § 38-33.3-209.5 and distinguish health-or-safety violations. They are not a generic "two cure periods before any fine" rule. |
| Qualification | The $500 cap in the text reviewed is the total fines for that non-safety violation, not a statement that every Colorado association fine in history is capped at $500. The second 30-day period is the condition stated for legal action, not a second period that must elapse before the first fine. |
| Status | **Contradicted inside the repo** (Article 33 versus 33.3; hearing flag false while the calculator states a detailed statutory procedure; § 209.5 missing from the statute list). The calculator's "two 30-day cure periods" sentence overstates the enrolled text. |
| Recommended wording | "CCIOA is C.R.S. §§ 38-33.3-101 and following, not Title 38, Article 33. Section 38-33.3-209.5 sets different notice rules for health-or-safety violations (72 hours in the text reviewed) and other violations (certified mail and 30 days to cure before a fine, with total fines for that violation not to exceed $500). Two consecutive 30-day cure periods are the condition stated before legal action. Confirm the current codified section on the General Assembly site." |
| Manual legal review | Yes |

### Florida

| Field | Finding |
| --- | --- |
| Claim | Cap: "$100 per day, capped at $1,000 aggregate." Notice: "14-day notice to committee required." Defense: failure to provide 14-day written notice "invalidates the fine" under § 720.305. Hearing hook: Chapter 720 "affords owners the right to request a hearing before the board." Profile hearing lead is closer: a fining committee and at least 14 days' notice. |
| Source on the page | Florida Statutes Chapter 720; `http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0720/0720ContentsIndex.html` |
| Official text checked | Online Sunshine, § 720.305. A fine may not exceed $100 per violation unless otherwise provided in the governing documents. A fine for a continuing violation may not exceed $1,000 in the aggregate unless otherwise provided in the governing documents. A fine or suspension may not be imposed unless the board first provides at least 14 days' written notice of the parcel owner's right to a hearing. The hearing is before a committee of at least three members appointed by the board who are not officers, directors, or employees of the association, or specified relatives. |
| Jurisdiction | Florida homeowners' associations under Chapter 720. |
| Applicability | Chapter 720 is not the condominium statute. The dollar caps yield where the governing documents provide otherwise. |
| Qualification | The official text says the fine "may not be imposed" without that notice. It does not use the word "invalidate." The hearing is before the independent committee described in the statute, not "before the board" as the hook says. |
| Status | Dollar caps and 14-day committee notice are **Supported by the source already cited** only with the governing-document override and the committee composition. The hook's "hearing before the board" and the defense clause's "invalidates" are not supported. The profile hearing lead is the better of the two site texts. |
| Recommended wording | "For associations governed by § 720.305, a fine may not exceed $100 per violation, or $1,000 in the aggregate for a continuing violation, unless the governing documents allow a different amount. The board may not impose the fine unless it first gives at least 14 days' written notice of the owner's right to a hearing before a committee that meets the statute's independence rules. Condominiums are under Chapter 718, not Chapter 720." |
| Manual legal review | Yes, for Chapter 718 and for the profile's DBPR sentence, which was not checked |

### New York

| Field | Finding |
| --- | --- |
| Claim | SEO reference: "New York Real Property Law Article 9-B governs cooperative and HOA governance." Hook: "New York law requires cooperative and HOA boards to provide adequate notice and a reasonable opportunity to be heard before imposing fines." Profile overview: condominiums are under Article 9-B; cooperatives are governed by cooperative documents and offering plans, not Article 9-B. Profile `hasStatutoryHearingRight`: false. `noticeWindow`: "30 days." |
| Source on the page | `https://www.nysenate.gov/legislation/laws/RPP` (law index, not a fining section) |
| Official text checked | The article text of RPL § 339-j was **not** opened in this pass. Secondary sources disagree on whether that section itself authorizes fines. This audit does not choose between them. |
| Jurisdiction | New York. Condos, co-ops, and planned-community HOAs are different regimes. |
| Applicability | The hook treats co-ops and HOAs as if Article 9-B imposed a fine-hearing duty. The profile says Article 9-B does not govern co-ops. |
| Qualification | No 30-day statewide fine notice was identified in a source opened for this audit. |
| Status | **Contradicted inside the repo** (hook and statute reference versus the overview). The legal content of Article 9-B on fines is **Unverified — manual legal review**. |
| Recommended wording | "New York condominiums are created under Real Property Law Article 9-B. Cooperative corporations and many planned communities are not governed by that article. Do not state that New York law requires a fine hearing, or a 30-day notice, for co-ops and HOAs. Read the bylaws and, for condominiums, the specific Real Property Law section being cited." |
| Manual legal review | Yes |

### Texas

| Field | Finding |
| --- | --- |
| Claim | Hook and profile overview: Chapter 209 requires at least 30 days' written notice of the violation and a reasonable opportunity to cure before a fine may be imposed. SEO reference: "Texas Property Code Section 209 mandates a 30-day notice period before fines." Hearing lead: "Texas Property Code § 209.006(d) gives owners a statutory right to request a hearing before the board." |
| Source on the page | `https://statutes.capitol.texas.gov/Docs/PR/htm/PR.209.htm` |
| Official text checked | That official page, Chapter 209 (Texas Residential Property Owners Protection Act). § 209.006(a): before levying a fine (among other actions), the association must give written notice by certified mail. § 209.006(b)(2)(A): if the violation is curable and is not a threat to public health or safety, the owner is entitled to a reasonable period to cure and avoid the fine. § 209.006(b)(2)(B): the owner may request a hearing under § 209.007 on or before the 30th day after the notice was mailed. § 209.006(c): the cure date must be a reasonable period. § 209.006(d): subsections (a) and (b) do not apply to a violation for which the owner was already given notice and an opportunity to exercise rights under this section in the preceding six months. § 209.007: if a hearing is requested, the association holds it not later than the 30th day after the request and notifies the owner of the date not later than the 10th day before the hearing. § 209.003 limits the chapter to residential subdivisions with mandatory membership and assessment authority. The residential-subdivision definition in § 209.002 is aimed at single-family homes, townhomes, or duplexes. |
| Jurisdiction | Texas property owners' associations covered by Chapter 209. |
| Applicability | Not every Texas condo or voluntary association. Curable versus uncurable violations are defined in § 209.006(g)–(i). Repeat notices within six months are excluded by subsection (d). |
| Qualification | The 30th day is the deadline to request a hearing after the notice is mailed. It is not a rule that the notice itself must give 30 days before a fine. Subsection (d) is an exception to the notice requirement, not the hearing right. |
| Status | **Contradicted** by the official text that was opened. The certified-mail notice and the right to request a hearing are real. The "30-day notice before fines" sentence and the § 209.006(d) hearing citation are not. |
| Recommended wording | "If Chapter 209 applies, § 209.006 requires written notice by certified mail before the association levies a fine. For a curable violation that is not a threat to public health or safety, the notice must give a reasonable time to cure and must say that the owner may request a hearing under § 209.007 on or before the 30th day after the notice was mailed. Subsection (d) is a repeat-violation exception, not the hearing statute. Condominiums and associations outside § 209.003 need a different analysis." |
| Manual legal review | Yes, for Chapter 82 condominiums and for associations outside § 209.003 |

### Virginia

| Field | Finding |
| --- | --- |
| Claim | Featured cap: "$50 for a single offense, or $10 per day up to 90 days," citation Va. Code § 55.1-1819. Notice label: "Advance written notice required before a charge becomes due." Hook: written notice and a reasonable opportunity to cure before fines. Profile `hasStatutoryHearingRight`: false. Profile hearing lead says associations "must respect § 55.1-1819 before fines finalize." |
| Source on the page | `https://law.lis.virginia.gov/vacode/title55.1/chapter18/` |
| Official text checked | The LIS HTML for § 55.1-1819 was not captured in this pass. A 2025 compilation of the Property Owners' Association Act and other reproductions of § 55.1-1819 state: charges shall not exceed $50 for a single offense or $10 per day for a continuing offense, and shall not be assessed for a period exceeding 90 days; before action, the member shall be given a reasonable opportunity to correct the alleged violation after written notice; if the violation remains, notice of a hearing at least 14 days prior, by hand delivery or registered or certified mail. Confirm the current sentence on `law.lis.virginia.gov`. |
| Jurisdiction | Virginia associations subject to the Property Owners' Association Act. The Condominium Act is a different chapter. |
| Applicability | Not verified for every community that uses the word HOA. |
| Qualification | The 14-day hearing notice and the cure opportunity are more specific than "advance written notice." The profile flag `hasStatutoryHearingRight: false` conflicts with a hearing procedure if § 55.1-1819 says what the reproductions say. |
| Status | Cap figures are consistent with the reproductions reviewed, not with an LIS page opened in this session. Mark **Unverified — manual legal review** until LIS is checked, and **Contradicted inside the repo** on the hearing flag versus the hearing lead. |
| Recommended wording | "For associations subject to Va. Code § 55.1-1819, confirm on the Virginia LIS site the charge limits ($50 single offense or $10 per day, not assessed beyond 90 days, in the text commonly published) and the sequence of a cure opportunity plus at least 14 days' notice of a hearing. The Condominium Act is separate. Do not apply § 55.1-1819 to an association the act does not cover." |
| Manual legal review | Yes |

## States not re-read

The other 41 state pages have their own statute lists and, in most cases, expansion paragraphs that talk about notice windows as if they were statutory. Those claims were not checked against the legislature sites. Do not treat the matrix status "Unverified — manual legal review" as clearance to keep the current sentences.

High-priority follow-up, because the SEO hook already uses mandatory language, includes every remaining state that has a `noticeDefenseHook` in `lib/seo/statePages.ts`. The matrix marks those rows Medium priority and the nine states above High priority.

## Guides that state legal duties

Representative pattern, not a 50-row statute table: FAQ direct answers assert a notice-and-hearing duty without a state. Guides such as `hoa-fine-timelines-and-deadlines`, `hoa-fine-schedules-and-caps`, `statute-of-limitations-for-hoa-fines`, and `appealing-an-hoa-fine-in-court` are the most likely to be quoted by an answer engine as if they stated the law. They should be rewritten as "what to look up in your statute and CC&Rs," with section-level official links only where a person has opened the section. No new deadlines should be added from memory.
