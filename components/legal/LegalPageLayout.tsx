import Link from "next/link";
import { Shield } from "lucide-react";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/SiteFooter";

type LegalPageLayoutProps = {
  title: string;
  lastUpdated: string;
  lastReviewed?: string;
  children: ReactNode;
};

export function LegalPageLayout({
  title,
  lastUpdated,
  lastReviewed,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="border-b border-slate-800/80">
        <nav className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-5">
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
            <Shield className="h-7 w-7 text-emerald-500" />
            <span className="text-lg font-bold tracking-tight text-white">
              MyHOAAppeal
            </span>
          </Link>
        </nav>
      </header>

      <main id="main-content" className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
          <span>Last updated: {lastUpdated}</span>
          {lastReviewed ? <span>Last reviewed: {lastReviewed}</span> : null}
        </p>
        <div className="prose-legal mt-10 space-y-6 text-slate-300">{children}</div>
      </main>

      <SiteFooter />
    </div>
  );
}
