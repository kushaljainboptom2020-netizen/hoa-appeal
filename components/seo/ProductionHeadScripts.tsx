import Script from "next/script";

/**
 * Third-party scripts rendered inside <head> in the root layout.
 *
 * Activate by setting environment variables in Vercel — no code change needed
 * when swapping providers or enabling AdSense.
 *
 * ─── Analytics (optional) ───────────────────────────────────────────────────
 *
 * Umami (self-hosted or Umami Cloud):
 *   NEXT_PUBLIC_ANALYTICS_SCRIPT_SRC = https://analytics.umami.is/script.js
 *   NEXT_PUBLIC_ANALYTICS_WEBSITE_ID = <your-website-id>
 *
 * Plausible:
 *   NEXT_PUBLIC_ANALYTICS_SCRIPT_SRC = https://plausible.io/js/script.js
 *   (no website-id env needed — domain is inferred from the request)
 *
 * ─── Google AdSense (optional) ──────────────────────────────────────────────
 *
 *   NEXT_PUBLIC_ADSENSE_CLIENT_ID = ca-pub-XXXXXXXXXXXXXXXX
 *
 * Loads the adsbygoogle.js verification script on every page when set.
 * Required for AdSense site ownership verification and ad serving.
 *
 * When env vars are unset the corresponding script is not rendered — safe for
 * local dev and staging.
 */
export function ProductionHeadScripts() {
  const analyticsSrc = process.env.NEXT_PUBLIC_ANALYTICS_SCRIPT_SRC;
  const websiteId = process.env.NEXT_PUBLIC_ANALYTICS_WEBSITE_ID;
  const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  if (!analyticsSrc && !adsenseClientId) return null;

  return (
    <>
      {adsenseClientId && (
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      )}
      {analyticsSrc && (
        <Script
          src={analyticsSrc}
          strategy="lazyOnload"
          {...(websiteId ? { "data-website-id": websiteId } : {})}
        />
      )}
    </>
  );
}
