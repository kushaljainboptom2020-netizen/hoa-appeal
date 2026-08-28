import Link from "next/link";
import type { SampleLetter } from "@/lib/content/samples";

type SampleLetterPreviewProps = {
  sample: SampleLetter;
};

export function SampleLetterPreview({ sample }: SampleLetterPreviewProps) {
  const { letter } = sample;
  const visible = letter.paragraphs.slice(0, 3);
  const blurred = letter.paragraphs.slice(3);

  return (
    <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-200/80 p-3 shadow-2xl shadow-black/40 sm:p-5">
      <article className="letter-canvas bg-white px-8 py-10 font-serif text-[15px] leading-relaxed text-slate-900 shadow-inner sm:px-10">
        <p className="text-sm text-slate-600">{letter.date}</p>
        <div className="mt-6 space-y-0.5 text-sm">
          {letter.addressee.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <p className="mt-6 font-semibold tracking-wide text-slate-900">
          Re: {letter.subject}
        </p>
        <p className="mt-6">{letter.greeting}</p>
        <div className="mt-4 space-y-4 text-justify">
          {visible.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
        {blurred.length > 0 ? (
          <div className="relative mt-4">
            <div className="space-y-4 text-justify blur-[2px] sm:blur-sm">
              {blurred.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
              <p className="whitespace-pre-line">{letter.signOff}</p>
            </div>
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/80 to-transparent"
              aria-hidden
            />
          </div>
        ) : (
          <p className="mt-8 whitespace-pre-line">{letter.signOff}</p>
        )}
      </article>
    </div>
  );
}

export function SampleGenerateCallout() {
  return (
    <aside className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 sm:p-6">
      <p className="text-sm font-semibold tracking-wide text-emerald-300 uppercase">
        Personalize this letter
      </p>
      <p className="mt-3 text-base leading-relaxed text-slate-200">
        Want this tailored to your specific situation and state laws?
      </p>
      <Link
        href="/#appeal-wizard"
        className="mt-5 inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_24px_-4px_rgba(16,185,129,0.45)] transition-colors hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      >
        Generate Your Personalized Appeal Letter Now
      </Link>
    </aside>
  );
}
