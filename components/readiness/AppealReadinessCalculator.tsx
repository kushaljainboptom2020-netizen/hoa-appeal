"use client";

import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  FileWarning,
  Info,
  ListChecks,
  RotateCcw,
} from "lucide-react";
import { useMemo, useState } from "react";
import {
  areAllQuestionsAnswered,
  calculateReadiness,
  getReadinessCalculator,
  getReadinessQuestions,
} from "@/lib/content/readiness";
import type { ReadinessAnswers, ReadinessResult } from "@/lib/content/readiness/types";

function scoreTone(percent: number): string {
  if (percent >= 85) return "text-emerald-400";
  if (percent >= 65) return "text-emerald-300";
  if (percent >= 40) return "text-amber-300";
  return "text-rose-300";
}

function scoreBarTone(percent: number): string {
  if (percent >= 85) return "bg-emerald-500";
  if (percent >= 65) return "bg-emerald-600";
  if (percent >= 40) return "bg-amber-500";
  return "bg-rose-500";
}

function ResultPanel({
  result,
  onReset,
}: {
  result: ReadinessResult;
  onReset: () => void;
}) {
  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-5 sm:p-6">
        <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">
          Readiness score
        </p>
        <div className="mt-3 flex flex-wrap items-end gap-3">
          <p className={`text-5xl font-bold tracking-tight ${scoreTone(result.percent)}`}>
            {result.percent}
            <span className="text-2xl text-slate-500">%</span>
          </p>
          <div className="pb-1">
            <p className="font-medium text-white">{result.bandLabel}</p>
            <p className="text-sm text-slate-400">
              {result.score} / {result.maxScore} points
            </p>
          </div>
        </div>
        <div
          className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800"
          role="meter"
          aria-valuenow={result.percent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Readiness percent"
        >
          <div
            className={`h-full rounded-full transition-all ${scoreBarTone(result.percent)}`}
            style={{ width: `${result.percent}%` }}
          />
        </div>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          {result.bandSummary}
        </p>
      </div>

      <div
        className="flex gap-3 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm leading-relaxed text-amber-100"
        role="note"
      >
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" aria-hidden />
        <p>{getReadinessCalculator().disclaimer}</p>
      </div>

      <section>
        <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-300">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden />
          Strengths
        </h3>
        {result.strengths.length ? (
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {result.strengths.map((item) => (
              <li key={item} className="flex gap-2">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-sm text-slate-500">
            No standout strengths yet—close the gaps below first.
          </p>
        )}
      </section>

      <section>
        <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-300">
          <AlertTriangle className="h-4 w-4 text-amber-400" aria-hidden />
          Weaknesses
        </h3>
        {result.weaknesses.length ? (
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {result.weaknesses.map((item) => (
              <li key={item} className="flex gap-2">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-sm text-slate-500">
            No major weaknesses flagged from your answers.
          </p>
        )}
      </section>

      <section>
        <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-300">
          <FileWarning className="h-4 w-4 text-rose-300" aria-hidden />
          Missing documents
        </h3>
        {result.missingDocuments.length ? (
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {result.missingDocuments.map((item) => (
              <li key={item} className="flex gap-2">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-sm text-slate-500">
            No critical document gaps were flagged from your answers.
          </p>
        )}
      </section>

      <section>
        <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-300">
          <ListChecks className="h-4 w-4 text-emerald-400" aria-hidden />
          Suggested next steps
        </h3>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {result.nextSteps.map((step) => (
            <li key={step.id}>
              <Link
                href={step.href}
                className="block h-full rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-3 transition-colors hover:border-emerald-500/40"
              >
                <span className="font-medium text-white">{step.label}</span>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">
                  {step.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <button
        type="button"
        onClick={onReset}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
      >
        <RotateCcw className="h-4 w-4" aria-hidden />
        Retake calculator
      </button>
    </div>
  );
}

export function AppealReadinessCalculator() {
  const calculator = getReadinessCalculator();
  const questions = getReadinessQuestions();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<ReadinessAnswers>({});
  const [showResult, setShowResult] = useState(false);

  const question = questions[index];
  const selected = question ? answers[question.id] : undefined;
  const progress = Math.round(((index + (showResult ? 1 : 0)) / questions.length) * 100);

  const result = useMemo(() => {
    if (!showResult || !areAllQuestionsAnswered(answers)) return null;
    return calculateReadiness(answers);
  }, [answers, showResult]);

  function reset() {
    setIndex(0);
    setAnswers({});
    setShowResult(false);
  }

  function selectOption(optionId: string) {
    if (!question) return;
    setAnswers((prev) => ({ ...prev, [question.id]: optionId }));
  }

  function goNext() {
    if (!question || !selected) return;
    if (index >= questions.length - 1) {
      setShowResult(true);
      return;
    }
    setIndex((i) => i + 1);
  }

  function goBack() {
    if (showResult) {
      setShowResult(false);
      setIndex(questions.length - 1);
      return;
    }
    if (index > 0) setIndex((i) => i - 1);
  }

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 sm:p-6">
      <p className="text-sm leading-relaxed text-slate-400">{calculator.intro}</p>

      <div className="mt-5">
        <div className="flex items-center justify-between gap-3 text-xs text-slate-500">
          <span>
            {showResult
              ? "Results"
              : `Question ${index + 1} of ${questions.length}`}
          </span>
          <span>{Math.min(progress, 100)}% complete</span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-emerald-600 transition-all"
            style={{
              width: `${showResult ? 100 : ((index) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {showResult && result ? (
        <div className="mt-6">
          <ResultPanel result={result} onReset={reset} />
        </div>
      ) : question ? (
        <div className="mt-6 space-y-5">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">
              {question.category}
            </p>
            <p className="mt-2 text-lg font-medium text-white">{question.prompt}</p>
            {question.help ? (
              <p className="mt-2 text-sm text-slate-500">{question.help}</p>
            ) : null}
          </div>

          <ul className="space-y-2">
            {question.options.map((option) => {
              const isSelected = selected === option.id;
              return (
                <li key={option.id}>
                  <button
                    type="button"
                    onClick={() => selectOption(option.id)}
                    aria-pressed={isSelected}
                    className={`w-full rounded-md border px-4 py-3 text-left text-sm transition-colors ${
                      isSelected
                        ? "border-emerald-600/60 bg-emerald-600/10 text-white"
                        : "border-slate-700 bg-slate-950/60 text-slate-200 hover:border-emerald-600/40 hover:text-white"
                    }`}
                  >
                    {option.label}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            {index > 0 || showResult ? (
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
              onClick={goNext}
              disabled={!selected}
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {index >= questions.length - 1 ? "See my score" : "Next"}
              <ChevronRight className="h-4 w-4" aria-hidden />
            </button>
            {(index > 0 || Object.keys(answers).length > 0) && (
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-slate-300"
              >
                <RotateCcw className="h-4 w-4" aria-hidden />
                Start over
              </button>
            )}
          </div>

          <p className="text-xs leading-relaxed text-slate-500">
            Informational only—not a legal assessment of your case.
          </p>
        </div>
      ) : null}
    </div>
  );
}
