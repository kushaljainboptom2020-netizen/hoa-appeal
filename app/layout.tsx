import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/config/site";
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
    "Generate professional HOA fine appeal and dispute letters in minutes. 100% free, no account required.",
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
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <ProductionHeadScripts />
      </head>
      <body className="min-h-full bg-slate-950 text-slate-100 font-sans">
        {children}
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
