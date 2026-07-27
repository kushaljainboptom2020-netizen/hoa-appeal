import { attributionForStateCode } from "@/lib/content/editorial/attribution";
import type { GuideSource } from "@/lib/content/guides/types";
import type { SuccessStory, SuccessStoryCard } from "./types";

type SuccessStoryDef = Omit<SuccessStory, "attribution" | "sources">;

/** Shared educational citations (avoids circular import with guides). */
const SUCCESS_STORY_SOURCES: GuideSource[] = [
  {
    citation:
      "Association governing documents (CC&Rs, bylaws, rules, and fine schedules)",
    description:
      "Primary private instruments that typically authorize fines, hearings, written decisions, and owner appeal procedures.",
  },
  {
    citation:
      "State community association and property owners' association statutes",
    description:
      "Statewide notice, cure, hearing, and enforcement frameworks referenced in educational success-story examples.",
  },
  {
    citation: "MyHOAAppeal Editorial Policy and Fact Checking standards",
    description:
      "How educational examples are reviewed for sourcing, balance, and disclaimer clarity before publication.",
    url: "/editorial-policy",
  },
];

function assembleStory(def: SuccessStoryDef): SuccessStory {
  return {
    ...def,
    attribution: attributionForStateCode(def.stateCode),
    sources: SUCCESS_STORY_SOURCES,
  };
}

