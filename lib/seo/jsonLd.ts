import type { StateSeoConfig } from "./statePages";
import type {
  Article,
  BreadcrumbList,
  ListItem,
  Organization,
  Thing,
  WebApplication,
  WebSite,
} from "schema-dts";
import { SUPPORT_EMAIL } from "@/lib/config/site";
import { attributionForStateCode } from "@/lib/content/editorial/attribution";
import { SITE_URL } from "./siteUrl";

export const SCHEMA_CONTEXT = "https://schema.org";
export const ORGANIZATION_ID = `${SITE_URL}#organization`;
export const WEBSITE_ID = `${SITE_URL}#website`;

export type JsonLdGraph = {
  "@context": typeof SCHEMA_CONTEXT;
  "@graph": Thing[];
};

/** Remove nested @context so only the graph root declares it. */
export function asGraphNode<T extends object>(node: T): Thing {
  const copy = { ...node } as T & { "@context"?: unknown };
  delete copy["@context"];
  return copy as unknown as Thing;
}

export function buildSiteSchemaGraph() {
  const organization: Organization = {
    "@id": ORGANIZATION_ID,
    "@type": "Organization",
    name: "MyHOAAppeal",
    url: SITE_URL,
    email: SUPPORT_EMAIL,
  };

  const website: WebSite = {
    "@id": WEBSITE_ID,
    "@type": "WebSite",
    name: "MyHOAAppeal",
    url: SITE_URL,
    inLanguage: "en-US",
    publisher: {
      "@id": ORGANIZATION_ID,
    },
  };

  return {
    "@context": SCHEMA_CONTEXT,
    "@graph": [organization, website],
  } satisfies JsonLdGraph;
}

export function buildSoftwareApplicationSchema() {
  const schema: WebApplication = {
    "@type": "WebApplication",
    name: "MyHOAAppeal letter template",
    url: SITE_URL,
    applicationCategory: "WebApplication",
    operatingSystem: "All",
    publisher: {
      "@id": ORGANIZATION_ID,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Free template that helps a homeowner draft an HOA fine appeal letter from facts the homeowner enters. The homeowner edits the letter. It is not legal advice and it is not a determination that a fine is unlawful.",
    inLanguage: "en-US",
  };

  return {
    "@context": SCHEMA_CONTEXT,
    ...schema,
  };
}

export function buildStateStructuredDataGraph(config: StateSeoConfig) {
  const stateUrl = `${SITE_URL}/appeal-hoa-fine/${config.slug}`;

  const article: Article = {
    "@id": `${stateUrl}#article`,
    "@type": "Article",
    headline: `How to Appeal an HOA Fine in ${config.name}`,
    description: `Educational ${config.name} HOA fine appeal notes. Statewide rules are stated only where this site checked the section.`,
    url: stateUrl,
    datePublished: attributionForStateCode(config.code).publishedAtIso,
    dateModified: attributionForStateCode(config.code).updatedAtIso,
    inLanguage: "en-US",
    author: {
      "@type": "Organization",
      name: "MyHOAAppeal",
      url: SITE_URL,
    },
    publisher: {
      "@id": ORGANIZATION_ID,
    },
    mainEntityOfPage: stateUrl,
    isPartOf: {
      "@id": WEBSITE_ID,
    },
  };

  const breadcrumb: BreadcrumbList = {
    "@type": "BreadcrumbList",
    "@id": `${stateUrl}#breadcrumb`,
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
        name: `${config.name} HOA appeal`,
        item: stateUrl,
      },
    ] satisfies ListItem[],
  };

  return {
    "@context": SCHEMA_CONTEXT,
    "@graph": [asGraphNode(article), asGraphNode(breadcrumb)],
  } satisfies JsonLdGraph;
}
