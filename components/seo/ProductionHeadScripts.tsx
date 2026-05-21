import Script from "next/script";

/**
 * Cookie-less analytics hook rendered inside <head> in the root layout.
 *
 * Activate by setting environment variables in Vercel / Netlify — no code
 * change or redeploy needed when swapping analytics providers.
 *
 * ─── Provider setup (set in your hosting dashboard) ───────────────────────
 *
 * Umami (self-hosted or Umami Cloud):
 *   NEXT_PUBLIC_ANALYTICS_SCRIPT_SRC = https://analytics.umami.is/script.js
 *   NEXT_PUBLIC_ANALYTICS_WEBSITE_ID = <your-website-id>
 *
 * Plausible:
 *   NEXT_PUBLIC_ANALYTICS_SCRIPT_SRC = https://plausible.io/js/script.js
 *   (no website-id env needed — domain is inferred from the request)
 *
 * Vercel Analytics:
 *   Install @vercel/analytics and add <Analytics /> to this layout instead.
 *   No external script src is required.
 *
 * ──────────────────────────────────────────────────────────────────────────
 *
 * When NEXT_PUBLIC_ANALYTICS_SCRIPT_SRC is unset the component renders
 * nothing — safe for local dev and staging environments.
 */
export function ProductionHeadScripts() {
  const src = process.env.NEXT_PUBLIC_ANALYTICS_SCRIPT_SRC;
  const websiteId = process.env.NEXT_PUBLIC_ANALYTICS_WEBSITE_ID;

  if (!src) return null;

  return (
    <Script
      src={src}
      strategy="lazyOnload"
      {...(websiteId ? { "data-website-id": websiteId } : {})}
    />
  );
}