const SUCCESS_STORY_DEFS: SuccessStoryDef[] = [
  {
    slug: "california-landscaping-fine-reduced",
    title: "California owner cut a landscaping fine after proving cure timing",
    metaTitle:
      "California HOA Fine Success Story | Landscaping Fine Reduced | MyHOAAppeal",
    metaDescription:
      "A California homeowner documented drought and vendor delays, then used a formal appeal packet to reduce recurring landscaping penalties.",
    summary:
      "A homeowner in California used photos, irrigation records, and dated correspondence to reduce a recurring landscaping fine after a hearing.",
    stateCode: "CA",
    stateSlug: "california",
    guideSlugs: [
      "landscaping-and-maintenance-violation-appeals",
      "seasonal-and-weather-related-cure-delays",
      "preparing-exhibits-for-hoa-hearings",
    ],
    topicKeywords: ["landscaping", "cure-period", "hearing", "evidence"],
    timeline: "23 days from notice to revised decision",
    outcome:
      "Board reduced a daily accrual schedule to a one-time warning and waived late fees.",
    highlights: [
      "Submitted timestamped pre- and post-cure photos.",
      "Showed board-approved vendor estimate with delay notes.",
      "Requested written decision and corrected meeting minutes.",
    ],
    body: [
      {
        heading: "The notice problem",
        paragraphs: [
          "The association cited brown turf and sparse plantings during a municipal watering restriction. The letter threatened daily fines without attaching the adopted fine schedule or explaining how drought rules interacted with the landscape covenant.",
          "Instead of paying immediately, the owner exported the portal notice as a PDF, photographed the lot with street markers, and requested the architectural guideline page that defined “dead landscaping.”",
        ],
      },
      {
        heading: "Evidence that changed the hearing",
        paragraphs: [
          "A local nursery estimate showed a three-week plant shortage after heat damage. The packet paired that estimate with irrigation runtime logs and photos taken on the cure deadline and again after replacement planting.",
          "At the hearing, the owner asked for a written decision and pointed directors to neighboring lots that remained brown under the same watering rules. The board’s minutes later reflected a one-time warning instead of accruing daily penalties.",
        ],
      },
      {
        heading: "What owners can reuse",
        paragraphs: [
          "Cure-timing appeals work best when weather, vendor capacity, and municipal restrictions appear as dated facts—not as late excuses. Ask for the schedule that authorizes daily fines before you concede the ledger.",
          "Keep the same exhibit order in any follow-up letter: notice defect, cure timeline, comparable lots, and the specific remedy requested.",
          "If daily fines already posted, ask in writing whether accrual paused during the hearing request and attach the board’s published fine schedule.",
        ],
      },
    ],
  },
  {
    slug: "texas-notice-defect-led-to-dismissal",
    title: "Texas hearing panel dismissed fines after notice defects were documented",
    metaTitle:
      "Texas HOA Fine Success Story | Notice Defect Dismissal | MyHOAAppeal",
    metaDescription:
      "A Texas homeowner cited Chapter 209 notice requirements and obtained a full dismissal of fines tied to an incomplete violation letter.",
    summary:
      "A homeowner in Texas challenged missing statutory notice language and received a full rescission of a fine notice.",
    stateCode: "TX",
    stateSlug: "texas",
    guideSlugs: [
      "hoa-due-process-rights",
      "hoa-fine-timelines-and-deadlines",
      "certified-mail-and-notice-proof",
    ],
    topicKeywords: ["notice", "due-process", "timeline", "hearing-rights"],
    timeline: "16 days from receipt to board withdrawal",
    outcome: "Association withdrew the fine and reset the process with proper notice.",
    highlights: [
      "Compared notice date with certified mail receipt.",
      "Cited timeline errors against governing documents.",
      "Requested dismissal instead of only a cure extension.",
    ],
    body: [
      {
        heading: "What the letter left out",
        paragraphs: [
          "The violation letter arrived by portal message and omitted a clear cure window and hearing invitation. The owner immediately requested the certified-mail copy and compared postmark timing with the portal timestamp.",
          "Texas Property Code Chapter 209 frameworks often require meaningful written notice and an opportunity to be heard before certain fines become enforceable. The owner quoted the association’s own hearing clause beside the incomplete letter.",
        ],
      },
      {
        heading: "The ask that worked",
        paragraphs: [
          "Rather than arguing only aesthetics, the written appeal asked for dismissal of the defective notice and a restart with compliant service. Delivery proof and a one-page timeline were attached as Exhibit A.",
          "Management withdrew the fine sixteen days later and reissued a corrected notice. The owner cured the underlying yard condition while preserving the procedural challenge on the first attempt.",
        ],
      },
      {
        heading: "Reusable checklist",
        paragraphs: [
          "Save envelopes, portal exports, and hearing-request emails the same day. Procedure arguments collapse without proof of what was served and when.",
          "Ask for dismissal of a defective notice when the statute or documents require specific content—do not settle for an oral promise to “look into it.”",
          "When a corrected notice arrives, calendar the new cure window immediately and keep the first defective notice in the exhibit binder.",
        ],
      },
    ],
  },
  {
    slug: "florida-pet-fine-overturned",
    title: "Florida resident overturned a pet-related fine with record comparisons",
    metaTitle:
      "Florida HOA Fine Success Story | Pet Fine Overturned | MyHOAAppeal",
    metaDescription:
      "A Florida owner used community records and hearing prep to show inconsistent pet-rule enforcement and reverse a disputed fine.",
    summary:
      "A Florida owner demonstrated selective enforcement in pet citations and obtained reversal during internal review.",
    stateCode: "FL",
    stateSlug: "florida",
    guideSlugs: [
      "pet-related-hoa-fines",
      "selective-enforcement-hoa-fines",
      "comparing-neighbor-enforcement-records",
    ],
    topicKeywords: ["pet-fine", "selective-enforcement", "records", "hearing"],
    timeline: "31 days from first notice to reversal",
    outcome: "Fine was removed and policy clarification was posted to owners.",
    highlights: [
      "Presented anonymized comparison log from prior warnings.",
      "Mapped inconsistent rule language between handbook revisions.",
      "Asked for policy clarification in written decision request.",
    ],
    body: [
      {
        heading: "Uneven leash-rule enforcement",
        paragraphs: [
          "The citation claimed an off-leash incident near the amenity lake. The owner requested violation photos, the current pet policy, and any prior warnings issued for the same corridor.",
          "Records showed multiple informal warnings to other households without fines, while this owner received an immediate monetary penalty after a separate amenity complaint.",
        ],
      },
      {
        heading: "How the packet was structured",
        paragraphs: [
          "The hearing binder opened with the handbook revision history, then a chronological comparison chart using only publicly visible common-area incidents. No neighbor names appeared in materials left with the board.",
          "Counsel for the association later recommended reversal and a clarifying bulletin so managers would apply the same warning ladder before fines.",
        ],
      },
      {
        heading: "Takeaways for pet disputes",
        paragraphs: [
          "Selective-enforcement arguments need matched locations, seasons, and rule text—not social-media screenshots. Florida Chapter 720 hearing rights make a clean packet especially valuable.",
          "Request policy clarification in writing so the next owner is not fined under a different informal standard.",
          "Separate disability-accommodation issues from ordinary pet-rule disputes; do not mix those theories in the same paragraph without counsel review.",
        ],
      },
    ],
  },
  {
    slug: "arizona-parking-penalty-reduced",
    title: "Arizona parking penalty reduced after signage and towing evidence",
    metaTitle:
      "Arizona HOA Fine Success Story | Parking Penalty Reduced | MyHOAAppeal",
    metaDescription:
      "An Arizona homeowner challenged parking penalties by proving unclear signage and inconsistent guest-space enforcement.",
    summary:
      "In Arizona, a homeowner used lot photos and guest parking logs to reduce a cumulative parking fine.",
    stateCode: "AZ",
    stateSlug: "arizona",
    guideSlugs: [
      "parking-and-vehicle-hoa-fines",
      "photographic-evidence-for-hoa-appeals",
      "challenging-arbitrary-hoa-fines",
    ],
    topicKeywords: ["parking", "vehicle", "signage", "evidence"],
    timeline: "18 days through hearing committee review",
    outcome: "Board reduced penalties by 70% and removed towing surcharge.",
    highlights: [
      "Included photos of faded and conflicting signs.",
      "Showed guest permit email confirmations.",
      "Requested precise rule citation for each alleged occurrence.",
    ],
    body: [
      {
        heading: "Conflicting signs and guest permits",
        paragraphs: [
          "Night photos showed a faded “residents only” plaque beside a newer guest-permit arrow pointing to the same stall. The owner’s guest had emailed for a permit and received confirmation before the tow threat arrived.",
          "The appeal asked the committee to cite the exact recorded rule for each alleged night rather than relying on a bulk portal charge.",
        ],
      },
      {
        heading: "Hearing result",
        paragraphs: [
          "Directors reduced the stacked fine and removed the towing surcharge after reviewing the signage conflict and permit thread. They also directed management to replace the faded sign within thirty days.",
          "The owner paid the reduced amount under a written reservation of rights while confirming the ledger correction in email.",
        ],
      },
      {
        heading: "Parking appeal habits",
        paragraphs: [
          "Photograph signs with landmarks and timestamps. Guest disputes often turn on whether the association’s own permit system was usable.",
          "Challenge bulk ledgers that do not identify each occurrence date and rule citation.",
          "If a tow occurred, demand the towing contract citation and the notice required before removal—those documents often conflict with the fine letter.",
        ],
      },
    ],
  },
  {
    slug: "new-york-collections-paused",
    title: "New York owner paused collections while disputing HOA fine balance",
    metaTitle:
      "New York HOA Fine Success Story | Collections Paused | MyHOAAppeal",
    metaDescription:
      "A New York homeowner disputed fee stacking and temporarily halted collection activity pending board review.",
    summary:
      "A New York owner challenged fee stacking and got a collection pause while the appeal record was reviewed.",
    stateCode: "NY",
    stateSlug: "new-york",
    guideSlugs: [
      "hoa-collections-and-demand-letters",
      "dealing-with-lien-threats",
      "assessment-vs-fine-differences",
    ],
    topicKeywords: ["collections", "lien-risk", "fee-stacking", "accounting"],
    timeline: "12 days to temporary hold, 29 days to adjustment",
    outcome:
      "Collections were paused and the account balance was corrected before escalation.",
    highlights: [
      "Separated assessments from disputed fine entries.",
      "Sent ledger correction request with evidence index.",
      "Documented all calls and demanded written responses.",
    ],
    body: [
      {
        heading: "Mixed ledger lines",
        paragraphs: [
          "A demand letter treated disputed fines, late fees, and regular assessments as a single collectible balance. The owner paid current dues under protest and itemized the disputed fine lines in a certified response.",
          "The letter asked collections counsel to pause activity while the board reviewed the internal appeal packet already on file.",
        ],
      },
      {
        heading: "Accounting correction",
        paragraphs: [
          "Within twelve days, counsel confirmed a temporary hold. After the board meeting, management issued a corrected ledger that removed unsupported fee stacking tied to the contested fine.",
          "The owner kept a call log and required every phone assurance to be restated by email the same day.",
        ],
      },
      {
        heading: "Collections response pattern",
        paragraphs: [
          "Separate assessments from fines early. Payment allocation language and a clean dispute statement reduce the chance that collections activity outruns the board’s review.",
          "This example is educational only and does not describe every New York co-op or condominium regime.",
          "Never ignore a foreclosure warning while an accounting dispute is pending—escalate to counsel if lien or foreclosure language appears.",
        ],
      },
    ],
  },
  {
    slug: "north-carolina-architectural-appeal-win",
    title: "North Carolina architectural fine reversed after plan history review",
    metaTitle:
      "North Carolina HOA Success Story | Architectural Appeal Win | MyHOAAppeal",
    metaDescription:
      "A North Carolina homeowner used old approvals and committee records to reverse an architectural fine.",
    summary:
      "A North Carolina owner won an architectural appeal by proving prior approvals and changed standards.",
    stateCode: "NC",
    stateSlug: "north-carolina",
    guideSlugs: [
      "architectural-review-denials-and-appeals",
      "amending-ccrs-vs-enforcing-rules",
      "requesting-hoa-records-and-violation-files",
    ],
    topicKeywords: ["architectural-review", "records", "prior-approval", "rules"],
    timeline: "35 days from citation to reversal",
    outcome:
      "Fine was rescinded and committee adopted a clarified architectural checklist.",
    highlights: [
      "Produced archived approval emails and drawings.",
      "Compared current standard with prior guideline edition.",
      "Requested recusal for conflicted committee member.",
    ],
    body: [
      {
        heading: "Prior approval versus new checklist",
        paragraphs: [
          "The fine alleged an unapproved porch railing style installed years earlier under a written architectural approval. Management cited a newer handbook page that had never been recorded as a covenant amendment.",
          "The owner requested the committee file, prior guideline editions, and any vote adopting the new checklist.",
        ],
      },
      {
        heading: "Conflict and recusal",
        paragraphs: [
          "One committee member lived next door and had previously complained about the railing. The owner requested recusal in writing before the hearing and presented side-by-side drawings from the original approval email.",
          "The board rescinded the fine and directed the committee to publish a clarified checklist distinguishing recorded covenants from unrecorded preferences.",
        ],
      },
      {
        heading: "Architectural appeal habits",
        paragraphs: [
          "Pull the approval that existed when work was done. After-the-fact handbook pages are weaker than recorded instruments unless properly adopted.",
          "Ask for recusal when a neighbor-director has a personal stake, and keep that request in the minutes.",
          "If the committee cannot produce the adoption vote for a new checklist, say so in the first paragraph of the appeal letter and attach the older approval.",
        ],
      },
    ],
  },
];

