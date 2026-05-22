import { Field, SelectInput, TextInput, fieldDescribedBy } from "@/components/ui/Field";
import {
  VIOLATION_CATEGORIES,
  type ViolationCategory,
} from "@/lib/wizard/constants";
import type { AppealFormData, FormErrors } from "@/lib/wizard/formState";

type ViolationDetailsStepProps = {
  formData: AppealFormData;
  errors: FormErrors;
  showErrors: boolean;
  onChange: <K extends keyof AppealFormData>(
    field: K,
    value: AppealFormData[K]
  ) => void;
};

export function ViolationDetailsStep({
  formData,
  errors,
  showErrors,
  onChange,
}: ViolationDetailsStepProps) {
  const fieldError = (key: keyof AppealFormData) =>
    showErrors ? errors[key] : undefined;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white">Violation Details</h2>
        <p className="mt-1 text-sm text-slate-400">
          Describe the violation notice you received from your HOA.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Field
            label="Violation Category"
            htmlFor="violationCategory"
            required
            error={fieldError("violationCategory")}
          >
            <SelectInput
              id="violationCategory"
              options={[...VIOLATION_CATEGORIES]}
              value={formData.violationCategory}
              onChange={(v) =>
                onChange("violationCategory", v as ViolationCategory)
              }
              hasError={!!fieldError("violationCategory")}
              required
              ariaLabel="Select violation category"
              describedBy={fieldDescribedBy(
                "violationCategory",
                fieldError("violationCategory")
              )}
            />
          </Field>
        </div>
        <Field
          label="Date of Notice"
          htmlFor="dateOfNotice"
          required
          hint="US format (MM/DD/YYYY)"
          error={fieldError("dateOfNotice")}
        >
          <TextInput
            id="dateOfNotice"
            type="date"
            value={formData.dateOfNotice}
            onChange={(v) => onChange("dateOfNotice", v)}
            hasError={!!fieldError("dateOfNotice")}
            required
            describedBy={fieldDescribedBy(
              "dateOfNotice",
              fieldError("dateOfNotice")
            )}
            ariaLabel="Date you received the HOA violation notice"
          />
        </Field>
        <Field
          label="Fine Amount ($)"
          htmlFor="fineAmount"
          required
          hint="Amount in US dollars (USD)"
          error={fieldError("fineAmount")}
        >
          <TextInput
            id="fineAmount"
            placeholder="250.00"
            type="text"
            inputMode="decimal"
            value={formData.fineAmount}
            onChange={(v) => onChange("fineAmount", v)}
            hasError={!!fieldError("fineAmount")}
            required
            maxLength={12}
            describedBy={fieldDescribedBy(
              "fineAmount",
              fieldError("fineAmount")
            )}
            ariaLabel="HOA fine amount in US dollars"
          />
        </Field>
      </div>
    </div>
  );
}
