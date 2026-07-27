"use client";

import Link from "next/link";
import { ArrowRight, Shield, ShieldCheck } from "lucide-react";

function TrustBadge({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 font-medium text-emerald-400 ${
        compact ? "px-3 py-1 text-xs" : "px-4 py-1.5 text-sm"
      }`}
    >
      <ShieldCheck className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} />
      100% Free - No Account Required
    </span>
  );
}

type HeroSectionProps = {
  headline?: string;
  subheadline?: string;
};

const DEFAULT_HEADLINE = "Fight Unfair HOA Fines in Minutes";
const DEFAULT_SUBHEADLINE =
  "Generate a professional, persuasive HOA fine appeal and dispute letter automatically — tailored to your situation, ready to send.";

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
    <header className="border-b border-slate-800/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
        <div className="flex items-center gap-2">
          <Shield className="h-7 w-7 text-emerald-500" />
          <span className="text-lg font-bold tracking-tight text-white">
            MyHOAAppeal
          </span>
        </div>
        <div className="hidden sm:block">
          <TrustBadge compact />
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="mb-6 sm:hidden">
            <TrustBadge />
          </div>
          <div className="mb-6 hidden sm:block lg:mb-8">
            <TrustBadge />
          </div>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl">
            {subheadline}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <button
              type="button"
              onClick={scrollToWizard}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-900/30 transition-colors hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Start Your Appeal Letter
              <ArrowRight className="h-5 w-5" />
            </button>
            <Link
              href="/decision-tree"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/50 px-6 py-4 text-base font-medium text-slate-200 transition-colors hover:border-emerald-600/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Not sure where to start? Use the Decision Tree
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Or check your{" "}
            <Link
              href="/readiness-calculator"
              className="text-emerald-400 underline-offset-2 hover:underline"
            >
              appeal readiness score
            </Link>{" "}
            or browse the{" "}
            <Link
              href="/map"
              className="text-emerald-400 underline-offset-2 hover:underline"
            >
              interactive state map
            </Link>
            .
          </p>
        </div>
      </section>
    </header>
  );
}