export const SUCCESS_STORIES: SuccessStory[] =
  SUCCESS_STORY_DEFS.map(assembleStory);

const bySlug = new Map(SUCCESS_STORIES.map((story) => [story.slug, story]));

export const SUCCESS_STORY_CARDS: SuccessStoryCard[] = SUCCESS_STORIES.map((story) => ({
  slug: story.slug,
  title: story.title,
  metaDescription: story.metaDescription,
  stateSlug: story.stateSlug,
  summary: story.summary,
}));

export function getAllSuccessStorySlugs(): string[] {
  return SUCCESS_STORIES.map((story) => story.slug);
}

export function getSuccessStoryBySlug(slug: string): SuccessStory | undefined {
  return bySlug.get(slug);
}

export function getSuccessStoriesByStateCode(code: string): SuccessStory[] {
  const upperCode = code.toUpperCase();
  return SUCCESS_STORIES.filter((story) => story.stateCode === upperCode);
}

export function assertSuccessStoriesValid(): void {
  for (const story of SUCCESS_STORIES) {
    if (!story.slug || !story.title || !story.metaDescription) {
      throw new Error(`Success story ${story.slug || "<missing slug>"} has missing core fields`);
    }
    if (story.guideSlugs.length < 2) {
      throw new Error(`Success story ${story.slug} must reference at least 2 guides`);
    }
    if (!story.stateCode || !story.stateSlug) {
      throw new Error(`Success story ${story.slug} must include state mapping`);
    }
    if (!story.body || story.body.length < 2) {
      throw new Error(`Success story ${story.slug} needs narrative body sections`);
    }
    if (!story.attribution?.authorSlug || !story.attribution?.reviewerSlug) {
      throw new Error(`Success story ${story.slug} missing editorial attribution`);
    }
    if (!story.attribution.publishedAtIso || !story.attribution.updatedAtIso) {
      throw new Error(`Success story ${story.slug} missing published/updated dates`);
    }
    if (!story.attribution.reviewedAtIso) {
      throw new Error(`Success story ${story.slug} missing reviewed date`);
    }
    if (story.sources.length < 1) {
      throw new Error(`Success story ${story.slug} needs at least one source`);
    }
  }
}

export type { SuccessStory, SuccessStoryCard };
