"use client";

import { InteractiveProcessTimeline } from "@/components/process/InteractiveProcessTimeline";
import { toInteractiveStepsFromEvents } from "@/lib/content/process/timeline";
import type { StateTimelineEvent } from "@/lib/content/states/types";

type StateTimelineTableProps = {
  events: StateTimelineEvent[];
};

/** Renders state fine timelines as a scroll-animated, expandable timeline. */
export function StateTimelineTable({ events }: StateTimelineTableProps) {
  return (
    <InteractiveProcessTimeline
      steps={toInteractiveStepsFromEvents(events, "state-timeline")}
    />
  );
}
