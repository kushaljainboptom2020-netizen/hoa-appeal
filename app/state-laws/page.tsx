import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNavbar } from "@/components/SiteNavbar";
import { HubExploreLinks } from "@/components/seo/HubExploreLinks";
import { StateMapExploreSection } from "@/components/StateMapExploreSection";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { StateLawsComparisonTable } from "@/components/state-laws/StateLawsComparisonTable";
import { AttorneyDisclaimer } from "@/components/state-legal/AttorneyDisclaimer";
import { getStateLawComparisonRows } from "@/lib/content/state-laws";
import { buildStateLawsTableSchema } from "@/lib/seo/stateLaws";
import { canonicalPath } from "@/lib/seo/siteUrl";

export const metadata: Metadata = {
  title: "HOA Fine Rules by State | MyHOAAppeal",
  description:
    "Compare state HOA fine pages. Cells show a checked limit only where this site opened the section. Otherwise the cell says the figure was not confirmed.",
  alternates: {
    canonical: canonicalPath("/state-laws"),
  },
};

export default function StateLawsPage() {
  const rows = getStateLawComparisonRows();

  return (
    <div className="min-h-screen bg-slate-950">
      <JsonLd schema={buildStateLawsTableSchema(rows)} />
      <SiteNavbar />

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
            HOA fine rules by state
          </h1>
          <p className="mt-4 leading-relaxed text-slate-300">
            A cell states a dollar limit or a number of days only where this
            site checked the official section and kept the exceptions. Every
            other cell says to read the governing documents. Open the state
            page before you put a number in a letter.
          </p>
        </div>

        <HubExploreLinks currentPath="/state-laws" />

        <StateMapExploreSection compact />

        <StateLawsComparisonTable rows={rows} />

        <div className="mt-10">
          <AttorneyDisclaimer contextLabel="this state comparison table" />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
