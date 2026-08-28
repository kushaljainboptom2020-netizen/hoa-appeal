import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { SITE_URL } from "@/lib/seo/siteUrl";
import { getAllSampleSlugs } from "@/lib/content/samples";

describe("sitemap sample letter coverage", () => {
  it("includes the sample hub and every sample slug path", () => {
    const urls = sitemap().map((entry) => entry.url);

    expect(urls).toContain(new URL("/samples", SITE_URL).toString());

    for (const slug of getAllSampleSlugs()) {
      expect(urls).toContain(new URL(`/samples/${slug}`, SITE_URL).toString());
    }
  });
});
