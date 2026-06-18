import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Shield } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { LEGAL_LAST_UPDATED } from "@/lib/config/site";
import { GUIDE_ENTRIES } from "@/lib/content/guides";

export const metadata: Metadata = {
  title: "HOA Fine Appeal Guides | Educational Resources | MyHOAAppeal",
  description:
    "In-depth HOA fine appeal guides covering owner rights, evidence collection, lien threats, and board hearing preparation. Free educational resources for U.S. homeowners.",
};

export default function GuidesIndexPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="border-b border-slate-800/80">
        <nav className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-5">
          <Link
            href="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-90"
          >
            <Shield className="h-7 w-7 text-emerald-500" />
            <span className="text-lg font-bold tracking-tight text-white">
              MyHOAAppeal
            </span>
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <div className="text-center sm:text-left">
          <p className="text-sm font-medium uppercase tracking-wider text-emerald-400">
            Educational resources
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            HOA Fine Appeal Guides
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Last updated: {LEGAL_LAST_UPDATED}
          </p>
        </div>

        <div className="mt-8 space-y-4 text-slate-300">
          <p className="leading-relaxed">
            These guides help U.S. homeowners understand how to dispute HOA fines
            with formal, documented strategies—from procedural due process and
            evidence collection to lien threats and board hearing preparation.
            Each article is written for educational purposes and does not
            constitute legal advice.
          </p>
          <p className="leading-relaxed">
            After reading, use our free appeal letter generator to compile a
            professionally formatted dispute letter tailored to your situation.
          </p>
        </div>

        <nav
          className="mt-10 space-y-4"
          aria-label="HOA appeal guide articles"
        >
          {GUIDE_ENTRIES.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group block rounded-xl border border-slate-800 bg-slate-900/40 p-5 transition-colors hover:border-emerald-500/30 hover:bg-slate-900/70 sm:p-6"
            >
              <div className="flex items-start gap-4">
                <span
                  className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                  aria-hidden
                >
                  <BookOpen className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-semibold text-white transition-colors group-hover:text-emerald-400">
                    {guide.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {guide.metaDescription}
                  </p>
                  <p className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-emerald-400">
                    Read guide
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </nav>

        <section className="mt-12 rounded-xl border border-slate-800 bg-slate-900/40 px-5 py-6">
          <h2 className="text-lg font-semibold text-white">
            Ready to draft your appeal?
          </h2>
          <p className="mt-3 leading-relaxed text-slate-300">
            Turn what you learn into action. MyHOAAppeal&apos;s wizard compiles a
            formal HOA fine dispute letter in minutes—free, with no account
            required.
          </p>
          <p className="mt-4">
            <Link
              href="/"
              className="text-emerald-400 underline-offset-2 hover:underline"
            >
              Start your appeal letter
            </Link>
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
