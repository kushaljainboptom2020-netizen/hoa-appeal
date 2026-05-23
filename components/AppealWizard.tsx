"use client";

import { useCallback, useState } from "react";
import { AdSensePlaceholder } from "@/components/monetization/AdSensePlaceholder";
import { WizardNav } from "@/components/WizardNav";
import { WizardStepPanel } from "@/components/WizardStepPanel";
import { WizardStepper } from "@/components/WizardStepper";
import { TOTAL_STEPS } from "@/components/wizard/steps";
import {
  hasErrors,
  initialFormData,
  updateFormField,
  validateStep,
  type AppealFormData,
  type FormErrors,
} from "@/lib/wizard/formState";

type AppealWizardProps = {
  initialState?: string;
  statePageLabel?: string;
};

export function AppealWizard({
  initialState,
  statePageLabel,
}: AppealWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<AppealFormData>(() => ({
    ...initialFormData,
    ...(initialState ? { state: initialState } : {}),
  }));
  const [errors, setErrors] = useState<FormErrors>({});
  const [showErrors, setShowErrors] = useState(false);

  const handleChange = useCallback(
    <K extends keyof AppealFormData>(field: K, value: AppealFormData[K]) => {
      setFormData((prev) => updateFormField(prev, field, value));
      setErrors((prev) => {
        if (!prev[field]) return prev;
        const next = { ...prev };
        delete next[field];
        return next;
      });
    },
    []
  );

  const handleNext = () => {
    if (currentStep >= TOTAL_STEPS) return;

    const stepErrors = validateStep(currentStep, formData);
    if (hasErrors(stepErrors)) {
      setErrors(stepErrors);
      setShowErrors(true);
      return;
    }

    setErrors({});
    setShowErrors(false);
    setCurrentStep((s) => Math.min(TOTAL_STEPS, s + 1));
  };

  const handleBack = () => {
    setErrors({});
    setShowErrors(false);
    setCurrentStep((s) => Math.max(1, s - 1));
  };

  return (
    <section
      id="appeal-wizard"
      aria-labelledby="appeal-wizard-heading"
      className="mx-auto max-w-6xl scroll-mt-8 px-4 pb-24 pt-8"
    >
      <div className="mb-8 text-center md:text-left">
        <h2
          id="appeal-wizard-heading"
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          Create Your Appeal Letter
        </h2>
        <p className="mt-2 text-slate-400">
          Complete each step below. Your letter updates as you go.
        </p>
      </div>

      <AdSensePlaceholder
        slotLabel="Above wizard"
        size="leaderboard"
        className="mb-6"
      />

      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-xl sm:p-8">
        <WizardStepper currentStep={currentStep} />
        <WizardStepPanel
          currentStep={currentStep}
          formData={formData}
          errors={errors}
          showErrors={showErrors}
          onChange={handleChange}
          statePageLabel={statePageLabel}
        />
        <WizardNav
          currentStep={currentStep}
          onBack={handleBack}
          onNext={handleNext}
        />
      </div>
    </section>
  );
}
