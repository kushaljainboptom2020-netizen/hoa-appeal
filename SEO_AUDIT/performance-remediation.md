# JavaScript and main-thread performance remediation

Mobile Lighthouse reported Performance 61 with TBT 1.9 s, TTI 8.6 s, and roughly
1.1 MB of JavaScript. This document records what was wrong, what changed, why,
and what the numbers look like afterwards.

Nothing was removed. Every feature that worked before still works; the changes
are about **when** code is downloaded and executed, not **whether** it exists.

---

## Summary of results

Lighthouse, mobile form factor, simulated throttling, against a local
production build (`next build` + `next start`):

| Route | Score | FCP | LCP | TBT | CLS | Speed Index | First-party JS |
|---|---|---|---|---|---|---|---|
| `/` before | 31 | 4.5 s | 9.7 s | 4,810 ms | 0 | 6.0 s | 612 KB |
| `/` after | **84** | **1.1 s** | **2.9 s** | **420 ms** | 0 | **3.1 s** | **184 KB** |
| `/appeal-hoa-fine/texas` before | 49 | 5.1 s | 10.3 s | 450 ms | 0 | 6.0 s | 612 KB |
| `/appeal-hoa-fine/texas` after | **77** | **1.2 s** | **3.4 s** | 470 ms | 0 | **4.5 s** | **197 KB** |
| `/guides/understanding-your-rights` before | 55 | 5.3 s | 9.4 s | 320 ms | 0 | 5.3 s | 616 KB |
| `/guides/understanding-your-rights` after | **92** | **0.9 s** | **2.6 s** | **260 ms** | 0 | **1.8 s** | **189 KB** |

Transfer sizes per route, gzip KB, from `node scripts/measure-bundles.mjs`.
"Initial" is JS + CSS + HTML for the first paint of a cold visit.

| Route | JS before | JS after | Change | Initial before | Initial after | Requests |
|---|---|---|---|---|---|---|
| `/` | 640.9 | 214.8 | **-66%** | 768.4 | 253.4 | 14 → 13 |
| `/appeal-hoa-fine/texas` | 640.9 | 214.7 | **-67%** | 684.8 | 259.9 | 14 → 13 |
| `/state-laws` | 611.5 | 194.3 | **-68%** | 735.9 | 227.6 | 13 → 12 |
| `/map` | 612.0 | 192.6 | **-69%** | 731.6 | 221.4 | 13 → 12 |
| `/guides/understanding-your-rights` | 193.3 | 193.1 | -0% | 223.0 | 222.7 | 11 → 12 |
| `/guides` | 191.9 | 191.8 | -0% | 225.7 | 225.5 | 11 → 12 |
| `/about` | 191.9 | 191.8 | -0% | 212.3 | 212.2 | 11 → 12 |

The guides and `/about` routes were already at the framework floor of roughly
192 KB, so they gained nothing in bytes. They still improved sharply in
Lighthouse because the main thread is no longer contended by the shared chunks
the other routes were dragging in, and because third-party scripts no longer
compete with hydration.

INP was not available: Lighthouse only reports it from field data, and this site
has no CrUX history yet. TBT on the lab run is the closest available proxy and
fell by 91% on the homepage.

CLS was 0 before and remains 0. Every deferred component reserves its final box
before it loads, so nothing shifts when it arrives.

---

## What was actually wrong

Five distinct problems, in rough order of impact.

### 1. Barrel files leaked the entire 50-state content set into the browser

`lib/content/states/index.ts` holds the full legal profile for all fifty
states. It is server data. It was reaching the browser through two routes:

- `components/state-laws/StateLawsComparisonTable.tsx` is a client component and
  imported `filterStateLawRows` — about twenty lines of pure string matching —
  from `lib/content/state-laws/index.ts`. The first lines of that barrel import
  `STATE_CONTENT_PROFILES` (909 KB of source). Importing one small function
  pulled in the whole dataset.
- `lib/content/map/index.ts` re-exported both `usStatePaths` (SVG geometry) and
  `summaries` (which calls `getAllStateLegalContent()`). The map client
  components imported from the barrel, so they too pulled in the registry.

### 2. The state registry was rebuilt in the browser on every page load

