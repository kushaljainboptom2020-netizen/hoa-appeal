import { ArrowLeft, ArrowRight } from "lucide-react";
import { TOTAL_STEPS } from "@/components/wizard/steps";

type WizardNavProps = {
  currentStep: number;
  onBack: () => void;
  onNext: () => void;
};

export function WizardNav({ currentStep, onBack, onNext }: WizardNavProps) {
  const isFirst = currentStep === 1;
  const isLast = currentStep === TOTAL_STEPS;

  return (
    <div className="mt-8 flex items-center justify-between border-t border-slate-800 pt-6">
      <button
        type="button"
        onClick={onBack}
        disabled={isFirst}
        aria-label={isFirst ? undefined : "Go to previous wizard step"}
        className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-transparent px-5 py-2.5 text-sm font-semibold text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-700 disabled:hover:bg-transparent"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back
      </button>
      {!isLast && (
        <button
          type="button"
          onClick={onNext}
          aria-label="Go to next wizard step"
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
        >
          Next
          <ArrowRight className="h-4 w-4" aria-hidden />
        </button>
      )}
    </div>
  );
}
