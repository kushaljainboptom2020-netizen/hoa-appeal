"use client";

import { InteractiveProcessTimeline } from "@/components/process/InteractiveProcessTimeline";
import { toInteractiveStepsFromProcess } from "@/lib/content/process/timeline";
import type { StateAppealStep } from "@/lib/content/states/types";

type StateAppealStepsProps = {
  steps: StateAppealStep[];
};

/** Renders state appeal process stages as an interactive timeline. */
export function StateAppealSteps({ steps }: StateAppealStepsProps) {
  return (
    <InteractiveProcessTimeline
      steps={toInteractiveStepsFromProcess(steps, "state-appeal")}
    />
  );
}
