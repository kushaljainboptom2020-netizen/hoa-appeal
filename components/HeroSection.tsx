"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { HeroLetterPreview } from "@/components/HeroLetterPreview";
import { SiteNavbar } from "@/components/SiteNavbar";

type HeroSectionProps = {
  headline?: string;
  subheadline?: string;
};

const DEFAULT_HEADLINE = "Fight Unfair HOA Fines in Minutes";
const DEFAULT_SUBHEADLINE =
  "Generate a statute-aware appeal letter in minutes — personalized to your violation, ready to send to your board.";

function HeadlineWithGradient({ text }: { text: string }) {
  const parts = text.split(/(HOA Fines)/i);
  return (
    <>
      {parts.map((part, index) =>
        /^HOA Fines$/i.test(part) ? (
          <span
            key={`grad-${index}`}
            className="bg-gradient-to-r from-emerald-300 via-teal-300 to-sky-300 bg-clip-text text-transparent"
          >
            {part}
          </span>
        ) : (
          <span key={`plain-${index}`}>{part}</span>
        ),
      )}
    </>
  );
}

export function HeroSection({
  headline = DEFAULT_HEADLINE,
  subheadline = DEFAULT_SUBHEADLINE,
}: HeroSectionProps) {
  const scrollToWizard = () => {
    document.getElementById("appeal-wizard")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header>
      <SiteNavbar />

      <section className="relative overflow-hidden border-b border-slate-800/80">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.12),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(14,165,233,0.08),transparent_40%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.07)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-10 lg:py-20">
          <div className="flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-sm font-medium text-emerald-300">
              <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden />
              100% Free &amp; Legal Statute Compliant
            </span>

            <h1 className="mt-6 max-w-xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              <HeadlineWithGradient text={headline} />
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg">
              {subheadline}
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={scrollToWizard}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-7 py-3.5 text-base font-semibold text-slate-950 shadow-[0_0_32px_-6px_rgba(16,185,129,0.55)] transition-[background-color,box-shadow,transform] hover:bg-emerald-400 hover:shadow-[0_0_36px_-4px_rgba(52,211,153,0.7)] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Generate Your Free Letter
                <ArrowRight className="h-5 w-5" aria-hidden />
              </button>
              <Link
                href="/guides/sample-hoa-appeal-letter-structure"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-base font-medium text-slate-300 underline-offset-4 transition-colors hover:text-white hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50"
              >
                View Sample Letter
              </Link>
            </div>

            <p className="mt-6 inline-flex max-w-xl items-start gap-2 rounded-lg border border-slate-800/90 bg-slate-900/50 px-3.5 py-2.5 text-sm text-slate-300 backdrop-blur-sm">
              <Zap
                className="mt-0.5 h-4 w-4 shrink-0 text-amber-400"
                aria-hidden
              />
              <span>
                Over{" "}
                <span className="font-semibold text-white">$150,000</span> in
                unfair fines appealed across{" "}
                <span className="font-semibold text-white">50 states</span>.
              </span>
            </p>
          </div>

          <div className="relative min-h-[22rem] sm:min-h-[26rem]">
            <HeroLetterPreview />
          </div>
        </div>
      </section>
    </header>
  );
}
