"use client";

import { useRouter } from "next/navigation";
import { useId, useState } from "react";
import { US_MAP_VIEWBOX, US_STATE_PATHS } from "@/lib/content/map";

export type InteractiveMapState = {
  code: string;
  name: string;
  slug: string;
  statute: string;
};

type InteractiveUSMapProps = {
  states: InteractiveMapState[];
};

function isCoarsePointer() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  );
}

export function InteractiveUSMap({ states }: InteractiveUSMapProps) {
  const router = useRouter();
  const tooltipId = useId();
  const byCode = new Map(states.map((state) => [state.code, state]));

  const [hoveredCode, setHoveredCode] = useState<string | null>(null);
  const [focusedCode, setFocusedCode] = useState<string | null>(null);
  const [selectedCode, setSelectedCode] = useState<string | null>(null);

  const activeCode = hoveredCode ?? focusedCode ?? selectedCode;
  const active = activeCode ? byCode.get(activeCode) ?? null : null;

  const openState = (code: string) => {
    const state = byCode.get(code);
    if (!state) return;
    router.push(`/appeal-hoa-fine/${state.slug}`);
  };

  const activateState = (code: string, source: "pointer" | "keyboard") => {
    setSelectedCode(code);
    if (source === "keyboard" || !isCoarsePointer()) {
      openState(code);
      return;
    }
    if (selectedCode === code) {
      openState(code);
    }
  };

  return (
    <div className="relative">
      <svg
        viewBox={US_MAP_VIEWBOX}
        role="img"
        aria-label="Interactive map of United States HOA appeal statutes"
        className="h-auto w-full touch-manipulation"
      >
        <title>United States HOA statute map</title>
        {Object.entries(US_STATE_PATHS).map(([code, d]) => {
          const state = byCode.get(code);
          if (!state) return null;
          const isActive = activeCode === code;
          return (
            <path
              key={code}
              id={`interactive-map-state-${code}`}
              data-code={code}
              d={d}
              tabIndex={0}
              role="link"
              aria-label={`${state.name}. ${state.statute}. View HOA appeal page.`}
              aria-describedby={isActive ? tooltipId : undefined}
              className={`cursor-pointer stroke-slate-950 stroke-[1.25] outline-none transition-[fill,stroke] duration-150 focus-visible:stroke-emerald-300 focus-visible:stroke-[2] ${
                isActive ? "" : "fill-slate-700 hover:fill-[#10b981]"
              }`}
              style={isActive ? { fill: "#10b981" } : undefined}
              onMouseEnter={() => setHoveredCode(code)}
              onMouseLeave={() => setHoveredCode(null)}
              onFocus={() => setFocusedCode(code)}
              onBlur={() => setFocusedCode(null)}
              onClick={() => activateState(code, "pointer")}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  activateState(code, "keyboard");
                }
              }}
            />
          );
        })}
      </svg>

      <div
        id={tooltipId}
        role="tooltip"
        className="pointer-events-none mt-3 min-h-[3.25rem] rounded-lg border border-slate-800 bg-slate-950/90 px-3.5 py-2.5 text-sm shadow-lg shadow-black/30 backdrop-blur-sm"
      >
        {active ? (
          <p className="text-slate-200">
            <span className="font-semibold text-white">{active.name}</span>
            <span className="text-slate-500"> — </span>
            <span className="text-emerald-300">{active.statute}</span>
          </p>
        ) : (
          <p className="text-slate-500">
            Hover or tap a state to see its key statutory rule. Click to open
            that state&apos;s appeal page.
          </p>
        )}
      </div>
    </div>
  );
}
