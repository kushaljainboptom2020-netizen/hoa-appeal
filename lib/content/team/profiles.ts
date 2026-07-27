import type { TeamMember } from "./types";

/**
 * Editorial team profiles for E-E-A-T bylines.
 * Roles are editorial/research — not licensed legal counsel.
 */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    slug: "jordan-hale",
    name: "Jordan Hale",
    role: "author",
    title: "Senior Editorial Writer",
    credentials: [
      "Leads consumer-education guides on HOA notice, hearing, and appeal workflows",
      "Specializes in translating governing-document procedures into plain-language checklists",
    ],
    bio: [
      "Jordan Hale writes MyHOAAppeal’s long-form educational guides on due process, hearing preparation, and written appeal strategy. The focus is practical procedure: what notices typically must contain, how cure windows work, and how owners can organize facts before a board meeting.",
      "Jordan’s work is researched against primary statutes and association governance concepts, then edited for clarity so homeowners can verify claims in their own CC&Rs and state code. Jordan does not provide legal advice or represent homeowners.",
    ],
    expertise: [
      "HOA fine appeal workflows",
      "Notice and hearing preparation",
      "Evidence organization for boards",
      "Plain-language consumer education",
    ],
  },
  {
    slug: "morgan-ellis",
    name: "Morgan Ellis",
    role: "author",
    title: "Research Writer, State Resources",
    credentials: [
      "Authors and maintains state HOA fine appeal resource pages",
      "Cross-references legislative publications and official code repositories",
    ],
    bio: [
      "Morgan Ellis researches and drafts MyHOAAppeal’s state-specific HOA fine resources, emphasizing statute citations, typical timeline language, and how local governing documents interact with statewide association acts.",
      "Morgan prioritizes official legislative sources and clearly separates educational overview from jurisdiction-specific legal advice. Readers are encouraged to confirm current code text before relying on any citation in formal correspondence.",
    ],
    expertise: [
      "State association statutes",
      "Timeline and notice windows",
      "Lien and collections education",
      "Source citation hygiene",
    ],
  },
  {
    slug: "casey-nguyen",
    name: "Casey Nguyen",
    role: "reviewer",
    title: "Editorial Standards Lead",
    credentials: [
      "Owns the site fact-checking checklist and source verification standards",
      "Reviews educational articles for accuracy, balance, and disclaimer clarity",
    ],
    bio: [
      "Casey Nguyen leads editorial standards for MyHOAAppeal, including citation checks, claim-to-source mapping, and review of AI-assisted drafts before publication. Casey’s reviews focus on whether statements are supported by listed sources and whether educational limits are clearly disclosed.",
      "Casey is not a licensed attorney. Reviews confirm editorial quality and sourcing—not case-specific legal conclusions.",
    ],
    expertise: [
      "Fact-checking workflows",
      "Primary-source verification",
      "Editorial policy compliance",
      "AI-assisted draft review",
    ],
  },
  {
    slug: "riley-brooks",
    name: "Riley Brooks",
    role: "reviewer",
    title: "Policy Research Editor",
    credentials: [
      "Reviews statute summaries, timeline tables, and FAQ answers for consistency",
      "Flags outdated citations and overbroad claims for rewrite or removal",
    ],
    bio: [
      "Riley Brooks reviews MyHOAAppeal content for consistency across related guides and state pages—especially timelines, hearing rights language, and collections/lien education. Riley compares drafts against the cited legislative sources and the site’s editorial and AI transparency policies.",
      "Like all MyHOAAppeal editors, Riley provides editorial review only and does not offer legal advice or attorney services.",
    ],
    expertise: [
      "Cross-article consistency",
      "Statute summary review",
      "FAQ accuracy checks",
      "Update and republication cadence",
    ],
  },
];
