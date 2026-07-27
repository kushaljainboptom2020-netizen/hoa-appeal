"use client";

import { ChevronDown, Clock3, FileText, TriangleAlert } from "lucide-react";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import type { InteractiveTimelineStep } from "@/lib/content/process/timeline";

type InteractiveProcessTimelineProps = {
  steps: InteractiveTimelineStep[];
  intro?: string;
  /** Open the first step by default for orientation. */
  defaultOpenFirst?: boolean;
};

export function InteractiveProcessTimeline({
  steps,
  intro,
  defaultOpenFirst = true,
}: InteractiveProcessTimelineProps) {
  const baseId = useId();
  const rootRef = useRef<HTMLOListElement>(null);
  const [visible, setVisible] = useState<Record<string, boolean>>({});
  const [openId, setOpenId] = useState<string | null>(
    defaultOpenFirst ? (steps[0]?.id ?? null) : null
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-timeline-step]"));
    if (!items.length) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      const allVisible: Record<string, boolean> = {};
      for (const item of items) {
        const id = item.dataset.timelineStep;
        if (id) allVisible[id] = true;
      }
      setVisible(allVisible);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        setVisible((prev) => {
          let changed = false;
          const next = { ...prev };
          for (const entry of entries) {
            const id = (entry.target as HTMLElement).dataset.timelineStep;
            if (!id) continue;
            if (entry.isIntersecting && !next[id]) {
              next[id] = true;
              changed = true;
            }
          }
          return changed ? next : prev;
        });
      },
      { root: null, rootMargin: "0px 0px -12% 0px", threshold: 0.28 }
    );

    for (const item of items) observer.observe(item);
    return () => observer.disconnect();
  }, [steps]);

  function toggle(id: string) {
    setOpenId((current) => (current === id ? null : id));
  }

  function onKeyToggle(event: KeyboardEvent<HTMLButtonElement>, id: string) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle(id);
    }
  }

  if (!steps.length) return null;

  return (
    <div className="mt-6">
      {intro ? (
        <p className="text-sm leading-relaxed text-slate-400">{intro}</p>
      ) : null}

      <ol ref={rootRef} className="relative mt-6 space-y-0">
        {/* Vertical rail — desktop; stacks cleanly on mobile */}
        <span
          className="pointer-events-none absolute left-[1.15rem] top-4 bottom-4 hidden w-px bg-gradient-to-b from-emerald-600/50 via-slate-700 to-slate-800 sm:left-[1.4rem] sm:block"
          aria-hidden
        />

        {steps.map((step, index) => {
          const isOpen = openId === step.id;
          const isVisible = Boolean(visible[step.id]);
          const panelId = `${baseId}-panel-${step.id}`;
          const buttonId = `${baseId}-button-${step.id}`;
          const delayMs = Math.min(index * 70, 280);

          return (
            <li
              key={step.id}
              data-timeline-step={step.id}
              style={{ transitionDelay: isVisible ? `${delayMs}ms` : "0ms" }}
              className={`relative pb-5 last:pb-0 sm:pb-6 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              <div
                className={`rounded-xl border bg-slate-900/40 transition-colors ${
                  isOpen
                    ? "border-emerald-600/40"
                    : "border-slate-800 hover:border-slate-700"
                }`}
              >
                <h3 className="m-0">
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(step.id)}
                    onKeyDown={(event) => onKeyToggle(event, step.id)}
                    className="flex w-full items-start gap-3 px-3 py-4 text-left sm:gap-4 sm:px-4"
                  >
                    <span
                      className={`relative z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-bold sm:h-9 sm:w-9 ${
                        isOpen || isVisible
                          ? "border-emerald-500/50 bg-emerald-600/20 text-emerald-400"
                          : "border-slate-700 bg-slate-950 text-slate-500"
                      }`}
                      aria-hidden
                    >
                      {step.step}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="flex items-start justify-between gap-3">
                        <span className="font-medium text-white sm:text-lg">
                          {step.title}
                        </span>
                        <ChevronDown
                          className={`mt-1 h-5 w-5 shrink-0 text-emerald-400 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          aria-hidden
                        />
                      </span>

                      <span className="mt-2 inline-flex max-w-full items-center gap-1.5 rounded-md bg-slate-950/70 px-2 py-1 text-xs text-emerald-400 ring-1 ring-emerald-600/20">
                        <Clock3 className="h-3.5 w-3.5 shrink-0" aria-hidden />
                        <span className="truncate">
                          <span className="sr-only">Estimated time: </span>
                          {step.estimatedTime}
                        </span>
                      </span>

                      {!isOpen ? (
                        <span className="mt-2 line-clamp-2 block text-sm leading-relaxed text-slate-400">
                          {step.description}
                        </span>
                      ) : null}
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className={isOpen ? "block" : "hidden"}
                >
                  <div className="space-y-4 border-t border-slate-800/80 px-3 pb-4 pt-3 sm:px-4 sm:pl-[3.75rem]">
                    <p className="text-sm leading-relaxed text-slate-300">
                      {step.description}
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-lg border border-slate-800/80 bg-slate-950/50 p-3">
                        <p className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-slate-400">
                          <FileText
                            className="h-3.5 w-3.5 text-emerald-400"
                            aria-hidden
                          />
                          Documents required
                        </p>
                        <ul className="mt-2 space-y-1.5 text-sm text-slate-300">
                          {step.documentsRequired.map((doc) => (
                            <li key={doc} className="flex gap-2">
                              <span
                                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-500"
                                aria-hidden
                              />
                              <span>{doc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-lg border border-slate-800/80 bg-slate-950/50 p-3">
                        <p className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-slate-400">
                          <TriangleAlert
                            className="h-3.5 w-3.5 text-amber-400"
                            aria-hidden
                          />
                          Common mistakes
                        </p>
                        <ul className="mt-2 space-y-1.5 text-sm text-slate-300">
                          {step.commonMistakes.map((mistake) => (
                            <li key={mistake} className="flex gap-2">
                              <span
                                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-400"
                                aria-hidden
                              />
                              <span>{mistake}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {index < steps.length - 1 ? (
                      <p className="text-xs uppercase tracking-wider text-slate-500">
                        Then continue to step {steps[index + 1]!.step}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
