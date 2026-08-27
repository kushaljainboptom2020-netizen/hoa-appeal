import type { Metadata } from "next";
import Link from "next/link";
import { Shield } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { HubExploreLinks } from "@/components/seo/HubExploreLinks";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { StateLawsComparisonTable } from "@/components/state-laws/StateLawsComparisonTable";
import { AttorneyDisclaimer } from "@/components/state-legal/AttorneyDisclaimer";
import { getStateLawComparisonRows } from "@/lib/content/state-laws";
import { buildStateLawsTableSchema } from "@/lib/seo/stateLaws";
import { canonicalPath } from "@/lib/seo/siteUrl";

export const metadata: Metadata = {
  title: "HOA Fine Caps and Hearing Notice by State | MyHOAAppeal",
  description:
    "Compare 50-state HOA statutes, fine caps, and hearing notice windows, then generate a custom appeal letter.",
  alternates: {
    canonical: canonicalPath("/state-laws"),
  },
};

export default function StateLawsPage() {
  const rows = getStateLawComparisonRows();

  return (
    <div className="min-h-screen bg-slate-950">
      <JsonLd schema={buildStateLawsTableSchema(rows)} />
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
            { label: "State Laws" },
          ]}
        />

        <div className="mt-8 max-w-3xl text-center sm:text-left">
          <p className="text-sm font-medium tracking-wider text-emerald-400 uppercase">
            50-state comparison
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            HOA Fine Caps and Hearing Notice by State
          </h1>
          <p className="mt-4 leading-relaxed text-slate-300">
            Search this matrix for your state&apos;s primary HOA statute,
            statutory fine ceiling, and mandatory hearing notice window—then
            generate a custom appeal letter in one click.
          </p>
        </div>

        <HubExploreLinks currentPath="/state-laws" />

        <StateLawsComparisonTable rows={rows} />

        <div className="mt-10">
          <AttorneyDisclaimer contextLabel="this state comparison table" />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
