// Building the registry walks all 50 state profiles and the guide, FAQ and
// success-story catalogs. That is server work: importing this from a client
// component would ship roughly a megabyte of content and re-run the build in
// the browser during hydration.
import "server-only";

import { buildStateLegalContent } from "./buildContent";
import { STATE_CONTENT_PROFILES } from "./profiles.generated";
import type { StateLegalContent } from "./types";
import { countStateContentWords } from "./types";
import { FAQ_CATALOG } from "@/lib/content/faq/catalog";
import { GUIDE_ARTICLES } from "@/lib/content/guides";
import { generateRelatedContentForState } from "@/lib/content/related";
import { SUCCESS_STORIES } from "@/lib/content/success-stories";
import { STATE_SEO_CONFIG } from "@/lib/seo/statePages";
import {
  getStateByCode,
  getStateBySlug,
  type StateSeoConfig,
} from "@/lib/seo/statePages";

function buildRegistry(): Map<string, StateLegalContent> {
  const map = new Map<string, StateLegalContent>();
  const guideCandidates = GUIDE_ARTICLES.map((guide) => ({
    slug: guide.slug,
    title: guide.title,
    metaDescription: guide.metaDescription,
    category: guide.category,
    relatedGuideSlugs: guide.relatedGuideSlugs,
  }));
  const stateCandidates = STATE_SEO_CONFIG.map((state) => ({
    code: state.code,
    name: state.name,
    slug: state.slug,
    statuteReference: state.statuteReference,
    noticeDefenseHook: state.noticeDefenseHook,
    hearingRightsHook: state.hearingRightsHook,
  }));
  const successStoryCandidates = SUCCESS_STORIES.map((story) => ({
    slug: story.slug,
    title: story.title,
    summary: story.summary,
    metaDescription: story.metaDescription,
    stateCode: story.stateCode,
    stateSlug: story.stateSlug,
    guideSlugs: story.guideSlugs,
    topicKeywords: story.topicKeywords,
  }));
  const faqCandidates = FAQ_CATALOG.map((faq) => ({
    slug: faq.slug,
    question: faq.question,
    metaDescription: faq.metaDescription,
    category: faq.category,
    pairedGuideSlug: faq.pairedGuideSlug,
    relatedGuideSlugs: faq.relatedGuideSlugs,
    relatedFaqSlugs: faq.relatedFaqSlugs,
  }));

  for (const [code, profile] of Object.entries(STATE_CONTENT_PROFILES)) {
    const config = getStateByCode(code);
    if (!config) {
      throw new Error(`No SEO config for state profile code: ${code}`);
    }
    const content = buildStateLegalContent(config, profile);
    map.set(code, {
      ...content,
      relatedContent: generateRelatedContentForState(
        {
          kind: "state",
          code: config.code,
          slug: config.slug,
          name: config.name,
          relatedGuideSlugs: content.relatedGuideSlugs,
          statuteReference: config.statuteReference,
          noticeDefenseHook: config.noticeDefenseHook,
          hearingRightsHook: config.hearingRightsHook,
        },
        {
          guides: guideCandidates,
          states: stateCandidates,
          successStories: successStoryCandidates,
          faqs: faqCandidates,
        }
      ),
    });
  }

  return map;
}

let registryCache: Map<string, StateLegalContent> | undefined;

function getRegistry(): Map<string, StateLegalContent> {
  registryCache ??= buildRegistry();
  return registryCache;
}

export function getStateLegalContentByCode(
  code: string
): StateLegalContent | undefined {
  return getRegistry().get(code.toUpperCase());
}

export function getStateLegalContentBySlug(
  slug: string
): StateLegalContent | undefined {
  const config = getStateBySlug(slug);
  if (!config) return undefined;
  return getStateLegalContentByCode(config.code);
}

export function getStateLegalContent(
  config: StateSeoConfig
): StateLegalContent | undefined {
  return getStateLegalContentByCode(config.code);
}

export function getAllStateLegalContent(): StateLegalContent[] {
  return Array.from(getRegistry().values());
}

export function assertAllStatesHaveLegalContent(): void {
  const codes = Object.keys(STATE_CONTENT_PROFILES);
  if (codes.length !== 50) {
    throw new Error(`Expected 50 state profiles, found ${codes.length}`);
  }

  for (const content of getRegistry().values()) {
    const answer = content.overview.paragraphs[0] ?? "";
    if (answer.length < 80) {
      throw new Error(`State ${content.code}: quick answer is too short`);
    }
    if (!/does not|Do not|Confirm|confirm/i.test(content.overview.paragraphs.join(" "))) {
      throw new Error(`State ${content.code}: missing a qualification`);
    }
    if (content.sources.length < 1) {
      throw new Error(`State ${content.code}: missing sources section`);
    }
  }
}

export { countStateContentWords };
export type { StateLegalContent, StateSource, VerificationStatus } from "./types";
