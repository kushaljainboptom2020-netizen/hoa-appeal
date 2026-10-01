import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@/components/seo/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/config/site";
import { buildSiteSchemaGraph } from "@/lib/seo/jsonLd";
import { ProductionHeadScripts } from "@/components/seo/ProductionHeadScripts";
import "./globals.css";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  // Only a handful of small uppercase labels use the mono face, so preloading
  // it put 28 KB on the critical path of every page for no visible gain.
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "HOA Fine Appeal Letter Generator | MyHOAAppeal",
  description:
    "Free HOA fine appeal letter template for U.S. homeowners. You edit the letter. Not a law firm and not legal advice.",
  openGraph: {
    locale: "en_US",
    siteName: "MyHOAAppeal",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
  ...(adsenseClientId
    ? {
        other: {
          "google-adsense-account": adsenseClientId,
        },
      }
    : {}),
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
        {gaId ? <Analytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
