"use client";

import Link from "next/link";
import { ChevronLeft, MapPin, RotateCcw } from "lucide-react";
import { useId, useMemo, useState } from "react";
import {
  getDecisionNode,
  getDecisionTree,
  resolveOutcome,
} from "@/lib/content/decision-tree";
import type { DecisionLink, ResolvedDecisionOutcome } from "@/lib/content/decision-tree/types";
import { US_STATES } from "@/lib/wizard/constants";

type Phase =
  | { kind: "question"; nodeId: string }
  | { kind: "state"; outcomeId: string }
  | { kind: "result"; outcomeId: string; stateCode: string };

type HistoryEntry = Phase;

const BUCKETS: {
  key: keyof Pick<
    ResolvedDecisionOutcome,
    "guides" | "states" | "templates" | "tools"
  >;
  label: string;
}[] = [
  { key: "guides", label: "Guides" },
  { key: "states", label: "State pages" },
  { key: "templates", label: "Templates" },
  { key: "tools", label: "Tools" },
];

function RecommendationCards({ links }: { links: DecisionLink[] }) {
  if (links.length === 0) return null;
  return (
    <ul className="mt-3 grid gap-3 sm:grid-cols-2">
      {links.map((link) => (
        <li key={link.href + link.label}>
          <Link
            href={link.href}
            className="block h-full rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-3 transition-colors hover:border-emerald-500/40"
          >
            <span className="font-medium text-white">{link.label}</span>
            <p className="mt-1 text-sm leading-relaxed text-slate-400">
              {link.description}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function HoaDecisionTree() {
  const tree = getDecisionTree();
  const baseId = useId();
  const [phase, setPhase] = useState<Phase>({
    kind: "question",
    nodeId: tree.startId,
  });
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [stateCode, setStateCode] = useState("");
  const [stateError, setStateError] = useState(false);

  const node =
    phase.kind === "question" ? getDecisionNode(phase.nodeId) : undefined;

  const result = useMemo(() => {
    if (phase.kind !== "result") return undefined;
    return resolveOutcome(phase.outcomeId, phase.stateCode);
  }, [phase]);

  function push(next: Phase) {
    setHistory((prev) => [...prev, phase]);
    setPhase(next);
  }

  function goBack() {
    setHistory((prev) => {
      if (prev.length === 0) return prev;
      const prior = prev[prev.length - 1]!;
      setPhase(prior);
      setStateError(false);
      return prev.slice(0, -1);
    });
  }

  function reset() {
    setPhase({ kind: "question", nodeId: tree.startId });
    setHistory([]);
    setStateCode("");
    setStateError(false);
  }

  function chooseOption(option: {
    nextId?: string;
    outcomeId?: string;
  }) {
    if (option.nextId) {
      push({ kind: "question", nodeId: option.nextId });
      return;
    }
    if (option.outcomeId) {
      push({ kind: "state", outcomeId: option.outcomeId });
    }
  }

  function confirmState() {
    if (phase.kind !== "state") return;
    if (!stateCode) {
      setStateError(true);
      return;
    }
    setStateError(false);
    push({ kind: "result", outcomeId: phase.outcomeId, stateCode });
  }

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 sm:p-6">
      <p className="text-sm leading-relaxed text-slate-400">{tree.intro}</p>

      {history.length > 0 || phase.kind !== "question" || phase.nodeId !== tree.startId ? (
        <div className="mt-4 flex flex-wrap gap-3">
          {history.length > 0 ? (
            <button
              type="button"
              onClick={goBack}
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-slate-200"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden />
              Back
            </button>
          ) : null}
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-slate-200"
          >
            <RotateCcw className="h-4 w-4" aria-hidden />
            Start over
          </button>
        </div>
      ) : null}

      {phase.kind === "question" && node ? (
        <div className="mt-6 space-y-4">
          <p className="text-lg font-medium text-white">{node.prompt}</p>
          <ul className="space-y-2">
            {node.options.map((option) => (
              <li key={option.label}>
                <button
                  type="button"
                  onClick={() => chooseOption(option)}
                  className="w-full rounded-md border border-slate-700 bg-slate-950/60 px-4 py-3 text-left text-sm text-slate-200 transition-colors hover:border-emerald-600/50 hover:text-white"
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {phase.kind === "state" ? (
        <div className="mt-6 space-y-4">
          <p className="flex items-center gap-2 text-lg font-medium text-white">
            <MapPin className="h-5 w-5 text-emerald-400" aria-hidden />
            Which state is your property in?
          </p>
          <p className="text-sm leading-relaxed text-slate-400">
            We use this to recommend your state appeal page and pre-select the
            letter tool for that jurisdiction.
          </p>
          <label className="block text-sm text-slate-300" htmlFor={`${baseId}-state`}>
            State
            <select
              id={`${baseId}-state`}
              value={stateCode}
              onChange={(event) => {
                setStateCode(event.target.value);
                setStateError(false);
              }}
              className="mt-2 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2.5 text-slate-100 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
            >
              <option value="">Select your state</option>
              {US_STATES.map((state) => (
                <option key={state.value} value={state.value}>
                  {state.label}
                </option>
              ))}
            </select>
          </label>
          {stateError ? (
            <p className="text-sm text-amber-400" role="alert">
              Select a state to see personalized recommendations.
            </p>
          ) : null}
          <button
            type="button"
            onClick={confirmState}
            className="inline-flex rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
          >
            See recommendations
          </button>
        </div>
      ) : null}

      {phase.kind === "result" && result ? (
        <div className="mt-6 space-y-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">
              Recommended path
            </p>
            <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
              {result.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              {result.summary}
            </p>
          </div>

          {BUCKETS.map((bucket) => {
            const links = result[bucket.key];
            if (!links.length) return null;
            return (
              <section key={bucket.key} aria-label={bucket.label}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                  {bucket.label}
                </h3>
                <RecommendationCards links={links} />
              </section>
            );
          })}
        </div>
      ) : null}

      {phase.kind === "question" && !node ? (
        <p className="mt-6 text-sm text-slate-400">Decision path unavailable.</p>
      ) : null}
    </div>
  );
}
