import { Check, ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

type StepCardProps = {
  step: string;
  icon: ReactNode;
  title: string;
  description: string;
  graphic: ReactNode;
};

function StepIconWell({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/25 bg-slate-950/90 text-emerald-400 shadow-[inset_0_0_18px_rgba(16,185,129,0.12)] transition-colors group-hover:border-emerald-500/40 group-hover:shadow-[inset_0_0_22px_rgba(16,185,129,0.2)]">
      {children}
    </span>
  );
}

function MapDocumentIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-7 w-7" aria-hidden>
      <rect
        x="4.5"
        y="9"
        width="18"
        height="22"
        rx="2"
        fill="#0f172a"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8 14.5h11M8 18.5h8M8 22.5h10"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M21 11.5c3.2-2.4 6.8-1.6 9.2.8 2.2 2.2 3.4 2.8 5.3 1.6v12.4c-2.1 1.4-4.6.6-6.8-1.4-2.6-2.4-5.8-2.8-8.7-.4"
        fill="rgba(15,23,42,0.85)"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="27.5" cy="17" r="1.4" fill="currentColor" />
    </svg>
  );
}

function ChecklistPenIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-7 w-7" aria-hidden>
      <rect
        x="5"
        y="7"
        width="21"
        height="26"
        rx="2.5"
        fill="#0f172a"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9 14.5h4.5M16.5 14.5h6.5M9 20.5h4.5M16.5 20.5h6.5M9 26.5h4.5M16.5 26.5h5"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M8.6 14.5l1.4 1.4 2.6-2.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 27.5 33.2 18.3a2.1 2.1 0 0 1 3 3L27 30.5l-3.8.8z"
        fill="rgba(16,185,129,0.18)"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StampDownloadIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-7 w-7" aria-hidden>
      <rect
        x="6"
        y="6.5"
        width="18.5"
        height="23"
        rx="2"
        fill="#0f172a"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10 12h10.5M10 16h8M10 20h9"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle
        cx="27.5"
        cy="24.5"
        r="8.2"
        fill="rgba(16,185,129,0.12)"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle
        cx="27.5"
        cy="24.5"
        r="5.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.55"
      />
      <path
        d="M27.5 20.4v6.2M24.8 24.2 27.5 27l2.7-2.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StepCard({ step, icon, title, description, graphic }: StepCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-xs font-semibold tracking-[0.18em] text-emerald-400/90">
          {step}
        </span>
        <StepIconWell>{icon}</StepIconWell>
      </div>

      <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>

      <div className="mt-5 flex-1" aria-hidden>
        {graphic}
      </div>
    </article>
  );
}

function ViolationDetailsGraphic() {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3 shadow-inner">
      <div className="flex items-center justify-between gap-2">
        <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-[11px] font-medium text-emerald-300">
          CA · California
        </span>
        <span className="text-[10px] font-medium tracking-wide text-slate-500 uppercase">
          Notice
        </span>
      </div>
      <div className="mt-3 rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2.5">
        <p className="text-[10px] font-medium tracking-wide text-slate-500 uppercase">
          Violation type
        </p>
        <div className="mt-1.5 flex items-center justify-between gap-2">
          <span className="text-xs font-medium text-slate-200">
            Landscaping
          </span>
          <ChevronDown className="h-3.5 w-3.5 text-slate-500" />
        </div>
      </div>
      <div className="mt-2 space-y-1.5 rounded-lg border border-dashed border-slate-700/80 bg-slate-900/40 px-3 py-2.5">
        <div className="h-1.5 w-full rounded bg-slate-700/80" />
        <div className="h-1.5 w-4/5 rounded bg-slate-700/60" />
        <div className="h-1.5 w-3/5 rounded bg-slate-700/40" />
        <p className="pt-1 text-[10px] text-slate-500">Paste notice details…</p>
      </div>
    </div>
  );
}

