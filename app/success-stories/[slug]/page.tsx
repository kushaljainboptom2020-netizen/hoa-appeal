import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleAttribution } from "@/components/eeat/ArticleAttribution";
import { JsonLd } from "@/components/JsonLd";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { SiteFooter } from "@/components/SiteFooter";
import { AttorneyDisclaimer } from "@/components/state-legal/AttorneyDisclaimer";
import { SourcesAndCitations } from "@/components/state-legal/SourcesAndCitations";
import { resolveAttribution } from "@/lib/content/editorial/attribution";
import { GUIDE_ENTRIES } from "@/lib/content/guides";
import {
  getAllSuccessStorySlugs,
  getSuccessStoryBySlug,
} from "@/lib/content/success-stories";
import { SCHEMA_CONTEXT, ORGANIZATION_ID } from "@/lib/seo/jsonLd";
import { seoDescription, seoTitle } from "@/lib/seo/metaFormat";
import { SITE_URL, canonicalPath } from "@/lib/seo/siteUrl";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllSuccessStorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = getSuccessStoryBySlug(slug);
  if (!story) return {};

  const { author, reviewer } = resolveAttribution(story.attribution);
  const canonical = canonicalPath(`/success-stories/${story.slug}`);
  const title = seoTitle(story.metaTitle);
  const description = seoDescription(story.metaDescription);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    authors: [{ name: author.name, url: `${SITE_URL}${author.profilePath}` }],
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      siteName: "MyHOAAppeal",
      publishedTime: story.attribution.publishedAtIso,
      modifiedTime: story.attribution.updatedAtIso,
    },
    other: {
      "article:author": author.name,
      "article:reviewed_by": reviewer.name,
    },
  };
}

export default async function SuccessStoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = getSuccessStoryBySlug(slug);
  if (!story) notFound();

  const { author, reviewer } = resolveAttribution(story.attribution);
  const pageUrl = `${SITE_URL}/success-stories/${story.slug}`;

  const relatedGuides = story.guideSlugs
    .map((guideSlug) => GUIDE_ENTRIES.find((g) => g.slug === guideSlug))
    .filter((g): g is (typeof GUIDE_ENTRIES)[number] => g !== undefined);

  const structuredData = {
    "@context": SCHEMA_CONTEXT,
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: story.title,
        description: story.metaDescription,
        url: pageUrl,
        datePublished: story.attribution.publishedAtIso,
        dateModified: story.attribution.updatedAtIso,
        inLanguage: "en-US",
        author: {
          "@type": "Person",
          name: author.name,
          url: `${SITE_URL}${author.profilePath}`,
          jobTitle: author.title,
        },
        editor: {
          "@type": "Person",
          name: reviewer.name,
          url: `${SITE_URL}${reviewer.profilePath}`,
          jobTitle: reviewer.title,
        },
        publisher: { "@id": ORGANIZATION_ID },
        about: `HOA fine appeal example in ${story.stateCode}`,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Success stories",
            item: `${SITE_URL}/success-stories`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: story.title,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <header className="border-b border-slate-800/80">
        <div className="mx-auto max-w-6xl px-4 py-5">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Success stories", href: "/success-stories" },
              { label: story.title },
            ]}
          />
        </div>
      </header>

      <JsonLd schema={structuredData} />

      <main id="main-content" className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <p className="text-sm font-medium uppercase tracking-wider text-emerald-400">
          Educational success story
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {story.title}
        </h1>
        <ArticleAttribution attribution={story.attribution} />
        <p className="mt-4 leading-relaxed text-slate-300">{story.summary}</p>

        <section className="mt-10 rounded-xl border border-slate-800 bg-slate-900/40 p-5" aria-labelledby="outcome-heading">
          <h2 id="outcome-heading" className="text-lg font-semibold text-white">
            Outcome
          </h2>
          <p className="mt-3 leading-relaxed text-slate-300">{story.outcome}</p>
          <p className="mt-4 text-sm text-slate-400">
            <span className="font-medium text-slate-200">Timeline:</span> {story.timeline}
          </p>
        </section>

        {story.body.map((section) => (
          <section key={section.heading} className="mt-8">
            <h2 className="text-xl font-semibold text-white">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mt-4 leading-relaxed text-slate-300">
                {paragraph}
              </p>
            ))}
          </section>
        ))}

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-white">What made the appeal stronger</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-slate-300">
            {story.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <h2 className="text-lg font-semibold text-white">Related resources</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Use these guides and the state tool page to adapt this approach to your situation.
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {relatedGuides.map((guide) => (
              <li key={guide.slug}>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="text-emerald-400 underline-offset-2 hover:underline"
                >
                  {guide.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={`/appeal-hoa-fine/${story.stateSlug}`}
                className="text-emerald-400 underline-offset-2 hover:underline"
              >
                {story.stateCode} HOA fine appeal letter tool
              </Link>
            </li>
            <li>
              <Link href="/" className="text-emerald-400 underline-offset-2 hover:underline">
                Start the free appeal letter wizard
              </Link>
            </li>
          </ul>
        </section>

        <div className="mt-10 space-y-8">
          <SourcesAndCitations
            sources={story.sources}
            intro="Primary references behind the educational framing of this example."
          />
          <AttorneyDisclaimer contextLabel="this success story" />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
