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

        <section className="mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-slate-300">
          <h2 className="text-lg font-semibold text-white">When this sample is useful</h2>
          <p>
            Use it when your notice is about the same kind of dispute as this
            title. It is a fictional letter. It does not report a hearing and it
            does not guarantee that a board will waive a fine.
          </p>
          <h2 className="text-lg font-semibold text-white">What to customize</h2>
          <p>
            Replace the name, address, dates, amounts, rule numbers, and every
            fact that is not true of your property. If the sample mentions a
            cure period or a fine schedule, quote your declaration instead.
          </p>
          <h2 className="text-lg font-semibold text-white">What to attach</h2>
          <p>
            Attach the notice, the rule it cites, dated photos or receipts, and
            proof of how you send the letter. Do not attach this sample page.
          </p>
          <h2 className="text-lg font-semibold text-white">What not to claim</h2>
          <p>
            Do not claim the association already decided in your favor. Do not
            copy a statute from another state. Do not say the letter is legal
            advice. Do not sign with a name used on this site&apos;s editorial
            pages.
          </p>
        </section>

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
