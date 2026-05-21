import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/config/site";
import { ProductionHeadScripts } from "@/components/seo/ProductionHeadScripts";
import "./globals.css";

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
      </body>
    </html>
  );
}
