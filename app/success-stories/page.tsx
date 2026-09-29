import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { HubExploreLinks } from "@/components/seo/HubExploreLinks";
import { SUCCESS_STORY_CARDS } from "@/lib/content/success-stories";
import { canonicalPath } from "@/lib/seo/siteUrl";

export const metadata: Metadata = {
  title: "Fictional HOA dispute illustrations | MyHOAAppeal",
  description:
    "Fictional illustrations for organizing an HOA dispute file. Not reports of real board decisions. Not indexed.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: canonicalPath("/success-stories"),
  },
};

export default function SuccessStoriesIndexPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="border-b border-slate-800/80">
        <nav className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-5">
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
            <Shield className="h-7 w-7 text-emerald-500" />
            <span className="text-lg font-bold tracking-tight text-white">MyHOAAppeal</span>
          </Link>
        </nav>
      </header>

      <main id="main-content" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <p className="text-sm font-medium uppercase tracking-wider text-emerald-400">
          Educational examples
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          HOA Fine Appeal Success Stories
        </h1>
        <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">
          These pages are fictional illustrations for organizing a dispute file.
          They are not reports of real hearings, real fines, or real board
          decisions. They are not indexed for search.
        </p>

        <HubExploreLinks currentPath="/success-stories" />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {SUCCESS_STORY_CARDS.map((story) => (
            <Link
              key={story.slug}
              href={`/success-stories/${story.slug}`}
              className="group block rounded-xl border border-slate-800 bg-slate-900/40 p-5 transition-colors hover:border-emerald-500/30 hover:bg-slate-900/70"
            >
              <div className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                  aria-hidden
                >
                  <Sparkles className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-base font-semibold text-white transition-colors group-hover:text-emerald-400">
                    {story.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {story.metaDescription}
                  </p>
                  <p className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-emerald-400">
                    Read story
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
