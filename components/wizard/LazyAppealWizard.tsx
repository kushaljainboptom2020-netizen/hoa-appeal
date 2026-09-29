"use client";

import { useCallback, type ReactNode } from "react";
import { LazyIsland } from "@/components/perf/LazyIsland";
import { WIZARD_PREFILL_EVENT } from "@/lib/wizard/prefill";

type LazyAppealWizardProps = {
  initialState?: string;
  statePageLabel?: string;
  /** Server-rendered {@link WizardStaticShell}, shown until the wizard loads. */
  placeholder: ReactNode;
};

/**
 * Loads the appeal wizard once it is close to the viewport.
 *
 * The wizard is the heaviest island on the homepage and on all 50 state pages,
 * and it always sits below the fold, so its JavaScript competes with first
 * paint for no benefit. Splitting it here keeps it out of the initial bundle.
 *
 * A prefill from the fine calculator higher up the page also forces the load;
 * the wizard picks up the pending selection itself on first render.
 */
export function LazyAppealWizard({
  initialState,
  statePageLabel,
  placeholder,
}: LazyAppealWizardProps) {
  const load = useCallback(
    () => import("@/components/AppealWizard").then((m) => m.AppealWizard),
    []
  );

  return (
    <LazyIsland
      load={load}
      componentProps={{ initialState, statePageLabel }}
      placeholder={placeholder}
      loadOnEvent={WIZARD_PREFILL_EVENT}
    />
  );
}
