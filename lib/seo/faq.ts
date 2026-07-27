import type { Metadata } from "next";
import type { BreadcrumbList, FAQPage, ListItem } from "schema-dts";
import { resolveAttribution } from "@/lib/content/editorial/attribution";
import type { FaqArticle } from "@/lib/content/faq/types";
import {
  asGraphNode,
  SCHEMA_CONTEXT,
  type JsonLdGraph,
} from "@/lib/seo/jsonLd";
import { SITE_URL, canonicalPath } from "@/lib/seo/siteUrl";
import { seoDescription, seoTitle } from "@/lib/seo/metaFormat";

export function buildFaqMetadata(faq: FaqArticle): Metadata {
  const canonical = canonicalPath(`/faq/${faq.slug}`);
  const { author, reviewer } = resolveAttribution(faq.attribution);
  const title = seoTitle(faq.metaTitle);
  const description = seoDescription(faq.metaDescription);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    authors: [{ name: author.name, url: `${SITE_URL}${author.profilePath}` }],
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
      card: "summary_large_image",
      title,
      description,
    },
    other: {
      "article:author": author.name,
      "article:reviewed_by": reviewer.name,
      "article:published_time": faq.attribution.publishedAtIso,
      "article:modified_time": faq.attribution.updatedAtIso,
    },
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
