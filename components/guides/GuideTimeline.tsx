"use client";

import { InteractiveProcessTimeline } from "@/components/process/InteractiveProcessTimeline";
import { toInteractiveStepsFromEvents } from "@/lib/content/process/timeline";
import type { GuideTimelineAsset } from "@/lib/content/guides/types";

type GuideTimelineProps = {
  timeline: GuideTimelineAsset;
};

/** Renders guide calendar stages as a scroll-animated, expandable timeline. */
export function GuideTimeline({ timeline }: GuideTimelineProps) {
  const steps = toInteractiveStepsFromEvents(timeline.events, "guide-timeline");

  return (
    <InteractiveProcessTimeline intro={timeline.intro} steps={steps} />
  );
}
