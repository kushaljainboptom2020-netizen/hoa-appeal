import Link from "next/link";
import type { RelatedContentBuckets } from "@/lib/content/related";

type RelatedContentSectionProps = {
  relatedContent: RelatedContentBuckets;
  intro?: string;
};

type BucketConfig = {
  key: keyof RelatedContentBuckets;
  label: string;
};

const BUCKETS: BucketConfig[] = [
  { key: "states", label: "Relevant state pages" },
  { key: "guides", label: "Related guides" },
  { key: "faqs", label: "Related FAQs" },
  { key: "tools", label: "Tools" },
  { key: "successStories", label: "Success stories" },
];

export function RelatedContentSection({
  relatedContent,
  intro = "Continue your research with these relevance-ranked internal resources.",
}: RelatedContentSectionProps) {
  const hasLinks = BUCKETS.some((bucket) => relatedContent[bucket.key].length > 0);
  if (!hasLinks) return null;

  return (
    <section id="related-content" className="scroll-mt-24">
      <h2 className="text-xl font-semibold text-white sm:text-2xl">Related content</h2>
      <p className="mt-4 leading-relaxed text-slate-300">{intro}</p>

      <div className="mt-6 space-y-6">
        {BUCKETS.map((bucket) => {
          const links = relatedContent[bucket.key];
          if (links.length === 0) return null;

          return (
            <section key={bucket.key} aria-label={bucket.label}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                {bucket.label}
              </h3>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block h-full rounded-lg border border-slate-800 bg-slate-900/40 px-4 py-3 transition-colors hover:border-emerald-500/30"
                    >
                      <span className="font-medium text-white">{link.label}</span>
                      <p className="mt-1 text-sm text-slate-400">{link.description}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </section>
  );
}
