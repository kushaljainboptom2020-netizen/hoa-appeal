import { BasicInfoStep } from "@/components/wizard/steps/BasicInfoStep";
import { DefenseStep } from "@/components/wizard/steps/DefenseStep";
import { PreviewExportStep } from "@/components/wizard/steps/PreviewExportStep";
import { ViolationDetailsStep } from "@/components/wizard/steps/ViolationDetailsStep";
import type { AppealFormData, FormErrors } from "@/lib/wizard/formState";

type WizardStepPanelProps = {
  currentStep: number;
  formData: AppealFormData;
  errors: FormErrors;
  showErrors: boolean;
  onChange: <K extends keyof AppealFormData>(
    field: K,
    value: AppealFormData[K]
  ) => void;
  statePageLabel?: string;
};

export function WizardStepPanel({
  currentStep,
  formData,
  errors,
  showErrors,
  onChange,
  statePageLabel,
}: WizardStepPanelProps) {
  const stepProps = { formData, errors, showErrors, onChange, statePageLabel };

  return (
    <div
      key={currentStep}
      className="min-h-[320px] transition-opacity duration-200"
    >
      {currentStep === 1 && <BasicInfoStep {...stepProps} />}
      {currentStep === 2 && <ViolationDetailsStep {...stepProps} />}
      {currentStep === 3 && <DefenseStep {...stepProps} />}
      {currentStep === 4 && <PreviewExportStep formData={formData} />}
    </div>
  );
}
