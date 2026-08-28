import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Shield } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { HubExploreLinks } from "@/components/seo/HubExploreLinks";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { getAllSampleLetters } from "@/lib/content/samples";
import { buildSampleIndexSchema } from "@/lib/seo/samples";
import { canonicalPath } from "@/lib/seo/siteUrl";

export const metadata: Metadata = {
  title: "Sample HOA Appeal Letters | MyHOAAppeal",
  description:
    "Read sample HOA appeal letters for landscaping, trash-can placement, parking, and architectural fines—then generate a personalized letter for your state.",
  alternates: {
    canonical: canonicalPath("/samples"),
  },
};

export default function SamplesIndexPage() {
  const samples = getAllSampleLetters();

  return (
    <div className="min-h-screen bg-slate-950">
      <JsonLd schema={buildSampleIndexSchema()} />
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

      <main id="main-content" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <PageBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Sample Letters" },
          ]}
        />

        <div className="mt-8 max-w-3xl">
          <p className="text-sm font-medium tracking-wider text-emerald-400 uppercase">
            Sample letter library
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Sample HOA Appeal Letters
          </h1>
          <p className="mt-4 leading-relaxed text-slate-300">
            Four fully written educational samples targeting common search
            queries. Use them as structure—then generate a letter tailored to
            your facts and state statutes.
          </p>
        </div>

        <HubExploreLinks currentPath="/samples" />

        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {samples.map((sample) => (
            <li key={sample.slug}>
              <Link
                href={`/samples/${sample.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-colors hover:border-emerald-500/30 sm:p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/25 bg-emerald-500/10 text-emerald-400">
                  <FileText className="h-5 w-5" aria-hidden />
                </span>
                <h2 className="mt-4 text-lg font-semibold tracking-tight text-white group-hover:text-emerald-200">
                  {sample.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                  {sample.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400">
                  Read sample
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm leading-relaxed text-slate-500">
          Also see the{" "}
          <Link
            href="/guides/sample-hoa-appeal-letter-structure"
            className="text-emerald-400 underline-offset-2 hover:underline"
          >
            sample letter structure guide
          </Link>{" "}
          for section-by-section drafting tips.
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
