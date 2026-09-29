import type { StateLegalContent } from "@/lib/content/states/types";
import type { StateSeoConfig } from "@/lib/seo/statePages";
import { ArticleAttribution } from "@/components/eeat/ArticleAttribution";
import { RelatedContentSection } from "@/components/related/RelatedContentSection";
import { AttorneyDisclaimer } from "@/components/state-legal/AttorneyDisclaimer";
import { SourcesAndCitations } from "@/components/state-legal/SourcesAndCitations";
import { StateAppealSteps } from "@/components/state-legal/StateAppealSteps";
import { StateAppealStrategy } from "@/components/state-legal/StateAppealStrategy";
import { StateContentSection } from "@/components/state-legal/StateContentSection";
import { StateEvidenceChecklist } from "@/components/state-legal/StateEvidenceChecklist";
import { StateFaqAccordion } from "@/components/state-legal/StateFaqAccordion";
import { StateStatuteList } from "@/components/state-legal/StateStatuteList";
import { StateTimelineTable } from "@/components/state-legal/StateTimelineTable";
import { StateViolationsList } from "@/components/state-legal/StateViolationsList";

type StateLegalResourceProps = {
  content: StateLegalContent;
  stateConfig: StateSeoConfig;
};

const TOC_ITEMS = [
  { id: "overview", label: "Introduction" },
  { id: "common-violations", label: "Fictional example" },
  { id: "appeal-process", label: "How to write the appeal" },
  { id: "statutes", label: "Governing law" },
  { id: "timelines", label: "Notice and cure" },
  { id: "hearing-process", label: "Who it applies to" },
  { id: "evidence-checklist", label: "Documentation" },
  { id: "appeal-strategy", label: "If the board says no" },
  { id: "state-faq", label: "Questions" },
  { id: "related-content", label: "Related resources" },
  { id: "sources", label: "Primary sources" },
  { id: "attorney-disclaimer", label: "Disclaimer" },
] as const;

export function StateLegalResource({ content, stateConfig }: StateLegalResourceProps) {
  return (
    <article className="border-t border-slate-800/80 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-12">
          <nav
            aria-label="Page contents"
            className="mb-10 hidden lg:block lg:sticky lg:top-8 lg:self-start"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">
              On this page
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {TOC_ITEMS.map((item) => (
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
                {stateConfig.name} legal resource
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Notes for {stateConfig.name}
              </h2>
              <ArticleAttribution attribution={content.attribution} />
            </header>

            <div className="mt-10 space-y-12">
              <StateContentSection id="overview" {...content.overview} />
              <section id="common-violations" className="scroll-mt-24">
                <StateContentSection {...content.commonViolations} />
                <StateViolationsList violations={content.commonViolations.violations} />
              </section>
              <section id="appeal-process" className="scroll-mt-24">
                <StateContentSection {...content.appealProcess} />
                <StateAppealSteps steps={content.appealProcess.steps} />
              </section>
              <section id="statutes" className="scroll-mt-24">
                <StateContentSection {...content.statutes} />
                <StateStatuteList items={content.statutes.items} />
              </section>
              <section id="timelines" className="scroll-mt-24">
                <StateContentSection {...content.timelines} />
                <StateTimelineTable events={content.timelines.events} />
              </section>
              <StateContentSection id="hearing-process" {...content.hearingProcess} />
              <section id="evidence-checklist" className="scroll-mt-24">
                <StateContentSection {...content.evidenceChecklist} />
                <StateEvidenceChecklist
                  categories={content.evidenceChecklist.categories}
                />
              </section>
              <section id="appeal-strategy" className="scroll-mt-24">
                <StateContentSection {...content.appealStrategy} />
                <StateAppealStrategy phases={content.appealStrategy.phases} />
              </section>
              <StateFaqAccordion items={content.faq} stateName={stateConfig.name} />
              <RelatedContentSection
                relatedContent={content.relatedContent}
                intro={`Related pages for a ${stateConfig.name} fine. Open a guide for the task, not a second copy of this statute note.`}
              />
              <SourcesAndCitations
                sources={content.sources}
                stateName={stateConfig.name}
              />
              <AttorneyDisclaimer stateName={stateConfig.name} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
