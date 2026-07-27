import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaqResource } from "@/components/faq/FaqResource";
import { JsonLd } from "@/components/JsonLd";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { SiteFooter } from "@/components/SiteFooter";
import { getAllFaqSlugs, getFaqBySlug } from "@/lib/content/faq";
import {
  buildFaqMetadata,
  buildFaqStructuredDataGraph,
} from "@/lib/seo/faq";

export async function generateStaticParams() {
  return getAllFaqSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const faq = getFaqBySlug(slug);
  if (!faq) return {};
  return buildFaqMetadata(faq);
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const faq = getFaqBySlug(slug);
  if (!faq) notFound();

  return (
    <div className="min-h-screen bg-slate-950">
      <JsonLd schema={buildFaqStructuredDataGraph(faq)} />

      <header className="border-b border-slate-800/80">
        <div className="mx-auto max-w-6xl px-4 py-5">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "FAQ", href: "/faq" },
              { label: faq.question },
            ]}
          />
        </div>
      </header>

      <main id="main-content">
        <FaqResource faq={faq} />
      </main>

      <SiteFooter />
    </div>
  );
}
