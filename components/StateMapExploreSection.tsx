import Link from "next/link";
import { InteractiveUSMap } from "@/components/InteractiveUSMap";
import { getStateLawComparisonRows } from "@/lib/content/state-laws";

type StateMapExploreSectionProps = {
  /** Tight spacing when nested under an existing page heading. */
  compact?: boolean;
};

export function StateMapExploreSection({
  compact = false,
}: StateMapExploreSectionProps) {
  const states = getStateLawComparisonRows().map((row) => ({
    code: row.code,
    name: row.name,
    slug: row.slug,
    statute: row.governingStatute,
  }));

  return (
    <section
      id="explore-by-state"
      aria-labelledby="explore-by-state-heading"
      className={
        compact
          ? "mt-10"
          : "scroll-mt-24 border-b border-slate-800/80 bg-slate-950"
      }
    >
      <div className={compact ? "" : "mx-auto max-w-6xl px-4 py-14 sm:py-16"}>
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wider text-emerald-400 uppercase">
            50-state statute map
          </p>
          <h2
            id="explore-by-state-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            Explore HOA appeal rules by state
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-400">
            Highlight a state for its primary HOA statute, then open a
            statute-aware appeal letter for that jurisdiction.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-3 shadow-xl sm:p-5">
          <InteractiveUSMap states={states} />
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Want deadlines, notice windows, and common violations?{" "}
          <Link
            href="/map"
            className="font-medium text-emerald-400 underline-offset-2 hover:underline"
          >
            Open the detailed state map
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
