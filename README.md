# MyHOAAppeal — HOA Fine Appeal Letter Generator

Free, professional HOA fine dispute and appeal letter generator. No account required.

Built with [Next.js](https://nextjs.org) 16 (App Router), React 19, Tailwind CSS 4.

---

## Local development

```bash
npm install
cp .env.example .env.local   # fill in any optional vars you want to test
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment variables

Copy `.env.example` to `.env.local` for local dev or set these directly in Vercel / Netlify.

| Variable | Required | Purpose |
|----------|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | **Yes** | Canonical domain — used by sitemap, robots.txt, JSON-LD, and `metadataBase`. Must match your redirect policy (`www` vs apex). |
| `NEXT_PUBLIC_ANALYTICS_SCRIPT_SRC` | No | External analytics script URL (Umami, Plausible). Injected via `<head>` with `lazyOnload`. |
| `NEXT_PUBLIC_ANALYTICS_WEBSITE_ID` | No | `data-website-id` attribute for Umami. |
| `NEXT_PUBLIC_MAILFORM_AFFILIATE_ID` | No | Activates USPS Certified Mail CTA. Set to your Mailform affiliate ID. |
| `NEXT_PUBLIC_ROCKETLAWYER_AFFILIATE_ID` | No | Activates RocketLawyer attorney CTA. Set to your RocketLawyer affiliate ID. |
| `NEXT_PUBLIC_ADSENSE_CLIENT_ID` | No | Activates AdSense ad slots (`ca-pub-XXXXXXXXXXXXXXXX`). |

When optional variables are unset the corresponding UI elements are hidden automatically — safe for staging and CI.

---

## Production build

```bash
npm run lint
npm run build
npm run start
```

---

## Deploy on Vercel

1. Push the repository to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Add `NEXT_PUBLIC_SITE_URL` (and any optional vars) in the Vercel project **Settings → Environment Variables**.
4. Deploy. Sitemap, robots.txt, and JSON-LD will all use the configured domain automatically.

No `vercel.json` or custom build configuration is required for standard deployment.
