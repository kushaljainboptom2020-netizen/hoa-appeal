import type { GuideCategory, GuideInternalLink } from "@/lib/content/guides/types";

export type RelatedContentLink = {
  label: string;
  href: string;
  description: string;
};

export type RelatedContentBuckets = {
  states: RelatedContentLink[];
  guides: RelatedContentLink[];
  faqs: RelatedContentLink[];
  tools: RelatedContentLink[];
  successStories: RelatedContentLink[];
};

export type RelatedGuideCandidate = {
  slug: string;
  title: string;
  metaDescription: string;
  category: GuideCategory;
  relatedGuideSlugs: string[];
};

export type RelatedStateCandidate = {
  code: string;
  name: string;
  slug: string;
  statuteReference: string;
  noticeDefenseHook?: string;
  hearingRightsHook?: string;
};

export type RelatedSuccessStoryCandidate = {
  slug: string;
  title: string;
  summary: string;
  metaDescription: string;
  stateCode: string;
  stateSlug: string;
  guideSlugs: string[];
  topicKeywords: string[];
};

export type RelatedFaqCandidate = {
  slug: string;
  question: string;
  metaDescription: string;
  category: GuideCategory;
  pairedGuideSlug: string;
  relatedGuideSlugs: string[];
  relatedFaqSlugs: string[];
};

type GuideContext = {
  kind: "guide";
  slug: string;
  title: string;
  metaDescription: string;
  category: GuideCategory;
  relatedGuideSlugs: string[];
  internalLinks: GuideInternalLink[];
};

type StateContext = {
  kind: "state";
  code: string;
  slug: string;
  name: string;
  relatedGuideSlugs: string[];
  statuteReference: string;
  noticeDefenseHook?: string;
  hearingRightsHook?: string;
};

type FaqContext = {
  kind: "faq";
  slug: string;
  question: string;
  metaDescription: string;
  category: GuideCategory;
  pairedGuideSlug: string;
  relatedGuideSlugs: string[];
  relatedFaqSlugs: string[];
  relatedStateCodes: string[];
  internalLinks: GuideInternalLink[];
};

type RelatedBuildInputs = {
  guides: RelatedGuideCandidate[];
  states: RelatedStateCandidate[];
  successStories: RelatedSuccessStoryCandidate[];
  faqs: RelatedFaqCandidate[];
};

const STOP_WORDS = new Set([
  "a",
  "an",
  "and",
  "as",
  "at",
  "be",
  "by",
  "for",
  "from",
  "how",
  "in",
  "is",
  "it",
  "of",
  "on",
  "or",
  "that",
  "the",
  "to",
  "when",
  "with",
  "your",
  "you",
  "hoa",
  "fine",
  "appeal",
]);

function tokenize(parts: string[]): Set<string> {
  const tokens = new Set<string>();
  for (const part of parts) {
    const normalized = part.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
    if (!normalized) continue;
    for (const token of normalized.split(/\s+/)) {
      if (token.length < 3 || STOP_WORDS.has(token)) continue;
      tokens.add(token);
    }
  }
  return tokens;
}

function overlapScore(a: Set<string>, b: Set<string>): number {
  let score = 0;
  for (const token of a) {
    if (b.has(token)) score += 1;
  }
  return score;
}

function hashValue(text: string): number {
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) {
    hash = (hash * 31 + text.charCodeAt(i)) % 2147483647;
  }
  return Math.abs(hash);
}

function pickTop<T>(items: T[], scoreFor: (item: T) => number, limit: number): T[] {
  return [...items]
    .sort((a, b) => scoreFor(b) - scoreFor(a))
    .slice(0, limit);
}

function buildGuideLinks(guides: RelatedGuideCandidate[]): RelatedContentLink[] {
  return guides.map((guide) => ({
    label: guide.title,
    href: `/guides/${guide.slug}`,
    description: guide.metaDescription,
  }));
}

function buildStateLinks(states: RelatedStateCandidate[]): RelatedContentLink[] {
  return states.map((state) => ({
    label: `HOA fine appeal guide for ${state.name}`,
    href: `/appeal-hoa-fine/${state.slug}`,
    description: state.statuteReference,
  }));
}

