import type { GuideCategory } from "@/lib/content/guides/types";
import { assertTeamMember, type ResolvedTeamMember } from "@/lib/content/team";

/** Display dates for the current editorial cycle. */
export const CONTENT_PUBLISHED_AT = "June 1, 2026";
export const CONTENT_UPDATED_AT = "July 15, 2026";
export const CONTENT_REVIEWED_AT = "July 12, 2026";

/** ISO dates for schema.org and sitemap lastmod. */
export const CONTENT_PUBLISHED_ISO = "2026-06-01";
export const CONTENT_UPDATED_ISO = "2026-07-15";
export const CONTENT_REVIEWED_ISO = "2026-07-12";

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

/** Split state pages across the two author/reviewer pairs by code order. */
export function attributionForStateCode(code: string): EditorialAttribution {
  const first = code.trim().toUpperCase().charAt(0);
  const early = first >= "A" && first <= "M";
  return withDates(
    early
      ? { authorSlug: "jordan-hale", reviewerSlug: "casey-nguyen" }
      : { authorSlug: "morgan-ellis", reviewerSlug: "riley-brooks" }
  );
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
