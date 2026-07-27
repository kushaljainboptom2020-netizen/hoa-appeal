"use client";

import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import {
  STATE_SEO_CONFIG,
  type StateSeoConfig,
} from "@/lib/seo/statePages";

const POPULAR_CODES = ["CA", "FL", "TX", "NC", "GA"] as const;

function statuteCoverageTag(state: StateSeoConfig): string {
  const clause = state.letterStatuteClause.replace(/^the\s+/i, "");

  const chapter = clause.match(/Chapter\s+[\d.A-Za-z\-]+/i);
  if (chapter) return `${chapter[0]} Covered`;

  const sections = clause.match(
    /(?:Civil Code\s+)?Sections?\s+[\d]+(?:\s*(?:through|–|-)\s*[\d]+)?/i,
  );
  if (sections) {
    return `${sections[0].replace(/\s*through\s*/i, "–")} Covered`;
  }

  const titleChapter = clause.match(
    /Title\s+\d+(?:,\s*Chapter\s+[\d.A-Za-z\-]+)?/i,
  );
  if (titleChapter) {
    return `${titleChapter[0].replace(/,\s*Chapter/i, ", Ch.")} Covered`;
  }

  const short = clause.length > 36 ? `${clause.slice(0, 33).trimEnd()}…` : clause;
  return short;
}

function matchesQuery(state: StateSeoConfig, query: string): boolean {
  if (!query) return true;
  const q = query.toLowerCase();
  return (
    state.name.toLowerCase().includes(q) ||
    state.code.toLowerCase().includes(q) ||
    state.slug.toLowerCase().includes(q)
  );
}

type StateCardProps = {
  state: StateSeoConfig;
  featured?: boolean;
};

function StateCard({ state, featured = false }: StateCardProps) {
  return (
    <Link
      href={`/appeal-hoa-fine/${state.slug}`}
      className={`group flex h-full flex-col rounded-xl border bg-slate-900/70 p-4 transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
        featured
          ? "border-emerald-500/25 shadow-[0_0_0_1px_rgba(16,185,129,0.08)] hover:border-emerald-400/50 hover:bg-emerald-500/10 hover:shadow-lg hover:shadow-emerald-500/15"
          : "border-slate-800 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:shadow-lg hover:shadow-emerald-500/10"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={`inline-flex min-w-10 items-center justify-center rounded-md px-2 py-1 font-mono text-xs font-semibold tracking-wide ${
            featured
              ? "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30"
              : "bg-slate-800 text-slate-300 ring-1 ring-slate-700"
          }`}
        >
          {state.code}
        </span>
        <ArrowRight
          className="h-4 w-4 shrink-0 text-slate-600 transition duration-200 group-hover:translate-x-0.5 group-hover:text-emerald-400"
          aria-hidden
        />
      </div>
      <p className="mt-3 text-sm font-semibold text-white transition-colors group-hover:text-emerald-100">
        {state.name}
      </p>
      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-500 transition-colors group-hover:text-emerald-300/80">
        {statuteCoverageTag(state)}
      </p>
    </Link>
  );
}

export function StateGrid() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim());

  const { featured, rest, totalMatches } = useMemo(() => {
    const filtered = STATE_SEO_CONFIG.filter((state) =>
      matchesQuery(state, deferredQuery),
    );
    const popularSet = new Set<string>(POPULAR_CODES);
    const featuredStates = POPULAR_CODES.map((code) =>
      filtered.find((state) => state.code === code),
    ).filter((state): state is StateSeoConfig => Boolean(state));
    const restStates = filtered.filter((state) => !popularSet.has(state.code));

    return {
      featured: featuredStates,
      rest: restStates,
      totalMatches: filtered.length,
    };
  }, [deferredQuery]);

  return (
    <div className="mt-8 space-y-8">
      <label className="relative block">
        <span className="sr-only">Search your state</span>
        <Search
          className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-500"
          aria-hidden
        />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search your state (e.g., Texas, Florida, California...)"
          autoComplete="off"
          className="w-full rounded-xl border border-slate-800 bg-slate-950/80 py-3 pr-4 pl-10 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition-[border-color,box-shadow] focus:border-emerald-500/40 focus:ring-2 focus:ring-emerald-500/20"
        />
      </label>

      {totalMatches === 0 ? (
        <p className="rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-8 text-center text-sm text-slate-400">
          No states match &ldquo;{query.trim()}&rdquo;. Try a full name or
          abbreviation like FL or TX.
        </p>
      ) : (
        <>
          {featured.length > 0 ? (
            <div>
              <div className="mb-3 flex items-center gap-2">
                <h3 className="text-sm font-semibold tracking-wide text-emerald-300 uppercase">
                  Featured
                </h3>
                <span className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-300/90">
                  Popular States
                </span>
              </div>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {featured.map((state) => (
                  <li key={state.code}>
                    <StateCard state={state} featured />
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {rest.length > 0 ? (
            <div>
              <h3 className="mb-3 text-sm font-semibold text-slate-300">
                {deferredQuery ? "Matching states" : "All states"}
              </h3>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {rest.map((state) => (
                  <li key={state.code}>
                    <StateCard state={state} />
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
