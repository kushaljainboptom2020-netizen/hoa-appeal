import type { ReactNode } from "react";
import type { GuideEducationalAssets } from "@/lib/content/guides/types";
import { GuideChecklist } from "@/components/guides/GuideChecklist";
import { GuideComparisonTableView } from "@/components/guides/GuideComparisonTable";
import { GuideDecisionTreeView } from "@/components/guides/GuideDecisionTree";
import { GuideDownloads } from "@/components/guides/GuideDownloads";
import { GuideProcessFlowchart } from "@/components/guides/GuideProcessFlowchart";
import { GuideTimeline } from "@/components/guides/GuideTimeline";
import { GuideVisualSummaryView } from "@/components/guides/GuideVisualSummary";

type GuideEducationalAssetsSectionProps = {
  assets: GuideEducationalAssets;
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
}: GuideEducationalAssetsSectionProps) {
  return (
    <div className="space-y-12 border-t border-slate-800/80 pt-12">
      <div>
        <p className="text-sm font-medium uppercase tracking-wider text-emerald-400">
          Educational assets
        </p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
          Interactive tools and printable worksheets built for this guide—use them
          to decide, sequence, compare, and document your next steps.
        </p>
      </div>

      <AssetBlock id="visual-summary" heading={assets.visualSummary.heading}>
        <GuideVisualSummaryView summary={assets.visualSummary} />
      </AssetBlock>

      <AssetBlock id="decision-tree" heading={assets.decisionTree.heading}>
        <GuideDecisionTreeView tree={assets.decisionTree} />
      </AssetBlock>

      <AssetBlock id="process-flow" heading={assets.processFlow.heading}>
        <GuideProcessFlowchart flow={assets.processFlow} />
      </AssetBlock>

      <AssetBlock id="comparison-table" heading={assets.comparisonTable.heading}>
        <GuideComparisonTableView table={assets.comparisonTable} />
      </AssetBlock>

      <AssetBlock id="checklist" heading={assets.checklist.heading}>
        <GuideChecklist checklist={assets.checklist} />
      </AssetBlock>

      <AssetBlock id="timeline" heading={assets.timeline.heading}>
        <GuideTimeline timeline={assets.timeline} />
      </AssetBlock>

      <AssetBlock id="downloads" heading="Downloadable worksheets">
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          Save a printable PDF packet with this guide&apos;s decision path, process
          steps, checklist, timeline, and summary for offline use.
        </p>
        <GuideDownloads downloadables={assets.downloadables} />
      </AssetBlock>
    </div>
  );
}
