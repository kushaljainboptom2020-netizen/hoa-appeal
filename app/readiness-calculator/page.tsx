import type { Metadata } from "next";
import Link from "next/link";
import { Shield } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { AppealReadinessCalculator } from "@/components/readiness/AppealReadinessCalculator";
import { SiteFooter } from "@/components/SiteFooter";
import { HubExploreLinks } from "@/components/seo/HubExploreLinks";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { getReadinessCalculator } from "@/lib/content/readiness";
import {
  SCHEMA_CONTEXT,
  WEBSITE_ID,
  asGraphNode,
  type JsonLdGraph,
} from "@/lib/seo/jsonLd";
import { SITE_URL, canonicalPath } from "@/lib/seo/siteUrl";

export const metadata: Metadata = {
  title: "HOA Appeal Readiness Calculator | MyHOAAppeal",
  description:
    "Answer questions about your HOA fine appeal and get an informational readiness score with strengths, weaknesses, missing documents, and next steps.",
  alternates: {
    canonical: canonicalPath("/readiness-calculator"),
  },
};

function buildReadinessSchema(): JsonLdGraph {
  const pageUrl = `${SITE_URL}/readiness-calculator`;
  const calculator = getReadinessCalculator();

  return {
    "@context": SCHEMA_CONTEXT,
    "@graph": [
      asGraphNode({
        "@type": "WebPage",
        "@id": pageUrl,
        name: calculator.heading,
        description: calculator.intro,
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
            name: "Readiness Calculator",
            item: pageUrl,
          },
        ],
      }),
    ],
  };
}

export default function ReadinessCalculatorPage() {
  const calculator = getReadinessCalculator();

  return (
    <div className="min-h-screen bg-slate-950">
      <JsonLd schema={buildReadinessSchema()} />
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
            { label: "Readiness Calculator" },
          ]}
        />

        <div className="mt-8 max-w-3xl text-center sm:text-left">
          <p className="text-sm font-medium uppercase tracking-wider text-emerald-400">
            Self-check tool
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {calculator.heading}
          </h1>
          <p className="mt-4 leading-relaxed text-slate-300">
            Walk through notice, deadlines, documents, evidence, and letter
            readiness. Your score highlights what is working, what is weak, which
            documents are missing, and what to do next.
          </p>
        </div>

        <HubExploreLinks currentPath="/readiness-calculator" />

        <div className="mt-10 max-w-3xl">
          <AppealReadinessCalculator />
        </div>

        <aside className="mt-10 max-w-3xl rounded-xl border border-slate-800 bg-slate-900/40 px-5 py-4">
          <p className="text-sm font-medium text-slate-200">Important</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            {calculator.disclaimer}
          </p>
        </aside>
      </main>

      <SiteFooter />
    </div>
  );
}
