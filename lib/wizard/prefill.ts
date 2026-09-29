import type { ViolationCategory } from "@/lib/wizard/constants";

export const WIZARD_PREFILL_EVENT = "hoa-wizard-prefill";

export type WizardPrefillDetail = {
  state: string;
  violationCategory: Exclude<ViolationCategory, "">;
};

type PrefillHost = { __hoaWizardPrefill?: WizardPrefillDetail | null };

/**
 * The handoff is parked on `window` rather than in a module variable.
 *
 * The fine calculator ships in the initial bundle; the wizard is code-split and
 * arrives later, in a chunk that gets its own copy of this module. A module
 * level variable would therefore not be shared between them, and a React state
 * update is not guaranteed to have flushed before the wizard's first render.
 * `window` is the one place both are certain to agree on.
 */
export function dispatchWizardPrefill(detail: WizardPrefillDetail): void {
  (window as unknown as PrefillHost).__hoaWizardPrefill = detail;
  window.dispatchEvent(
    new CustomEvent<WizardPrefillDetail>(WIZARD_PREFILL_EVENT, { detail })
  );
}

/**
 * Reads and clears a prefill requested before the wizard existed. Safe to call
 * during render; returns null when there is nothing waiting.
 */
export function takePendingWizardPrefill(): WizardPrefillDetail | null {
  if (typeof window === "undefined") return null;
  const host = window as unknown as PrefillHost;
  const detail = host.__hoaWizardPrefill ?? null;
  host.__hoaWizardPrefill = null;
  return detail;
}
