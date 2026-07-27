"use client";

import { InteractiveProcessTimeline } from "@/components/process/InteractiveProcessTimeline";
import { toInteractiveStepsFromProcess } from "@/lib/content/process/timeline";
import type { GuideProcessFlow } from "@/lib/content/guides/types";

type GuideProcessFlowchartProps = {
  flow: GuideProcessFlow;
};

/** Renders guide process stages as a scroll-animated, expandable timeline. */
export function GuideProcessFlowchart({ flow }: GuideProcessFlowchartProps) {
  const steps = toInteractiveStepsFromProcess(flow.steps, "guide-process");

  return <InteractiveProcessTimeline intro={flow.intro} steps={steps} />;
}
