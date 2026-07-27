import { describe, expect, it } from "vitest";
import {
  attributionForGuideCategory,
  attributionForStateCode,
  CONTENT_PUBLISHED_ISO,
  resolveAttribution,
} from "@/lib/content/editorial/attribution";
import {
  getAllTeamSlugs,
  getAuthors,
  getReviewers,
  getTeamMemberBySlug,
} from "@/lib/content/team";
import { GUIDE_ARTICLES } from "@/lib/content/guides";
import { FAQ_ARTICLES } from "@/lib/content/faq";
import { getAllStateLegalContent } from "@/lib/content/states";
import { SUCCESS_STORIES } from "@/lib/content/success-stories";

function expectFullAttributionDates(attribution: {
  publishedAt: string;
  updatedAt: string;
  reviewedAt: string;
  publishedAtIso: string;
  updatedAtIso: string;
  reviewedAtIso: string;
}) {
  expect(attribution.publishedAt).toBeTruthy();
  expect(attribution.updatedAt).toBeTruthy();
  expect(attribution.reviewedAt).toBeTruthy();
  expect(attribution.publishedAtIso).toBe(CONTENT_PUBLISHED_ISO);
  expect(attribution.updatedAtIso).toBeTruthy();
  expect(attribution.reviewedAtIso).toBeTruthy();
}

describe("E-E-A-T team and attribution", () => {
  it("defines authors and reviewers with required profile fields", () => {
    expect(getAuthors().length).toBeGreaterThanOrEqual(2);
    expect(getReviewers().length).toBeGreaterThanOrEqual(2);
    for (const slug of getAllTeamSlugs()) {
      const member = getTeamMemberBySlug(slug);
      expect(member).toBeDefined();
      expect(member!.name.length).toBeGreaterThan(0);
      expect(member!.bio.length).toBeGreaterThan(0);
      expect(member!.credentials.length).toBeGreaterThan(0);
      expect(member!.expertise.length).toBeGreaterThan(0);
    }
  });

  it("attaches author, reviewer, published/updated/reviewed dates, and sources to every guide", () => {
    for (const guide of GUIDE_ARTICLES) {
      const resolved = resolveAttribution(guide.attribution);
      expect(resolved.author.role).toBe("author");
      expect(resolved.reviewer.role).toBe("reviewer");
      expect(resolved.author.credentials.length).toBeGreaterThan(0);
      expectFullAttributionDates(guide.attribution);
      expect(guide.sources.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("attaches author, reviewer, dates, and sources to every state page", () => {
    for (const content of getAllStateLegalContent()) {
      const resolved = resolveAttribution(content.attribution);
      expect(resolved.author.role).toBe("author");
      expect(resolved.reviewer.role).toBe("reviewer");
      expectFullAttributionDates(content.attribution);
      expect(content.sources.length).toBeGreaterThanOrEqual(1);
    }
  });

  it("attaches author, reviewer, dates, and sources to every FAQ article", () => {
    for (const faq of FAQ_ARTICLES) {
      const resolved = resolveAttribution(faq.attribution);
      expect(resolved.author.role).toBe("author");
      expect(resolved.reviewer.role).toBe("reviewer");
      expectFullAttributionDates(faq.attribution);
      expect(faq.sources.length).toBeGreaterThanOrEqual(1);
    }
  });

  it("attaches author, reviewer, dates, and sources to every success story", () => {
    for (const story of SUCCESS_STORIES) {
      const resolved = resolveAttribution(story.attribution);
      expect(resolved.author.role).toBe("author");
      expect(resolved.reviewer.role).toBe("reviewer");
      expectFullAttributionDates(story.attribution);
      expect(story.sources.length).toBeGreaterThanOrEqual(1);
    }
  });

  it("assigns stable attribution by guide category and state code", () => {
    const rights = attributionForGuideCategory("rights-process");
    const money = attributionForGuideCategory("money-liens");
    expect(rights.authorSlug).toBe("jordan-hale");
    expect(money.authorSlug).toBe("morgan-ellis");
    expect(attributionForStateCode("CA").authorSlug).toBe("jordan-hale");
    expect(attributionForStateCode("TX").authorSlug).toBe("morgan-ellis");
    expect(rights.publishedAtIso).toBe(CONTENT_PUBLISHED_ISO);
  });
});