function buildSuccessStoryLinks(
  stories: RelatedSuccessStoryCandidate[]
): RelatedContentLink[] {
  return stories.map((story) => ({
    label: story.title,
    href: `/success-stories/${story.slug}`,
    description: story.metaDescription,
  }));
}

function buildFaqLinks(faqs: RelatedFaqCandidate[]): RelatedContentLink[] {
  return faqs.map((faq) => ({
    label: faq.question,
    href: `/faq/${faq.slug}`,
    description: faq.metaDescription,
  }));
}

function faqScoreForTokens(
  tokens: Set<string>,
  faq: RelatedFaqCandidate,
  opts: {
    pairedGuideSlug?: string;
    relatedFaqSlugs?: string[];
    category?: GuideCategory;
    excludeSlug?: string;
  } = {}
): number {
  if (opts.excludeSlug && faq.slug === opts.excludeSlug) return -1000;
  const faqTokens = tokenize([
    faq.slug,
    faq.question,
    faq.metaDescription,
    faq.category,
    faq.pairedGuideSlug,
  ]);
  let score = overlapScore(tokens, faqTokens);
  if (opts.category && faq.category === opts.category) score += 3;
  if (opts.pairedGuideSlug && faq.pairedGuideSlug === opts.pairedGuideSlug) score += 8;
  if (opts.relatedFaqSlugs?.includes(faq.slug)) score += 6;
  if (faq.relatedGuideSlugs.some((slug) => tokens.has(slug.replace(/-/g, " ")))) {
    score += 1;
  }
  return score;
}

export function generateRelatedContentForGuide(
  context: GuideContext,
  inputs: RelatedBuildInputs
): RelatedContentBuckets {
  const guideTokens = tokenize([
    context.slug,
    context.title,
    context.metaDescription,
    context.category,
    context.relatedGuideSlugs.join(" "),
  ]);

  const guideScore = (candidate: RelatedGuideCandidate): number => {
    if (candidate.slug === context.slug) return -1000;
    const candidateTokens = tokenize([
      candidate.slug,
      candidate.title,
      candidate.metaDescription,
      candidate.category,
    ]);
    let score = overlapScore(guideTokens, candidateTokens);
    if (candidate.category === context.category) score += 3;
    if (context.relatedGuideSlugs.includes(candidate.slug)) score += 6;
    if (candidate.relatedGuideSlugs.includes(context.slug)) score += 2;
    return score;
  };

  const stateScore = (state: RelatedStateCandidate): number => {
    const stateTokens = tokenize([state.name, state.slug, state.statuteReference]);
    let score = overlapScore(guideTokens, stateTokens);
    if (guideTokens.has("notice") && state.noticeDefenseHook) score += 3;
    if (guideTokens.has("hearing") && state.hearingRightsHook) score += 3;
    if (guideTokens.has("deadline") && state.noticeDefenseHook) score += 2;
    score += hashValue(`${context.slug}:${state.code}`) % 2;
    return score;
  };

  const successStoryScore = (story: RelatedSuccessStoryCandidate): number => {
    const storyTokens = tokenize([
      story.title,
      story.summary,
      story.metaDescription,
      story.topicKeywords.join(" "),
    ]);
    let score = overlapScore(guideTokens, storyTokens);
    if (story.guideSlugs.includes(context.slug)) score += 8;
    score += hashValue(`${context.slug}:${story.slug}`) % 3;
    return score;
  };

  const faqScore = (faq: RelatedFaqCandidate): number =>
    faqScoreForTokens(guideTokens, faq, {
      pairedGuideSlug: context.slug,
      category: context.category,
    }) + (faq.pairedGuideSlug === context.slug ? 4 : 0);

  const topStates = pickTop(inputs.states, stateScore, 3);
  const preferredState = topStates[0];
  const toolLinks: RelatedContentLink[] = [
    {
      label: "Start the HOA appeal letter tool",
      href: "/",
      description:
        "Use the free guided wizard to draft a formal HOA fine dispute letter.",
    },
    {
      label: "Browse all HOA appeal guides",
      href: "/guides",
      description:
        "Open the full guide library for process, evidence, and enforcement strategies.",
    },
    {
      label: "Browse the FAQ knowledge base",
      href: "/faq",
      description:
        "Open direct answers to common homeowner questions about HOA fines and appeals.",
    },
    {
      label: "Read more success stories",
      href: "/success-stories",
      description: "See additional real-world HOA fine appeal outcomes and workflows.",
    },
  ];
  if (preferredState) {
    toolLinks.push({
      label: `Use the ${preferredState.name} state tool page`,
      href: `/appeal-hoa-fine/${preferredState.slug}`,
      description:
        "Open the state-tailored appeal flow with jurisdiction-specific legal framing.",
    });
  }

  return {
    guides: buildGuideLinks(pickTop(inputs.guides, guideScore, 4)),
    states: buildStateLinks(topStates),
    faqs: buildFaqLinks(pickTop(inputs.faqs, faqScore, 3)),
    tools: toolLinks,
    successStories: buildSuccessStoryLinks(
      pickTop(inputs.successStories, successStoryScore, 2)
    ),
  };
}

