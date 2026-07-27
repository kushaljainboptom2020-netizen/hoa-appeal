import Link from "next/link";
import { ArrowRight, Clock, Scale } from "lucide-react";
import type { StateMapSummary } from "@/lib/content/map";

type StateMapPanelProps = {
  summary: StateMapSummary | null;
  panelId: string;
};

export function StateMapPanel({ summary, panelId }: StateMapPanelProps) {
  if (!summary) {
    return (
      <div
        id={panelId}
        className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 sm:p-6"
        aria-live="polite"
      >
        <p className="text-sm font-medium text-slate-200">State details</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          Hover or select a state to see its HOA law overview, appeal deadlines,
          and common violations—then open the full guide.
        </p>
      </div>
    );
  }

  return (
    <div
      id={panelId}
      className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 sm:p-6"
      aria-live="polite"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-lg font-semibold text-white">{summary.name}</h2>
        <span className="text-xs font-medium uppercase tracking-wider text-emerald-400">
          {summary.code}
        </span>
      </div>

      <p className="mt-2 flex items-start gap-2 text-xs text-slate-500">
        <Scale className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-500" aria-hidden />
        <span>{summary.statuteReference}</span>
      </p>

      <section className="mt-5">
        <h3 className="text-sm font-medium text-slate-200">HOA law overview</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          {summary.overview}
        </p>
      </section>

      <section className="mt-5">
        <h3 className="text-sm font-medium text-slate-200">Appeal deadlines</h3>
        <p className="mt-2 flex items-start gap-2 text-sm text-slate-300">
          <Clock
            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500"
            aria-hidden
          />
          <span>
            Typical notice / cure window:{" "}
            <span className="text-slate-200">{summary.noticeWindow}</span>
          </span>
        </p>
        <ul className="mt-3 space-y-2">
          {summary.appealDeadlines.map((deadline) => (
            <li
              key={deadline.label}
              className="flex gap-3 text-sm text-slate-400"
            >
              <span className="shrink-0 font-medium text-slate-300">
                {deadline.duration}
              </span>
              <span>{deadline.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-5">
        <h3 className="text-sm font-medium text-slate-200">
          Common violations
        </h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-400">
          {summary.commonViolations.map((title) => (
            <li key={title}>{title}</li>
          ))}
        </ul>
      </section>

      <Link
        href={summary.href}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:ring-offset-slate-950 sm:w-auto"
      >
        Open {summary.name} guide
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </div>
  );
}
