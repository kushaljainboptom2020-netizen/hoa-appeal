import { Field, TextAreaInput, fieldDescribedBy } from "@/components/ui/Field";
import { getDefenseOptions } from "@/lib/wizard/constants";
import type { AppealFormData, FormErrors } from "@/lib/wizard/formState";

type DefenseStepProps = {
  formData: AppealFormData;
  errors: FormErrors;
  showErrors: boolean;
  onChange: <K extends keyof AppealFormData>(
    field: K,
    value: AppealFormData[K]
  ) => void;
};

export function DefenseStep({
  formData,
  errors,
  showErrors,
  onChange,
}: DefenseStepProps) {
  const defenseOptions = getDefenseOptions(formData.violationCategory);
  const strategyError = showErrors ? errors.primaryDefenseStrategy : undefined;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white">Your Defense</h2>
        <p className="mt-1 text-sm text-slate-400">
          Choose your primary defense strategy. Options adapt to the violation
          category you selected.
        </p>
      </div>

      <fieldset
        className="space-y-3"
        aria-invalid={strategyError ? true : undefined}
        aria-describedby={
          strategyError ? "primaryDefenseStrategy-error" : undefined
        }
      >
        <legend className="mb-1 block text-sm font-medium text-slate-300">
          Primary Defense Strategy
          <span className="text-emerald-400" aria-hidden>
            {" "}
            *
          </span>
          <span className="sr-only"> (required)</span>
        </legend>
        {defenseOptions.map((option) => {
          const isSelected = formData.primaryDefenseStrategy === option;
          const inputId = `defense-${option.replace(/\s+/g, "-").toLowerCase()}`;
          return (
            <label
              key={option}
              htmlFor={inputId}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border px-4 py-3 transition-colors ${
                isSelected
                  ? "border-emerald-500/50 bg-emerald-500/10"
                  : strategyError
                    ? "border-red-500/40 bg-slate-800/50 hover:border-red-500/60"
                    : "border-slate-700 bg-slate-800/50 hover:border-slate-600"
              }`}
            >
              <input
                id={inputId}
                type="radio"
                name="primaryDefenseStrategy"
                value={option}
                checked={isSelected}
                onChange={() => onChange("primaryDefenseStrategy", option)}
                className="mt-0.5 h-4 w-4 shrink-0 border-slate-600 bg-slate-700 text-emerald-600 focus:ring-emerald-500/50"
                aria-label={option}
              />
              <span className="text-sm text-slate-300">{option}</span>
            </label>
          );
        })}
      </fieldset>
      {strategyError && (
        <p
          id="primaryDefenseStrategy-error"
          className="text-xs text-red-400"
          role="alert"
        >
          {strategyError}
        </p>
      )}

      <Field
        label="Supporting Details"
        htmlFor="supportingDetails"
        hint="Optional — add context that strengthens your appeal."
      >
        <TextAreaInput
          id="supportingDetails"
          placeholder="Describe your situation in your own words..."
          rows={5}
          value={formData.supportingDetails}
          onChange={(v) => onChange("supportingDetails", v)}
          maxLength={2000}
          describedBy={fieldDescribedBy(
            "supportingDetails",
            undefined,
            "Optional — add context that strengthens your appeal."
          )}
          ariaLabel="Optional supporting details for your HOA appeal"
        />
      </Field>
    </div>
  );
}
