import type { MetadataRoute } from "next";
import { CONTENT_UPDATED_ISO } from "@/lib/content/editorial/attribution";
import { GUIDE_ARTICLES, getAllGuideSlugs } from "@/lib/content/guides";
import { SAMPLE_LETTERS, getAllSampleSlugs } from "@/lib/content/samples";
import { getAllStateLegalContent } from "@/lib/content/states";
import { MERGED_GUIDE_SLUGS } from "@/lib/seo/legacyRedirects";
import { getAllStateSlugs, getStateByCode } from "@/lib/seo/statePages";
import { SITE_URL } from "@/lib/seo/siteUrl";

const merged = new Set<string>(MERGED_GUIDE_SLUGS);
const STATE_SLUGS = getAllStateSlugs();
const GUIDE_SLUGS = getAllGuideSlugs().filter((slug) => !merged.has(slug));
const SAMPLE_SLUGS = getAllSampleSlugs();
const CONTENT_LAST_MOD = new Date(CONTENT_UPDATED_ISO);

const guideLastMod = new Map(
  GUIDE_ARTICLES.map((g) => [g.slug, new Date(g.attribution.updatedAtIso)])
);
const sampleLastMod = new Map(
  SAMPLE_LETTERS.map((s) => [s.slug, new Date(s.attribution.updatedAtIso)])
);
const stateLastModBySlug = new Map(
  getAllStateLegalContent().flatMap((c) => {
    const state = getStateByCode(c.code);
    return state
      ? [[state.slug, new Date(c.attribution.updatedAtIso)] as const]
      : [];
  })
);

export default function sitemap(): MetadataRoute.Sitemap {
  const home: MetadataRoute.Sitemap[number] = {
    url: SITE_URL,
    changeFrequency: "weekly",
    priority: 1.0,
    lastModified: CONTENT_LAST_MOD,
  };

  const trustPages: MetadataRoute.Sitemap = [
    "/about",
    "/contact",
    "/faq",
    "/authors",
    "/editorial-policy",
    "/fact-checking",
    "/ai-transparency",
    "/privacy-policy",
    "/terms-of-service",
  ].map((path) => ({
    url: new URL(path, SITE_URL).toString(),
    changeFrequency: "yearly" as const,
    priority: path === "/faq" ? 0.8 : path === "/authors" ? 0.5 : 0.6,
    lastModified: CONTENT_LAST_MOD,
  }));

  const guidesIndex: MetadataRoute.Sitemap[number] = {
    url: new URL("/guides", SITE_URL).toString(),
    changeFrequency: "monthly",
    priority: 0.9,
    lastModified: CONTENT_LAST_MOD,
  };

  const guidePages = GUIDE_SLUGS.map((slug) => ({
    url: new URL(`/guides/${slug}`, SITE_URL).toString(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
    lastModified: guideLastMod.get(slug) ?? CONTENT_LAST_MOD,
  }));

  const statePages = STATE_SLUGS.map((slug) => ({
    url: new URL(`/appeal-hoa-fine/${slug}`, SITE_URL).toString(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
    lastModified: stateLastModBySlug.get(slug) ?? CONTENT_LAST_MOD,
  }));

  const toolPages: MetadataRoute.Sitemap = (
    [
      ["/decision-tree", "weekly", 0.9],
      ["/readiness-calculator", "weekly", 0.9],
      ["/map", "monthly", 0.85],
      ["/state-laws", "monthly", 0.9],
      ["/samples", "weekly", 0.85],
    ] as const
  ).map(([path, changeFrequency, priority]) => ({
    url: new URL(path, SITE_URL).toString(),
    changeFrequency,
    priority,
    lastModified: CONTENT_LAST_MOD,
  }));

  const samplePages = SAMPLE_SLUGS.map((slug) => ({
    url: new URL(`/samples/${slug}`, SITE_URL).toString(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
    lastModified: sampleLastMod.get(slug) ?? CONTENT_LAST_MOD,
  }));

  return [
    home,
    ...trustPages,
    guidesIndex,
    ...guidePages,
    ...toolPages,
    ...statePages,
    ...samplePages,
  ];
}
