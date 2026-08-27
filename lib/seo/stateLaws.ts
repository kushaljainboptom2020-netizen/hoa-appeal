import type { BreadcrumbList, ItemList, Table, WebPage } from "schema-dts";
import {
  absoluteLetterUrl,
  type StateLawComparisonRow,
} from "@/lib/content/state-laws";
import {
  SCHEMA_CONTEXT,
  WEBSITE_ID,
  asGraphNode,
  type JsonLdGraph,
} from "@/lib/seo/jsonLd";
import { SITE_URL } from "@/lib/seo/siteUrl";

const PAGE_PATH = "/state-laws";
const PAGE_NAME = "HOA Fine Caps and Hearing Notice by State";
const PAGE_DESCRIPTION =
  "Compare HOA governing statutes, maximum fine caps, and mandatory hearing notice periods across all 50 US states.";

export function getStateLawsPageUrl(): string {
  return `${SITE_URL}${PAGE_PATH}`;
}

export function buildStateLawsTableSchema(
  rows: StateLawComparisonRow[]
): JsonLdGraph {
  const pageUrl = getStateLawsPageUrl();
  const tableId = `${pageUrl}#table`;
  const listId = `${pageUrl}#rows`;

  const webPage: WebPage = {
    "@id": pageUrl,
    "@type": "WebPage",
    name: PAGE_NAME,
    description: PAGE_DESCRIPTION,
    url: pageUrl,
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: { "@id": tableId },
  };

  const table: Table = {
    "@id": tableId,
    "@type": "Table",
    name: PAGE_NAME,
    about:
      "Comparison of primary HOA governing statutes, statutory fine caps, and mandatory hearing notice periods by US state",
    description: PAGE_DESCRIPTION,
    url: pageUrl,
    mainEntity: { "@id": listId },
  };

  const itemList: ItemList = {
    "@id": listId,
    "@type": "ItemList",
    name: "State HOA law comparison rows",
    numberOfItems: rows.length,
    itemListElement: rows.map((row, index) => ({
      "@type": "ListItem" as const,
      position: index + 1,
      name: row.name,
      url: absoluteLetterUrl(row),
      description: `${row.governingStatute}. Max fine: ${row.maxFineCap}. Hearing notice: ${row.hearingNotice}.`,
    })),
  };

  const breadcrumb: BreadcrumbList = {
    "@id": `${pageUrl}#breadcrumb`,
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "State Laws",
        item: pageUrl,
      },
    ],
  };

  return {
    "@context": SCHEMA_CONTEXT,
    "@graph": [
      asGraphNode(webPage),
      asGraphNode(table),
      asGraphNode(itemList),
      asGraphNode(breadcrumb),
    ],
  };
}
