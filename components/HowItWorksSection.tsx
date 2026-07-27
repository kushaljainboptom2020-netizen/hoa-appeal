import { Check, ChevronDown, FileText, Send, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";

type StepCardProps = {
  step: string;
  icon: ReactNode;
  title: string;
  description: string;
  graphic: ReactNode;
};

function StepCard({ step, icon, title, description, graphic }: StepCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-xs font-semibold tracking-[0.18em] text-emerald-400/90">
          {step}
        </span>
        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-950/80 text-emerald-400 transition-colors group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10">
          {icon}
        </span>
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
    icon: <FileText className="h-5 w-5" aria-hidden />,
    title: "Enter Violation Details",
    description:
      "Select your state and paste the details from your HOA notice. We capture the violation type, dates, and key facts—no legal jargon required.",
    graphic: <ViolationDetailsGraphic />,
  },
  {
    step: "02",
    icon: <ShieldCheck className="h-5 w-5" aria-hidden />,
    title: "Select Your Legal Defense",
    description:
      "Choose from pre-built defenses like lack of proper written notice, inaccurate claims, or weather/drought conditions tailored to your violation.",
    graphic: <DefenseToggleGraphic />,
  },
  {
    step: "03",
    icon: <Send className="h-5 w-5" aria-hidden />,
    title: "Download & Send Official Appeal",
    description:
      "Get a polished appeal letter ready to download as a PDF and send—formatted for a clear, professional board submission.",
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
            How You Beat Your HOA Fine in 3 Simple Steps
          </h2>
          <p className="mt-3 text-base text-slate-400 sm:text-lg">
            No legal knowledge required—just answer a few questions and generate
            a professional appeal letter in minutes.
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
