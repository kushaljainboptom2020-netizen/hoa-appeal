import Link from "next/link";
import type { GuideArticle } from "@/lib/content/guides/types";
import { RelatedContentSection } from "@/components/related/RelatedContentSection";
import { ArticleAttribution } from "@/components/eeat/ArticleAttribution";
import { AttorneyDisclaimer } from "@/components/state-legal/AttorneyDisclaimer";
import { SourcesAndCitations } from "@/components/state-legal/SourcesAndCitations";
import { StateContentSection } from "@/components/state-legal/StateContentSection";
import { GuideCtaBlock } from "@/components/guides/GuideCtaBlock";
import { GuideFaqAccordion } from "@/components/guides/GuideFaqAccordion";

type GuideResourceProps = {
  guide: GuideArticle;
};

function sectionId(heading: string, index: number): string {
  const slug = heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `section-${index}-${slug}`.slice(0, 80);
}

export function GuideResource({ guide }: GuideResourceProps) {
  const tocItems = [
    { id: "intro", label: "Introduction" },
    ...guide.sections.map((section, index) => ({
      id: sectionId(section.heading, index),
      label: section.heading,
    })),
    { id: "conclusion", label: "Conclusion" },
    { id: "guide-links", label: "Related resources" },
    { id: "guide-faq", label: "FAQ" },
    { id: "related-content", label: "Related content" },
    { id: "sources", label: "Sources" },
    { id: "attorney-disclaimer", label: "Disclaimer" },
    { id: "guide-cta", label: "Next step" },
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
                Educational guide
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {guide.title}
              </h1>
              <ArticleAttribution attribution={guide.attribution} />
            </header>

            <div className="mt-10 space-y-12">
              <StateContentSection
                id="intro"
                heading="Introduction"
                paragraphs={guide.intro}
              />

              {guide.sections.map((section, index) => (
                <StateContentSection
                  key={section.heading}
                  id={sectionId(section.heading, index)}
                  heading={section.heading}
                  paragraphs={section.paragraphs}
                  bullets={section.bullets}
                />
              ))}

              <StateContentSection
                id="conclusion"
                heading="Conclusion"
                paragraphs={guide.conclusion}
              />

              <section id="guide-links" className="scroll-mt-24">
                <h2 className="text-xl font-semibold text-white">Related resources</h2>
                <ul className="mt-4 space-y-3">
                  {guide.internalLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-medium text-emerald-400 underline-offset-2 hover:underline"
                      >
                        {link.label}
                      </Link>
                      <p className="mt-1 text-sm leading-relaxed text-slate-400">
                        {link.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>

              <GuideFaqAccordion items={guide.faq} guideTitle={guide.title} />

              <RelatedContentSection
                relatedContent={guide.relatedContent}
                intro="A few related pages for the next step. Open the state page before you cite a statute."
              />

              <SourcesAndCitations
                sources={guide.sources}
                intro="Primary references and starting points used while compiling this educational guide. Verify current statutory text through official legislative services before citing in formal correspondence."
              />

              <AttorneyDisclaimer contextLabel="this guide" />

              <GuideCtaBlock cta={guide.cta} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