export function generateRelatedContentForState(
  context: StateContext,
  inputs: RelatedBuildInputs
): RelatedContentBuckets {
  const stateTokens = tokenize([
    context.name,
    context.slug,
    context.statuteReference,
    context.relatedGuideSlugs.join(" "),
  ]);

  const guideScore = (guide: RelatedGuideCandidate): number => {
    const guideTokens = tokenize([
      guide.slug,
      guide.title,
      guide.metaDescription,
      guide.category,
    ]);
    let score = overlapScore(stateTokens, guideTokens);
    if (context.relatedGuideSlugs.includes(guide.slug)) score += 7;
    return score;
  };

  const stateScore = (state: RelatedStateCandidate): number => {
    if (state.code === context.code) return -1000;
    let score = 0;
    if (Boolean(state.noticeDefenseHook) === Boolean(context.noticeDefenseHook)) score += 2;
    if (Boolean(state.hearingRightsHook) === Boolean(context.hearingRightsHook)) score += 2;
    const candidateTokens = tokenize([state.statuteReference, state.slug, state.name]);
    score += overlapScore(stateTokens, candidateTokens);
    score += hashValue(`${context.code}:${state.code}`) % 2;
    return score;
  };

  const successStoryScore = (story: RelatedSuccessStoryCandidate): number => {
    let score = 0;
    if (story.stateCode === context.code) score += 10;
    const sharedGuides = story.guideSlugs.filter((slug) =>
      context.relatedGuideSlugs.includes(slug)
    );
    score += sharedGuides.length * 2;
    const storyTokens = tokenize([
      story.title,
      story.summary,
      story.metaDescription,
      story.topicKeywords.join(" "),
    ]);
    score += overlapScore(stateTokens, storyTokens);
    score += hashValue(`${context.code}:${story.slug}`) % 3;
    return score;
  };

  const faqScore = (faq: RelatedFaqCandidate): number => {
    let score = faqScoreForTokens(stateTokens, faq, {});
    if (context.relatedGuideSlugs.includes(faq.pairedGuideSlug)) score += 6;
    score += hashValue(`${context.code}:${faq.slug}`) % 2;
    return score;
  };

  return {
    guides: buildGuideLinks(pickTop(inputs.guides, guideScore, 4)),
    states: buildStateLinks(pickTop(inputs.states, stateScore, 3)),
    faqs: buildFaqLinks(pickTop(inputs.faqs, faqScore, 3)),
    tools: [
      {
        label: `Open the ${context.name} appeal letter tool`,
        href: `/appeal-hoa-fine/${context.slug}`,
        description:
          "Generate a state-tailored letter draft with notice and hearing language.",
      },
      {
        label: "Start with the general appeal wizard",
        href: "/",
        description:
          "Draft from the main tool, then refine with your state page and evidence packet.",
      },
      {
        label: "Browse all HOA appeal guides",
        href: "/guides",
        description:
          "Explore the full educational library for additional hearing and evidence tactics.",
      },
      {
        label: "Browse the FAQ knowledge base",
        href: "/faq",
        description:
          "Open direct answers to common homeowner questions about HOA fines and appeals.",
      },
      {
        label: "Read more success stories",
        href: "/success-stories",
        description: "Review additional outcomes from documented HOA fine appeal disputes.",
      },
    ],
    successStories: buildSuccessStoryLinks(
      pickTop(inputs.successStories, successStoryScore, 2)
    ),
  };
}

