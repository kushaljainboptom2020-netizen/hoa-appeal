import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { HubExploreLinks } from "@/components/seo/HubExploreLinks";
import { PageChrome } from "@/components/seo/PageChrome";
import { getAllSampleLetters } from "@/lib/content/samples";
import { pageMetadata } from "@/lib/seo/metaFormat";
import { buildSampleIndexSchema } from "@/lib/seo/samples";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Sample HOA Appeal Letters | MyHOAAppeal",
    description:
      "Educational sample HOA appeal letters for common violations. Replace the facts, then generate a letter from your own notice.",
    path: "/samples",
  }),
};

export default function SamplesIndexPage() {
  const samples = getAllSampleLetters();

  return (
    <PageChrome
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sample Letters" },
      ]}
    >
      <JsonLd schema={buildSampleIndexSchema()} />
      <main id="main-content" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-medium tracking-wider text-emerald-400 uppercase">
            Sample letter library
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Sample HOA Appeal Letters
          </h1>
          <p className="mt-4 leading-relaxed text-slate-300">
            Educational samples for common disputes. Use them as structure. They
            are fictional. Then generate a letter from your own notice.
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
    </PageChrome>
  );
}
