import { describe, expect, it } from "vitest";
import { GUIDE_ARTICLES } from "@/lib/content/guides";
import { FAQ_ARTICLES } from "@/lib/content/faq";
import { buildFaqMetadata } from "@/lib/seo/faq";
import { buildGuideMetadata } from "@/lib/seo/guides";
import { seoDescription, seoTitle } from "@/lib/seo/metaFormat";
import {
  STATE_SEO_CONFIG,
  buildStateMetadata,
} from "@/lib/seo/statePages";
import { canonicalPath } from "@/lib/seo/siteUrl";

describe("meta formatting helpers", () => {
  it("soft-caps titles by dropping brand and pipe segments", () => {
    expect(
      seoTitle(
        "Very Long Guide Title About HOA Fine Appeals | Owner Guide | MyHOAAppeal"
      ).length
    ).toBeLessThanOrEqual(60);
    expect(seoTitle("Short Title | MyHOAAppeal")).toBe(
      "Short Title | MyHOAAppeal"
    );
    expect(seoTitle("Short Title | MyHOAAppeal", 20)).toBe("Short Title");
  });

  it("soft-caps descriptions at word boundaries", () => {
    const long =
      "Generate a free letter to appeal your District of Columbia HOA fine. Educational association-law guidance for homeowners across the United States. No account required and fully free forever.";
    expect(seoDescription(long).length).toBeLessThanOrEqual(160);
  });
});

describe("canonical helper", () => {
  it("builds absolute URLs without trailing slashes", () => {
    expect(canonicalPath("/")).not.toMatch(/\/$/);
    expect(canonicalPath("/guides")).toMatch(/\/guides$/);
    expect(canonicalPath("/guides/")).toMatch(/\/guides$/);
  });
});

describe("page metadata lengths and canonicals", () => {
  it("keeps every state title ≤60 and description ≤160 with canonical", () => {
    for (const config of STATE_SEO_CONFIG) {
      const meta = buildStateMetadata(config);
      expect(String(meta.title).length).toBeLessThanOrEqual(60);
      expect(String(meta.description).length).toBeLessThanOrEqual(160);
      expect(meta.alternates?.canonical).toBe(
        canonicalPath(`/appeal-hoa-fine/${config.slug}`)
      );
    }
  });

  it("emits guide metadata with canonical and capped title/description", () => {
    for (const guide of GUIDE_ARTICLES) {
      const meta = buildGuideMetadata(guide);
      expect(String(meta.title).length).toBeLessThanOrEqual(60);
      expect(String(meta.description).length).toBeLessThanOrEqual(160);
      expect(meta.alternates?.canonical).toBe(
        canonicalPath(`/guides/${guide.slug}`)
      );
    }
  });

  it("emits FAQ metadata with canonical and capped title/description", () => {
    for (const faq of FAQ_ARTICLES) {
      const meta = buildFaqMetadata(faq);
      expect(String(meta.title).length).toBeLessThanOrEqual(60);
      expect(String(meta.description).length).toBeLessThanOrEqual(160);
      expect(meta.alternates?.canonical).toBe(
        canonicalPath(`/faq/${faq.slug}`)
      );
    }
  });
});
