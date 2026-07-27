import { GUIDE_CATALOG } from "@/lib/content/guides/catalog";
import { getStateByCode } from "@/lib/seo/statePages";
import { HOA_DECISION_TREE } from "./tree";
import type {
  DecisionLink,
  DecisionOutcomeDefinition,
  ResolvedDecisionOutcome,
} from "./types";

const guideBySlug = new Map(GUIDE_CATALOG.map((g) => [g.slug, g]));
const outcomeById = new Map(
  HOA_DECISION_TREE.outcomes.map((outcome) => [outcome.id, outcome])
);
const nodeById = new Map(HOA_DECISION_TREE.nodes.map((node) => [node.id, node]));

export function getDecisionTree() {
  return HOA_DECISION_TREE;
}

export function getDecisionNode(id: string) {
  return nodeById.get(id);
}

export function getDecisionOutcomeDefinition(
  id: string
): DecisionOutcomeDefinition | undefined {
  return outcomeById.get(id);
}

function guideLinks(slugs: string[]): DecisionLink[] {
  return slugs.flatMap((slug) => {
    const guide = guideBySlug.get(slug);
    if (!guide) return [];
    return [
      {
        label: guide.title,
        href: `/guides/${slug}`,
        description: guide.metaDescription,
      },
    ];
  });
}

function stateLinks(stateCode: string): DecisionLink[] {
  const state = getStateByCode(stateCode);
  if (!state) return [];
  return [
    {
      label: `${state.name} HOA fine appeal guide`,
      href: `/appeal-hoa-fine/${state.slug}`,
      description: `State-specific process, statutes, timelines, and the ${state.name} appeal letter tool.`,
    },
  ];
}

function withStateTool(
  tools: DecisionLink[],
  stateCode: string
): DecisionLink[] {
  const state = getStateByCode(stateCode);
  if (!state) return tools;
  const stateTool: DecisionLink = {
    label: `Open the ${state.name} appeal letter tool`,
    href: `/appeal-hoa-fine/${state.slug}`,
    description:
      "Start the wizard with your state pre-selected and jurisdiction framing ready.",
  };
  // Prefer state tool first; keep other tools without duplicating the same href.
  const rest = tools.filter((tool) => tool.href !== stateTool.href);
  return [stateTool, ...rest];
}

/** Merge curated outcome content with the homeowner's selected state. */
export function resolveOutcome(
  outcomeId: string,
  stateCode: string
): ResolvedDecisionOutcome | undefined {
  const outcome = outcomeById.get(outcomeId);
  if (!outcome) return undefined;

  return {
    id: outcome.id,
    title: outcome.title,
    summary: outcome.summary,
    guides: guideLinks(outcome.guideSlugs),
    states: stateLinks(stateCode),
    templates: outcome.templates,
    tools: withStateTool(outcome.tools, stateCode),
  };
}

export function listOutcomeIds(): string[] {
  return HOA_DECISION_TREE.outcomes.map((o) => o.id);
}

export function listNodeIds(): string[] {
  return HOA_DECISION_TREE.nodes.map((n) => n.id);
}
