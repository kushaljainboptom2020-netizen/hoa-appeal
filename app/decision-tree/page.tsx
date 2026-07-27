import type { Metadata } from "next";
import Link from "next/link";
import { Shield } from "lucide-react";
import { HoaDecisionTree } from "@/components/decision-tree/HoaDecisionTree";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { HubExploreLinks } from "@/components/seo/HubExploreLinks";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { getDecisionTree } from "@/lib/content/decision-tree";
import {
  SCHEMA_CONTEXT,
  WEBSITE_ID,
  asGraphNode,
  type JsonLdGraph,
} from "@/lib/seo/jsonLd";
import { SITE_URL, canonicalPath } from "@/lib/seo/siteUrl";

export const metadata: Metadata = {
  title: "HOA Fine Appeal Decision Tree | MyHOAAppeal",
  description:
    "Answer a few questions about your HOA fine and get guided recommendations for guides, state pages, letter templates, and appeal tools.",
  alternates: {
    canonical: canonicalPath("/decision-tree"),
  },
};

function buildDecisionTreeSchema(): JsonLdGraph {
  const pageUrl = `${SITE_URL}/decision-tree`;
  const tree = getDecisionTree();

  return {
    "@context": SCHEMA_CONTEXT,
    "@graph": [
      asGraphNode({
        "@type": "WebPage",
        "@id": pageUrl,
        name: tree.heading,
        description: tree.intro,
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
            name: "Decision Tree",
            item: pageUrl,
          },
        ],
      }),
    ],
  };
}

export default function DecisionTreePage() {
  const tree = getDecisionTree();

  return (
    <div className="min-h-screen bg-slate-950">
      <JsonLd schema={buildDecisionTreeSchema()} />
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
            { label: "Decision Tree" },
          ]}
        />

        <div className="mt-8 max-w-3xl text-center sm:text-left">
          <p className="text-sm font-medium uppercase tracking-wider text-emerald-400">
            Guided recommendations
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {tree.heading}
          </h1>
          <p className="mt-4 leading-relaxed text-slate-300">
            Tell us where you are in the HOA fine process. We will point you to
            the right guides, your state page, letter templates, and tools—so you
            do not have to search the library manually.
          </p>
        </div>

        <HubExploreLinks currentPath="/decision-tree" />

        <div className="mt-10 max-w-3xl">
          <HoaDecisionTree />
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
