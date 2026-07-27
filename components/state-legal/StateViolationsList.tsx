import type { StateViolation } from "@/lib/content/states/types";

type StateViolationsListProps = {
  violations: StateViolation[];
};

export function StateViolationsList({ violations }: StateViolationsListProps) {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      {violations.map((violation) => (
        <div
          key={violation.title}
          className="rounded-lg border border-slate-800 bg-slate-900/50 p-4"
        >
          <h3 className="font-medium text-emerald-400">{violation.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            {violation.description}
          </p>
        </div>
      ))}
    </div>
  );
}
