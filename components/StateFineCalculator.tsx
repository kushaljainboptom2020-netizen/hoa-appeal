"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Scale } from "lucide-react";
import { Field, SelectInput } from "@/components/ui/Field";
import {
  FINE_CALCULATOR_CATEGORIES,
  formatDefenseClause,
  getFineCalculatorCategory,
  getStateFineCap,
  type FineCalculatorCategoryId,
} from "@/lib/content/fine-caps";
import { US_STATES } from "@/lib/wizard/constants";
import { dispatchWizardPrefill } from "@/lib/wizard/prefill";

type StateFineCalculatorProps = {
  initialState?: string;
};

const STATE_OPTIONS = [
  { value: "", label: "Select state" },
  ...US_STATES.map((s) => ({ value: s.value, label: s.label })),
];

const CATEGORY_OPTIONS = [
  { value: "", label: "Select violation category" },
  ...FINE_CALCULATOR_CATEGORIES.map((c) => ({
    value: c.id,
    label: c.label,
  })),
];

function isCategoryId(value: string): value is FineCalculatorCategoryId {
  return FINE_CALCULATOR_CATEGORIES.some((c) => c.id === value);
}

export function StateFineCalculator({ initialState = "" }: StateFineCalculatorProps) {
  const [stateCode, setStateCode] = useState(initialState);
  const [categoryId, setCategoryId] = useState("");

  const category = isCategoryId(categoryId)
    ? getFineCalculatorCategory(categoryId)
    : undefined;
  const cap = useMemo(
    () => (stateCode ? getStateFineCap(stateCode) : null),
    [stateCode]
  );
  const ready = Boolean(cap && category);

  const handleGenerate = () => {
    if (!cap || !category) return;
    dispatchWizardPrefill({
      state: cap.stateCode,
      violationCategory: category.wizardValue,
    });
    document.getElementById("appeal-wizard")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="fine-calculator"
      aria-labelledby="fine-calculator-heading"
      className="scroll-mt-24 border-b border-slate-800/80 bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-emerald-400 uppercase">
                <Scale className="h-4 w-4" aria-hidden />
                Interactive tool
              </p>
              <h2
                id="fine-calculator-heading"
                className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl"
              >
                State HOA Fine Cap &amp; Statutory Notice Calculator
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
                Select your state and violation type to see the statutory fine
                ceiling, required notice window, and a key defense clause you
                can carry into your appeal letter.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <Field label="Select State" htmlFor="fine-calc-state" required>
              <SelectInput
                id="fine-calc-state"
                value={stateCode}
                onChange={setStateCode}
                options={STATE_OPTIONS}
                required
              />
            </Field>
            <Field
              label="Select Violation Category"
              htmlFor="fine-calc-category"
              required
            >
              <SelectInput
                id="fine-calc-category"
                value={categoryId}
                onChange={setCategoryId}
                options={CATEGORY_OPTIONS}
                required
              />
            </Field>
          </div>

          {ready && cap && category ? (
            <article
              className="mt-8 rounded-xl border border-emerald-500/25 bg-emerald-500/5 p-5 sm:p-6"
              aria-live="polite"
            >
              <p className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
                State statutory breakdown
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                {cap.stateName} · {category.label}
              </h3>
              <p className="mt-1 text-sm text-slate-400">{cap.citation}</p>

              <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-3">
                  <dt className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                    Maximum legal fine allowed in {cap.stateName}
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium text-slate-100">
                    {cap.maxFineLabel}
                  </dd>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-3">
                  <dt className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                    Mandatory advance notice window
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium text-slate-100">
                    {cap.noticeWindow}
                  </dd>
                </div>
              </dl>

              <div className="mt-4 rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-3">
                <p className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                  Key defense clause
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-200">
                  {formatDefenseClause(cap, category.label)}
                </p>
              </div>

              <button
                type="button"
                onClick={handleGenerate}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-base font-semibold text-slate-950 shadow-[0_0_32px_-6px_rgba(16,185,129,0.55)] transition-[background-color,box-shadow,transform] hover:bg-emerald-400 hover:shadow-[0_0_36px_-4px_rgba(52,211,153,0.7)] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-auto"
              >
                Generate Custom {cap.stateName} Appeal Letter Now
                <ArrowRight className="h-5 w-5" aria-hidden />
              </button>
            </article>
          ) : (
            <p className="mt-6 text-sm text-slate-500">
              Choose a state and violation category to see the statutory
              breakdown.
            </p>
          )}

          <p className="mt-6 text-xs leading-relaxed text-slate-500">
            Educational only — MyHOAAppeal is not a law firm. CC&amp;Rs, bylaws,
            and recorded fine schedules may be stricter than these statutory
            summaries. Confirm current code text and consult a licensed attorney
            in your state before relying on a defense.
          </p>
        </div>
      </div>
    </section>
  );
}
