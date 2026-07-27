import type { GuideProcessFlow } from "@/lib/content/guides/types";

type GuideProcessFlowchartProps = {
  flow: GuideProcessFlow;
};

export function GuideProcessFlowchart({ flow }: GuideProcessFlowchartProps) {
  return (
    <div className="mt-6">
      <p className="text-sm leading-relaxed text-slate-400">{flow.intro}</p>
      <ol className="mt-5 space-y-0">
        {flow.steps.map((step, index) => (
          <li key={step.step} className="relative flex gap-4 pb-6 last:pb-0">
            {index < flow.steps.length - 1 ? (
              <span
                className="absolute left-4 top-10 h-[calc(100%-1.5rem)] w-px bg-slate-700"
                aria-hidden
              />
            ) : null}
            <span
              className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald-600/40 bg-emerald-600/20 text-sm font-bold text-emerald-400"
              aria-hidden
            >
              {step.step}
            </span>
            <div className="min-w-0 pt-0.5">
              <h3 className="font-medium text-white">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">
                {step.description}
              </p>
              {index < flow.steps.length - 1 ? (
                <p className="mt-2 text-xs uppercase tracking-wider text-slate-500">
                  then
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
