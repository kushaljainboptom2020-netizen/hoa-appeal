import type { ViolationCategory } from "@/lib/wizard/constants";

export const WIZARD_PREFILL_EVENT = "hoa-wizard-prefill";

export type WizardPrefillDetail = {
  state: string;
  violationCategory: Exclude<ViolationCategory, "">;
};

export function dispatchWizardPrefill(detail: WizardPrefillDetail): void {
  window.dispatchEvent(
    new CustomEvent<WizardPrefillDetail>(WIZARD_PREFILL_EVENT, { detail })
  );
}
