import type { StateAppealPhase } from "@/lib/content/states/types";

type StateAppealStrategyProps = {
  phases: StateAppealPhase[];
};

export function StateAppealStrategy({ phases }: StateAppealStrategyProps) {
  return (
    <div className="mt-6 space-y-4">
      {phases.map((phase) => (
        <div
          key={phase.title}
          className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-5"
        >
          <h3 className="font-semibold text-emerald-400">{phase.title}</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
            {phase.actions.map((action) => (
              <li key={action}>{action}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
