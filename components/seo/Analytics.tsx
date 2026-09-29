"use client";

import Script from "next/script";

type AnalyticsProps = {
  gaId: string;
};

/**
 * Google Analytics 4, loaded after the page has finished loading.
 *
 * Replaces `<GoogleAnalytics>` from @next/third-parties, which injects gtag.js
 * with the `afterInteractive` strategy and so competes with hydration for the
 * main thread. The site sends no custom gtag events, so page views — which GA4
 * enhanced measurement reports on load and on history changes — are all we
 * need, and those are unaffected by loading late.
 *
 * The dataLayer bootstrap is inlined first so anything queued before gtag.js
 * arrives is still delivered.
 */
export function Analytics({ gaId }: AnalyticsProps) {
  return (
    <>
      <Script id="ga-bootstrap" strategy="lazyOnload">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
      </Script>
      <Script
        id="ga-lib"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
    </>
  );
}
