import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideResource } from "@/components/guides/GuideResource";
import { JsonLd } from "@/components/JsonLd";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { SiteFooter } from "@/components/SiteFooter";
import {
  getAllGuideSlugs,
  getGuideBySlug,
} from "@/lib/content/guides";
import {
  buildGuideMetadata,
  buildGuideStructuredDataGraph,
} from "@/lib/seo/guides";

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return buildGuideMetadata(guide);
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  return (
    <div className="min-h-screen bg-slate-950">
      <JsonLd schema={buildGuideStructuredDataGraph(guide)} />

      <header className="border-b border-slate-800/80">
        <div className="mx-auto max-w-6xl px-4 py-5">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Guides", href: "/guides" },
              { label: guide.title },
            ]}
          />
        </div>
      </header>

      <main id="main-content">
        <GuideResource guide={guide} />
      </main>

      <SiteFooter />
    </div>
  );
}
