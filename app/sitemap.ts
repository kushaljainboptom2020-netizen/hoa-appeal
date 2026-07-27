import type { MetadataRoute } from "next";
import { CONTENT_UPDATED_ISO } from "@/lib/content/editorial/attribution";
import { FAQ_ARTICLES, getAllFaqSlugs } from "@/lib/content/faq";
import { GUIDE_ARTICLES, getAllGuideSlugs } from "@/lib/content/guides";
import {
  SUCCESS_STORIES,
  getAllSuccessStorySlugs,
} from "@/lib/content/success-stories";
import { getAllTeamSlugs } from "@/lib/content/team";
import { getAllStateLegalContent } from "@/lib/content/states";
import { getAllStateSlugs, getStateByCode } from "@/lib/seo/statePages";
import { SITE_URL } from "@/lib/seo/siteUrl";

const STATE_SLUGS = getAllStateSlugs();
const GUIDE_SLUGS = getAllGuideSlugs();
const FAQ_SLUGS = getAllFaqSlugs();
const SUCCESS_STORY_SLUGS = getAllSuccessStorySlugs();
const TEAM_SLUGS = getAllTeamSlugs();
const CONTENT_LAST_MOD = new Date(CONTENT_UPDATED_ISO);

const guideLastMod = new Map(
  GUIDE_ARTICLES.map((g) => [g.slug, new Date(g.attribution.updatedAtIso)])
);
const faqLastMod = new Map(
  FAQ_ARTICLES.map((f) => [f.slug, new Date(f.attribution.updatedAtIso)])
);
const storyLastMod = new Map(
  SUCCESS_STORIES.map((s) => [s.slug, new Date(s.attribution.updatedAtIso)])
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
    "/authors",
    "/editorial-policy",
    "/fact-checking",
    "/ai-transparency",
    "/privacy-policy",
    "/terms-of-service",
  ].map((path) => ({
    url: new URL(path, SITE_URL).toString(),
    changeFrequency: "yearly" as const,
    priority: path === "/authors" ? 0.7 : 0.6,
    lastModified: CONTENT_LAST_MOD,
  }));

  const authorPages = TEAM_SLUGS.map((slug) => ({
    url: new URL(`/authors/${slug}`, SITE_URL).toString(),
    changeFrequency: "yearly" as const,
    priority: 0.65,
    lastModified: CONTENT_LAST_MOD,
  }));

  const guidesIndex: MetadataRoute.Sitemap[number] = {
    url: new URL("/guides", SITE_URL).toString(),
    changeFrequency: "daily",
    priority: 0.9,
    lastModified: CONTENT_LAST_MOD,
  };

  const guidePages = GUIDE_SLUGS.map((slug) => ({
    url: new URL(`/guides/${slug}`, SITE_URL).toString(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
    lastModified: guideLastMod.get(slug) ?? CONTENT_LAST_MOD,
  }));

  const faqIndex: MetadataRoute.Sitemap[number] = {
    url: new URL("/faq", SITE_URL).toString(),
    changeFrequency: "daily",
    priority: 0.9,
    lastModified: CONTENT_LAST_MOD,
  };

  const faqPages = FAQ_SLUGS.map((slug) => ({
    url: new URL(`/faq/${slug}`, SITE_URL).toString(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
    lastModified: faqLastMod.get(slug) ?? CONTENT_LAST_MOD,
  }));

  const statePages = STATE_SLUGS.map((slug) => ({
    url: new URL(`/appeal-hoa-fine/${slug}`, SITE_URL).toString(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
    lastModified: stateLastModBySlug.get(slug) ?? CONTENT_LAST_MOD,
  }));

  const decisionTreePage: MetadataRoute.Sitemap[number] = {
    url: new URL("/decision-tree", SITE_URL).toString(),
    changeFrequency: "weekly",
    priority: 0.9,
    lastModified: CONTENT_LAST_MOD,
  };

  const readinessCalculatorPage: MetadataRoute.Sitemap[number] = {
    url: new URL("/readiness-calculator", SITE_URL).toString(),
    changeFrequency: "weekly",
    priority: 0.9,
    lastModified: CONTENT_LAST_MOD,
  };

  const stateMapPage: MetadataRoute.Sitemap[number] = {
    url: new URL("/map", SITE_URL).toString(),
    changeFrequency: "monthly",
    priority: 0.85,
    lastModified: CONTENT_LAST_MOD,
  };

  const successStoriesIndex: MetadataRoute.Sitemap[number] = {
    url: new URL("/success-stories", SITE_URL).toString(),
    changeFrequency: "monthly",
    priority: 0.75,
    lastModified: CONTENT_LAST_MOD,
  };

  const successStoryPages = SUCCESS_STORY_SLUGS.map((slug) => ({
    url: new URL(`/success-stories/${slug}`, SITE_URL).toString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    lastModified: storyLastMod.get(slug) ?? CONTENT_LAST_MOD,
  }));

  return [
    home,
    ...trustPages,
    ...authorPages,
    guidesIndex,
    ...guidePages,
    faqIndex,
    ...faqPages,
    decisionTreePage,
    readinessCalculatorPage,
    stateMapPage,
    ...statePages,
    successStoriesIndex,
    ...successStoryPages,
  ];
}
