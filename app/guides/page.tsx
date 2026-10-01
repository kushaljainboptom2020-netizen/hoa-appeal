import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { HubExploreLinks } from "@/components/seo/HubExploreLinks";
import { PageChrome } from "@/components/seo/PageChrome";
import { LEGAL_LAST_UPDATED } from "@/lib/config/site";
import { getGuidesGroupedByCategory } from "@/lib/content/guides";
import { pageMetadata } from "@/lib/seo/metaFormat";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "HOA Fine Appeal Guides | MyHOAAppeal",
    description:
      "Guides on HOA fines, hearings, evidence, and letters. Each article answers one job and points to a state page when the rule depends on where you live.",
    path: "/guides",
  }),
};

export default function GuidesIndexPage() {
  const groups = getGuidesGroupedByCategory();

  return (
    <PageChrome
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Guides" },
      ]}
    >
      <main id="main-content" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="max-w-3xl text-center sm:text-left">
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

        <HubExploreLinks currentPath="/guides" />

        <div className="mt-8 max-w-3xl space-y-4 text-slate-300">
          <p className="leading-relaxed">
            This hub collects practical guides on HOA fines, appeals, hearings,
            evidence, and what to do when a letter mentions a lien. Each article
            answers one job and points you at a state page when the rule depends
            on where you live. Short answers that used to live on separate FAQ
            URLs are on the matching guide. Individual FAQ addresses redirect
            to that guide. Start from the{" "}
            <Link
              href="/faq"
              className="text-emerald-400 underline-offset-2 hover:underline"
            >
              FAQ index
            </Link>{" "}
            if you prefer a question list.
          </p>
          <p className="leading-relaxed">
          Content is educational. It is not legal advice. A date on a page is
          the day the text was edited, not an attorney&apos;s review of every
          statute.
          </p>
        </div>

        <div className="mt-12 space-y-14">
          {groups.map((group) => (
            <section key={group.category} aria-labelledby={`cat-${group.category}`}>
              <h2
                id={`cat-${group.category}`}
                className="text-xl font-semibold text-white sm:text-2xl"
              >
                {group.label}
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                {group.guides.length} guide{group.guides.length === 1 ? "" : "s"}
              </p>
              <nav
                className="mt-6 grid gap-4 sm:grid-cols-2"
                aria-label={group.label}
              >
                {group.guides.map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/guides/${guide.slug}`}
                    className="group block rounded-xl border border-slate-800 bg-slate-900/40 p-5 transition-colors hover:border-emerald-500/30 hover:bg-slate-900/70"
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                        aria-hidden
                      >
                        <BookOpen className="h-4 w-4" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base font-semibold text-white transition-colors group-hover:text-emerald-400">
                          {guide.title}
                        </h3>
                        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-400">
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
            </section>
          ))}
        </div>

        <section className="mt-14 rounded-xl border border-slate-800 bg-slate-900/40 px-5 py-6">
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
              href="/#appeal-wizard"
              className="text-emerald-400 underline-offset-2 hover:underline"
            >
              Start your appeal letter
            </Link>
          </p>
        </section>
      </main>
    </PageChrome>
  );
}
