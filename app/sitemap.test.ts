import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { SITE_URL } from "@/lib/seo/siteUrl";
import { getAllSampleSlugs } from "@/lib/content/samples";
import { getAllTeamSlugs } from "@/lib/content/team";
import { getAllFaqSlugs } from "@/lib/content/faq";

describe("sitemap sample letter coverage", () => {
  it("includes the sample hub and every sample slug path", () => {
    const urls = sitemap().map((entry) => entry.url);

    expect(urls).toContain(new URL("/samples", SITE_URL).toString());

    for (const slug of getAllSampleSlugs()) {
      expect(urls).toContain(new URL(`/samples/${slug}`, SITE_URL).toString());
    }

    expect(urls).toContain(new URL("/faq", SITE_URL).toString());
    expect(urls).not.toContain(new URL("/success-stories", SITE_URL).toString());

    for (const slug of getAllFaqSlugs()) {
      expect(urls).not.toContain(new URL(`/faq/${slug}`, SITE_URL).toString());
    }
    for (const slug of getAllTeamSlugs()) {
      expect(urls).not.toContain(new URL(`/authors/${slug}`, SITE_URL).toString());
    }
  });
});
