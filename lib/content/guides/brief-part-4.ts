import type { GuideBrief } from "./briefs";

export const PART_BRIEFS: Record<string, GuideBrief> = {
  "statute-of-limitations-for-hoa-fines": {
    intro: [
      "Limitation periods for HOA fines, assessments, and collection lawsuits differ by state, claim type, and sometimes by when the association first noticed the violation.",
      "This educational page does not state a limitation period for your dispute. Hire a lawyer before you rely on any deadline you found on the internet.",
    ],
    sections: [
      {
        heading: "Separate community deadlines from court timing defenses",
        paragraphs: [
          "Your declaration may set short internal appeal windows that have nothing to do with how long a collector can sue. Missing a community deadline can still narrow your options even when a broader timing question exists.",
          "List every date on your notice, ledger entry, and demand letter so counsel can see whether you are arguing inside the association process or about later collection.",
        ],
      },
      {
        heading: "Identify what kind of charge is on the ledger",
        paragraphs: [
          "Fines, late fees, special assessments, and attorney fees may follow different rules in your state. A label on the portal is not enough—ask which document authorizes each line.",
          "Bring the violation file, not just the current balance, when you discuss whether age of the charge matters.",
        ],
      },
      {
        heading: "Research state law without treating charts as answers",
        paragraphs: [
          "Use /state-laws to locate topics that may intersect with enforcement timing, then read primary statutes with your association type in mind.",
          "Laches, waiver, and revival arguments are fact-heavy. This site does not predict how a court or arbitrator would treat stale violations in your file.",
        ],
        bullets: [
          "Log first notice date and each follow-up demand",
          "Note whether the fine was reassessed or restated",
          "Save board or manager emails that admit delay",
        ],
      },
      {
        heading: "Act on counsel advice before payment or waivers",
        paragraphs: [
          "Partial payments, payment plans, and signed acknowledgments can affect later arguments in ways owners do not expect.",
          "If liens or lawsuit papers appear in the same envelope as the fine, treat timing research as urgent rather than optional.",
        ],
      },
    ],
    conclusion: [
      "Limitation questions belong in a file built from your ledger history and primary law—not from a generic blog post.",
    ],
    faqs: [
      {
        id: "statute-of-limitations-for-hoa-fines-faq-1",
        question: "Does MyHOAAppeal list limitation periods by state?",
        answer: "No. Periods vary by claim and facts. Use /state-laws for orientation, then ask counsel to apply the statute to your notice and ledger history.",
      },
      {
        id: "statute-of-limitations-for-hoa-fines-faq-2",
        question: "Can an old violation still support a new fine?",
        answer: "Associations sometimes restate charges or treat ongoing conditions differently from one-time events. Compare your timeline to the rule cited and get advice before assuming the matter is stale.",
      },
      {
        id: "statute-of-limitations-for-hoa-fines-faq-3",
        question: "Should I ignore internal appeal deadlines while researching limitations?",
        answer: "Usually not. Community rules may still require written appeals or hearings on their own schedule. Calendar those steps while counsel reviews broader timing questions.",
      },
      {
        id: "statute-of-limitations-for-hoa-fines-faq-4",
        question: "What documents help an attorney review timing?",
        answer: "Violation notices, fine schedules in effect when the charge posted, ledger printouts, collection letters, and any minutes referencing your violation ID.",
      },
      {
        id: "statute-of-limitations-for-hoa-fines-faq-5",
        question: "Is paying under protest enough to preserve every defense?",
        answer: "Protest language may help in some disputes but does not replace analysis of your documents and state law. Ask counsel how payment affects your specific file.",
      },
    ],
    sources: [
      {
        citation: "Recorded declaration, bylaws, and community rules",
        description: "Internal appeal windows, fine authorization, and enforcement sequences that run on their own calendar.",
      },
      {
        citation: "MyHOAAppeal editorial policy",
        description: "Why we avoid publishing limitation day counts and when to verify with counsel.",
        url: "/editorial-policy",
      },
    ],
    internalLinks: [
      {
        label: "When to hire an HOA attorney",
        href: "/guides/when-to-hire-an-hoa-attorney",
        description: "Use when collection, liens, or court papers accompany the fine.",
      },
      {
        label: "State HOA law hub",
        href: "/state-laws",
        description: "Locate statutory topics to verify against primary sources.",
      },
      {
        label: "HOA fine appeal overview",
        href: "/appeal-hoa-fine",
        description: "Community-level cure, hearing, and letter steps while counsel reviews timing.",
      },
    ],
    cta: {
      headline: "Get professional review before you rely on a deadline",
      body: "Internet charts cannot tell you whether your fine is collectible or defensible. A local attorney can read your ledger, notices, and state law together.",
      href: "/guides/when-to-hire-an-hoa-attorney",
      linkLabel: "Draft a letter from your facts",
    },
  },

  "homeowner-bill-of-rights-hoa-enforcement": {
    intro: [
      "There is no single national HOA bill of rights on this site. For the full owner-rights framework, read /guides/understanding-your-rights.",
      "Use the four topics below to look up notice, hearing, records, and fines in your declaration and on your state page—not in a generic slogan.",
    ],
    sections: [
      {
        heading: "Notice: find what your instruments require",
        paragraphs: [
          "Compare the violation letter to the enforcement article in your declaration and any fine schedule the board adopted. Note delivery method, cure language, and whether the cited rule matches the facts described.",
          "Your state page at /state-laws may list additional notice topics for your association type. Verify each summary against the statute before you quote it in a letter.",
        ],
      },
      {
        heading: "Hearing: follow the community ladder first",
        paragraphs: [
          "Many communities describe reconsideration, a hearing, or a board vote in bylaws or rules even when state law is silent. Calendar any deadline the documents mention.",
          "If the manager says a hearing is optional, ask which section makes it optional and whether a prior step was skipped.",
        ],
      },
      {
        heading: "Records: request files you are entitled to review",
        paragraphs: [
          "Violation worksheets, photos, prior warnings, and ledger detail often live outside the portal PDF you received. Ask for the complete file tied to your violation ID.",
          "State open-records or association-records statutes vary widely. Use your state hub for orientation, then read primary law before assuming a particular format or fee cap.",
        ],
        bullets: [
          "Request the fine schedule page in effect when the charge posted",
          "Ask for prior notices on the same rule section",
          "Save portal downloads with date and filename",
        ],
      },
      {
        heading: "Fines: tie amounts to adopted authority",
        paragraphs: [
          "Look for board or member approval language, caps, and daily versus per-violation wording in the schedule your community actually uses.",
          "Bill-of-rights talking points from social media do not override a properly adopted schedule in your records—challenge amounts with citations, not slogans.",
        ],
      },
    ],
    conclusion: [
      "Owner protections in enforcement disputes come from your declaration plus verifiable state law, explained in depth on /guides/understanding-your-rights.",
    ],
    faqs: [
      {
        id: "homeowner-bill-of-rights-hoa-enforcement-faq-1",
        question: "Is there a federal homeowner bill of rights for HOAs?",
        answer: "Not one this site treats as a standalone defense. Research state resources and your recorded covenants, starting with /guides/understanding-your-rights.",
      },
      {
        id: "homeowner-bill-of-rights-hoa-enforcement-faq-2",
        question: "Where do I look up notice requirements?",
        answer: "Start with your declaration enforcement article and fine schedule, then check /state-laws for your association type and read primary statutes.",
      },
      {
        id: "homeowner-bill-of-rights-hoa-enforcement-faq-3",
        question: "Does every owner get a hearing before a fine?",
        answer: "Not automatically. Some documents require hearings for certain penalties; others rely on written cure periods. Read your instruments instead of assuming a uniform rule.",
      },
      {
        id: "homeowner-bill-of-rights-hoa-enforcement-faq-4",
        question: "Can I cite a state tip sheet in my appeal?",
        answer: "You can use it to ask sharper questions, but bind your letter to document sections and verified statute language your community must follow.",
      },
      {
        id: "homeowner-bill-of-rights-hoa-enforcement-faq-5",
        question: "Why is this page shorter than the rights hub?",
        answer: "This URL is a signpost. Detailed due-process and bill-of-rights research lives on /guides/understanding-your-rights to avoid duplicate stories.",
      },
    ],
    sources: [
      {
        citation: "Recorded declaration, bylaws, and community rules",
        description: "Notice, hearing, records, and fine authority your board must follow internally.",
      },
      {
        citation: "MyHOAAppeal editorial policy",
        description: "How we describe owner-rights research without inventing national standards.",
        url: "/editorial-policy",
      },
    ],
    internalLinks: [
      {
        label: "Understanding your rights",
        href: "/guides/understanding-your-rights",
        description: "Cornerstone guide for due process and owner-rights research.",
      },
      {
        label: "State HOA law hub",
        href: "/state-laws",
        description: "Statutory topics to verify for notice, meetings, and records.",
      },
      {
        label: "HOA fine appeal overview",
        href: "/appeal-hoa-fine",
        description: "Practical next steps after you map document-based rights.",
      },
    ],
    cta: {
      headline: "Turn document research into a clear letter",
      body: "Once notice, hearing, records, and fine citations are on one timeline, draft the relief your rules describe.",
      href: "/",
      linkLabel: "Draft a letter from your facts",
    },
  },

  "hoa-board-meeting-rules-and-minutes": {
    intro: [
      "Board meetings are where many fines are discussed, waived, or ratified—but the proof is usually in minutes, agendas, and votes—not in a manager’s summary email.",
      "When a penalty feels unfair, ask for the draft or approved minutes of the meeting that imposed the fine, then compare that record to your declaration and fine schedule.",
    ],
    sections: [
      {
        heading: "Request minutes tied to your violation ID",
        paragraphs: [
          "Ask specifically for draft and approved minutes covering the meeting date the manager cites. Include your lot or violation number so staff can search archives.",
          "If the association claims executive session, note what your bylaws allow to be redacted and whether a fine vote still requires a public motion in your community.",
        ],
      },
      {
        heading: "Read agendas and consent agendas carefully",
        paragraphs: [
          "Fines sometimes appear on consent agendas with little discussion. Check whether your rules require separate notice before a consent vote affects your property.",
          "Save the agenda packet the board had in front of them, not only the violation letter sent afterward.",
        ],
      },
      {
        heading: "Compare minutes to the notice you received",
        paragraphs: [
          "Look for mismatches between the stated violation, the dollar amount voted, and the rule section quoted in your letter.",
          "If minutes are silent on your fine, ask in writing whether the board delegated authority to the manager and which document permits that delegation.",
        ],
        bullets: [
          "Request audio or video only if your documents or state law allow",
          "Log who made the motion and the vote count if recorded",
          "Attach minutes excerpts to your appeal packet",
        ],
      },
      {
        heading: "Use community process before assuming open-meeting rights",
        paragraphs: [
          "Meeting customs differ: some associations publish detailed minutes; others summarize enforcement in closed sessions permitted by their instruments.",
          "Pair minute review with /state-laws research for your association type without assuming every state mirrors government sunshine rules.",
        ],
      },
    ],
    conclusion: [
      "Minutes and agendas show whether the board actually considered your fine the way your governing documents require.",
    ],
    faqs: [
      {
        id: "hoa-board-meeting-rules-and-minutes-faq-1",
        question: "Can I attend the meeting where my fine was approved?",
        answer: "Some communities allow owner observation for enforcement items; others do not. Read your bylaws and state page rather than assuming a public meeting right.",
      },
      {
        id: "hoa-board-meeting-rules-and-minutes-faq-2",
        question: "What if draft minutes differ from the approved version?",
        answer: "Keep both versions and note changes to amounts, rule citations, or vote outcomes. Ask which version the association treats as official for your appeal.",
      },
      {
        id: "hoa-board-meeting-rules-and-minutes-faq-3",
        question: "Are managers allowed to fine without board minutes?",
        answer: "Delegation language varies. If no minute entry exists, request the resolution or rule that lets staff impose or finalize the charge without a vote.",
      },
      {
        id: "hoa-board-meeting-rules-and-minutes-faq-4",
        question: "How fast must minutes be produced?",
        answer: "Timelines appear in bylaws, manager contracts, or state records statutes. This site does not state a universal production deadline.",
      },
      {
        id: "hoa-board-meeting-rules-and-minutes-faq-5",
        question: "Should I wait for minutes before appealing?",
        answer: "Calendar community appeal deadlines first. You can often file a protest while requesting minutes if your rules allow supplemental information later.",
      },
    ],
    sources: [
      {
        citation: "Recorded declaration, bylaws, and community rules",
        description: "Meeting notice, quorum, voting, and enforcement delegation requirements.",
      },
      {
        citation: "MyHOAAppeal editorial policy",
        description: "Educational framing for meeting records without guaranteeing access outcomes.",
        url: "/editorial-policy",
      },
    ],
    internalLinks: [
      {
        label: "Open meeting laws and transparency",
        href: "/guides/open-meeting-laws-and-hoa-transparency",
        description: "How some states regulate association meetings—and many do not.",
      },
      {
        label: "State HOA law hub",
        href: "/state-laws",
        description: "Meeting and records topics for your jurisdiction.",
      },
      {
        label: "HOA fine appeal overview",
        href: "/appeal-hoa-fine",
        description: "Connect minute research to cure, hearing, or letter steps.",
      },
    ],
    cta: {
      headline: "Turn meeting records into a clear letter",
      body: "When minutes, agendas, and notices line up—or do not—draft the relief your documents describe.",
      href: "/",
      linkLabel: "Draft a letter from your facts",
    },
  },

  "open-meeting-laws-and-hoa-transparency": {
    intro: [
      "Some states regulate association meetings, records, and owner access; others leave most transparency questions to the declaration and corporate bylaws.",
      "Check your state page at /state-laws and your recorded instruments. Do not assume a government sunshine-law rule applies to your HOA by default.",
    ],
    sections: [
      {
        heading: "Confirm whether your state statute reaches your association",
        paragraphs: [
          "Condominium acts, planned-community statutes, and non-profit corporation laws describe meetings differently. Identify your association type before quoting a generic open-meeting label.",
          "Tip sheets and advocacy summaries are starting points—not substitutes for the statute section that actually governs your community.",
        ],
      },
      {
        heading: "Map transparency rights to the document stack",
        paragraphs: [
          "Even where state law is thin, bylaws may require posted agendas, owner forums, or access to certain financial reports.",
          "Compare those requirements to what you received when the fine was announced.",
        ],
      },
      {
        heading: "Request records with precise descriptions",
        paragraphs: [
          "Ask for violation files, fine worksheets, and meeting minutes using the names your manager portal uses. Broad demands stall; narrow requests move.",
          "If the association cites a records fee or redaction policy, verify it against statute and your governing documents rather than debating from memory.",
        ],
        bullets: [
          "Cite the document name and date range in each request",
          "Keep copies of denials and partial productions",
          "Note whether fines were discussed in open or closed session",
        ],
      },
      {
        heading: "Use transparency gaps as questions, not conclusions",
        paragraphs: [
          "Missing agendas or sealed votes may support procedural questions when your instruments require openness—but outcomes depend on your facts and counsel’s read of state law.",
          "Pair records work with /appeal-hoa-fine steps so you meet community deadlines while transparency requests are pending.",
        ],
      },
    ],
    conclusion: [
      "Transparency in HOA enforcement is a mix of state statute and private covenants—verify both before you claim a meeting or records violation.",
    ],
    faqs: [
      {
        id: "open-meeting-laws-and-hoa-transparency-faq-1",
        question: "Are HOA board meetings public like city council meetings?",
        answer: "Often no. Some states impose owner access or notice rules on certain associations; many disputes still turn primarily on bylaws and declarations.",
      },
      {
        id: "open-meeting-laws-and-hoa-transparency-faq-2",
        question: "Can I record a board meeting?",
        answer: "Recording rights vary by state, instrument, and meeting location. Read your rules and state page before recording, and ask counsel if unsure.",
      },
      {
        id: "open-meeting-laws-and-hoa-transparency-faq-3",
        question: "Does a closed session make my fine invalid?",
        answer: "Not automatically. Executive sessions may be permitted for listed topics. Compare the session purpose to your bylaws and any fine vote requirements.",
      },
      {
        id: "open-meeting-laws-and-hoa-transparency-faq-4",
        question: "What records help with a fine appeal?",
        answer: "Violation files, fine schedules, minutes, worksheets, and correspondence showing who authorized the penalty.",
      },
      {
        id: "open-meeting-laws-and-hoa-transparency-faq-5",
        question: "Where should I start research?",
        answer: "Open /state-laws for your state, read primary statutes for your association type, then read meeting and records articles in your declaration and bylaws.",
      },
    ],
    sources: [
      {
        citation: "Recorded declaration, bylaws, and community rules",
        description: "Owner access, meeting notice, and executive session limits written into your community.",
      },
      {
        citation: "MyHOAAppeal editorial policy",
        description: "Why we avoid blanket statements about sunshine laws and HOAs.",
        url: "/editorial-policy",
      },
    ],
    internalLinks: [
      {
        label: "Board meeting rules and minutes",
        href: "/guides/hoa-board-meeting-rules-and-minutes",
        description: "How to request minutes for the meeting that imposed your fine.",
      },
      {
        label: "State HOA law hub",
        href: "/state-laws",
        description: "Meeting and records statutes to verify for your state.",
      },
      {
        label: "HOA fine appeal overview",
        href: "/appeal-hoa-fine",
        description: "Keep community appeal deadlines on calendar while records arrive.",
      },
    ],
    cta: {
      headline: "Turn transparency research into a clear letter",
      body: "When you know what meetings and records your community owes, draft requests and appeals that cite the right sources.",
      href: "/",
      linkLabel: "Draft a letter from your facts",
    },
  },

  "conflict-of-interest-on-hoa-boards": {
    intro: [
      "A director who is also the complaining neighbor, vendor, or competing bidder can raise fairness questions in a fine dispute. Recusal rules, when they exist, are in the declaration, bylaws, or other governing documents, and sometimes in a statute.",
      "Disclosure duties and remedies depend on your bylaws and state statute—this page does not invent a one-size remedy when a conflict appears.",
    ],
    sections: [
      {
        heading: "Identify relationships that should be disclosed",
        paragraphs: [
          "Note when a board member filed the complaint, supplied photos, or stands to benefit from enforcement against your lot.",
          "Ask whether that director recused from discussion and vote as your documents require.",
        ],
      },
      {
        heading: "Collect the community’s conflict rules",
        paragraphs: [
          "Bylaws often describe interested-director procedures, quorum without the conflicted member, and how minutes should record recusal.",
          "Your state page may add corporate or association-specific conflict language—verify primary sources before citing them.",
        ],
      },
      {
        heading: "Compare process to your fine timeline",
        paragraphs: [
          "If a conflicted director participated in setting the amount or denying cure, describe the dates and roles in writing without accusing motives you cannot prove.",
          "Request minutes or written consents showing who voted and whether the manager acted on delegated authority alone.",
        ],
        bullets: [
          "List directors named in the violation file",
          "Save neighbor complaint emails with headers",
          "Ask whether ethics or management policies apply",
        ],
      },
      {
        heading: "Choose relief paths your documents allow",
        paragraphs: [
          "Some communities provide reconsideration by a disinterested committee; others offer only a standard appeal to the full board.",
          "Escalate to counsel when conflicts intersect with liens, selective enforcement, or repeat targeting.",
        ],
      },
    ],
    conclusion: [
      "Conflict questions are procedural and fact-specific—document relationships, read your recusal rules, and ask for disinterested review when instruments permit.",
    ],
    faqs: [
      {
        id: "conflict-of-interest-on-hoa-boards-faq-1",
        question: "Does a neighbor on the board automatically void my fine?",
        answer: "Not automatically. Outcomes depend on disclosure, recusal, vote counts, and state law. Build a record of who participated and which rules applied.",
      },
      {
        id: "conflict-of-interest-on-hoa-boards-faq-2",
        question: "What should I ask for in writing?",
        answer: "Recusal confirmations, minutes, violation worksheets, and the section describing interested-director procedures in your bylaws.",
      },
      {
        id: "conflict-of-interest-on-hoa-boards-faq-3",
        question: "Can the manager decide instead of the board?",
        answer: "Only if delegation language allows. Conflict issues still matter when managers follow board directives from conflicted meetings.",
      },
      {
        id: "conflict-of-interest-on-hoa-boards-faq-4",
        question: "Is selective enforcement the same as a conflict?",
        answer: "Related but distinct. Conflicts focus on director relationships; selective enforcement compares how similar violations were treated. You may raise both with separate evidence.",
      },
      {
        id: "conflict-of-interest-on-hoa-boards-faq-5",
        question: "When should I involve an attorney?",
        answer: "Consider counsel when conflicts accompany collection lawsuits, repeated targeting, or votes that ignore clear recusal language.",
      },
    ],
    sources: [
      {
        citation: "Recorded declaration, bylaws, and community rules",
        description: "Recusal, voting, and enforcement procedures when directors have personal interests.",
      },
      {
        citation: "MyHOAAppeal editorial policy",
        description: "Educational limits when describing board conflicts and remedies.",
        url: "/editorial-policy",
      },
    ],
    internalLinks: [
      {
        label: "Board meeting rules and minutes",
        href: "/guides/hoa-board-meeting-rules-and-minutes",
        description: "Verify votes and recusal in official meeting records.",
      },
      {
        label: "State HOA law hub",
        href: "/state-laws",
        description: "Corporate and association conflict statutes to verify.",
      },
      {
        label: "HOA fine appeal overview",
        href: "/appeal-hoa-fine",
        description: "Frame conflict facts inside your community appeal steps.",
      },
    ],
    cta: {
      headline: "Turn conflict facts into a clear letter",
      body: "When relationships and recusal rules are documented, draft the reconsideration or appeal your instruments describe.",
      href: "/",
      linkLabel: "Draft a letter from your facts",
    },
  },

  "management-company-roles-in-hoa-fines": {
    intro: [
      "Management companies often draft violation letters, log photos, and send demand notices—but the board usually holds authority to adopt fines and approve settlements. A manager can send the notice; the fine still has to be authorized by the declaration or other governing documents.",
      "When a manager presses for payment, ask who is authorized to settle, waive, or reopen the file.",
    ],
    sections: [
      {
        heading: "Separate daily administration from board decisions",
        paragraphs: [
          "Read your management agreement and delegation resolutions to see whether the manager may impose fines, stop accrual, or only recommend action.",
          "If the letterhead says management but the vote happened at the board, your appeal may need to go to directors—not only the portal inbox.",
        ],
      },
      {
        heading: "Request the authorization trail",
        paragraphs: [
          "Ask for the board motion, consent agenda item, or standing policy that lets staff issue the specific penalty you received.",
          "When amounts changed after the first notice, find out whether a director approved the increase.",
        ],
      },
      {
        heading: "Communicate in writing with clear asks",
        paragraphs: [
          "Email requests for violation files, fine schedules, and settlement authority to the manager while copying the board address your documents list.",
          "Keep tone factual: you are mapping roles, not debating landscaping taste in the first message.",
        ],
        bullets: [
          "Ask who can waive late fees or reset cure clocks",
          "Request the manager’s written settlement limits if any",
          "Save auto-replies that cite board-only decisions",
        ],
      },
      {
        heading: "Escalate when the manager cannot answer",
        paragraphs: [
          "If staff say only the board can help, calendar the next meeting or written appeal window and send your packet to the corporate officer listed in your bylaws.",
          "Use /state-laws only to supplement—not replace—the contract and covenant stack governing manager duties.",
        ],
      },
    ],
    conclusion: [
      "Knowing whether the manager is messenger or decision-maker keeps your appeal aimed at the body that can actually grant relief.",
    ],
    faqs: [
      {
        id: "management-company-roles-in-hoa-fines-faq-1",
        question: "Can I ignore the manager and only write the board?",
        answer: "Often you must use the process your rules describe, which may start with management. Copy the board when documents allow so decisions are visible.",
      },
      {
        id: "management-company-roles-in-hoa-fines-faq-2",
        question: "Did the manager fine me personally?",
        answer: "Usually the association is the entity enforcing covenants. The manager implements board policy unless delegation documents say otherwise.",
      },
      {
        id: "management-company-roles-in-hoa-fines-faq-3",
        question: "Who can approve a payment plan?",
        answer: "Check management contracts and board policies. Some plans need treasurer or board approval above a dollar threshold.",
      },
      {
        id: "management-company-roles-in-hoa-fines-faq-4",
        question: "What if the manager refuses to produce the file?",
        answer: "Cite records articles and request production from the board in writing. Denials become part of your appeal record.",
      },
      {
        id: "management-company-roles-in-hoa-fines-faq-5",
        question: "Should I fire the manager to fix a fine dispute?",
        answer: "Management changes rarely erase valid penalties on their own. Focus on document-based relief paths first.",
      },
    ],
    sources: [
      {
        citation: "Management agreement and board delegation resolutions",
        description: "What staff may do without returning to the board for each fine.",
      },
      {
        citation: "MyHOAAppeal editorial policy",
        description: "How we describe manager roles without guaranteeing settlement outcomes.",
        url: "/editorial-policy",
      },
    ],
    internalLinks: [
      {
        label: "Board meeting rules and minutes",
        href: "/guides/hoa-board-meeting-rules-and-minutes",
        description: "Confirm board votes behind manager letters.",
      },
      {
        label: "State HOA law hub",
        href: "/state-laws",
        description: "Statutory topics that may touch manager licensing or records.",
      },
      {
        label: "HOA fine appeal overview",
        href: "/appeal-hoa-fine",
        description: "Route your packet to the right decision-maker.",
      },
    ],
    cta: {
      headline: "Turn role clarity into a clear letter",
      body: "Once you know who can settle the fine, draft a request that matches your community’s escalation path.",
      href: "/",
      linkLabel: "Draft a letter from your facts",
    },
  },

  "amending-ccrs-vs-enforcing-rules": {
    intro: [
      "Owners sometimes receive fines under a rule that never went through the amendment process their declaration requires for covenant changes.",
      "A policy the board typed into a newsletter is not automatically an amendment of the recorded declaration—ask which document was filed with the county.",
    ],
    sections: [
      {
        heading: "Sort rules, resolutions, and recorded amendments",
        paragraphs: [
          "Community rules and design guidelines may be enforceable when properly adopted, but they cannot always do work reserved for CC&Rs in your state.",
          "Highlight the exact section the notice cites and locate that language in the instrument the association claims controls.",
        ],
      },
      {
        heading: "Trace adoption and member votes",
        paragraphs: [
          "Amendments often need a supermajority and a recorded instrument. Ask for the date of adoption, vote results, and recording information.",
          "If only the board signed a resolution, check whether your documents allow that method for the type of restriction being enforced.",
        ],
      },
      {
        heading: "Compare enforcement timing to the document in effect",
        paragraphs: [
          "Fines must usually tie to the schedule and rule text active when the violation was logged. A later amendment rarely rewrites history without clear language.",
          "Request the version of the declaration or rules packet owners received when the conduct occurred.",
        ],
        bullets: [
          "Ask for recording numbers on covenant changes",
          "Save newsletters separately from recorded PDFs",
          "Note whether owners got notice of rule votes",
        ],
      },
      {
        heading: "Frame arguments without overclaiming",
        paragraphs: [
          "When authority is missing or mislabeled, you may have a procedural challenge—but outcomes depend on your recorder’s files and counsel’s analysis.",
          "Use /appeal-hoa-fine to pick the community path while you gather recording evidence.",
        ],
      },
    ],
    conclusion: [
      "Enforcement sticks to the document stack actually adopted and recorded—not to informal summaries circulating online.",
    ],
    faqs: [
      {
        id: "amending-ccrs-vs-enforcing-rules-faq-1",
        question: "Can the board change CC&Rs without a vote?",
        answer: "Usually not for core covenant text. Read your amendment article and verify recording requirements before accepting a fine tied to new language.",
      },
      {
        id: "amending-ccrs-vs-enforcing-rules-faq-2",
        question: "Are email blasts enforceable?",
        answer: "They may explain existing rules but rarely create new covenant duties on their own. Ask which instrument contains the duty you allegedly violated.",
      },
      {
        id: "amending-ccrs-vs-enforcing-rules-faq-3",
        question: "What if the recorded PDF is older than the manager’s rulebook?",
        answer: "Compare dates and adoption minutes. Newer manager manuals need a lawful adoption path to override or supplement recorded text.",
      },
      {
        id: "amending-ccrs-vs-enforcing-rules-faq-4",
        question: "Does state law define rule versus covenant?",
        answer: "Labels vary. Use /state-laws to find statutes for your association type, then read how your declaration assigns enforcement power.",
      },
      {
        id: "amending-ccrs-vs-enforcing-rules-faq-5",
        question: "Should I stop maintenance while I research amendments?",
        answer: "Safety and ongoing violation theories complicate stale disputes. Document cure steps while you research recording history.",
      },
    ],
    sources: [
      {
        citation: "Recorded declaration, bylaws, and community rules",
        description: "Amendment thresholds, recording duties, and enforcement authority by document type.",
      },
      {
        citation: "MyHOAAppeal editorial policy",
        description: "Educational framing without guaranteeing invalidation of fines.",
        url: "/editorial-policy",
      },
    ],
    internalLinks: [
      {
        label: "Challenging arbitrary HOA fines",
        href: "/guides/challenging-arbitrary-hoa-fines",
        description: "When missing standards overlap with adoption questions.",
      },
      {
        label: "State HOA law hub",
        href: "/state-laws",
        description: "Amendment and enforcement statutes to verify.",
      },
      {
        label: "HOA fine appeal overview",
        href: "/appeal-hoa-fine",
        description: "Community appeal steps while you gather recording proof.",
      },
    ],
    cta: {
      headline: "Turn recording research into a clear letter",
      body: "When you know which instrument governs, draft a challenge that cites adoption and text—not rumors.",
      href: "/",
      linkLabel: "Draft a letter from your facts",
    },
  },

  "challenging-arbitrary-hoa-fines": {
    intro: [
      "A fine feels arbitrary when the amount, rule section, or fact pattern do not line up—but arbitrariness is an argument about missing or uneven standards, not a guaranteed defense.",
      "Ask for the adopted schedule and the section that fits your facts before you label the penalty random.",
    ],
    sections: [
      {
        heading: "Demand the fine schedule in effect",
        paragraphs: [
          "Request the board-adopted schedule active when the violation was logged, including caps, per-day language, and categories.",
          "Compare the posted amount to the schedule line the manager cites.",
        ],
      },
      {
        heading: "Match rule text to observable facts",
        paragraphs: [
          "Quote the notice’s rule section beside photos, measurements, or dates that show what actually occurred.",
          "Vague rules invite multiple readings—note ambiguities without claiming automatic victory.",
        ],
      },
      {
        heading: "Document inconsistent treatment with lawful records",
        paragraphs: [
          "Selective enforcement arguments need redacted violation histories or minutes—not gossip about neighbor lots.",
          "If the association denies records, put the denial in your file and ask for the records policy they rely on.",
        ],
        bullets: [
          "Request worksheets showing how the amount was calculated",
          "Log prior warnings for the same rule section",
          "Save portal messages that change the stated violation",
        ],
      },
      {
        heading: "Request structured relief, not slogans",
        paragraphs: [
          "Ask for recalculation, waiver of accrual, or a hearing under the relief article your declaration lists.",
          "Counsel may explore additional theories if liens or lawsuits follow; this guide stays on document-based steps.",
        ],
      },
    ],
    conclusion: [
      "Arbitrary fine arguments succeed only when your record shows a concrete gap between adopted standards and the penalty applied.",
    ],
    faqs: [
      {
        id: "challenging-arbitrary-hoa-fines-faq-1",
        question: "Is an arbitrary fine automatically invalid?",
        answer: "No. Associations may still prevail when documents support the amount and process. Your job is to show specific mismatches with evidence.",
      },
      {
        id: "challenging-arbitrary-hoa-fines-faq-2",
        question: "Can I cite neighbor fines without names?",
        answer: "Use lawfully obtained records with addresses redacted if required. Informal stories rarely persuade boards or mediators.",
      },
      {
        id: "challenging-arbitrary-hoa-fines-faq-3",
        question: "What if the rule is ambiguous?",
        answer: "Describe the two reasonable readings and why your conduct fits the narrower one. Ask for waiver or cure when ambiguity is genuine.",
      },
      {
        id: "challenging-arbitrary-hoa-fines-faq-4",
        question: "Does anger help my case?",
        answer: "Calm, dated exhibits help reviewers more than emotional labels. Let the schedule and photos carry the argument.",
      },
      {
        id: "challenging-arbitrary-hoa-fines-faq-5",
        question: "Where do I start?",
        answer: "Violation notice, fine schedule, rule text, and /appeal-hoa-fine for the next procedural step your community describes.",
      },
    ],
    sources: [
      {
        citation: "Recorded declaration, bylaws, and community rules",
        description: "Fine schedules, enforcement standards, and appeal paths.",
      },
      {
        citation: "MyHOAAppeal editorial policy",
        description: "Why we avoid promising outcomes on arbitrary-enforcement theories.",
        url: "/editorial-policy",
      },
    ],
    internalLinks: [
      {
        label: "Amending CC&Rs vs enforcing rules",
        href: "/guides/amending-ccrs-vs-enforcing-rules",
        description: "When missing adoption undermines the rule cited.",
      },
      {
        label: "State HOA law hub",
        href: "/state-laws",
        description: "Statutory fine caps or procedural topics to verify.",
      },
      {
        label: "HOA fine appeal overview",
        href: "/appeal-hoa-fine",
        description: "Turn schedule comparisons into a formal appeal.",
      },
    ],
    cta: {
      headline: "Turn schedule comparisons into a clear letter",
      body: "When amounts and facts align—or do not—draft the waiver or recalculation request your documents allow.",
      href: "/",
      linkLabel: "Draft a letter from your facts",
    },
  },

  "architectural-review-denials-and-appeals": {
    intro: [
      "Architectural fines often follow a denied application, expired approval, or dispute about whether work matched approved plans.",
      "Approval standards, conditions, and appeal paths usually live in the declaration and design guidelines—not in a generic template online.",
    ],
    sections: [
      {
        heading: "Rebuild the approval timeline",
        paragraphs: [
          "Gather submission dates, committee responses, stamped plans, and any conditional approvals tied to your project.",
          "Note whether work started before final approval when your guidelines require written consent.",
        ],
      },
      {
        heading: "Compare installed work to approved documents",
        paragraphs: [
          "Photos, paint codes, fence heights, and material specs should line up with the approval letter—not with a neighbor’s installation.",
          "If the committee moved the goalposts mid-project, save each revised request and denial.",
        ],
      },
      {
        heading: "Find the appeal path in your guidelines",
        paragraphs: [
          "Some communities allow rehearing before the architectural committee; others route appeals to the board or an external panel.",
          "Calendar deadlines in the guidelines before you send new drawings or cure work.",
        ],
        bullets: [
          "Request prior approvals on similar lots when records allow",
          "Attach survey or plot plan context to photos",
          "Cite the guideline section defining measurable standards",
        ],
      },
      {
        heading: "Draft a denial response with exhibits",
        paragraphs: [
          "Use measured facts and prior approvals rather than aesthetic arguments alone.",
          "See /samples/sample-hoa-architectural-violation-appeal-letter for structure, then tailor every sentence to your project file.",
        ],
      },
    ],
    conclusion: [
      "Architectural appeals turn on documented approvals, measurable standards, and the rehearing steps your guidelines describe.",
    ],
    faqs: [
      {
        id: "architectural-review-denials-and-appeals-faq-1",
        question: "Can I appeal after I already installed the improvement?",
        answer: "Many communities still allow appeals or modification plans, but guidelines differ. Read cure and appeal articles before removing work.",
      },
      {
        id: "architectural-review-denials-and-appeals-faq-2",
        question: "What if my approval expired?",
        answer: "Compare expiration language in the approval letter to the guideline section on renewals. Ask for reinstatement if you relied on written extensions.",
      },
      {
        id: "architectural-review-denials-and-appeals-faq-3",
        question: "Do unwritten committee customs matter?",
        answer: "Only when backed by consistent written decisions or guidelines. Informal customs are weak without documentary patterns.",
      },
      {
        id: "architectural-review-denials-and-appeals-faq-4",
        question: "Should I hire a designer to respond?",
        answer: "Scaled drawings help when disputes are technical. Match submission format to what your guidelines require.",
      },
      {
        id: "architectural-review-denials-and-appeals-faq-5",
        question: "Where is a sample letter?",
        answer: "Use /samples/sample-hoa-architectural-violation-appeal-letter as an educational starting point, not as guaranteed language.",
      },
    ],
    sources: [
      {
        citation: "Declaration and architectural/design guidelines",
        description: "Submission, approval, condition, and appeal requirements for structural and cosmetic changes.",
      },
      {
        citation: "MyHOAAppeal editorial policy",
        description: "How sample letters relate to editable owner drafts.",
        url: "/editorial-policy",
      },
    ],
    internalLinks: [
      {
        label: "Sample architectural appeal letter",
        href: "/samples/sample-hoa-architectural-violation-appeal-letter",
        description: "Educational structure for prior approvals and guideline citations.",
      },
      {
        label: "Challenging arbitrary HOA fines",
        href: "/guides/challenging-arbitrary-hoa-fines",
        description: "When fine amounts detach from written standards.",
      },
      {
        label: "HOA fine appeal overview",
        href: "/appeal-hoa-fine",
        description: "Connect architectural cure plans to broader appeal steps.",
      },
    ],
    cta: {
      headline: "Turn approval files into a clear letter",
      body: "When plans, photos, and guideline sections align, draft the rehearing or modification request your community allows.",
      href: "/",
      linkLabel: "Draft a letter from your facts",
    },
  },

  "landscaping-and-maintenance-violation-appeals": {
    intro: [
      "Landscaping and maintenance fines often involve brown turf, deferred trimming, seasonal plantings, or exterior upkeep the declaration assigns to owners.",
      "Build an appeal from dated photos, irrigation records, contractor delays, and the maintenance standard actually cited—not from a invented cure period this site does not provide.",
    ],
    sections: [
      {
        heading: "Capture the property on a dated photo timeline",
        paragraphs: [
          "Take wide shots that show street context and narrow shots of the cited issue on the same day.",
          "Repeat after each cure step so reviewers can see progress even when plants need seasons to fill in.",
        ],
      },
      {
        heading: "Explain irrigation limits and weather events",
        paragraphs: [
          "HOA or municipal watering restrictions, broken controllers, and shared system outages may matter when your file is fact-heavy.",
          "Attach repair invoices or utility notices rather than relying on verbal excuses.",
        ],
      },
      {
        heading: "Document contractor scheduling in writing",
        paragraphs: [
          "Save emails showing when landscapers were booked, rescheduled, or delayed by material shortages.",
          "If the association demanded an unrealistic cure window, compare that demand to the maintenance text in your rules without assuming a default number of days.",
        ],
        bullets: [
          "Log each manager site visit date if known",
          "Keep nursery receipts for replacement plantings",
          "Note shared vs owner-maintained areas on a sketch",
        ],
      },
      {
        heading: "Draft a cure plan tied to the cited rule",
        paragraphs: [
          "Propose specific work with dates—mulch delivery, sod replacement, tree trimming—and ask for confirmation that the plan satisfies the violation.",
          "Use /samples/sample-hoa-lawn-landscaping-fine-appeal-letter for layout ideas, then cite your declaration section and photos.",
        ],
      },
    ],
    conclusion: [
      "Landscaping appeals persuade when photos, contractor records, and rule text show either compliance or a reasonable cure path—not when owners guess at unstated deadlines.",
    ],
    faqs: [
      {
        id: "landscaping-and-maintenance-violation-appeals-faq-1",
        question: "Does MyHOAAppeal state a standard cure period for lawn fines?",
        answer: "No. Cure windows come from your notice, rules, and past association practice. Read those sources instead of internet defaults.",
      },
      {
        id: "landscaping-and-maintenance-violation-appeals-faq-2",
        question: "Can drought restrictions excuse brown grass?",
        answer: "Sometimes fact patterns support relief when rules and restrictions conflict. Document the restriction and your compliance efforts.",
      },
      {
        id: "landscaping-and-maintenance-violation-appeals-faq-3",
        question: "What if the HOA maintains common area but fined my lot?",
        answer: "Maintenance allocations appear in plats and declarations. Mark who owns which strip before you accept responsibility.",
      },
      {
        id: "landscaping-and-maintenance-violation-appeals-faq-4",
        question: "Should I remove plants before appealing?",
        answer: "Removal can cure or worsen violations depending on rules. Photograph first and read whether rehearing is available before destructive work.",
      },
      {
        id: "landscaping-and-maintenance-violation-appeals-faq-5",
        question: "Where is a sample landscaping letter?",
        answer: "See /samples/sample-hoa-lawn-landscaping-fine-appeal-letter for educational structure tailored to maintenance disputes.",
      },
    ],
    sources: [
      {
        citation: "Recorded declaration, bylaws, and landscape rules",
        description: "Maintenance duties, fine schedules, and any appeal or cure language.",
      },
      {
        citation: "MyHOAAppeal editorial policy",
        description: "Why we do not publish generic cure-day charts for landscaping fines.",
        url: "/editorial-policy",
      },
    ],
    internalLinks: [
      {
        label: "Sample lawn and landscaping appeal letter",
        href: "/samples/sample-hoa-lawn-landscaping-fine-appeal-letter",
        description: "Educational template for photos, contractors, and cure plans.",
      },
      {
        label: "How to collect evidence",
        href: "/guides/how-to-collect-evidence",
        description: "Organize photos and records for board review.",
      },
      {
        label: "HOA fine appeal overview",
        href: "/appeal-hoa-fine",
        description: "Next procedural steps after your cure timeline is documented.",
      },
    ],
    cta: {
      headline: "Turn photos and receipts into a clear letter",
      body: "When your cure plan matches the cited maintenance rule, draft the waiver or confirmation request your community allows.",
      href: "/",
      linkLabel: "Draft a letter from your facts",
    },
  },
};
