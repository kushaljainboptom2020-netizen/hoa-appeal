import { useId } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  FileText,
  Scale,
  Shield,
  ShieldCheck,
} from "lucide-react";
import { HeroLetterPreview } from "@/components/HeroLetterPreview";
import { SiteNavbar } from "@/components/SiteNavbar";

type HeroSectionProps = {
  headline?: string;
  subheadline?: string;
  /** State pages lead with the explanation, not the product badge row. */
  compact?: boolean;
};

const DEFAULT_HEADLINE = "HOA Fine Appeal Letter Generator";
const DEFAULT_SUBHEADLINE =
  "MyHOAAppeal is a free template for U.S. homeowners. You enter the notice details. You edit the letter. It is not a law firm, and it does not decide whether a fine is lawful.";

const TRUST_BADGES = [
  {
    title: "Free to use",
    subtitle: "No account and no fee to draft a letter",
    icon: Shield,
  },
  {
    title: "Runs in your browser",
    subtitle: "The letter is built on your device",
    icon: Scale,
  },
  {
    title: "Word and PDF export",
    subtitle: "Download a file you can edit before you send it",
    icon: FileText,
  },
  {
    title: "Not legal advice",
    subtitle: "Check your documents and your state page",
    icon: Clock,
  },
] as const;

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

function HeroBackdrop() {
  const rawId = useId().replace(/:/g, "");
  const patternId = `hero-grid-${rawId}`;
  const maskGradientId = `hero-grid-fade-${rawId}`;
  const maskId = `hero-grid-mask-${rawId}`;
  const glowLeftId = `hero-glow-left-${rawId}`;
  const glowCenterId = `hero-glow-center-${rawId}`;
  const glowRightId = `hero-glow-right-${rawId}`;

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id={patternId}
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="rgb(148 163 184)"
              strokeOpacity="0.12"
              strokeWidth="1"
            />
          </pattern>
          <radialGradient id={maskGradientId} cx="38%" cy="42%" r="72%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="45%" stopColor="white" stopOpacity="0.45" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id={maskId}>
            <rect width="100%" height="100%" fill={`url(#${maskGradientId})`} />
          </mask>
          <radialGradient id={glowLeftId} cx="22%" cy="38%" r="42%">
            <stop offset="0%" stopColor="rgb(16 185 129)" stopOpacity="0.28" />
            <stop offset="45%" stopColor="rgb(20 184 166)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="rgb(16 185 129)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id={glowCenterId} cx="36%" cy="48%" r="28%">
            <stop offset="0%" stopColor="rgb(52 211 153)" stopOpacity="0.16" />
            <stop offset="100%" stopColor="rgb(52 211 153)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id={glowRightId} cx="82%" cy="58%" r="38%">
            <stop offset="0%" stopColor="rgb(14 165 233)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="rgb(14 165 233)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${glowLeftId})`} />
        <rect width="100%" height="100%" fill={`url(#${glowCenterId})`} />
        <rect width="100%" height="100%" fill={`url(#${glowRightId})`} />
        <rect
          width="100%"
          height="100%"
          fill={`url(#${patternId})`}
          mask={`url(#${maskId})`}
        />
      </svg>
    </div>
  );
}

function TrustComplianceBar() {
  return (
    <ul
      className="mt-8 grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-2"
      aria-label="Trust and compliance"
    >
      {TRUST_BADGES.map((badge) => {
        const Icon = badge.icon;
        return (
          <li
            key={badge.title}
            className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 px-3.5 py-3 backdrop-blur-sm"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-500/25 bg-emerald-500/10 text-emerald-400">
              <Icon className="h-4 w-4" aria-hidden />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold leading-snug text-white">
                {badge.title}
              </span>
              <span className="mt-0.5 block text-xs leading-relaxed text-slate-400">
                {badge.subtitle}
              </span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export function HeroSection({
  headline = DEFAULT_HEADLINE,
  subheadline = DEFAULT_SUBHEADLINE,
  compact = false,
}: HeroSectionProps) {
  return (
    <header>
      <SiteNavbar />

      <section className="relative overflow-hidden border-b border-slate-800/80">
        <HeroBackdrop />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-10 lg:py-20">
          <div className="flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-sm font-medium text-emerald-300">
              <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden />
              Free letter template
            </span>

            <h1 className="mt-6 max-w-xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              <HeadlineWithGradient text={headline} />
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg">
              {subheadline}
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Link
                href="#appeal-wizard"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-7 py-3.5 text-base font-semibold text-slate-950 shadow-[0_0_32px_-6px_rgba(16,185,129,0.55)] transition-[background-color,box-shadow,transform] hover:bg-emerald-400 hover:shadow-[0_0_36px_-4px_rgba(52,211,153,0.7)] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Create a free appeal letter
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Link>
              <Link
                href="/samples"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-base font-medium text-slate-300 underline-offset-4 transition-colors hover:text-white hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50"
              >
                View sample letters
              </Link>
            </div>

            {compact ? null : <TrustComplianceBar />}
          </div>

          <div className="relative min-h-[22rem] sm:min-h-[26rem]">
            <HeroLetterPreview />
          </div>
        </div>
      </section>
    </header>
  );
}
