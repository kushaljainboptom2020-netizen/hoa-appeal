"use client";

import Script from "next/script";

type AnalyticsProps = {
  gaId: string;
};

/**
 * Google Analytics 4, loaded after the page has finished loading.
 * No custom events. Wizard fields are not sent. Leave form-field
 * enhanced measurement off in the Analytics UI.
 */
export function Analytics({ gaId }: AnalyticsProps) {
  return (
    <>
      <Script id="ga-bootstrap" strategy="lazyOnload">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}',{send_page_view:true,allow_google_signals:false,anonymize_ip:true});`}
      </Script>
      <Script
        id="ga-lib"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
    </>
  );
}