`lib/content/states/index.ts` ran `const registry = buildRegistry()` at module
scope. Because the module was reaching client bundles, the browser executed
`buildRegistry()` across all fifty states during hydration. This is the most
likely single source of the 4.8 s TBT on the homepage.

### 3. The homepage map shipped to all fifty state pages

`AppealLandingPage` statically imported `StateMapExploreSection` but rendered it
only when `stateConfig` was absent. Next.js builds the client reference manifest
from the static module graph, not from what actually renders, so all fifty state
routes downloaded 214 KB of SVG path data they never displayed.

### 4. Nothing was code-split

The repository contained zero uses of `next/dynamic` or `React.lazy`. The appeal
wizard and the interactive map — the two heaviest islands on the site, both
below the fold — were part of the initial bundle on every route that mentions
them.

### 5. Third-party scripts competed with hydration

AdSense loaded with `afterInteractive`, which in practice means it starts as
soon as hydration begins and fights it for the main thread.

---

## Changes

### Break the barrel leaks

- **Added `lib/content/state-laws/filter.ts`.** Holds `filterStateLawRows` with
  a single type-only import. `lib/content/state-laws/index.ts` now re-exports
  from it, so server callers are unaffected, and
  `StateLawsComparisonTable` imports the leaf directly.
- **Pointed the map components at leaves.** `components/map/UsMapSvg.tsx` and
  `components/InteractiveUSMap.tsx` import from
  `@/lib/content/map/usStatePaths`; `components/map/UsStatesMap.tsx` and
  `components/map/StateMapPanel.tsx` take a type-only import from
  `@/lib/content/map/types`. Neither touches the barrel.

### Make the leak impossible to reintroduce

- **Added `import "server-only"` to `lib/content/states/index.ts` and
  `lib/content/state-laws/index.ts`.** Any future client import of these
  modules now fails the build rather than silently shipping a megabyte.
  `vitest.config.ts` aliases `server-only` to its empty build so the Node test
  environment is unaffected.
- **Added `scripts/audit-client-bundle.mjs`.** Walks the import graph from every
  `"use client"` entry, ignoring type-only imports, and fails if any reachable
  module exceeds 100 KB. The three map components are allowlisted because they
  are now only ever reached through a dynamic `import()`. Run it in CI to catch
  regressions.

### Stop rebuilding the registry eagerly

`lib/content/states/index.ts` now builds its map on first access behind
`getRegistry()` instead of at module scope. Server-side the cost is identical
and paid once; the difference is that merely importing the module no longer
executes the work.

### Split the map off the state routes

`AppealLandingPage` no longer imports `StateMapExploreSection`. It accepts an
`exploreSection` node instead, and `app/page.tsx` passes it. A server component
passed as a prop only exists in the graph of the route that supplies it, so the
fifty state routes no longer reference the map module at all.

### Defer hydration of the heavy islands

- **Added `components/perf/LazyIsland.tsx`**, a small client primitive. It
  renders a placeholder, watches its container with an `IntersectionObserver`
  at a 600 px root margin, and swaps in the real component once it approaches
  the viewport. It also loads on pointer enter, focus, touch, or a named window
  event, so the component is always there before an interaction can complete.
  Without `IntersectionObserver` it loads immediately.
- **The wizard** is wrapped by `components/wizard/LazyAppealWizard.tsx`. Its
  placeholder, `components/wizard/WizardStaticShell.tsx`, is a server component
  that renders the real heading, stepper, and step-one fields as read-only
  inputs at the same dimensions. The section looks finished at first paint and
  does not shift when the interactive version replaces it.
- **The maps** are wrapped by `components/map/LazyInteractiveUSMap.tsx` and
  `components/map/LazyUsStatesMap.tsx`, with `components/map/MapPlaceholder.tsx`
  as the placeholder.

### Keep the map crawlable

The first attempt at a map placeholder server-rendered the complete SVG. That
made things worse, not better: content rendered on the server and handed to a
client component is serialized twice, once as HTML and once as an inline flight
payload, and unlike a JS chunk it is never cached across navigations. It added
94 KB gzip of HTML to every page carrying a map. It was removed.

