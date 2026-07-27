import Link from "next/link";
import type { GuideCta } from "@/lib/content/guides/types";

type GuideCtaBlockProps = {
  cta: GuideCta;
  id?: string;
};

export function GuideCtaBlock({ cta, id = "guide-cta" }: GuideCtaBlockProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-5 py-6"
    >
      <h2 className="text-lg font-semibold text-white">{cta.headline}</h2>
      <p className="mt-3 leading-relaxed text-slate-300">{cta.body}</p>
      <p className="mt-4">
        <Link
          href={cta.href}
          className="font-medium text-emerald-400 underline-offset-2 hover:underline"
        >
          {cta.linkLabel}
        </Link>
      </p>
    </section>
  );
}
