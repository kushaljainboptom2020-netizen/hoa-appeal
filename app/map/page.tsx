import type { Metadata } from "next";
import Link from "next/link";
import { Shield } from "lucide-react";
import { UsStatesMap } from "@/components/map/UsStatesMap";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { HubExploreLinks } from "@/components/seo/HubExploreLinks";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { getStateMapSummaries } from "@/lib/content/map";
import {
  SCHEMA_CONTEXT,
  WEBSITE_ID,
  asGraphNode,
  type JsonLdGraph,
} from "@/lib/seo/jsonLd";
import { SITE_URL, canonicalPath } from "@/lib/seo/siteUrl";

export const metadata: Metadata = {
  title: "Interactive US HOA Law Map | MyHOAAppeal",
  description:
    "Explore HOA fine appeal laws by state. Hover any state for overview, appeal deadlines, and common violations—then open the full state guide.",
  alternates: {
    canonical: canonicalPath("/map"),
  },
};

function buildMapSchema(): JsonLdGraph {
  const pageUrl = `${SITE_URL}/map`;

  return {
    "@context": SCHEMA_CONTEXT,
    "@graph": [
      asGraphNode({
        "@type": "WebPage",
        "@id": pageUrl,
        name: "Interactive US HOA Law Map",
        description:
          "Interactive United States map of HOA fine appeal rules, deadlines, and common violations by state.",
        url: pageUrl,
        isPartOf: { "@id": WEBSITE_ID },
      }),
      asGraphNode({
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
            name: "State Map",
            item: pageUrl,
          },
        ],
      }),
    ],
  };
}

export default function MapPage() {
  const summaries = getStateMapSummaries();

  return (
    <div className="min-h-screen bg-slate-950">
      <JsonLd schema={buildMapSchema()} />
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
            { label: "State Map" },
          ]}
        />

        <div className="mt-8 max-w-3xl text-center sm:text-left">
          <p className="text-sm font-medium uppercase tracking-wider text-emerald-400">
            Browse by geography
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Interactive US HOA Law Map
          </h1>
          <p className="mt-4 leading-relaxed text-slate-300">
            Hover any state for a quick look at HOA rules, appeal deadlines, and
            common violations. Click to open the full state guide and letter
            tools.
          </p>
        </div>

        <HubExploreLinks currentPath="/map" />

        <div className="mt-10">
          <UsStatesMap summaries={summaries} />
        </div>

        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-slate-500">
          Educational guidance only—not legal advice. Confirm deadlines in your
          governing documents and consult a licensed attorney when stakes are
          high.
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
