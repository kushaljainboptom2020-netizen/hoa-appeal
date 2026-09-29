import type { StateSeoConfig } from "@/lib/seo/statePages";

type StateStatuteBannerProps = {
  stateConfig: StateSeoConfig;
};

export function StateStatuteBanner({ stateConfig }: StateStatuteBannerProps) {
  return (
    <section
      className="mx-auto max-w-6xl px-4 pb-4"
      aria-labelledby="state-statute-heading"
    >
      <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-6 py-5">
        <h2
          id="state-statute-heading"
          className="text-lg font-semibold text-white sm:text-xl"
        >
          {stateConfig.name} HOA Fine Appeal Resources
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
          Read the notes on this page before you use the letter tool. A one-line
          statute slogan is not the rule. If this page says a statewide day count
          was not confirmed, do not invent one in the letter.
        </p>
      </div>
    </section>
  );
}
