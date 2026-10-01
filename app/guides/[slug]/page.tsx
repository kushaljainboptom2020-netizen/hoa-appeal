import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideResource } from "@/components/guides/GuideResource";
import { JsonLd } from "@/components/JsonLd";
import { PageChrome } from "@/components/seo/PageChrome";
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
    <PageChrome
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: guide.title },
      ]}
    >
      <JsonLd schema={buildGuideStructuredDataGraph(guide)} />
      <main id="main-content">
        <GuideResource guide={guide} />
      </main>
    </PageChrome>
  );
}
