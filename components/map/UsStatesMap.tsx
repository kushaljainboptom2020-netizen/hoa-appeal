"use client";

import { useRouter } from "next/navigation";
import { useId, useState } from "react";
import type { StateMapSummary } from "@/lib/content/map";
import { StateMapPanel } from "./StateMapPanel";
import { UsMapSvg } from "./UsMapSvg";

type UsStatesMapProps = {
  summaries: StateMapSummary[];
};

export function UsStatesMap({ summaries }: UsStatesMapProps) {
  const router = useRouter();
  const panelId = useId();
  const selectId = useId();
  const byCode = new Map(summaries.map((summary) => [summary.code, summary]));

  const [hoveredCode, setHoveredCode] = useState<string | null>(null);
  const [focusedCode, setFocusedCode] = useState<string | null>(null);
  const [selectedCode, setSelectedCode] = useState<string | null>(null);

  const activeCode = hoveredCode ?? focusedCode ?? selectedCode;
  const activeSummary = activeCode ? byCode.get(activeCode) ?? null : null;

  const getLabel = (code: string) => byCode.get(code)?.name ?? code;

  const openGuide = (code: string) => {
    const summary = byCode.get(code);
    if (!summary) return;
    router.push(summary.href);
  };

  const isCoarsePointer = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;

  const activateState = (
    code: string,
    source: "pointer" | "keyboard"
  ) => {
    setSelectedCode(code);

    // Keyboard and fine pointers open the guide immediately.
    // Coarse (touch): first tap shows the panel; second tap opens the guide.
    if (source === "keyboard" || !isCoarsePointer()) {
      openGuide(code);
      return;
    }

    if (selectedCode === code) {
      openGuide(code);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.9fr)] lg:items-start">
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-3 sm:p-4">
          <UsMapSvg
            activeCode={activeCode}
            onHover={setHoveredCode}
            onFocus={setFocusedCode}
            onActivate={activateState}
            getLabel={getLabel}
          />
        </div>

        <StateMapPanel summary={activeSummary} panelId={panelId} />
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900/40 px-5 py-4">
        <label htmlFor={selectId} className="block text-sm font-medium text-slate-200">
          Or choose a state
        </label>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
          <select
            id={selectId}
            value={selectedCode ?? ""}
            onChange={(event) => {
              const code = event.target.value;
              if (!code) {
                setSelectedCode(null);
                return;
              }
              setSelectedCode(code);
            }}
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-slate-100 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 sm:max-w-xs"
            aria-describedby={panelId}
          >
            <option value="">Select a state…</option>
            {summaries.map((summary) => (
              <option key={summary.code} value={summary.code}>
                {summary.name}
              </option>
            ))}
          </select>
          {selectedCode ? (
            <button
              type="button"
              onClick={() => openGuide(selectedCode)}
              className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Open guide
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
