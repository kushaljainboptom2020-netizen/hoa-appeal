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

const contentByCode = new Map<string, StateLegalContent>();

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

const registry = buildRegistry();

export function getStateLegalContentByCode(
  code: string
): StateLegalContent | undefined {
  return registry.get(code.toUpperCase());
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
  return Array.from(registry.values());
}

export function assertAllStatesHaveLegalContent(): void {
  const codes = Object.keys(STATE_CONTENT_PROFILES);
  if (codes.length !== 50) {
    throw new Error(`Expected 50 state profiles, found ${codes.length}`);
  }

  for (const content of registry.values()) {
    const words = countStateContentWords(content);
    if (words < 1800 || words > 2500) {
      throw new Error(
        `State ${content.code} has ${words} words (expected 1800–2500)`
      );
    }
    if (!content.attribution?.authorSlug || !content.attribution?.reviewerSlug) {
      throw new Error(`State ${content.code}: missing editorial attribution`);
    }
    if (content.sources.length < 1) {
      throw new Error(`State ${content.code}: missing sources section`);
    }
  }
}

export { countStateContentWords };
export type { StateLegalContent };
