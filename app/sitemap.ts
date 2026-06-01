import type { MetadataRoute } from "next";
import { getAllStateSlugs } from "@/lib/seo/statePages";
import { SITE_URL } from "@/lib/seo/siteUrl";

const STATE_SLUGS = getAllStateSlugs();

export default function sitemap(): MetadataRoute.Sitemap {
  const home: MetadataRoute.Sitemap[number] = {
    url: SITE_URL,
    changeFrequency: "weekly",
    priority: 1.0,
    lastModified: new Date(),
  };

  const trustPages: MetadataRoute.Sitemap = [
    {
      url: new URL("/about", SITE_URL).toString(),
      changeFrequency: "yearly",
      priority: 0.6,
      lastModified: new Date(),
    },
    {
      url: new URL("/contact", SITE_URL).toString(),
      changeFrequency: "yearly",
      priority: 0.6,
      lastModified: new Date(),
    },
    {
      url: new URL("/privacy-policy", SITE_URL).toString(),
      changeFrequency: "yearly",
      priority: 0.5,
      lastModified: new Date(),
    },
    {
      url: new URL("/terms-of-service", SITE_URL).toString(),
      changeFrequency: "yearly",
      priority: 0.5,
      lastModified: new Date(),
    },
  ];

  const statePages = STATE_SLUGS.map((slug) => ({
    url: new URL(`/appeal-hoa-fine/${slug}`, SITE_URL).toString(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
    lastModified: new Date(),
  }));

  return [home, ...trustPages, ...statePages];
}