function DefenseToggleGraphic() {
  const options = [
    { label: "Lack of proper written notice", selected: true },
    { label: "Inaccurate date / false claim", selected: false },
    { label: "Weather / Drought conditions", selected: false },
  ] as const;

  return (
    <div className="space-y-2 rounded-xl border border-slate-800 bg-slate-950/80 p-3 shadow-inner">
      {options.map((option) => (
        <div
          key={option.label}
          className={`flex items-center gap-2.5 rounded-lg border px-3 py-2.5 transition-colors ${
            option.selected
              ? "border-emerald-500/40 bg-emerald-500/10"
              : "border-slate-800 bg-slate-900/50"
          }`}
        >
          <span
            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
              option.selected
                ? "border-emerald-400 bg-emerald-500 text-slate-950"
                : "border-slate-600 bg-transparent"
            }`}
          >
            {option.selected ? <Check className="h-2.5 w-2.5" strokeWidth={3} /> : null}
          </span>
          <span
            className={`text-xs font-medium ${
              option.selected ? "text-emerald-200" : "text-slate-400"
            }`}
          >
            {option.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function AppealPreviewGraphic() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950/80 p-3 shadow-inner">
      <div className="rounded-lg border border-slate-200/20 bg-[#f8fafc] p-3 text-slate-800 shadow-sm">
        <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-2">
          <span className="text-[10px] font-semibold tracking-[0.14em] text-slate-500 uppercase">
            Appeal Letter.pdf
          </span>
          <span className="rounded bg-slate-200/80 px-1.5 py-0.5 text-[9px] font-semibold text-slate-600">
            PDF
          </span>
        </div>
        <div className="mt-2.5 space-y-1.5">
          <div className="h-1.5 w-full rounded bg-slate-300/90" />
          <div className="h-1.5 w-11/12 rounded bg-slate-300/70" />
          <div className="h-1.5 w-4/5 rounded bg-slate-300/55" />
          <div className="h-1.5 w-2/3 rounded bg-slate-300/40" />
        </div>
        <p className="mt-3 font-serif text-[11px] leading-snug text-slate-600">
          Respectfully submitted for board review…
        </p>
      </div>

      <div className="absolute -right-1 top-8 rotate-6 rounded border-2 border-emerald-500/80 bg-emerald-500/15 px-2.5 py-1.5 shadow-lg shadow-emerald-900/30 backdrop-blur-sm">
        <p className="text-[9px] font-bold tracking-wide text-emerald-300 uppercase">
          USPS Certified
        </p>
        <p className="text-[9px] font-semibold text-emerald-200/90">
          Mail Ready
        </p>
      </div>
    </div>
  );
}

const STEPS = [
  {
    step: "01",
    icon: <MapDocumentIcon />,
    title: "Select State & Violation",
    description:
      "Choose your state and the violation on your HOA notice. We map the facts to the right statutory context—no legal jargon required.",
    graphic: <ViolationDetailsGraphic />,
  },
  {
    step: "02",
    icon: <ChecklistPenIcon />,
    title: "Input Your Defense Facts",
    description:
      "Record the details that support your case—notice gaps, inaccurate claims, or conditions like weather and drought—in a guided checklist.",
    graphic: <DefenseToggleGraphic />,
  },
  {
    step: "03",
    icon: <StampDownloadIcon />,
    title: "Export Legally-Formatted Appeal",
    description:
      "Download a professionally formatted appeal as Word (.docx) or PDF, ready to send to your board.",
    graphic: <AppealPreviewGraphic />,
  },
] as const;

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="scroll-mt-24 border-b border-slate-800/80 bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="how-it-works-heading"
            className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            How MyHOAAppeal Works
          </h2>
          <p className="mt-3 text-base text-slate-400 sm:text-lg">
            Three steps from notice to a board-ready letter—no legal knowledge
            required.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {STEPS.map((item) => (
            <StepCard
              key={item.step}
              step={item.step}
              icon={item.icon}
              title={item.title}
              description={item.description}
              graphic={item.graphic}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
