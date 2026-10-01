import type { Metadata } from "next";
import { SITE_URL, canonicalPath } from "@/lib/seo/siteUrl";

/** Soft-cap SEO title for SERP display without mid-word truncation. */
export function seoTitle(raw: string, max = 60): string {
  const trimmed = raw.replace(/\s+/g, " ").trim();
  if (trimmed.length <= max) return trimmed;

  const withoutBrand = trimmed.replace(/\s*\|\s*MyHOAAppeal\s*$/i, "").trim();
  if (withoutBrand.length <= max && withoutBrand.length > 0) return withoutBrand;

  const parts = withoutBrand.split(/\s*\|\s*/);
  while (parts.length > 1) {
    parts.pop();
    const candidate = parts.join(" | ").trim();
    if (candidate.length <= max && candidate.length > 0) return candidate;
  }

  return withoutBrand.slice(0, max - 1).trimEnd() + "…";
}

/** Soft-cap meta description. */
export function seoDescription(raw: string, max = 160): string {
  const trimmed = raw.replace(/\s+/g, " ").trim();
  if (trimmed.length <= max) return trimmed;
  const cut = trimmed.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  const base = lastSpace > 80 ? cut.slice(0, lastSpace) : cut;
  return base.trimEnd() + "…";
}

const EDITORIAL_AUTHOR = {
  name: "MyHOAAppeal Editorial",
  url: `${SITE_URL}/editorial-policy`,
} as const;

/**
 * Shared indexable-page metadata. Does not invent an Open Graph image.
 * Do not set a root-layout canonical; each page must set its own.
 */
export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  const canonical = canonicalPath(opts.path);
  const title = seoTitle(opts.title);
  const description = seoDescription(opts.description);
  const type = opts.type ?? "website";

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    authors: [EDITORIAL_AUTHOR],
    openGraph: {
      title,
      description,
      url: canonical,
      type,
      siteName: "MyHOAAppeal",
      locale: "en_US",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export { EDITORIAL_AUTHOR };
