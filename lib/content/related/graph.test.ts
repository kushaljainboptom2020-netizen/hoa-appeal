import { describe, expect, it } from "vitest";
import { FAQ_ARTICLES } from "@/lib/content/faq";
import { GUIDE_ARTICLES } from "@/lib/content/guides";
import { buildInboundLinkCount, type RelatedContentBuckets } from "@/lib/content/related";
import { SUCCESS_STORIES, assertSuccessStoriesValid } from "@/lib/content/success-stories";
import { getAllStateLegalContent } from "@/lib/content/states";
import { getStateByCode } from "@/lib/seo/statePages";

function emptyBuckets(): RelatedContentBuckets {
  return { guides: [], states: [], faqs: [], tools: [], successStories: [] };
}

describe("internal link graph", () => {
  it("keeps success stories structurally valid", () => {
    expect(() => assertSuccessStoriesValid()).not.toThrow();
  });

  it("avoids orphan pages across guides, states, FAQs, stories, and tool hubs", () => {
    const guidePages = GUIDE_ARTICLES.map((guide) => ({
      href: `/guides/${guide.slug}`,
      related: guide.relatedContent,
    }));

    const faqPages = FAQ_ARTICLES.map((faq) => ({
      href: `/faq/${faq.slug}`,
      related: faq.relatedContent,
    }));

    const statePages = getAllStateLegalContent().map((stateContent) => {
      const stateConfig = getStateByCode(stateContent.code);
      if (!stateConfig) {
        throw new Error(`Missing SEO config for ${stateContent.code}`);
      }
      return {
        href: `/appeal-hoa-fine/${stateConfig.slug}`,
        related: stateContent.relatedContent,
      };
    });

    const successStoryPages = SUCCESS_STORIES.map((story) => ({
      href: `/success-stories/${story.slug}`,
      related: {
        ...emptyBuckets(),
        guides: story.guideSlugs.map((guideSlug) => ({
          label: guideSlug,
          href: `/guides/${guideSlug}`,
          description: "Guide cited in success story",
        })),
        states: [
          {
            label: story.stateCode,
            href: `/appeal-hoa-fine/${story.stateSlug}`,
            description: "State page cited in success story",
          },
        ],
        tools: [
          {
            label: "Main tool",
            href: "/",
            description: "Primary appeal letter wizard",
          },
        ],
      },
    }));

    const hubPages = [
      {
        href: "/",
        related: emptyBuckets(),
      },
      {
        href: "/guides",
        related: {
          ...emptyBuckets(),
          guides: GUIDE_ARTICLES.map((guide) => ({
            label: guide.title,
            href: `/guides/${guide.slug}`,
            description: guide.metaDescription,
          })),
        },
      },
      {
        href: "/faq",
        related: {
          ...emptyBuckets(),
          faqs: FAQ_ARTICLES.map((faq) => ({
            label: faq.question,
            href: `/faq/${faq.slug}`,
            description: faq.metaDescription,
          })),
        },
      },
      {
        href: "/success-stories",
        related: {
          ...emptyBuckets(),
          successStories: SUCCESS_STORIES.map((story) => ({
            label: story.title,
            href: `/success-stories/${story.slug}`,
            description: story.summary,
          })),
        },
      },
    ];

    const allPages = [
      ...guidePages,
      ...faqPages,
      ...statePages,
      ...successStoryPages,
      ...hubPages,
    ];
    const inbound = buildInboundLinkCount(allPages);

    const missingInbound = allPages
      .map((page) => ({ href: page.href, inbound: inbound.get(page.href) ?? 0 }))
      .filter((page) => page.inbound === 0)
      .map((page) => page.href);

    expect(missingInbound, `Orphan pages:\n${missingInbound.join("\n")}`).toEqual([]);
  });
});
