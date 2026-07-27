import type { GuideEducationalAssets } from "@/lib/content/guides/types";
import type { ReactNode } from "react";
import { GuideChecklist } from "@/components/guides/GuideChecklist";
import { GuideComparisonTableView } from "@/components/guides/GuideComparisonTable";
import { GuideDecisionTreeView } from "@/components/guides/GuideDecisionTree";
import { GuideDownloads } from "@/components/guides/GuideDownloads";
import { GuideInfographicFigure } from "@/components/guides/GuideInfographicFigure";
import { GuideProcessFlowchart } from "@/components/guides/GuideProcessFlowchart";
import { GuideTimeline } from "@/components/guides/GuideTimeline";
import { GuideVisualSummaryView } from "@/components/guides/GuideVisualSummary";

type GuideEducationalAssetsSectionProps = {
  assets: GuideEducationalAssets;
  guideTitle: string;
};

function AssetBlock({
  id,
  heading,
  children,
}: {
  id: string;
  heading: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
        {heading}
      </h2>
      {children}
    </section>
  );
}

export function GuideEducationalAssetsSection({
  assets,
  guideTitle,
}: GuideEducationalAssetsSectionProps) {
  const { infographics } = assets;

  return (
    <div className="space-y-12 border-t border-slate-800/80 pt-12">
      <div>
        <p className="text-sm font-medium uppercase tracking-wider text-emerald-400">
          Educational assets
        </p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
          Branded SVG infographics plus interactive tools for this guide—use them
          to decide, sequence, compare, and document your next steps. Process and
          deadline timelines expand on click and animate as you scroll.
        </p>
      </div>

      <AssetBlock id="visual-summary" heading={assets.visualSummary.heading}>
        <GuideVisualSummaryView summary={assets.visualSummary} />
      </AssetBlock>

      <AssetBlock id="decision-tree" heading={assets.decisionTree.heading}>
        <GuideDecisionTreeView tree={assets.decisionTree} />
      </AssetBlock>

      <AssetBlock id="process-flow" heading={assets.processFlow.heading}>
        <GuideInfographicFigure
          src={infographics.process}
          title={`${guideTitle} process flowchart`}
          caption="Custom process flowchart for this guide."
        />
        <GuideProcessFlowchart flow={assets.processFlow} />
      </AssetBlock>

      <AssetBlock id="comparison-table" heading={assets.comparisonTable.heading}>
        <GuideInfographicFigure
          src={infographics.comparison}
          title={`${guideTitle} comparison chart`}
          caption="Custom comparison infographic for this guide."
        />
        <GuideComparisonTableView table={assets.comparisonTable} />
      </AssetBlock>

      <AssetBlock id="checklist" heading={assets.checklist.heading}>
        <GuideInfographicFigure
          src={infographics.checklist}
          title={`${guideTitle} checklist`}
          caption="Custom checklist infographic for this guide."
        />
        <GuideChecklist checklist={assets.checklist} />
      </AssetBlock>

      <AssetBlock id="timeline" heading={assets.timeline.heading}>
        <GuideInfographicFigure
          src={infographics.timeline}
          title={`${guideTitle} deadline timeline`}
          caption="Custom timeline infographic for this guide."
        />
        <GuideTimeline timeline={assets.timeline} />
      </AssetBlock>

      <AssetBlock id="downloads" heading="Downloadable worksheets">
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          Save the printable PDF packet and branded SVG infographics (process,
          comparison, timeline, checklist) for offline use.
        </p>
        <GuideDownloads downloadables={assets.downloadables} />
      </AssetBlock>
    </div>
  );
}
