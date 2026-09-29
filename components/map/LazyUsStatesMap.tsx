"use client";

import { useCallback, type ReactNode } from "react";
import { LazyIsland } from "@/components/perf/LazyIsland";
import type { StateMapSummary } from "@/lib/content/map/types";

type LazyUsStatesMapProps = {
  summaries: StateMapSummary[];
  /** Server-rendered {@link MapPlaceholder}. */
  placeholder: ReactNode;
};

/**
 * Loads the detailed /map view once it approaches the viewport, keeping the
 * 214 KB of SVG path data out of the initial payload.
 */
export function LazyUsStatesMap({
  summaries,
  placeholder,
}: LazyUsStatesMapProps) {
  const load = useCallback(
    () => import("@/components/map/UsStatesMap").then((m) => m.UsStatesMap),
    []
  );

  return (
    <LazyIsland
      load={load}
      componentProps={{ summaries }}
      placeholder={placeholder}
    />
  );
}
