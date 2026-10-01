import type { Metadata } from "next";
import type { BreadcrumbList, FAQPage, ItemList, ListItem, WebPage } from "schema-dts";
import type { FaqArticle } from "@/lib/content/faq/types";
import {
  asGraphNode,
  ORGANIZATION_ID,
  SCHEMA_CONTEXT,
  WEBSITE_ID,
  type JsonLdGraph,
} from "@/lib/seo/jsonLd";
import { pairedGuideFaqHref } from "@/lib/seo/legacyRedirects";
import { seoDescription, seoTitle } from "@/lib/seo/metaFormat";
import { SITE_URL, canonicalPath } from "@/lib/seo/siteUrl";

export function buildFaqMetadata(faq: FaqArticle): Metadata {
  const canonical = canonicalPath(`/faq/${faq.slug}`);
  const title = seoTitle(faq.metaTitle);
  const description = seoDescription(faq.metaDescription);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    authors: [{ name: "MyHOAAppeal Editorial", url: `${SITE_URL}/editorial-policy` }],
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      siteName: "MyHOAAppeal",
      publishedTime: faq.attribution.publishedAtIso,
      modifiedTime: faq.attribution.updatedAtIso,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    other: {
      "article:author": "MyHOAAppeal Editorial",
      "article:published_time": faq.attribution.publishedAtIso,
      "article:modified_time": faq.attribution.updatedAtIso,
    },
    robots: { index: false, follow: true },
  };
}

export function buildFaqPageSchema(faq: FaqArticle) {
  const pageUrl = `${SITE_URL}/faq/${faq.slug}`;
  const faqPage: FAQPage = {
    "@id": `${pageUrl}#faq`,
    "@type": "FAQPage",
    mainEntityOfPage: pageUrl,
    mainEntity: [
      {
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.directAnswer,
        },
      },
    ],
  };

  return {
    "@context": SCHEMA_CONTEXT,
    ...faqPage,
  };
}

export function buildFaqBreadcrumbSchema(faq: FaqArticle) {
  const pageUrl = `${SITE_URL}/faq/${faq.slug}`;
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
        name: "FAQ",
        item: `${SITE_URL}/faq`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: faq.question,
        item: pageUrl,
      },
    ] satisfies ListItem[],
  };

  return {
    "@context": SCHEMA_CONTEXT,
    ...breadcrumb,
  };
}

export function buildFaqStructuredDataGraph(faq: FaqArticle) {
  return {
    "@context": SCHEMA_CONTEXT,
    "@graph": [
      asGraphNode(buildFaqPageSchema(faq)),
      asGraphNode(buildFaqBreadcrumbSchema(faq)),
    ],
  } satisfies JsonLdGraph;
}

export function firstSentence(text: string): string {
  const trimmed = text.replace(/\s+/g, " ").trim();
  const match = trimmed.match(/^(.+?[.?!])(\s|$)/);
  return match ? match[1] : trimmed;
}

export function buildFaqIndexSchema(faqs: FaqArticle[]): JsonLdGraph {
  const pageUrl = `${SITE_URL}/faq`;

  const page: WebPage = {
    "@id": pageUrl,
    "@type": "WebPage",
    name: "HOA Fine Appeal FAQ",
    description:
      "Questions about HOA fines, notice, hearings, and letters, each linked to the guide that answers it.",
    url: pageUrl,
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORGANIZATION_ID },
  };

  const itemList: ItemList = {
    "@id": `${pageUrl}#list`,
    "@type": "ItemList",
    name: "HOA fine appeal questions",
    numberOfItems: faqs.length,
    itemListElement: faqs.map((faq, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: faq.question,
      url: `${SITE_URL}${pairedGuideFaqHref(faq.pairedGuideSlug)}`,
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
        name: "FAQ",
        item: pageUrl,
      },
    ] satisfies ListItem[],
  };

  return {
    "@context": SCHEMA_CONTEXT,
    "@graph": [asGraphNode(page), asGraphNode(itemList), asGraphNode(breadcrumb)],
  };
}
