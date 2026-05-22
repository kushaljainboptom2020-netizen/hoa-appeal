import Script from "next/script";

/**
 * Third-party scripts rendered inside <head> in the root layout.
 *
 * Activate by setting environment variables in Vercel — no code change needed
 * when enabling AdSense.
 *
 * ─── Google Analytics 4 (optional) ───────────────────────────────────────────
 *
 *   NEXT_PUBLIC_GA_MEASUREMENT_ID = G-XXXXXXXXXX
 *
 * Loaded via <GoogleAnalytics /> in app/layout.tsx (not this file).
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
  const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  if (!adsenseClientId) return null;

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
