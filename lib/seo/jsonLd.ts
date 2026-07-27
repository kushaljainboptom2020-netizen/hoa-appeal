import type { StateSeoConfig } from "./statePages";
import type {
  Article,
  BreadcrumbList,
  HowTo,
  HowToStep,
  ListItem,
  Organization,
  SoftwareApplication,
  Thing,
  WebSite,
} from "schema-dts";
import {
  attributionForStateCode,
  resolveAttribution,
} from "@/lib/content/editorial/attribution";
import { SUPPORT_EMAIL } from "@/lib/config/site";
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
  const { ["@context"]: _ignored, ...rest } = node as T & {
    "@context"?: unknown;
  };
  return rest as unknown as Thing;
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
  const schema: SoftwareApplication = {
    "@type": "SoftwareApplication",
    name: "MyHOAAppeal — Free HOA Fine Dispute Letter Generator",
    url: SITE_URL,
    applicationCategory: "BusinessApplication",
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
      "Instantly create a legally structured dispute and appeal letter to fight unreasonable HOA fines. 100% free.",
    inLanguage: "en-US",
  };

  return {
    "@context": SCHEMA_CONTEXT,
    ...schema,
  };
}

export function buildHowToSchema(config: StateSeoConfig) {
  const { name, slug, statuteReference } = config;
  const steps: HowToStep[] = [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Review the fine notice",
      text: `Read the HOA violation notice carefully and note the stated violation, fine amount, and response deadline. In ${name}, ${statuteReference}.`,
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Gather supporting evidence",
      text: "Collect photographs, correspondence, receipts, and any CC&Rs or bylaw excerpts relevant to the violation. Strong documentation is the foundation of a successful appeal.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Generate your appeal letter with MyHOAAppeal",
      text: `Use MyHOAAppeal's free generator to produce a professionally formatted ${name} HOA fine dispute letter, tailored to your situation and aligned with ${name} HOA law.`,
      url: `${SITE_URL}/appeal-hoa-fine/${slug}`,
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Submit the letter to your HOA board",
      text: "Deliver the appeal letter before the stated deadline. Certified mail or hand-delivery with a signed receipt is strongly recommended to create an undeniable paper trail.",
    },
  ];
  const howTo: HowTo = {
    "@type": "HowTo",
    name: `How to dispute an HOA fine in ${name}`,
    description: `A step-by-step guide to appealing an HOA fine in ${name}, informed by ${statuteReference}.`,
    step: steps,
  };

  return {
    "@context": SCHEMA_CONTEXT,
    ...howTo,
  };
}

export function buildStateStructuredDataGraph(config: StateSeoConfig) {
  const howTo = buildHowToSchema(config);
  const stateUrl = `${SITE_URL}/appeal-hoa-fine/${config.slug}`;
  const attribution = attributionForStateCode(config.code);
  const { author, reviewer } = resolveAttribution(attribution);

  const article: Article = {
    "@id": `${stateUrl}#article`,
    "@type": "Article",
    headline: `Fight Unfair HOA Fines in ${config.name}`,
    description: `Educational ${config.name} HOA fine appeal resource informed by ${config.statuteReference}.`,
    url: stateUrl,
    datePublished: attribution.publishedAtIso,
    dateModified: attribution.updatedAtIso,
    inLanguage: "en-US",
    author: {
      "@type": "Person",
      name: author.name,
      url: `${SITE_URL}${author.profilePath}`,
      jobTitle: author.title,
    },
    editor: {
      "@type": "Person",
      name: reviewer.name,
      url: `${SITE_URL}${reviewer.profilePath}`,
      jobTitle: reviewer.title,
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
    "@graph": [
      asGraphNode({
        ...howTo,
        "@id": `${stateUrl}#howto`,
      }),
      asGraphNode(article),
      asGraphNode(breadcrumb),
    ],
  } satisfies JsonLdGraph;
}
