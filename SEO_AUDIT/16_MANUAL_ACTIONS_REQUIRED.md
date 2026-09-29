# Manual actions required

These items were **not** verified in this implementation pass. Do not treat the content edit as evidence that any of them is clear.

## Not verified

- Google Search Console coverage
- Crawl stats
- Field Core Web Vitals
- Manual actions in Search Console
- Security issues in Search Console
- Rankings
- Impressions
- Click-through rate
- Country traffic
- Live apex-to-www behavior (and live HTTP-to-HTTPS behavior)
- AdSense approval

The app was not changed to add an apex or HTTP redirect. Whether the live host already redirects was not probed.

## Attorney review

Every state page at `/appeal-hoa-fine/[state]` still needs review by a lawyer before anyone treats it as a statement of law.

That is especially true for the 41 states whose sections were **not** opened in `04_LEGAL_ACCURACY_AUDIT.md`. Those pages say a statewide notice day count or fine cap was not confirmed here, and they link the code URL already stored on the profile. They do not add a deadline from memory. A lawyer still needs to read the official text before any affirmative rule is added.

The nine states that use wording from the audit (Alabama, Alaska, Arizona, California, Colorado, Florida, New York, Texas, and Virginia) also need attorney review. The wording keeps the limits in the audit (association type, exceptions, and no claim that a missed notice automatically voids a fine). Colorado’s article is 38-33.3. Alaska’s act name is the Uniform Common Interest Ownership Act, AS 34.08. Virginia’s dollar figures are items to confirm on LIS. This pass did not open the current LIS HTML.

## Author names

Jordan Hale, Morgan Ellis, Casey Nguyen, and Riley Brooks have no verifiable credentials in this repo. No employer, school, or bar number was invented. The site now calls them internal role labels and uses the byline “MyHOAAppeal Editorial”. If those names should be replaced with real, verifiable people, that is a manual decision. Do not publish credentials that are not documented.

## Other follow-ups that are outside this code pass

- Confirm the official code links that the legal audit already marked unverified. This pass listed them as the stored URLs. It did not fetch each legislature page and rewrite the legal claim.
- After deploy, request indexing only for URLs you intend to keep in the index. Success stories are `noindex` and are omitted from the sitemap. `/faq` and the two merged rights guides redirect.
- Broken or relocated external legislature links should be checked by a person against the current official site before a new citation is written.
