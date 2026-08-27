import Link from "next/link";
import { StateGrid } from "@/components/StateGrid";

export function StateBrowseFooter() {
  return (
    <section
      id="browse-by-state"
      className="scroll-mt-24 border-t border-slate-800 bg-slate-900/30"
      aria-label="Browse appeal letters by state"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <h2 className="text-lg font-semibold text-white sm:text-xl">
          Browse by State
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-400">
          Find a free HOA fine appeal letter generator tailored to your
          state&apos;s requirements.{" "}
          <Link
            href="/state-laws"
            className="text-emerald-400 underline-offset-2 hover:underline"
          >
            Compare fine caps by state
          </Link>
          {" "}
          or{" "}
          <Link
            href="/map"
            className="text-emerald-400 underline-offset-2 hover:underline"
          >
            explore the interactive map
          </Link>
          .
        </p>
        <StateGrid />
      </div>
    </section>
  );
}
