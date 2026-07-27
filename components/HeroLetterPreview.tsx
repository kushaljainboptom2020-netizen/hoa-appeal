"use client";

import { useEffect, useState } from "react";

const PLACEHOLDERS = [
  { id: "name", label: "[Your Name]" },
  { id: "date", label: "[Violation Date]" },
  { id: "statute", label: "State Law Sec. 720" },
] as const;

type PlaceholderId = (typeof PLACEHOLDERS)[number]["id"];

export function HeroLetterPreview() {
  const [activeId, setActiveId] = useState<PlaceholderId>("name");
  const [typed, setTyped] = useState("");
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setTyped(PLACEHOLDERS[0].label);
      setActiveId("name");
      return;
    }

    let cancelled = false;
    let timeoutId = 0;

    const runCycle = async () => {
      for (const placeholder of PLACEHOLDERS) {
        if (cancelled) return;
        setActiveId(placeholder.id);
        setTyped("");

        for (let i = 1; i <= placeholder.label.length; i += 1) {
          if (cancelled) return;
          setTyped(placeholder.label.slice(0, i));
          await new Promise<void>((resolve) => {
            timeoutId = window.setTimeout(resolve, 38 + (i % 3) * 12);
          });
        }

        await new Promise<void>((resolve) => {
          timeoutId = window.setTimeout(resolve, 1100);
        });
      }

      if (!cancelled) {
        timeoutId = window.setTimeout(() => {
          void runCycle();
        }, 600);
      }
    };

    void runCycle();

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [reduceMotion]);

  const activeLabel =
    PLACEHOLDERS.find((item) => item.id === activeId)?.label ?? "";

  return (
    <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
      <div
        className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.28),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(56,189,248,0.16),transparent_50%)] blur-2xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-6 top-10 h-40 w-40 rounded-full bg-emerald-400/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-4 bottom-8 h-32 w-32 rounded-full bg-sky-400/10 blur-3xl"
        aria-hidden
      />

      <div
        className="relative origin-center [transform:perspective(1400px)_rotateY(-12deg)_rotateX(6deg)_rotateZ(1deg)] transition-transform duration-500 ease-out hover:[transform:perspective(1400px)_rotateY(-6deg)_rotateX(3deg)_rotateZ(0deg)]"
        aria-hidden
      >
        <div className="hero-letter-float overflow-hidden rounded-xl border border-slate-200/80 bg-[#f8fafc] shadow-[0_25px_60px_-20px_rgba(0,0,0,0.65),0_0_0_1px_rgba(148,163,184,0.25)]">
          <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
            </div>
            <p className="font-mono text-[10px] font-medium tracking-wide text-slate-500 uppercase">
              Appeal Letter · Live Draft
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 ring-1 ring-emerald-200">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              Generating
            </span>
          </div>

          <div className="space-y-4 px-5 py-6 font-serif text-[13px] leading-relaxed text-slate-700 sm:px-6 sm:text-sm">
            <div className="space-y-1 border-b border-slate-200 pb-4">
              <p className="text-[11px] font-sans font-semibold tracking-[0.14em] text-slate-400 uppercase">
                Formal Notice of Appeal
              </p>
              <p>
                From:{" "}
                <mark
                  className={`rounded px-1 py-0.5 font-sans text-[12px] font-semibold transition-colors duration-300 ${
                    activeId === "name"
                      ? "bg-emerald-200/90 text-emerald-950 ring-1 ring-emerald-400/60"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {activeId === "name" ? typed || "\u00a0" : "[Your Name]"}
                  {activeId === "name" && typed.length < activeLabel.length ? (
                    <span className="ml-0.5 inline-block h-3.5 w-px animate-pulse bg-emerald-700 align-middle" />
                  ) : null}
                </mark>
              </p>
              <p>
                Re: Violation dated{" "}
                <mark
                  className={`rounded px-1 py-0.5 font-sans text-[12px] font-semibold transition-colors duration-300 ${
                    activeId === "date"
                      ? "bg-amber-200/90 text-amber-950 ring-1 ring-amber-400/60"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {activeId === "date" ? typed || "\u00a0" : "[Violation Date]"}
                  {activeId === "date" && typed.length < activeLabel.length ? (
                    <span className="ml-0.5 inline-block h-3.5 w-px animate-pulse bg-amber-800 align-middle" />
                  ) : null}
                </mark>
              </p>
            </div>

            <p>
              Dear Board of Directors,
            </p>
            <p>
              I respectfully submit this appeal of the cited fine.{" "}
              <span
                className={`rounded px-1 py-0.5 font-sans text-[12px] font-semibold transition-colors duration-300 ${
                  activeId === "statute"
                    ? "bg-sky-200/90 text-sky-950 ring-1 ring-sky-400/60"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                Pursuant to{" "}
                {activeId === "statute"
                  ? typed || "\u00a0"
                  : "State Law Sec. 720"}
                {activeId === "statute" && typed.length < activeLabel.length ? (
                  <span className="ml-0.5 inline-block h-3.5 w-px animate-pulse bg-sky-800 align-middle" />
                ) : null}
                …
              </span>{" "}
              I request a hearing and full review of the enforcement record.
            </p>
            <p className="text-slate-500">
              The notice fails to identify the specific governing provision,
              cure period, and evidence supporting the alleged violation.
              Accordingly, I ask that the fine be vacated pending a proper
              hearing.
            </p>
            <div className="pt-2">
              <div className="h-px w-28 bg-slate-300" />
              <p className="mt-2 font-sans text-xs text-slate-500">
                Respectfully submitted
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