export function generateRelatedContentForFaq(
  context: FaqContext,
  inputs: RelatedBuildInputs
): RelatedContentBuckets {
  const faqTokens = tokenize([
    context.slug,
    context.question,
    context.metaDescription,
    context.category,
    context.pairedGuideSlug,
    context.relatedGuideSlugs.join(" "),
    context.relatedFaqSlugs.join(" "),
  ]);

  const guideScore = (guide: RelatedGuideCandidate): number => {
    const guideTokens = tokenize([
      guide.slug,
      guide.title,
      guide.metaDescription,
      guide.category,
    ]);
    let score = overlapScore(faqTokens, guideTokens);
    if (guide.slug === context.pairedGuideSlug) score += 10;
    if (context.relatedGuideSlugs.includes(guide.slug)) score += 6;
    if (guide.category === context.category) score += 3;
    return score;
  };

  const stateScore = (state: RelatedStateCandidate): number => {
    const stateTokens = tokenize([state.name, state.slug, state.statuteReference]);
    let score = overlapScore(faqTokens, stateTokens);
    if (context.relatedStateCodes.includes(state.code)) score += 8;
    if (faqTokens.has("notice") && state.noticeDefenseHook) score += 2;
    if (faqTokens.has("hearing") && state.hearingRightsHook) score += 2;
    score += hashValue(`${context.slug}:${state.code}`) % 2;
    return score;
  };

  const successStoryScore = (story: RelatedSuccessStoryCandidate): number => {
    const storyTokens = tokenize([
      story.title,
      story.summary,
      story.metaDescription,
      story.topicKeywords.join(" "),
    ]);
    let score = overlapScore(faqTokens, storyTokens);
    if (story.guideSlugs.includes(context.pairedGuideSlug)) score += 7;
    if (story.guideSlugs.some((slug) => context.relatedGuideSlugs.includes(slug))) {
      score += 3;
    }
    score += hashValue(`${context.slug}:${story.slug}`) % 3;
    return score;
  };

  const faqScore = (faq: RelatedFaqCandidate): number =>
    faqScoreForTokens(faqTokens, faq, {
      relatedFaqSlugs: context.relatedFaqSlugs,
      category: context.category,
      excludeSlug: context.slug,
    });

  const topStates = pickTop(inputs.states, stateScore, 3);
  const preferredState = topStates[0];
  const toolLinks: RelatedContentLink[] = [
    {
      label: "Start the HOA appeal letter tool",
      href: "/",
      description:
        "Use the free guided wizard to draft a formal HOA fine dispute letter.",
    },
    {
      label: "Read the paired deep-dive guide",
      href: `/guides/${context.pairedGuideSlug}`,
      description:
        "Open the full educational guide that expands this FAQ topic in more depth.",
    },
    {
      label: "Browse all FAQ answers",
      href: "/faq",
      description:
        "Return to the FAQ knowledge base for more homeowner questions.",
    },
    {
      label: "Browse all HOA appeal guides",
      href: "/guides",
      description:
        "Open the full guide library for process, evidence, and enforcement strategies.",
    },
  ];
  if (preferredState) {
    toolLinks.push({
      label: `Use the ${preferredState.name} state tool page`,
      href: `/appeal-hoa-fine/${preferredState.slug}`,
      description:
        "Open the state-tailored appeal flow with jurisdiction-specific legal framing.",
    });
  }

  return {
    guides: buildGuideLinks(pickTop(inputs.guides, guideScore, 4)),
    states: buildStateLinks(topStates),
    faqs: buildFaqLinks(pickTop(inputs.faqs, faqScore, 3)),
    tools: toolLinks,
    successStories: buildSuccessStoryLinks(
      pickTop(inputs.successStories, successStoryScore, 2)
    ),
  };
}

export function buildInboundLinkCount(
  pages: { href: string; related: RelatedContentBuckets }[]
): Map<string, number> {
  const knownHrefs = new Set(pages.map((page) => page.href));
  const inbound = new Map<string, number>(pages.map((page) => [page.href, 0]));

  for (const page of pages) {
    const links = [
      ...page.related.guides,
      ...page.related.states,
      ...page.related.faqs,
      ...page.related.tools,
      ...page.related.successStories,
    ];
    for (const link of links) {
      if (!knownHrefs.has(link.href)) continue;
      inbound.set(link.href, (inbound.get(link.href) ?? 0) + 1);
    }
  }

  return inbound;
}
