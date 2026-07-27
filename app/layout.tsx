import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Geist, Geist_Mono } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/config/site";
import { buildSiteSchemaGraph } from "@/lib/seo/jsonLd";
import { canonicalPath } from "@/lib/seo/siteUrl";
import { ProductionHeadScripts } from "@/components/seo/ProductionHeadScripts";
import "./globals.css";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "MyHOAAppeal — HOA Fine Appeal Letter Generator",
  description:
    "Free US HOA fine appeal letter generator for homeowners across the United States. 100% free, no account required.",
  alternates: {
    canonical: canonicalPath("/"),
  },
  openGraph: {
    locale: "en_US",
  },
  other: {
    "google-adsense-account": "ca-pub-7862241510527930",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-US"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <ProductionHeadScripts />
      </head>
      <body className="min-h-full bg-slate-950 text-slate-100 font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-emerald-600 focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <JsonLd schema={buildSiteSchemaGraph()} />
        {children}
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
