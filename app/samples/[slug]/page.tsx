import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import {
  SampleGenerateCallout,
  SampleLetterPreview,
} from "@/components/samples/SampleLetterPreview";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { SiteFooter } from "@/components/SiteFooter";
import { AttorneyDisclaimer } from "@/components/state-legal/AttorneyDisclaimer";
import {
  getAllSampleSlugs,
  getSampleBySlug,
} from "@/lib/content/samples";
import {
  buildSampleMetadata,
  buildSampleStructuredDataGraph,
} from "@/lib/seo/samples";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllSampleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sample = getSampleBySlug(slug);
  if (!sample) return {};
  return buildSampleMetadata(sample);
}

export default async function SampleLetterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sample = getSampleBySlug(slug);
  if (!sample) notFound();

  return (
    <div className="min-h-screen bg-slate-950">
      <JsonLd schema={buildSampleStructuredDataGraph(sample)} />

      <header className="border-b border-slate-800/80">
        <div className="mx-auto max-w-6xl px-4 py-5">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Sample Letters", href: "/samples" },
              { label: sample.title },
            ]}
          />
        </div>
      </header>

      <main id="main-content" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <p className="text-sm font-medium tracking-wider text-emerald-400 uppercase">
          Educational sample
        </p>
        <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {sample.title}
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-slate-300">
          {sample.excerpt} Names, addresses, and facts below are fictional.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-start">
          <SampleLetterPreview sample={sample} />
          <div className="space-y-6 lg:sticky lg:top-24">
            <SampleGenerateCallout />
            <p className="text-sm leading-relaxed text-slate-500">
              Need structure notes instead of a full letter? See the{" "}
              <Link
                href="/guides/sample-hoa-appeal-letter-structure"
                className="text-emerald-400 underline-offset-2 hover:underline"
              >
                sample HOA appeal letter structure guide
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="mt-12">
          <AttorneyDisclaimer contextLabel="this sample appeal letter" />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
