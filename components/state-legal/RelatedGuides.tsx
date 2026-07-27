import Link from "next/link";
import { GUIDE_ENTRIES } from "@/lib/content/guides";

type RelatedGuidesProps = {
  guideSlugs: string[];
  stateName?: string;
  /** Override intro phrasing for non-state pages */
  intro?: string;
};

export function RelatedGuides({
  guideSlugs,
  stateName,
  intro,
}: RelatedGuidesProps) {
  const guides = guideSlugs
    .map((slug) => GUIDE_ENTRIES.find((g) => g.slug === slug))
    .filter((g): g is (typeof GUIDE_ENTRIES)[number] => g !== undefined);

  if (guides.length === 0) return null;

  const introText =
    intro ??
    `These educational resources complement your ${stateName ?? "HOA"} fine appeal. Each guide expands on evidence, hearings, and owner rights referenced above.`;

  return (
    <section id="related-guides" className="scroll-mt-24">
      <h2 className="text-xl font-semibold text-white sm:text-2xl">Related guides</h2>
      <p className="mt-4 leading-relaxed text-slate-300">{introText}</p>
      <ul className="mt-6 space-y-3">
        {guides.map((guide) => (
          <li key={guide.slug}>
            <Link
              href={`/guides/${guide.slug}`}
              className="group block rounded-lg border border-slate-800 bg-slate-900/40 px-4 py-3 transition-colors hover:border-emerald-500/30 hover:bg-slate-900/70"
            >
              <span className="font-medium text-emerald-400 group-hover:underline">
                {guide.title}
              </span>
              <p className="mt-1 text-sm text-slate-400">{guide.metaDescription}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
