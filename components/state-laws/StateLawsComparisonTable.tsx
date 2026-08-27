"use client";

import { useId, useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import {
  filterStateLawRows,
  type StateLawComparisonRow,
} from "@/lib/content/state-laws";

type StateLawsComparisonTableProps = {
  rows: StateLawComparisonRow[];
};

export function StateLawsComparisonTable({
  rows,
}: StateLawsComparisonTableProps) {
  const searchId = useId();
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () => filterStateLawRows(rows, query),
    [rows, query]
  );

  return (
    <div className="mt-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="w-full max-w-md">
          <label
            htmlFor={searchId}
            className="block text-sm font-medium text-slate-300"
          >
            Search states or statutes
          </label>
          <div className="relative mt-2">
            <Search
              className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-500"
              aria-hidden
            />
            <input
              id={searchId}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Filter by state, statute, cap, or notice…"
              autoComplete="off"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 py-2.5 pr-4 pl-10 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 focus:outline-none"
            />
          </div>
        </div>
        <p className="text-sm text-slate-500" aria-live="polite">
          Showing {filtered.length} of {rows.length} states
        </p>
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/40 shadow-xl">
        <table className="min-w-[720px] w-full border-collapse text-left text-sm">
          <caption className="sr-only">
            HOA governing statute, maximum fine cap, and mandatory hearing
            notice period by US state
          </caption>
          <thead className="sticky top-0 z-10 bg-slate-900">
            <tr className="border-b border-slate-800 text-xs font-semibold tracking-wide text-slate-400 uppercase">
              <th scope="col" className="px-4 py-3.5">
                State Name
              </th>
              <th scope="col" className="px-4 py-3.5">
                Primary Governing Statute
              </th>
              <th scope="col" className="px-4 py-3.5">
                Max Fine Limit Cap
              </th>
              <th scope="col" className="px-4 py-3.5">
                Mandatory Hearing Notice Period
              </th>
              <th scope="col" className="px-4 py-3.5">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-10 text-center text-slate-400"
                >
                  No states match “{query.trim()}”. Try a state name or statute
                  keyword.
                </td>
              </tr>
            ) : (
              filtered.map((row) => (
                <tr
                  key={row.code}
                  className="border-b border-slate-800/80 last:border-0 hover:bg-slate-800/40"
                >
                  <th
                    scope="row"
                    className="px-4 py-3.5 font-medium whitespace-nowrap text-white"
                  >
                    {row.name}
                  </th>
                  <td className="px-4 py-3.5 text-slate-300">
                    {row.governingStatute}
                  </td>
                  <td className="px-4 py-3.5 text-slate-300">{row.maxFineCap}</td>
                  <td className="px-4 py-3.5 text-slate-300">
                    {row.hearingNotice}
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <Link
                      href={row.letterHref}
                      className="font-medium text-emerald-400 underline-offset-2 hover:underline"
                    >
                      Generate {row.name} Letter
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
