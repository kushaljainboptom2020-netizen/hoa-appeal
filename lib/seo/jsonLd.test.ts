import { describe, expect, it } from "vitest";
import { getFaqBySlug } from "@/lib/content/faq";
import { getGuideBySlug } from "@/lib/content/guides";
import { getStateLawComparisonRows } from "@/lib/content/state-laws";
import {
  ORGANIZATION_ID,
  WEBSITE_ID,
  buildSiteSchemaGraph,
  buildSoftwareApplicationSchema,
  buildStateStructuredDataGraph,
} from "@/lib/seo/jsonLd";
import { buildStateLawsTableSchema } from "@/lib/seo/stateLaws";
import { buildFaqStructuredDataGraph } from "@/lib/seo/faq";
import { buildGuideStructuredDataGraph } from "@/lib/seo/guides";
import { getStateBySlug } from "@/lib/seo/statePages";

describe("structured data", () => {
  it("includes Organization and WebSite without SearchAction", () => {
    const graph = buildSiteSchemaGraph();
    expect(Array.isArray(graph["@graph"])).toBe(true);

    const nodes = graph["@graph"] as unknown as Array<Record<string, unknown>>;
    const orgNodes = nodes.filter((node) => node["@type"] === "Organization");
    const websiteNodes = nodes.filter((node) => node["@type"] === "WebSite");

    expect(orgNodes).toHaveLength(1);
    expect(websiteNodes).toHaveLength(1);
    expect(orgNodes[0]["@id"]).toBe(ORGANIZATION_ID);
    expect(websiteNodes[0]["@id"]).toBe(WEBSITE_ID);
    expect(websiteNodes[0].potentialAction).toBeUndefined();
  });

  it("exposes SoftwareApplication on the home page schema", () => {
    const appSchema = buildSoftwareApplicationSchema() as Record<string, unknown>;
    expect(appSchema["@type"]).toBe("SoftwareApplication");
    expect(appSchema.publisher).toEqual({ "@id": ORGANIZATION_ID });
  });

  it("builds one Article, FAQPage, and BreadcrumbList per guide page without nested @context", () => {
    const guide = getGuideBySlug("hoa-fine-appeal-process");
    expect(guide).toBeDefined();
    if (!guide) return;

    const graph = buildGuideStructuredDataGraph(guide);
    const nodes = graph["@graph"] as Array<Record<string, unknown>>;
    const countByType = nodes.reduce<Record<string, number>>((acc, node) => {
      const type = String(node["@type"] ?? "");
      acc[type] = (acc[type] ?? 0) + 1;
      return acc;
    }, {});

    expect(countByType.Article).toBe(1);
    expect(countByType.FAQPage).toBe(1);
    expect(countByType.BreadcrumbList).toBe(1);
    for (const node of nodes) {
      expect(node["@context"]).toBeUndefined();
    }

    const article = nodes.find((node) => node["@type"] === "Article") as
      | Record<string, unknown>
      | undefined;
    expect(article?.datePublished).toBe(guide.attribution.publishedAtIso);
    expect(article?.dateModified).toBe(guide.attribution.updatedAtIso);
  });

  it("builds one FAQPage and BreadcrumbList per FAQ knowledge-base page", () => {
    const faq = getFaqBySlug("how-do-i-start-an-hoa-fine-appeal");
    expect(faq).toBeDefined();
    if (!faq) return;

    const graph = buildFaqStructuredDataGraph(faq);
    const nodes = graph["@graph"] as Array<Record<string, unknown>>;
    const countByType = nodes.reduce<Record<string, number>>((acc, node) => {
      const type = String(node["@type"] ?? "");
      acc[type] = (acc[type] ?? 0) + 1;
      return acc;
    }, {});

    expect(countByType.FAQPage).toBe(1);
    expect(countByType.BreadcrumbList).toBe(1);
    for (const node of nodes) {
      expect(node["@context"]).toBeUndefined();
    }

    const faqNode = nodes.find((node) => node["@type"] === "FAQPage") as
      | Record<string, unknown>
      | undefined;
    const mainEntity = faqNode?.mainEntity as Array<Record<string, unknown>>;
    expect(mainEntity).toHaveLength(1);
    expect(mainEntity[0]?.name).toBe(faq.question);
  });

  it("builds state HowTo + Article + Home→State breadcrumb without nested @context", () => {
    const config = getStateBySlug("california");
    expect(config).toBeDefined();
    if (!config) return;

    const graph = buildStateStructuredDataGraph(config);
    const nodes = graph["@graph"] as Array<Record<string, unknown>>;
    expect(nodes.some((n) => n["@type"] === "HowTo")).toBe(true);
    expect(nodes.some((n) => n["@type"] === "Article")).toBe(true);

    const crumb = nodes.find((n) => n["@type"] === "BreadcrumbList") as
      | Record<string, unknown>
      | undefined;
    expect(crumb).toBeDefined();
    const items = crumb?.itemListElement as Array<Record<string, unknown>>;
    expect(items).toHaveLength(2);
    expect(items[0]?.name).toBe("Home");
    expect(items[1]?.name).toBe("California HOA appeal");
    expect(String(items[1]?.item)).toContain("/appeal-hoa-fine/california");
    for (const node of nodes) {
      expect(node["@context"]).toBeUndefined();
    }
  });

  it("builds a Table schema with 50 comparison list items", () => {
    const rows = getStateLawComparisonRows();
    const graph = buildStateLawsTableSchema(rows);
    const nodes = graph["@graph"] as Array<Record<string, unknown>>;

    expect(nodes.some((n) => n["@type"] === "Table")).toBe(true);
    expect(nodes.some((n) => n["@type"] === "WebPage")).toBe(true);

    const list = nodes.find((n) => n["@type"] === "ItemList") as
      | Record<string, unknown>
      | undefined;
    expect(list?.numberOfItems).toBe(50);
    expect(list?.itemListElement).toHaveLength(50);
    for (const node of nodes) {
      expect(node["@context"]).toBeUndefined();
    }
  });
});
