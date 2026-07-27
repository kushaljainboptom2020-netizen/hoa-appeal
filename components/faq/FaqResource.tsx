import Link from "next/link";
import type { FaqArticle } from "@/lib/content/faq/types";
import { RelatedContentSection } from "@/components/related/RelatedContentSection";
import { ArticleAttribution } from "@/components/eeat/ArticleAttribution";
import { GuideCtaBlock } from "@/components/guides/GuideCtaBlock";
import { AttorneyDisclaimer } from "@/components/state-legal/AttorneyDisclaimer";
import { SourcesAndCitations } from "@/components/state-legal/SourcesAndCitations";
import { StateContentSection } from "@/components/state-legal/StateContentSection";
import { getStateByCode } from "@/lib/seo/statePages";

type FaqResourceProps = {
  faq: FaqArticle;
};

function sectionId(heading: string, index: number): string {
  const slug = heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `section-${index}-${slug}`.slice(0, 80);
}

export function FaqResource({ faq }: FaqResourceProps) {
  const stateLinks = faq.stateConsiderations.relatedStateCodes
    .map((code) => getStateByCode(code))
    .filter((state): state is NonNullable<typeof state> => Boolean(state));

  const tocItems = [
    { id: "direct-answer", label: "Direct answer" },
    ...faq.explanation.map((section, index) => ({
      id: sectionId(section.heading, index),
      label: section.heading,
    })),
    { id: "state-considerations", label: "State considerations" },
    { id: "related-content", label: "Related content" },
    { id: "sources", label: "Sources" },
    { id: "attorney-disclaimer", label: "Disclaimer" },
    { id: "faq-cta", label: "Next step" },
  ];

  return (
    <article className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-12">
          <nav
            aria-label="Article contents"
            className="mb-10 hidden lg:block lg:sticky lg:top-8 lg:self-start"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">
              On this page
            </p>
            <ul className="mt-4 max-h-[70vh] space-y-2 overflow-y-auto pr-2 text-sm">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-slate-400 transition-colors hover:text-emerald-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="max-w-3xl">
            <header>
              <p className="text-sm font-medium uppercase tracking-wider text-emerald-400">
                FAQ knowledge base
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {faq.question}
              </h1>
              <ArticleAttribution attribution={faq.attribution} />
            </header>

            <div className="mt-10 space-y-12">
              <section
                id="direct-answer"
                className="scroll-mt-24 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-5 py-6"
              >
                <h2 className="text-xl font-semibold text-white sm:text-2xl">
                  Direct answer
                </h2>
                <p className="mt-4 leading-relaxed text-slate-200">
                  {faq.directAnswer}
                </p>
              </section>

              {faq.explanation.map((section, index) => (
                <StateContentSection
                  key={section.heading}
                  id={sectionId(section.heading, index)}
                  heading={section.heading}
                  paragraphs={section.paragraphs}
                  bullets={section.bullets}
                />
              ))}

              <section id="state-considerations" className="scroll-mt-24">
                <h2 className="text-xl font-semibold text-white sm:text-2xl">
                  Relevant state considerations
                </h2>
                <p className="mt-4 leading-relaxed text-slate-300">
                  {faq.stateConsiderations.intro}
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                  {faq.stateConsiderations.points.map((point) => (
                    <li key={point} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
                {stateLinks.length > 0 ? (
                  <div className="mt-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                      Featured state pages
                    </h3>
                    <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                      {stateLinks.map((state) => (
                        <li key={state.code}>
                          <Link
                            href={`/appeal-hoa-fine/${state.slug}`}
                            className="block h-full rounded-lg border border-slate-800 bg-slate-900/40 px-4 py-3 transition-colors hover:border-emerald-500/30"
                          >
                            <span className="font-medium text-white">
                              {state.name} HOA fine appeal guide
                            </span>
                            <p className="mt-1 text-sm text-slate-400">
                              {state.statuteReference}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </section>

              <RelatedContentSection
                relatedContent={faq.relatedContent}
                intro="Continue with relevance-ranked guides, related FAQ answers, state pages, and tools."
              />

              <SourcesAndCitations
                sources={faq.sources}
                intro="Primary references and starting points used while compiling this educational FAQ. Verify current statutory text through official legislative services before citing in formal correspondence."
              />

              <AttorneyDisclaimer contextLabel="this FAQ" />

              <GuideCtaBlock cta={faq.cta} id="faq-cta" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
