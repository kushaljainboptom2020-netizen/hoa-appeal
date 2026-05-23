import { Field, SelectInput, TextInput, fieldDescribedBy } from "@/components/ui/Field";
import { US_STATES } from "@/lib/wizard/constants";
import type { AppealFormData, FormErrors } from "@/lib/wizard/formState";

type BasicInfoStepProps = {
  formData: AppealFormData;
  errors: FormErrors;
  showErrors: boolean;
  onChange: <K extends keyof AppealFormData>(
    field: K,
    value: AppealFormData[K]
  ) => void;
  statePageLabel?: string;
};

const STATE_OPTIONS = [
  { value: "", label: "Select your state" },
  ...US_STATES.map((s) => ({ value: s.value, label: s.label })),
];

export function BasicInfoStep({
  formData,
  errors,
  showErrors,
  onChange,
  statePageLabel,
}: BasicInfoStepProps) {
  const fieldError = (key: keyof AppealFormData) =>
    showErrors ? errors[key] : undefined;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white">Basic Info</h2>
        <p className="mt-1 text-sm text-slate-400">
          Tell us who you are and which HOA issued the fine.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full Name"
          htmlFor="fullName"
          required
          error={fieldError("fullName")}
        >
          <TextInput
            id="fullName"
            placeholder="Jane Doe"
            value={formData.fullName}
            onChange={(v) => onChange("fullName", v)}
            hasError={!!fieldError("fullName")}
            required
            autoComplete="name"
            maxLength={120}
            describedBy={fieldDescribedBy("fullName", fieldError("fullName"))}
          />
        </Field>
        <Field
          label="HOA Management Company Name"
          htmlFor="hoaManagementCompany"
          required
          error={fieldError("hoaManagementCompany")}
        >
          <TextInput
            id="hoaManagementCompany"
            placeholder="Sunset Hills Community Association"
            value={formData.hoaManagementCompany}
            onChange={(v) => onChange("hoaManagementCompany", v)}
            hasError={!!fieldError("hoaManagementCompany")}
            required
            autoComplete="organization"
            maxLength={150}
            describedBy={fieldDescribedBy(
              "hoaManagementCompany",
              fieldError("hoaManagementCompany")
            )}
          />
        </Field>
        <div className="sm:col-span-2">
          <Field
            label="Property Address"
            htmlFor="propertyAddress"
            required
            hint="Street, city, state, and ZIP code"
            error={fieldError("propertyAddress")}
          >
            <TextInput
              id="propertyAddress"
              placeholder="123 Oak Lane, Unit 4B"
              value={formData.propertyAddress}
              onChange={(v) => onChange("propertyAddress", v)}
              hasError={!!fieldError("propertyAddress")}
              required
              autoComplete="street-address"
              maxLength={200}
              describedBy={fieldDescribedBy(
                "propertyAddress",
                fieldError("propertyAddress")
              )}
            />
          </Field>
        </div>
        <Field
          label="State"
          htmlFor="state"
          required
          hint={
            statePageLabel
              ? `Your letter is tailored to ${statePageLabel}. Change below if needed.`
              : undefined
          }
          error={fieldError("state")}
        >
          <SelectInput
            id="state"
            options={STATE_OPTIONS}
            value={formData.state}
            onChange={(v) => onChange("state", v)}
            hasError={!!fieldError("state")}
            required
            ariaLabel="Select your US state"
            describedBy={fieldDescribedBy("state", fieldError("state"))}
          />
        </Field>
      </div>
    </div>
  );
}
