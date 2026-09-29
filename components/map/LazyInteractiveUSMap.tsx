"use client";

import { useCallback, type ReactNode } from "react";
import { LazyIsland } from "@/components/perf/LazyIsland";
import type { InteractiveMapState } from "@/components/InteractiveUSMap";

type LazyInteractiveUSMapProps = {
  states: InteractiveMapState[];
  /** Server-rendered {@link MapPlaceholder}. */
  placeholder: ReactNode;
};

/**
 * Loads the homepage map once it approaches the viewport. The map carries
 * 214 KB of SVG path data, and it sits well below the fold.
 */
export function LazyInteractiveUSMap({
  states,
  placeholder,
}: LazyInteractiveUSMapProps) {
  const load = useCallback(
    () => import("@/components/InteractiveUSMap").then((m) => m.InteractiveUSMap),
    []
  );

  return (
    <LazyIsland
      load={load}
      componentProps={{ states }}
      placeholder={placeholder}
    />
  );
}
