import type { Metadata } from "next";
import type { Article, BreadcrumbList, ItemList, ListItem } from "schema-dts";
import { resolveAttribution } from "@/lib/content/editorial/attribution";
import type { SampleLetter } from "@/lib/content/samples";
import { getAllSampleLetters } from "@/lib/content/samples";
import {
  asGraphNode,
  ORGANIZATION_ID,
  SCHEMA_CONTEXT,
  WEBSITE_ID,
  type JsonLdGraph,
} from "@/lib/seo/jsonLd";
import { seoDescription, seoTitle } from "@/lib/seo/metaFormat";
import { SITE_URL, canonicalPath } from "@/lib/seo/siteUrl";

export function buildSampleMetadata(sample: SampleLetter): Metadata {
  const canonical = canonicalPath(`/samples/${sample.slug}`);
  const { author, reviewer } = resolveAttribution(sample.attribution);
  const title = seoTitle(sample.metaTitle);
  const description = seoDescription(sample.metaDescription);

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
      publishedTime: sample.attribution.publishedAtIso,
      modifiedTime: sample.attribution.updatedAtIso,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    other: {
      "article:author": author.name,
      "article:reviewed_by": reviewer.name,
      "article:published_time": sample.attribution.publishedAtIso,
      "article:modified_time": sample.attribution.updatedAtIso,
    },
  };
}

export function buildSampleIndexSchema(): JsonLdGraph {
  const pageUrl = `${SITE_URL}/samples`;
  const samples = getAllSampleLetters();

  const itemList: ItemList = {
    "@type": "ItemList",
    "@id": `${pageUrl}#list`,
    name: "Sample HOA Appeal Letters",
    numberOfItems: samples.length,
    itemListElement: samples.map((sample, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: sample.title,
      url: `${SITE_URL}/samples/${sample.slug}`,
    })),
  };

  const breadcrumb: BreadcrumbList = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
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
        name: "Sample Letters",
        item: pageUrl,
      },
    ] satisfies ListItem[],
  };

  return {
    "@context": SCHEMA_CONTEXT,
    "@graph": [asGraphNode(itemList), asGraphNode(breadcrumb)],
  };
}

export function buildSampleStructuredDataGraph(
  sample: SampleLetter
): JsonLdGraph {
  const { author, reviewer } = resolveAttribution(sample.attribution);
  const pageUrl = `${SITE_URL}/samples/${sample.slug}`;

  const article: Article = {
    "@id": `${pageUrl}#article`,
    "@type": "Article",
    headline: sample.title,
    description: sample.metaDescription,
    url: pageUrl,
    datePublished: sample.attribution.publishedAtIso,
    dateModified: sample.attribution.updatedAtIso,
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
    mainEntityOfPage: pageUrl,
    isPartOf: {
      "@id": WEBSITE_ID,
    },
  };

  const breadcrumb: BreadcrumbList = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
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
        name: "Sample Letters",
        item: `${SITE_URL}/samples`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: sample.title,
        item: pageUrl,
      },
    ] satisfies ListItem[],
  };

  return {
    "@context": SCHEMA_CONTEXT,
    "@graph": [asGraphNode(article), asGraphNode(breadcrumb)],
  };
}
