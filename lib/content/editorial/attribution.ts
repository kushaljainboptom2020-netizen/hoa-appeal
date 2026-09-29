import type { GuideCategory } from "@/lib/content/guides/types";
import { assertTeamMember, type ResolvedTeamMember } from "@/lib/content/team";

/** Display dates for the current editorial cycle. */
export const CONTENT_PUBLISHED_AT = "June 1, 2026";
/** Content edit date for this remediation. Not an attorney review of every statute. */
export const CONTENT_UPDATED_AT = "September 28, 2026";
export const CONTENT_REVIEWED_AT = "September 28, 2026";

/** ISO dates for schema.org and sitemap lastmod. */
export const CONTENT_PUBLISHED_ISO = "2026-06-01";
export const CONTENT_UPDATED_ISO = "2026-09-28";
export const CONTENT_REVIEWED_ISO = "2026-09-28";

export type EditorialAttribution = {
  authorSlug: string;
  reviewerSlug: string;
  publishedAt: string;
  updatedAt: string;
  reviewedAt: string;
  publishedAtIso: string;
  updatedAtIso: string;
  reviewedAtIso: string;
};

export type ResolvedEditorialAttribution = EditorialAttribution & {
  author: ResolvedTeamMember;
  reviewer: ResolvedTeamMember;
};

const GUIDE_ATTRIBUTION_BY_CATEGORY: Record<
  GuideCategory,
  Pick<EditorialAttribution, "authorSlug" | "reviewerSlug">
> = {
  "rights-process": {
    authorSlug: "jordan-hale",
    reviewerSlug: "casey-nguyen",
  },
  "appeals-letters": {
    authorSlug: "jordan-hale",
    reviewerSlug: "casey-nguyen",
  },
  "evidence-enforcement": {
    authorSlug: "morgan-ellis",
    reviewerSlug: "riley-brooks",
  },
  "money-liens": {
    authorSlug: "morgan-ellis",
    reviewerSlug: "riley-brooks",
  },
  "rules-terminology": {
    authorSlug: "morgan-ellis",
    reviewerSlug: "casey-nguyen",
  },
};

function withDates(
  people: Pick<EditorialAttribution, "authorSlug" | "reviewerSlug">
): EditorialAttribution {
  return {
    ...people,
    publishedAt: CONTENT_PUBLISHED_AT,
    updatedAt: CONTENT_UPDATED_AT,
    reviewedAt: CONTENT_REVIEWED_AT,
    publishedAtIso: CONTENT_PUBLISHED_ISO,
    updatedAtIso: CONTENT_UPDATED_ISO,
    reviewedAtIso: CONTENT_REVIEWED_ISO,
  };
}

export function attributionForGuideCategory(
  category: GuideCategory
): EditorialAttribution {
  return withDates(GUIDE_ATTRIBUTION_BY_CATEGORY[category]);
}

/**
 * One organizational byline for every state page.
 * Named profiles are internal role labels, not a per-statute reviewer assignment.
 */
export function attributionForStateCode(code: string): EditorialAttribution {
  void code;
  return withDates({
    authorSlug: "jordan-hale",
    reviewerSlug: "casey-nguyen",
  });
}

export function resolveAttribution(
  attribution: EditorialAttribution
): ResolvedEditorialAttribution {
  return {
    ...attribution,
    author: assertTeamMember(attribution.authorSlug),
    reviewer: assertTeamMember(attribution.reviewerSlug),
  };
}
