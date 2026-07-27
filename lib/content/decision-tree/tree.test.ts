import { describe, expect, it } from "vitest";
import { GUIDE_CATALOG } from "@/lib/content/guides/catalog";
import {
  getDecisionTree,
  listNodeIds,
  listOutcomeIds,
  resolveOutcome,
} from "@/lib/content/decision-tree";
import { getStateByCode } from "@/lib/seo/statePages";

const guideSlugs = new Set(GUIDE_CATALOG.map((g) => g.slug));

describe("HOA decision tree", () => {
  const tree = getDecisionTree();

  it("has a valid start node and connected graph", () => {
    const nodeIds = new Set(listNodeIds());
    const outcomeIds = new Set(listOutcomeIds());

    expect(nodeIds.has(tree.startId)).toBe(true);
    expect(tree.nodes.length).toBeGreaterThanOrEqual(3);
    expect(tree.outcomes.length).toBeGreaterThanOrEqual(6);

    for (const node of tree.nodes) {
      expect(node.options.length).toBeGreaterThanOrEqual(2);
      for (const option of node.options) {
        const hasNext = Boolean(option.nextId);
        const hasOutcome = Boolean(option.outcomeId);
        expect(hasNext || hasOutcome).toBe(true);
        expect(hasNext && hasOutcome).toBe(false);
        if (option.nextId) {
          expect(nodeIds.has(option.nextId), `missing node ${option.nextId}`).toBe(
            true
          );
        }
        if (option.outcomeId) {
          expect(
            outcomeIds.has(option.outcomeId),
            `missing outcome ${option.outcomeId}`
          ).toBe(true);
        }
      }
    }
  });

  it("references only real guide slugs and worksheet paths", () => {
    for (const outcome of tree.outcomes) {
      expect(outcome.guideSlugs.length).toBeGreaterThanOrEqual(2);
      for (const slug of outcome.guideSlugs) {
        expect(guideSlugs.has(slug), `unknown guide ${slug}`).toBe(true);
      }
      for (const template of outcome.templates) {
        if (template.href.startsWith("/guides/worksheets/")) {
          const match = template.href.match(
            /^\/guides\/worksheets\/([a-z0-9-]+)-worksheet\.pdf$/
          );
          expect(match, `bad worksheet href ${template.href}`).toBeTruthy();
          expect(guideSlugs.has(match![1]!)).toBe(true);
        } else if (template.href.startsWith("/guides/")) {
          const slug = template.href.replace("/guides/", "");
          expect(guideSlugs.has(slug), `unknown template guide ${slug}`).toBe(
            true
          );
        } else {
          throw new Error(`Unexpected template href: ${template.href}`);
        }
      }
      for (const tool of outcome.tools) {
        expect(tool.href.length).toBeGreaterThan(0);
        expect(tool.label.length).toBeGreaterThan(0);
      }
    }
  });

  it("resolves California state recommendations into the state page and tool", () => {
    const california = getStateByCode("CA");
    expect(california?.slug).toBe("california");

    const resolved = resolveOutcome("appeal-letter-ready", "CA");
    expect(resolved).toBeDefined();
    expect(resolved!.states.some((s) => s.href === "/appeal-hoa-fine/california")).toBe(
      true
    );
    expect(
      resolved!.tools.some((t) => t.href === "/appeal-hoa-fine/california")
    ).toBe(true);
    expect(resolved!.guides.length).toBeGreaterThanOrEqual(2);
    expect(resolved!.templates.length).toBeGreaterThanOrEqual(1);
    expect(resolved!.guides.every((g) => g.href.startsWith("/guides/"))).toBe(
      true
    );
  });

  it("returns undefined for unknown outcomes", () => {
    expect(resolveOutcome("does-not-exist", "TX")).toBeUndefined();
  });
});
