import { FAQ_CATALOG } from "../content/faq/catalog";

export const MERGED_GUIDE_SLUGS = [
  "hoa-due-process-rights",
  "homeowner-bill-of-rights-hoa-enforcement",
] as const;

export function guideDestination(slug: string): string {
  if (
    slug === "hoa-due-process-rights" ||
    slug === "homeowner-bill-of-rights-hoa-enforcement"
  ) {
    return "/guides/understanding-your-rights";
  }
  return `/guides/${slug}`;
}

export function legacyRedirects(): { source: string; destination: string; permanent: true }[] {
  return [
    ...MERGED_GUIDE_SLUGS.map((slug) => ({
      source: `/guides/${slug}`,
      destination: "/guides/understanding-your-rights",
      permanent: true as const,
    })),
    {
      source: "/faq",
      destination: "/guides",
      permanent: true as const,
    },
    ...FAQ_CATALOG.map((faq) => ({
      source: `/faq/${faq.slug}`,
      destination: guideDestination(faq.pairedGuideSlug),
      permanent: true as const,
    })),
  ];
}
