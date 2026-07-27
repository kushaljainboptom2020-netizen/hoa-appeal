import type { Metadata } from "next";
import type { Article, BreadcrumbList, FAQPage, ListItem } from "schema-dts";
import { resolveAttribution } from "@/lib/content/editorial/attribution";
import type { GuideArticle } from "@/lib/content/guides/types";
import {
  asGraphNode,
  ORGANIZATION_ID,
  SCHEMA_CONTEXT,
  WEBSITE_ID,
  type JsonLdGraph,
} from "@/lib/seo/jsonLd";
import { SITE_URL, canonicalPath } from "@/lib/seo/siteUrl";
import { seoDescription, seoTitle } from "@/lib/seo/metaFormat";

export function buildGuideMetadata(guide: GuideArticle): Metadata {
  const canonical = canonicalPath(`/guides/${guide.slug}`);
  const { author, reviewer } = resolveAttribution(guide.attribution);
  const title = seoTitle(guide.metaTitle);
  const description = seoDescription(guide.metaDescription);

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
      publishedTime: guide.attribution.publishedAtIso,
      modifiedTime: guide.attribution.updatedAtIso,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    other: {
      "article:author": author.name,
      "article:reviewed_by": reviewer.name,
      "article:published_time": guide.attribution.publishedAtIso,
      "article:modified_time": guide.attribution.updatedAtIso,
    },
  };
}

export function buildGuideArticleSchema(guide: GuideArticle) {
  const { author, reviewer } = resolveAttribution(guide.attribution);
  const pageUrl = `${SITE_URL}/guides/${guide.slug}`;
  const article: Article = {
    "@id": `${pageUrl}#article`,
    "@type": "Article",
    headline: guide.title,
    description: guide.metaDescription,
    url: pageUrl,
    dateModified: guide.attribution.updatedAtIso,
    datePublished: guide.attribution.publishedAtIso,
    isPartOf: {
      "@id": WEBSITE_ID,
    },
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
    mainEntityOfPage: pageUrl,
    inLanguage: "en-US",
  };

  return {
    "@context": SCHEMA_CONTEXT,
    ...article,
  };
}

export function buildGuideFaqSchema(guide: GuideArticle) {
  const pageUrl = `${SITE_URL}/guides/${guide.slug}`;
  const faqPage: FAQPage = {
    "@id": `${pageUrl}#faq`,
    "@type": "FAQPage",
    mainEntityOfPage: pageUrl,
    mainEntity: guide.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return {
    "@context": SCHEMA_CONTEXT,
    ...faqPage,
  };
}

export function buildGuideBreadcrumbSchema(guide: GuideArticle) {
  const pageUrl = `${SITE_URL}/guides/${guide.slug}`;
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
        name: "Guides",
        item: `${SITE_URL}/guides`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: guide.title,
        item: pageUrl,
      },
    ] satisfies ListItem[],
  };

  return {
    "@context": SCHEMA_CONTEXT,
    ...breadcrumb,
  };
}

export function buildGuideStructuredDataGraph(guide: GuideArticle) {
  return {
    "@context": SCHEMA_CONTEXT,
    "@graph": [
      asGraphNode(buildGuideArticleSchema(guide)),
      asGraphNode(buildGuideFaqSchema(guide)),
      asGraphNode(buildGuideBreadcrumbSchema(guide)),
    ],
  } satisfies JsonLdGraph;
}
