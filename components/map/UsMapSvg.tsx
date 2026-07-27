"use client";

import { US_MAP_VIEWBOX, US_STATE_PATHS } from "@/lib/content/map";

type UsMapSvgProps = {
  activeCode: string | null;
  onHover: (code: string | null) => void;
  onFocus: (code: string | null) => void;
  onActivate: (code: string, source: "pointer" | "keyboard") => void;
  getLabel: (code: string) => string;
};

export function UsMapSvg({
  activeCode,
  onHover,
  onFocus,
  onActivate,
  getLabel,
}: UsMapSvgProps) {
  return (
    <svg
      viewBox={US_MAP_VIEWBOX}
      role="img"
      aria-label="Interactive map of United States HOA fine appeal guides"
      className="h-auto w-full touch-manipulation"
    >
      <title>United States HOA law map</title>
      {Object.entries(US_STATE_PATHS).map(([code, d]) => {
        const isActive = activeCode === code;
        return (
          <path
            key={code}
            id={`map-state-${code}`}
            data-code={code}
            d={d}
            tabIndex={0}
            role="link"
            aria-label={`${getLabel(code)}. View HOA appeal guide.`}
            className={`cursor-pointer stroke-slate-950 stroke-[1.25] outline-none transition-[fill,stroke] duration-150 focus-visible:stroke-emerald-400 focus-visible:stroke-[2] ${
              isActive
                ? "fill-emerald-500/55 stroke-emerald-400"
                : "fill-slate-700 hover:fill-emerald-500/35"
            }`}
            onMouseEnter={() => onHover(code)}
            onMouseLeave={() => onHover(null)}
            onFocus={() => onFocus(code)}
            onBlur={() => onFocus(null)}
            onClick={() => onActivate(code, "pointer")}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onActivate(code, "keyboard");
              }
            }}
          />
        );
      })}
    </svg>
  );
}
