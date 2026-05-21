import { Check } from "lucide-react";
import { STEPS } from "@/components/wizard/steps";

type WizardStepperProps = {
  currentStep: number;
};

export function WizardStepper({ currentStep }: WizardStepperProps) {
  return (
    <>
      {/* Mobile: compact step indicator */}
      <div
        className="mb-8 md:hidden"
        role="status"
        aria-live="polite"
        aria-label={`Wizard progress: step ${currentStep} of ${STEPS.length}`}
      >
        <p className="text-sm font-medium text-slate-400">
          Step {currentStep} of {STEPS.length}
        </p>
        <p className="mt-1 text-lg font-semibold text-white">
          {STEPS[currentStep - 1]?.label}
        </p>
        <div className="mt-4 flex gap-2">
          {STEPS.map((step) => {
            const isCompleted = step.id < currentStep;
            const isActive = step.id === currentStep;
            return (
              <div
                key={step.id}
                className={`h-1.5 flex-1 rounded-full transition-colors ${
                  isCompleted || isActive ? "bg-emerald-500" : "bg-slate-700"
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Desktop: full horizontal stepper */}
      <nav aria-label="Progress" className="mb-10 hidden md:block">
        <ol className="flex items-center">
          {STEPS.map((step, index) => {
            const isCompleted = step.id < currentStep;
            const isActive = step.id === currentStep;
            const isLast = index === STEPS.length - 1;

            return (
              <li
                key={step.id}
                className={`flex items-center ${isLast ? "" : "flex-1"}`}
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors ${
                      isCompleted
                        ? "border-emerald-500 bg-emerald-500 text-white"
                        : isActive
                          ? "border-emerald-500 bg-slate-900 text-emerald-400 ring-4 ring-emerald-500/20"
                          : "border-slate-600 bg-slate-800 text-slate-500"
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="h-5 w-5" aria-hidden />
                    ) : (
                      step.id
                    )}
                  </div>
                  <span
                    className={`mt-2 text-sm font-medium ${
                      isActive
                        ? "text-white"
                        : isCompleted
                          ? "text-emerald-400"
                          : "text-slate-500"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {!isLast && (
                  <div
                    className={`mx-4 h-0.5 flex-1 transition-colors ${
                      isCompleted ? "bg-emerald-500" : "bg-slate-700"
                    }`}
                    aria-hidden
                  />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
