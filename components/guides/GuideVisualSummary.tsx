import type { GuideVisualSummary } from "@/lib/content/guides/types";

type GuideVisualSummaryViewProps = {
  summary: GuideVisualSummary;
};

export function GuideVisualSummaryView({ summary }: GuideVisualSummaryViewProps) {
  return (
    <div className="mt-6">
      <p className="text-sm leading-relaxed text-slate-400">{summary.intro}</p>
      <ol className="mt-5 grid gap-3 sm:grid-cols-2">
        {summary.takeaways.map((takeaway, index) => (
          <li
            key={takeaway.title}
            className="rounded-lg border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-950 p-4"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 font-medium text-white">{takeaway.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-400">
              {takeaway.detail}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