`MapPlaceholder` instead renders a correctly proportioned box plus a visually
hidden `<nav>` containing a real `<a>` for each of the fifty states. This is
better for crawling than what existed before: the interactive map navigates with
`router.push` on SVG paths, so it never exposed href targets to a crawler at
all. Homepage HTML is now 25.2 KB gzip and `/map` is 15.3 KB, both below the
original baseline.

### Preserve the fine-calculator handoff

The calculator sits above the wizard and pre-selects the state and violation
category by dispatching a `hoa-wizard-prefill` event. Once the wizard became
lazy, that event could fire before the wizard existed.

The fix parks the selection on `window.__hoaWizardPrefill` in addition to
dispatching the event, and `AppealWizard` reads and clears it in its `useState`
initializer. A module-level variable would not work here: the wizard's chunk
gets its own copy of `lib/wizard/prefill.ts`, which was confirmed in the build
output. `window` is the one location both chunks agree on, and reading during
render removes any dependence on effect timing.

Verified end to end in a browser against the production build: choosing Texas
and Landscaping in the calculator and clicking through lands on the wizard with
`state=TX` on step one and `violationCategory=landscaping` on step two.

### Third-party and font loading

- **AdSense** moved from `afterInteractive` to `lazyOnload` in
  `components/seo/ProductionHeadScripts.tsx`, so it waits for the load event
  instead of racing hydration.
- **GA4** replaced `@next/third-parties`'s `GoogleAnalytics` with
  `components/seo/Analytics.tsx`, two `lazyOnload` scripts that do the same job.
  The packaged component offers no way to change its strategy. Page views are
  still collected; they are queued on `dataLayer` and flushed when gtag arrives.
- **`Geist_Mono`** is now declared `preload: false` in `app/layout.tsx`. It is
  used only inside the letter preview, so preloading it competed with the body
  font for the critical path.

---

## What was deliberately not sacrificed

Confirmed against the server HTML of every route, not the hydrated DOM:

- **Crawlable HTML.** Every route still serves exactly one `<h1>` and its full
  body copy. The Texas page still contains 184 mentions of Texas, 72 of 209, and
  18 of "Property Code" before any JavaScript runs.
- **Structured data.** Four JSON-LD blocks on `/`, `/appeal-hoa-fine/texas`,
  `/state-laws`, `/map`, and the guide detail pages; two on `/guides` and
  `/about`. Same as before.
- **Canonicals.** Present on every route.
- **Accessibility.** Placeholders carry `aria-busy`, the map exposes its state
  links to screen readers, and map paths keep `role="link"` and `tabindex="0"`.
  Keyboard navigation was re-verified: focusing Texas and pressing Enter
  navigates to `/appeal-hoa-fine/texas`.
- **Functionality.** The wizard's four-step flow, the fine calculator handoff,
  map click and keyboard navigation, and `/state-laws` filtering (50 → 1 for
  "Texas", 50 → 2 for "209", back to 50 when cleared) were all exercised in a
  browser against the production build.
- **Checks.** `tsc --noEmit`, ESLint at `--max-warnings 0` on all touched
  files, 74 tests across 16 files, and the content quality scan all pass.

---

## Reproducing the measurements

```bash
npm run build
node scripts/measure-bundles.mjs --json perf-after.json --compare perf-baseline.json
node scripts/audit-client-bundle.mjs

npx next start -p 3210
npx lighthouse http://127.0.0.1:3210/ --only-categories=performance \
  --form-factor=mobile --screenEmulation.mobile --throttling-method=simulate \
  --output=json --output-path=lh-after-home.json
node scripts/lh-summary.mjs lh-after-home.json
```

Use `127.0.0.1` rather than `localhost`; on Windows the latter resolves to IPv6
and headless Chrome fails to connect.

---

## Remaining opportunities

- Third-party JavaScript is still 424 KB and is now the largest single block of
  script on every route. Deferring it moved it off the critical path but did not
  shrink it. Dropping AdSense on content-heavy guide pages, where it earns
  least, would be the next meaningful win.
- `/appeal-hoa-fine/texas` scores lowest of the three sampled routes at 77, held
  back by a 4.5 s Speed Index. Its hero renders a large volume of state-specific
  prose above the fold; trimming or progressively revealing the lower half of
  the legal resource section would help.
