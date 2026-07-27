import type { StateAppealStep } from "@/lib/content/states/types";

type StateAppealStepsProps = {
  steps: StateAppealStep[];
};

export function StateAppealSteps({ steps }: StateAppealStepsProps) {
  return (
    <ol className="mt-6 space-y-4">
      {steps.map((step) => (
        <li
          key={step.step}
          className="flex gap-4 rounded-lg border border-slate-800 bg-slate-900/40 p-4"
        >
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600/20 text-sm font-bold text-emerald-400"
            aria-hidden
          >
            {step.step}
          </span>
          <div>
            <h3 className="font-medium text-white">{step.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-300">
              {step.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
