import { type ReactNode } from "react";

type FieldProps = {
  label: string;
  htmlFor: string;
  children: ReactNode;
  hint?: string;
  error?: string;
  required?: boolean;
};

export function Field({
  label,
  htmlFor,
  children,
  hint,
  error,
  required,
}: FieldProps) {
  const errorId = `${htmlFor}-error`;
  const hintId = `${htmlFor}-hint`;

  return (
    <div className="space-y-2">
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-slate-300"
      >
        {label}
        {required && (
          <span className="text-emerald-400" aria-hidden>
            {" "}
            *
          </span>
        )}
        {required && <span className="sr-only"> (required)</span>}
      </label>
      {children}
      {error && (
        <p id={errorId} className="text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
      {hint && !error && (
        <p id={hintId} className="text-xs text-slate-500">
          {hint}
        </p>
      )}
    </div>
  );
}

export function fieldDescribedBy(
  htmlFor: string,
  error?: string,
  hint?: string
): string | undefined {
  const errorId = `${htmlFor}-error`;
  const hintId = `${htmlFor}-hint`;
  return [error ? errorId : null, hint && !error ? hintId : null]
    .filter(Boolean)
    .join(" ") || undefined;
}

const baseInputClassName =
  "w-full rounded-lg border bg-slate-800 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2";

function inputClassName(hasError: boolean): string {
  return `${baseInputClassName} ${
    hasError
      ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/30"
      : "border-slate-700 focus:border-emerald-500 focus:ring-emerald-500/50"
  }`;
}

type ControlledProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  hasError?: boolean;
  required?: boolean;
  describedBy?: string;
  autoComplete?: string;
  maxLength?: number;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
};

export function TextInput({
  id,
  placeholder,
  type = "text",
  value,
  onChange,
  hasError = false,
  required = false,
  describedBy,
  autoComplete,
  maxLength,
  min,
  step,
  inputMode,
  ariaLabel,
}: ControlledProps & {
  placeholder?: string;
  type?: string;
  min?: string;
  step?: string;
  ariaLabel?: string;
}) {
  return (
    <input
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      min={min}
      step={step}
      maxLength={maxLength}
      inputMode={inputMode}
      autoComplete={autoComplete}
      required={required}
      aria-required={required || undefined}
      aria-invalid={hasError || undefined}
      aria-describedby={describedBy}
      aria-label={ariaLabel}
      className={inputClassName(hasError)}
    />
  );
}

export function SelectInput({
  id,
  options,
  value,
  onChange,
  hasError = false,
  required = false,
  describedBy,
  ariaLabel,
}: ControlledProps & {
  options: { value: string; label: string }[];
  ariaLabel?: string;
}) {
  return (
    <select
      id={id}
      name={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      aria-required={required || undefined}
      aria-invalid={hasError || undefined}
      aria-describedby={describedBy}
      aria-label={ariaLabel}
      className={inputClassName(hasError)}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

export function TextAreaInput({
  id,
  placeholder,
  rows = 4,
  value,
  onChange,
  hasError = false,
  describedBy,
  maxLength,
  ariaLabel,
}: ControlledProps & {
  placeholder?: string;
  rows?: number;
  ariaLabel?: string;
}) {
  return (
    <textarea
      id={id}
      name={id}
      rows={rows}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      maxLength={maxLength}
      aria-invalid={hasError || undefined}
      aria-describedby={describedBy}
      aria-label={ariaLabel}
      className={`${inputClassName(hasError)} resize-y min-h-[100px]`}
    />
  );
}
