import type { GuideBrief } from "./briefs";

export const PART_BRIEFS: Record<string, GuideBrief> = {
  "assessment-vs-fine-differences": {
    intro: [
      "Regular assessments fund routine association operations—insurance, maintenance, reserves—while a fine is a penalty tied to a cited rule violation. Owners lose leverage when both charges sit on one portal screen with similar labels.",
      "Your declaration and fine schedule usually describe assessments and penalties separately, but managers sometimes post both on a single ledger line. Separating the categories helps you ask for the right cure, hearing, or payment-allocation steps without assuming one statute treats them identically nationwide.",
    ],
    sections: [
      {
        heading: "Read the ledger as two different charge types",
        paragraphs: [
          "Print or export the account history and mark each entry as either budget-driven or violation-driven. Budget lines often reference annual dues, special assessments, or transfer fees; penalty lines should cite a rule section or violation ID.",
          "If a penalty was rolled into a dues bucket, request a reclassification in writing before you decide how to pay or protest. Mixed labels make it harder to show you followed the fine-specific appeal path your documents describe.",
        ],
      },
      {
        heading: "Match each charge to the procedure your documents name",
        paragraphs: [
          "Assessments may follow a different delinquency ladder than fines—payment plans, voting suspension, or lien language can differ even within the same community.",
          "Fines typically require a violation notice, cure window, or hearing step before a final amount sticks. Quote the enforcement article that applies to penalties, not the section that only discusses annual budget billing.",
        ],
        bullets: [
          "Ask for a line-item breakdown by charge type",
          "Copy the violation letter next to any fine line",
          "Note whether interest or late fees attach to dues only",
          "Flag if a single check was applied without your written direction",
        ],
      },
      {
        heading: "Avoid paying a fine as if it were ordinary dues",
        paragraphs: [
          "Some owners pay assessments on time while disputing a penalty; others send one lump sum without instructions. Your declaration may say how partial payments are applied—oldest assessment first, fines last, or another order.",
          "If you pay under protest, say so on the memo and in email so the association cannot later treat the payment as a waiver of the penalty dispute.",
        ],
      },
      {
        heading: "Use state research without collapsing the categories",
        paragraphs: [
          "State association statutes may define assessments, fines, or liens differently for condominiums, cooperatives, or planned communities. Skim /state-laws for topics that fit your project type, then verify official text.",
          "Do not assume a statute that governs assessment collection automatically controls fine enforcement in your state—or that one chapter applies to every association label on a sign at the gate.",
        ],
      },
    ],
    conclusion: [
      "Treat assessments and fines as related on the ledger but separate in procedure: identify the charge type, cite the matching document section, and keep your protest tied to the penalty path your community actually published.",
    ],
    faqs: [
      {
        id: "assessment-vs-fine-differences-faq-1",
        question: "Can my HOA lien both assessments and fines?",
        answer: "Recorded instruments and state law for your association type usually spell out what delinquencies can be secured. Read lien articles in your declaration and verify statutes on /state-laws; counsel should review if a demand mentions recording a lien.",
      },
      {
        id: "assessment-vs-fine-differences-faq-2",
        question: "Why does my statement show one balance for everything?",
        answer: "Software often rolls accounts into a single total. Ask for an itemized ledger that separates regular assessments, special assessments, fines, and fees so you can trace each dispute.",
      },
      {
        id: "assessment-vs-fine-differences-faq-3",
        question: "If I pay my dues, can the board still pursue the fine?",
        answer: "Often yes—penalties can remain open while assessments are current. Confirm with your violation file and fine schedule rather than assuming payment of dues erases the penalty line.",
      },
      {
        id: "assessment-vs-fine-differences-faq-4",
        question: "Does state law treat fines like assessments everywhere?",
        answer: "No. States split topics across chapters and definitions. Use your state page on /state-laws as orientation, then read primary sources for how your project type is labeled.",
      },
      {
        id: "assessment-vs-fine-differences-faq-5",
        question: "Can I appeal a fine using the same form as a dues dispute?",
        answer: "Only if your documents say so. Many communities use different contacts or deadlines for architectural matters, assessments, and rule violations—check the fine schedule attachment.",
      },
    ],
    sources: [
      {
        citation: "Recorded declaration, bylaws, and community rules",
        description: "Assessment billing articles, fine schedules, and enforcement ladders that distinguish penalties from budget charges.",
      },
      {
        citation: "MyHOAAppeal state law hub",
        description: "Orientation to statutory topics by state and association type—verify every summary against official code.",
        url: "/state-laws",
      },
    ],
    internalLinks: [
      {
        label: "HOA collections and demand letters",
        href: "/guides/hoa-collections-and-demand-letters",
        description: "When a mixed ledger triggers attorney or agency demands.",
      },
      {
        label: "Fine timelines and deadlines",
        href: "/guides/hoa-fine-timelines-and-deadlines",
        description: "Build a calendar from your own notices rather than generic day counts.",
      },
      {
        label: "HOA fine appeal overview",
        href: "/appeal-hoa-fine",
        description: "Connect charge-type research to cure and hearing requests.",
      },
    ],
    cta: {
      headline: "Ask for the right procedure on each charge",
      body: "Once you separate assessment lines from penalty lines, draft a letter that cites the enforcement article your community uses for fines—not the annual billing section alone.",
      href: "/",
      linkLabel: "Draft a letter from your facts",
    },
  },

  "hoa-collections-and-demand-letters": {
    intro: [
      "A collections or demand letter can arrive after a disputed fine, mixed ledger, or long silence from the manager. The envelope feels urgent, but the first job is verification—not immediate payment.",
      "Demand letters may come from the association, a management company, or outside counsel. Treat them as a request for proof: what is owed, how it was calculated, and whether your internal appeal or cure window is still open under your documents.",
    ],
    sections: [
      {
        heading: "Inventory what the letter actually claims",
        paragraphs: [
          "Highlight every dollar amount, date range, and legal threat—lien, lawsuit, credit reporting, or transfer hold. Note whether the letter separates assessments from fines or blends them into one figure.",
          "Compare those claims to your saved violation notices, ledger exports, and any hearing requests you already sent. Gaps between the demand and your file are the core of a written response.",
        ],
      },
      {
        heading: "Respond in writing without admitting the penalty",
        paragraphs: [
          "A short, dated letter can request itemization, copies of board actions, and confirmation of any open appeal. Avoid casual phone admissions that contradict your dispute file.",
          "Send correspondence by a method your state or documents recognize for notice—certified mail, email if allowed, or portal upload with a timestamp screenshot.",
        ],
        bullets: [
          "Request a ledger reprint with charge-type labels",
          "Ask who authorized referral to counsel or a collector",
          "Restate any pending fine appeal by date sent",
          "Keep copies of envelopes and tracking numbers",
        ],
      },
      {
        heading: "Protect community deadlines while you verify",
        paragraphs: [
          "Your declaration may set hearing or reconsideration steps that run parallel to collection talk. Calendar those dates from your notices, not from boilerplate on the demand letter alone.",
          "If the letter mentions a lien or lawsuit, pause before signing payment plans or releases. Those documents may include language that affects later arguments.",
        ],
      },
      {
        heading: "Bring counsel in when security interests appear",
        paragraphs: [
          "Hire a lawyer when a demand mentions recording a lien, foreclosing, filing suit, or reporting to credit bureaus. Local counsel can read the ledger, notices, and recorded instruments with you.",
          "This article does not promise a defense or predict how a collector will react. It encourages organized verification and professional review when stakes rise beyond a routine fine letter.",
        ],
      },
    ],
    conclusion: [
      "Collection letters are evidence opportunities: verify charges, preserve dispute language, and escalate to an attorney when liens or court action enter the conversation.",
    ],
    faqs: [
      {
        id: "hoa-collections-and-demand-letters-faq-1",
        question: "Must I pay the full demand by the letter’s date?",
        answer: "The letter’s deadline may not match your declaration’s appeal timeline. Compare both, respond in writing if you dispute amounts, and ask counsel when lien or suit language appears.",
      },
      {
        id: "hoa-collections-and-demand-letters-faq-2",
        question: "Can I negotiate on the phone?",
        answer: "Phone talks without written confirmation can create misunderstandings. If you explore settlement, ask for terms in writing and review them before paying.",
      },
      {
        id: "hoa-collections-and-demand-letters-faq-3",
        question: "What if the collector adds fees I never saw?",
        answer: "Request the agreement authorizing collection costs and how they were calculated. Tie each fee to a document or statute your counsel identifies for your state.",
      },
      {
        id: "hoa-collections-and-demand-letters-faq-4",
        question: "Should I send a pay-under-protest check?",
        answer: "Some declarations describe paying under protest; others stay silent. Read your fine schedule and ask an attorney before mixing protest language with a collector’s release form.",
      },
      {
        id: "hoa-collections-and-demand-letters-faq-5",
        question: "Does ignoring the letter make the fine valid?",
        answer: "Silence can complicate later steps even when the penalty is weak on procedure. A factual verification letter preserves your record without conceding liability.",
      },
    ],
    sources: [
      {
        citation: "Recorded declaration, bylaws, and community rules",
        description: "Delinquency procedures, fine enforcement ladders, and any lien or assessment collection articles.",
      },
      {
        citation: "When to hire an HOA attorney",
        description: "Educational guidance on escalating to counsel when demands mention liens, suits, or foreclosure paths.",
        url: "/guides/when-to-hire-an-hoa-attorney",
      },
    ],
    internalLinks: [
      {
        label: "Assessments vs fines",
        href: "/guides/assessment-vs-fine-differences",
        description: "Split blended ledger lines before you answer a demand.",
      },
      {
        label: "Foreclosure risks from unpaid fines",
        href: "/guides/hoa-foreclosure-risks-from-unpaid-fines",
        description: "Understand when collection talk references security interests in your home.",
      },
      {
        label: "State HOA law hub",
        href: "/state-laws",
        description: "Statutory topics to verify with primary sources after you read the demand.",
      },
    ],
    cta: {
      headline: "Liens and lawsuits need local review",
      body: "If a demand letter mentions recording a lien, filing suit, or similar steps, an attorney in your state can read the packet before you sign a release or payment plan.",
      href: "/guides/when-to-hire-an-hoa-attorney",
      linkLabel: "Review attorney timing guidance",
    },
  },

  "hoa-foreclosure-risks-from-unpaid-fines": {
    intro: [
      "Homeowners sometimes discover that unpaid HOA amounts—not just mortgage defaults—can trigger lien or foreclosure language in governing documents or state statutes for certain association types. The risk profile depends on what was recorded, what was noticed, and how your project is classified.",
      "This guide explains how to read scary correspondence without panic and when to stop self-help. It does not invent a universal timeline or promise that any particular defense will succeed.",
    ],
    sections: [
      {
        heading: "Separate threat language from recorded authority",
        paragraphs: [
          "Collection letters may bold the word foreclosure while attaching little of your declaration. Request the lien article, any fine-to-lien ladder, and board minutes that authorized the charge you dispute.",
          "Compare those records to the violation file you already saved. Procedure gaps may matter for your appeal even though this page cannot predict court outcomes.",
        ],
      },
      {
        heading: "Trace whether the balance is fine, assessment, or mixed",
        paragraphs: [
          "Some instruments treat delinquent assessments differently from penalties. A ledger that lumps both can obscure which collection path the association claims to follow.",
          "Ask for an itemized history and read /guides/assessment-vs-fine-differences before you assume one delinquency story fits every line.",
        ],
        bullets: [
          "Copy every notice that preceded the lien threat",
          "Note dates of any hearing or cure steps you requested",
          "Save the exact lien or suit statute citation if provided",
          "Avoid signing broad releases without counsel review",
        ],
      },
      {
        heading: "Treat foreclosure mentions as a lawyer trigger",
        paragraphs: [
          "When correspondence references foreclosure, sale, or recording a lien against your lot, hire a licensed attorney in your state. Counsel can interpret recorded covenants and statutory definitions that apply to your community type.",
          "Self-help letters may still help on notice and ledger questions, but security-interest threats generally need professional review promptly.",
        ],
      },
      {
        heading: "Keep researching without guaranteeing results",
        paragraphs: [
          "Use /state-laws to locate topics your state page lists for liens or assessments, then read official code with your attorney. Many state summaries on this site note when a statewide day count was not confirmed.",
          "No article here can tell you whether a foreclosure case will be filed or dismissed. Focus on organized records and timely counsel when the letter crosses from routine fines into secured debt language.",
        ],
      },
    ],
    conclusion: [
      "Foreclosure talk demands document discipline and legal help: verify authority, split fines from assessments on the ledger, and involve counsel when liens or sale paths are on the table.",
    ],
    faqs: [
      {
        id: "hoa-foreclosure-risks-from-unpaid-fines-faq-1",
        question: "Can an HOA foreclose over a parking fine?",
        answer: "Some declarations and statutes allow liens for various delinquencies; others limit remedies. Your recorded instruments and state law for your association type control—ask an attorney to read them with you.",
      },
      {
        id: "hoa-foreclosure-risks-from-unpaid-fines-faq-2",
        question: "How fast can foreclosure happen?",
        answer: "Timelines vary by document, notice history, and state procedure. This site does not publish a single countdown; calendar dates from your own letters and ask counsel when foreclosure is mentioned.",
      },
      {
        id: "hoa-foreclosure-risks-from-unpaid-fines-faq-3",
        question: "Will paying stop a foreclosure case?",
        answer: "Payment may resolve some balances but can interact with releases, attorney fees, or ongoing disputes. Have counsel review any settlement form before you sign.",
      },
      {
        id: "hoa-foreclosure-risks-from-unpaid-fines-faq-4",
        question: "Does bankruptcy automatically erase HOA liens?",
        answer: "Bankruptcy law is federal and fact-specific. Only a qualified attorney can advise how liens interact with your financial situation.",
      },
      {
        id: "hoa-foreclosure-risks-from-unpaid-fines-faq-5",
        question: "Should I keep disputing the fine after a lien threat?",
        answer: "You can continue documenting procedure issues while counsel handles secured-debt questions. Keep written dispute language aligned with your declaration’s appeal steps.",
      },
    ],
    sources: [
      {
        citation: "Recorded declaration, bylaws, and community rules",
        description: "Lien, assessment, and fine enforcement articles plus any notice requirements before security instruments.",
      },
      {
        citation: "MyHOAAppeal state law hub",
        description: "State-by-state orientation on lien and assessment topics—confirm details in official statutes with counsel.",
        url: "/state-laws",
      },
    ],
    internalLinks: [
      {
        label: "HOA collections and demand letters",
        href: "/guides/hoa-collections-and-demand-letters",
        description: "Respond to demands without waiving disputes while you gather lien records.",
      },
      {
        label: "When to hire an HOA attorney",
        href: "/guides/when-to-hire-an-hoa-attorney",
        description: "Practical signs that professional review is prudent.",
      },
      {
        label: "Assessments vs fines",
        href: "/guides/assessment-vs-fine-differences",
        description: "Clarify which delinquency path the association claims on the ledger.",
      },
    ],
    cta: {
      headline: "Foreclosure language is not DIY territory",
      body: "If your notice mentions a lien, lawsuit, or foreclosure path, involve a local attorney before you pay under pressure or sign a release.",
      href: "/guides/when-to-hire-an-hoa-attorney",
      linkLabel: "Review attorney timing guidance",
    },
  },

  "privilege-suspension-and-amenity-bans": {
    intro: [
      "Pool keys, gate codes, gym access, and guest passes are practical privileges many associations control. When a fine dispute is open, management may suspend amenities as leverage—sometimes citing a rule you have never seen applied before.",
      "Suspension authority usually lives in the declaration, rules, or fine schedule—not in a generic internet list of banned punishments. Your first step is to learn which section the board relied on and whether that section matches the violation on your letter.",
    ],
    sections: [
      {
        heading: "Ask which document section authorized the ban",
        paragraphs: [
          "Request the exact covenant, rule, or board resolution that ties amenity loss to your violation ID. Some communities allow suspension after notice; others require a hearing or a specific fine threshold.",
          "If the manager cites pool rules for a parking dispute, capture that mismatch in writing rather than arguing at the gate.",
        ],
      },
      {
        heading: "Compare timing to your enforcement ladder",
        paragraphs: [
          "Note whether access was removed before or after any cure window, hearing, or appeal step your declaration describes for fines. Save emails that show when codes stopped working.",
          "Photograph or log denied entry attempts with dates—they may later support a procedural letter even though this article does not call every ban unlawful.",
        ],
        bullets: [
          "Copy the amenity suspension notice with date and scope",
          "Identify whether guests or renters are included",
          "Check if suspension is listed on the fine schedule",
          "Request reinstatement criteria in writing",
        ],
      },
      {
        heading: "Separate amenity policy from lien talk",
        paragraphs: [
          "Some letters bundle pool bans with ledger demands. Treat financial disputes and access disputes as related but distinct—paying a bill may not automatically restore keys if rules tie reinstatement to compliance steps.",
          "If lien or foreclosure language appears alongside the ban, shift to /guides/when-to-hire-an-hoa-attorney rather than relying on amenity arguments alone.",
        ],
      },
      {
        heading: "Research state topics without assuming a ban is illegal",
        paragraphs: [
          "State statutes may address fines, meetings, or records more often than pool hours. Skim /state-laws for your project type, then verify whether any statute limits suspension for your situation.",
          "Courts and boards weigh document text heavily. Focus on whether the association followed its own amenity and enforcement articles—not on whether every suspension would fail in every state.",
        ],
      },
    ],
    conclusion: [
      "Amenity bans turn on cited authority and sequence: identify the section used, map it to your violation file, and keep disputes factual while you pursue cure or hearing steps your documents allow.",
    ],
    faqs: [
      {
        id: "privilege-suspension-and-amenity-bans-faq-1",
        question: "Is it illegal for my HOA to lock me out of the pool?",
        answer: "Legality depends on your recorded instruments, how suspension was noticed, and state law for your association type. Some bans are authorized; others may be procedurally weak—research documents before assuming either outcome.",
      },
      {
        id: "privilege-suspension-and-amenity-bans-faq-2",
        question: "Can they suspend gate access for a fine I am appealing?",
        answer: "Your rules may or may not allow suspension during an appeal. Read the enforcement and amenity articles together and ask the board which step they claim satisfies notice.",
      },
      {
        id: "privilege-suspension-and-amenity-bans-faq-3",
        question: "Should I pay the fine to restore amenities?",
        answer: "Payment might restore access under some policies, but it can also affect protest arguments. Read reinstatement language and consider counsel if large balances or liens are involved.",
      },
      {
        id: "privilege-suspension-and-amenity-bans-faq-4",
        question: "Do state fines caps limit pool bans?",
        answer: "Caps and suspension rules differ by state and project type. Use your state page on /state-laws and primary code rather than cross-state anecdotes.",
      },
      {
        id: "privilege-suspension-and-amenity-bans-faq-5",
        question: "Can renters lose amenities when the owner is fined?",
        answer: "Lease and guest policies vary. Request the section that defines who holds privileges and whether suspension follows the unit or the account.",
      },
    ],
    sources: [
      {
        citation: "Recorded declaration, bylaws, and community rules",
        description: "Amenity use articles, fine schedules, and enforcement steps tied to privilege suspension.",
      },
      {
        citation: "MyHOAAppeal editorial policy",
        description: "How we discuss enforcement topics without guaranteeing outcomes or substituting for counsel.",
        url: "/editorial-policy",
      },
    ],
    internalLinks: [
      {
        label: "Understanding your rights",
        href: "/guides/understanding-your-rights",
        description: "Broader due-process framing when bans arrive mid-enforcement.",
      },
      {
        label: "Fine timelines and deadlines",
        href: "/guides/hoa-fine-timelines-and-deadlines",
        description: "Calendar cure and appeal dates from your notices.",
      },
      {
        label: "HOA fine appeal overview",
        href: "/appeal-hoa-fine",
        description: "Next steps after you map suspension authority.",
      },
    ],
    cta: {
      headline: "Cite the amenity section in your letter",
      body: "Once you know which rule the board invoked, draft a request that asks for reinstatement criteria and any hearing your documents promise.",
      href: "/",
      linkLabel: "Draft a letter from your facts",
    },
  },

  "hoa-due-process-rights": {
    intro: [
      "Due process in HOA fine fights usually means following the association’s published enforcement ladder plus any owner protections your state lists for your project type—not a single national hearing mandate.",
      "This page is a short pointer. The full notice-and-hearing walkthrough lives on /guides/understanding-your-rights; use the sections below as a checklist of what to look up in your own files.",
    ],
    sections: [
      {
        heading: "Declaration hearing and reconsideration clause",
        paragraphs: [
          "Search your recorded declaration and fine schedule for words like hearing, reconsideration, or appeal board. Note any cure period that must expire before a penalty is final.",
          "If your notice skipped a step those articles require, record the gap for a letter—without assuming every state imposes the same sequence.",
        ],
      },
      {
        heading: "Meeting and delivery notice",
        paragraphs: [
          "Check how your bylaws or rules describe notice for enforcement meetings or board votes on fines. Compare mailed dates, email timestamps, and posting methods to what your documents allow.",
          "Save the envelope and tracking data when notice arrived late relative to a hearing date on the letter.",
        ],
      },
      {
        heading: "Records that show who decided",
        paragraphs: [
          "Request minutes, violation worksheets, and photos the board relied on. Many communities grant inspection rights under corporate statutes or association chapters—verify on /state-laws for your type.",
          "A short written request for the decision file keeps your research organized while you read the cornerstone hub.",
        ],
        bullets: [
          "Ask for the violation worksheet tied to your ID",
          "Request board minutes covering the fine vote",
          "Save photos or inspection reports cited in the notice",
        ],
      },
      {
        heading: "Written outcome after the process",
        paragraphs: [
          "Look for language requiring a written decision, fine breakdown, or appeal window after any hearing. Calendar that window from the letter itself, not from generic internet timelines.",
          "For depth on tying these pieces together, continue on /guides/understanding-your-rights and /appeal-hoa-fine.",
        ],
      },
    ],
    conclusion: [
      "Treat this URL as an index: pull hearing, notice, records, and decision language from your instruments, then read /guides/understanding-your-rights for the consolidated explanation.",
    ],
    faqs: [
      {
        id: "hoa-due-process-rights-faq-1",
        question: "Where is the full due-process guide?",
        answer: "On /guides/understanding-your-rights. This slug stays a compact bookmark for hearing, notice, records, and decision research prompts.",
      },
      {
        id: "hoa-due-process-rights-faq-2",
        question: "Does every owner get a formal hearing?",
        answer: "Only if your declaration and applicable state topics require or describe one for your association type. Read primary sources rather than assuming a universal right.",
      },
      {
        id: "hoa-due-process-rights-faq-3",
        question: "What records should I request first?",
        answer: "Start with the violation packet, fine schedule in effect, and minutes or worksheets tied to your case ID. Add statutory records topics from /state-laws if they fit your project.",
      },
      {
        id: "hoa-due-process-rights-faq-4",
        question: "Can I skip straight to court?",
        answer: "Many declarations expect internal steps first. Map those steps on the cornerstone hub and ask counsel if liens or suits appear.",
      },
      {
        id: "hoa-due-process-rights-faq-5",
        question: "Why keep this short page?",
        answer: "We consolidated overlapping material on /guides/understanding-your-rights so owners see one narrative; this link remains for menus and inbound references.",
      },
    ],
    sources: [
      {
        citation: "Recorded declaration, bylaws, and community rules",
        description: "Enforcement ladders, hearing clauses, and fine schedule adoption language.",
      },
      {
        citation: "Understanding your rights (cornerstone guide)",
        description: "Full due-process education for HOA fine disputes.",
        url: "/guides/understanding-your-rights",
      },
    ],
    internalLinks: [
      {
        label: "Understanding your rights (hub)",
        href: "/guides/understanding-your-rights",
        description: "Expanded notice-and-hearing material consolidated on one page.",
      },
      {
        label: "Fine timelines and deadlines",
        href: "/guides/hoa-fine-timelines-and-deadlines",
        description: "Calendar dates taken from your notices.",
      },
      {
        label: "State HOA law hub",
        href: "/state-laws",
        description: "Statutory records or meeting topics to verify for your type.",
      },
    ],
    cta: {
      headline: "Turn procedure gaps into a clear letter",
      body: "After you locate hearing and notice language, draft a request that tracks the steps your declaration lists.",
      href: "/",
      linkLabel: "Draft a letter from your facts",
    },
  },

  "hoa-fine-timelines-and-deadlines": {
    intro: [
      "Missed deadlines sink strong fine disputes more often than weak facts. The dates that matter most are usually printed on your violation letter, fine schedule, and any hearing notice—not on a generic chart from another state.",
      "This article helps you build a personal calendar from your paperwork. It does not supply a statewide deadline table; verify statutory windows on /state-laws and in official code when your state page lists them.",
    ],
    sections: [
      {
        heading: "Start with the notice date and delivery method",
        paragraphs: [
          "Circle the mailed date, email timestamp, or posting date on the first violation letter. Your declaration may count days from mailing, receipt, or board action—look for that definition nearby.",
          "If delivery looks late relative to a short cure window, save proof before you accept the deadline as fixed.",
        ],
      },
      {
        heading: "Layer community steps in order",
        paragraphs: [
          "List cure, hearing request, appeal, and payment-under-protest windows as your documents describe them. Skip steps only when the text clearly allows a shortcut.",
          "When two notices conflict, organize both on one timeline and ask the manager which date governs in writing.",
        ],
        bullets: [
          "Mark the last day to cure the violation",
          "Mark the last day to request a hearing if offered",
          "Mark assessment due dates separately from penalty dates",
          "Note holidays only if your documents mention them",
        ],
      },
      {
        heading: "Add state research without copying foreign day counts",
        paragraphs: [
          "Some state pages on this site explicitly say a statewide day count was not confirmed. Use them as maps to official statutes, not as automatic timers for your case.",
          "Compare any statutory window you find to the community deadline on your letter—documents sometimes provide more owner time than owners assume.",
        ],
      },
      {
        heading: "Act conservatively when dates are unclear",
        paragraphs: [
          "If a deadline is ambiguous, send a written request for clarification early rather than waiting for a board meeting. Missing an internal window can limit options even when facts favor you.",
          "Pair calendar work with /appeal-hoa-fine so your next letter matches the step whose date is nearest.",
        ],
      },
    ],
    conclusion: [
      "Your timeline should come from your notices and governing documents first, with state code added after verification—never from another community’s internet story.",
    ],
    faqs: [
      {
        id: "hoa-fine-timelines-and-deadlines-faq-1",
        question: "How many days do I have to appeal an HOA fine?",
        answer: "There is no single national answer. Read the appeal language on your letter and fine schedule, then check /state-laws for your association type.",
      },
      {
        id: "hoa-fine-timelines-and-deadlines-faq-2",
        question: "Does mailing time extend deadlines?",
        answer: "Some declarations add days for mail; others do not. Find the definition section in your instruments instead of guessing.",
      },
      {
        id: "hoa-fine-timelines-and-deadlines-faq-3",
        question: "Can the board shorten a cure period mid-dispute?",
        answer: "Ask for the rule version in effect when the violation was logged and any board vote that changed timelines. Procedural questions belong in writing.",
      },
      {
        id: "hoa-fine-timelines-and-deadlines-faq-4",
        question: "What if the portal shows a different due date?",
        answer: "Export portal history and compare it to PDF notices. Discrepancies are worth a neutral email asking which date controls.",
      },
      {
        id: "hoa-fine-timelines-and-deadlines-faq-5",
        question: "Should I miss a deadline to gather evidence?",
        answer: "Request extensions in writing when rules allow. Preserve evidence in parallel rather than silently letting internal windows close.",
      },
    ],
    sources: [
      {
        citation: "Recorded declaration, bylaws, and community rules",
        description: "Cure periods, hearing requests, and appeal windows adopted by your association.",
      },
      {
        citation: "MyHOAAppeal state law hub",
        description: "Links to statutory topics when confirmed—many pages flag unverified day counts.",
        url: "/state-laws",
      },
    ],
    internalLinks: [
      {
        label: "Due process index",
        href: "/guides/hoa-due-process-rights",
        description: "Quick checklist before you read the cornerstone hub.",
      },
      {
        label: "Understanding your rights",
        href: "/guides/understanding-your-rights",
        description: "Connect timeline work to notice and hearing concepts.",
      },
      {
        label: "HOA fine appeal overview",
        href: "/appeal-hoa-fine",
        description: "Practical steps once your calendar is marked.",
      },
    ],
    cta: {
      headline: "Draft before the next deadline passes",
      body: "When your timeline is marked, generate a letter that requests cure, a hearing, or clarification tied to the dates on your notice.",
      href: "/",
      linkLabel: "Draft a letter from your facts",
    },
  },

  "reading-hoa-statutes-and-ccrs": {
    intro: [
      "Statutes and recorded covenants overlap, but they are not interchangeable. Owners win arguments when they read definitions first—who counts as an association, what qualifies as a condominium, and which instrument controls a fine dispute.",
      "This guide teaches reading order and cross-state caution. It mentions Florida and Texas chapter numbers only as examples of how labels differ; those chapters do not apply outside their definitions and this page does not restate their day counts.",
    ],
    sections: [
      {
        heading: "Begin with the definition section in each source",
        paragraphs: [
          "In your declaration, find articles that define unit, lot, common area, and fine. In state code, read who is a condominium association, planned community, or cooperative before you jump to penalty sections.",
          "A chapter number copied from a neighbor’s state blog rarely matches your project type. Treat foreign citations as hypotheses to discard after you read your own definitions.",
        ],
      },
      {
        heading: "Map CC&R enforcement to the fine on your letter",
        paragraphs: [
          "Highlight the rule text the violation cites and the enforcement article that follows violations through notice, cure, and penalty. Note whether the fine schedule was incorporated by reference and when it was amended.",
          "Compare that path to any statute your state page lists for meetings, records, or fines. Statutes add context; covenants still describe many internal steps.",
        ],
        bullets: [
          "Tab the table of contents in your PDF declaration",
          "Separate architectural rules from use restrictions",
          "Flag superseded schedules saved in your closing packet",
          "Log recording dates for amendments affecting fines",
        ],
      },
      {
        heading: "Use Florida and Texas only as labeling examples",
        paragraphs: [
          "Commentary often discusses Florida HOA fines near Chapter 720 while Florida condominiums sit under a different chapter with distinct definitions. Texas residential subdivisions are frequently discussed under Property Code Chapter 209—again with its own scope language.",
          "Those examples illustrate why chapter numbers from another state fail on arrival. They do not create duties in your state and we do not repeat their internal day counts here.",
        ],
      },
      {
        heading: "Verify summaries on /state-laws against official code",
        paragraphs: [
          "Site state pages orient you toward primary sources and sometimes warn that a statewide timeline was not confirmed. Follow those links to official statutes or consult counsel for liens and suits.",
          "Keep a simple research log: document section, statute section, date read, and question still open. That log becomes the backbone of a letter or hearing packet.",
        ],
      },
    ],
    conclusion: [
      "Read definitions before remedies, match chapter labels to your project type, and treat out-of-state examples as warnings—not as rules that govern your lot.",
    ],
    faqs: [
      {
        id: "reading-hoa-statutes-and-ccrs-faq-1",
        question: "Which wins—state law or my CC&Rs?",
        answer: "They interact. Some topics are reserved to statutes; others are spelled out in covenants. Read both with definitions in mind and ask counsel when they appear to conflict.",
      },
      {
        id: "reading-hoa-statutes-and-ccrs-faq-2",
        question: "Can I rely on a Florida Chapter 720 summary for my Ohio dispute?",
        answer: "No. Florida chapters apply only within Florida law and their defined association types. Start with your state page and recorded instruments.",
      },
      {
        id: "reading-hoa-statutes-and-ccrs-faq-3",
        question: "Where do I find my CC&Rs if I lost my closing binder?",
        answer: "County recorder or official property records often hold declarations and amendments. Management may provide copies but recorder data confirms recording dates.",
      },
      {
        id: "reading-hoa-statutes-and-ccrs-faq-4",
        question: "Why do blogs cite different chapter numbers?",
        answer: "Authors mix condominiums, cooperatives, and HOAs. Read the definition section of whichever chapter they cite before assuming it describes your community.",
      },
      {
        id: "reading-hoa-statutes-and-ccrs-faq-5",
        question: "Should I quote statute in my first letter?",
        answer: "Quoting accurately helps when you have verified text. Misquoted chapters hurt credibility—verify on /state-laws and official code first.",
      },
    ],
    sources: [
      {
        citation: "Recorded declaration, bylaws, and community rules",
        description: "Primary enforcement text, fine schedules, and definitions for your community.",
      },
      {
        citation: "MyHOAAppeal state law hub",
        description: "State-specific orientation with links toward official statutes.",
        url: "/state-laws",
      },
    ],
    internalLinks: [
      {
        label: "State HOA law basics",
        href: "/guides/state-hoa-law-basics-for-homeowners",
        description: "How to use /state-laws and the map without overclaiming.",
      },
      {
        label: "Legal terminology glossary",
        href: "/guides/hoa-legal-terminology-glossary",
        description: "Short definitions that keep association types distinct.",
      },
      {
        label: "Condominium vs HOA fine differences",
        href: "/guides/condominium-vs-hoa-fine-differences",
        description: "Match statute labels to your project before citing fines law.",
      },
    ],
    cta: {
      headline: "Turn citations into a focused letter",
      body: "After you verify document and statute sections, draft arguments tied to the definitions that actually cover your community.",
      href: "/",
      linkLabel: "Draft a letter from your facts",
    },
  },

  "hoa-legal-terminology-glossary": {
    intro: [
      "HOA disputes get harder when everyone uses the same word for different ideas—assessment versus fine, association versus condominium, lien versus everyday balance due. Clear labels keep your research and letters aligned with the right documents.",
      "These short definitions are educational only. They are not statutes, they do not guarantee outcomes, and each term is described as distinct from the next—not as interchangeable legal labels.",
    ],
    sections: [
      {
        heading: "Association",
        paragraphs: [
          "An association is the organization that operates a common-interest community under recorded instruments and applicable corporate or statutory frameworks. It is not the same thing as a single condominium regime or a cooperative corporation, even when residents say HOA for all three.",
          "When you read state law, check whether the statute’s definition of association includes your project’s structure before citing fine or lien sections.",
        ],
      },
      {
        heading: "Condominium and cooperative",
        paragraphs: [
          "A condominium typically divides ownership into units plus undivided interests in common elements defined in a declaration. A cooperative usually involves shares or proprietary leases tied to a corporation—not the same ownership model as a lot-based planned community.",
          "Neither label is interchangeable with a generic homeowners association statute; match the definition section to your deed and declaration before researching fines.",
        ],
        bullets: [
          "Association: operating body under covenants",
          "Condominium: unit plus common element interests",
          "Cooperative: corporate or lease-based membership",
          "Each term triggers different statute tables on /state-laws",
        ],
      },
      {
        heading: "Assessment and fine",
        paragraphs: [
          "An assessment is a charge owners pay to fund the community budget or approved projects—it is not the same as a fine, which penalizes a rule violation after notice described in your documents.",
          "Ledgers may still list both on one screen. Treat that display as accounting convenience, not proof that penalties and budget charges share identical appeal rules.",
        ],
      },
      {
        heading: "Lien",
        paragraphs: [
          "A lien is a legal claim against property interest that may be authorized for certain delinquencies under recorded instruments and state law—it is not the same as a routine balance due letter and does not automatically exist because a fine was posted.",
          "Ask counsel to interpret lien notices. This glossary does not describe recording requirements in any particular state.",
        ],
      },
    ],
    conclusion: [
      "Use precise labels when you research and write: association type first, charge type second, secured-debt language last—with primary documents confirming each step.",
    ],
    faqs: [
      {
        id: "hoa-legal-terminology-glossary-faq-1",
        question: "Is every HOA a condominium?",
        answer: "No. Condominiums, cooperatives, and lot-based planned communities use different instruments and may fall under different statutory definitions.",
      },
      {
        id: "hoa-legal-terminology-glossary-faq-2",
        question: "Can a fine be called an assessment on my bill?",
        answer: "Managers sometimes use loose labels. Request a ledger breakdown that separates budget assessments from penalty lines.",
      },
      {
        id: "hoa-legal-terminology-glossary-faq-3",
        question: "Does a lien mean foreclosure is next?",
        answer: "Not always. A lien is one enforcement tool; next steps depend on documents, notices, and state procedure. Ask an attorney when lien language appears.",
      },
      {
        id: "hoa-legal-terminology-glossary-faq-4",
        question: "Where should I learn more terms?",
        answer: "Read your declaration’s definitions article and /guides/reading-hoa-statutes-and-ccrs for research order—not random internet glossaries.",
      },
      {
        id: "hoa-legal-terminology-glossary-faq-5",
        question: "Are these definitions legal advice?",
        answer: "No. They orient your reading. Verify every term in your recorded instruments and official code with counsel when stakes are high.",
      },
    ],
    sources: [
      {
        citation: "Recorded declaration, bylaws, and community rules",
        description: "Your community’s own definitions of unit, lot, assessment, fine, and lien references.",
      },
      {
        citation: "MyHOAAppeal editorial policy",
        description: "How we present educational definitions without substituting for counsel or statutes.",
        url: "/editorial-policy",
      },
    ],
    internalLinks: [
      {
        label: "Reading statutes and CC&Rs",
        href: "/guides/reading-hoa-statutes-and-ccrs",
        description: "Put glossary terms to work in a sensible research order.",
      },
      {
        label: "Assessments vs fines",
        href: "/guides/assessment-vs-fine-differences",
        description: "Apply charge-type labels to a real ledger dispute.",
      },
      {
        label: "State HOA law hub",
        href: "/state-laws",
        description: "Find statute definition sections for your state and project type.",
      },
    ],
    cta: {
      headline: "Use the right label in your letter",
      body: "When your terms match your documents, draft a clearer request for breakdowns, hearings, or cure.",
      href: "/",
      linkLabel: "Draft a letter from your facts",
    },
  },

  "state-hoa-law-basics-for-homeowners": {
    intro: [
      "State law sets boundaries around meetings, records, liens, and sometimes fines—but only for association types the statute defines. Homeowners get lost when they treat every blog summary as if it applied nationwide.",
      "Start with this site’s /state-laws hub and interactive /map to locate your state page. Many of those pages explicitly say when a statewide day count or fine cap was not confirmed in primary sources.",
    ],
    sections: [
      {
        heading: "Pick your state before you pick a chapter",
        paragraphs: [
          "Open /state-laws, choose your state, and read how the page labels condominiums, cooperatives, and planned communities. Skip penalty sections until you confirm your project matches the statute’s definition.",
          "Use /map when you want a geographic entry point to the same library of pages.",
        ],
      },
      {
        heading: "Treat site summaries as orientation, not authority",
        paragraphs: [
          "MyHOAAppeal pages link toward official code and flag gaps. When a page says a timeline was not verified, believe that warning and read the statute yourself or with counsel.",
          "Cross-link to your declaration early—state topics rarely replace recorded enforcement ladders for internal fines.",
        ],
        bullets: [
          "Open your state page from /state-laws",
          "Scan for not confirmed timeline notes",
          "Follow outbound links to official code",
          "Pair results with your violation notice dates",
        ],
      },
      {
        heading: "Compare association type on the deed and the statute",
        paragraphs: [
          "A property labeled HOA on marketing materials may be a condominium or cooperative under recorded instruments. Statute shopping fails when the definition section excludes your structure.",
          "Read /guides/condominium-vs-hoa-fine-differences before citing a chapter meant for another regime.",
        ],
      },
      {
        heading: "Escalate to counsel when statutes meet lien talk",
        paragraphs: [
          "State research helps you ask better questions; it does not replace lawyers when demands mention liens, suits, or foreclosure. Combine /state-laws reading with /guides/when-to-hire-an-hoa-attorney when letters escalate.",
          "Keep a research memo with statute sections you verified—not screenshots of unverified social posts.",
        ],
      },
    ],
    conclusion: [
      "Use /state-laws and /map to enter verified research for your state and association type, and lean on declaration text for the fine sitting on your kitchen counter today.",
    ],
    faqs: [
      {
        id: "state-hoa-law-basics-for-homeowners-faq-1",
        question: "Does MyHOAAppeal replace reading official statutes?",
        answer: "No. State pages orient and link; you and counsel must read primary code for controlling language.",
      },
      {
        id: "state-hoa-law-basics-for-homeowners-faq-2",
        question: "Why do some state pages say a day count was not confirmed?",
        answer: "We flag summaries we could not verify in official sources so owners do not miss deadlines based on bad copy.",
      },
      {
        id: "state-hoa-law-basics-for-homeowners-faq-3",
        question: "Can I use another state’s fine cap in my letter?",
        answer: "Citing foreign law hurts credibility. Use your state page and recorded instruments instead.",
      },
      {
        id: "state-hoa-law-basics-for-homeowners-faq-4",
        question: "Where is the map?",
        answer: "At /map—it complements /state-laws when you prefer choosing your state geographically.",
      },
      {
        id: "state-hoa-law-basics-for-homeowners-faq-5",
        question: "Do all states regulate HOA fines the same way?",
        answer: "No. Some states are silent on daily fine details; others add meeting or records rules. Read your state page without assuming uniformity.",
      },
    ],
    sources: [
      {
        citation: "Recorded declaration, bylaws, and community rules",
        description: "Community-level enforcement text that works alongside—not instead of—state research.",
      },
      {
        citation: "MyHOAAppeal state law hub",
        description: "State pages with transparency notes when timelines or caps were not confirmed.",
        url: "/state-laws",
      },
    ],
    internalLinks: [
      {
        label: "Interactive state map",
        href: "/map",
        description: "Geographic entry to the same state law library.",
      },
      {
        label: "Reading statutes and CC&Rs",
        href: "/guides/reading-hoa-statutes-and-ccrs",
        description: "Definition-first reading order for code and covenants.",
      },
      {
        label: "Understanding your rights",
        href: "/guides/understanding-your-rights",
        description: "Connect statutory research to due-process steps in your documents.",
      },
    ],
    cta: {
      headline: "Open your state page next",
      body: "Continue research on /state-laws for topics tied to your association type, then verify every summary in official code.",
      href: "/state-laws",
      linkLabel: "Browse state HOA law pages",
    },
  },

  "condominium-vs-hoa-fine-differences": {
    intro: [
      "Marketing signs say HOA while deeds say condominium, cooperative, or planned community. Fine procedures follow those recorded labels more often than the name on the gate.",
      "Applying an HOA statute chapter to a condominium—or quoting condominium fines law for a lot-based subdivision—creates avoidable mistakes. Match the statute’s definition to your project before you cite any penalty section.",
    ],
    sections: [
      {
        heading: "Read your deed and declaration labels first",
        paragraphs: [
          "Look for words like condominium declaration, proprietary lease, or planned community covenants. Note recording dates for amendments that adopted or changed fine schedules.",
          "If neighbors call the place an HOA but your instrument says condominium, research condominium topics on /state-laws—not a subdivision chapter copied from a forum post.",
        ],
      },
      {
        heading: "Compare fine paths inside the governing stack",
        paragraphs: [
          "Condominium regimes often centralize enforcement in declaration articles and board powers defined there. Lot-based communities may spread rules across CC&Rs, standalone regulations, and architectural guidelines with different notice steps.",
          "Either structure can include hearings, but the section titles differ. Quote the article your violation letter cites rather than a template from another association type.",
        ],
        bullets: [
          "Identify whether your unit is a lot or a condominium unit",
          "Locate the fine schedule attachment date",
          "Check if a master association adds another layer",
          "Avoid citing the wrong state chapter for your label",
        ],
      },
      {
        heading: "Research state code with the definition section open",
        paragraphs: [
          "Statutes frequently split condominiums, cooperatives, and homeowners associations into separate titles. Read scope language before fine caps, lien sections, or meeting requirements.",
          "Site state pages may warn when a statewide day count was not confirmed—treat that as a signal to read official code, not as proof that no law exists.",
        ],
      },
      {
        heading: "Keep letters tied to the matched regime",
        paragraphs: [
          "When you draft a dispute, name your association type as recorded, cite the enforcement article from that stack, and add verified statute sections only after definitions align.",
          "Pair this work with /guides/reading-hoa-statutes-and-ccrs and /guides/hoa-legal-terminology-glossary to keep terms straight.",
        ],
      },
    ],
    conclusion: [
      "Condominium and HOA labels are not interchangeable for fine research: confirm your project type on the deed, then read covenants and statutes written for that type—not for a neighbor’s different structure.",
    ],
    faqs: [
      {
        id: "condominium-vs-hoa-fine-differences-faq-1",
        question: "My mail says HOA but I own a condo—Which law applies?",
        answer: "Start with your declaration and deed, then use /state-laws condominium topics for your state. Do not assume a subdivision chapter applies because of branding.",
      },
      {
        id: "condominium-vs-hoa-fine-differences-faq-2",
        question: "Are fine caps the same for condos and HOAs?",
        answer: "Caps differ by state and by which statute defines your type. Verify in official code rather than comparing states on social media.",
      },
      {
        id: "condominium-vs-hoa-fine-differences-faq-3",
        question: "Can a master association fine me separately?",
        answer: "Some projects layer master and sub-association powers. Request which entity issued your violation and which documents it cites.",
      },
      {
        id: "condominium-vs-hoa-fine-differences-faq-4",
        question: "Does Texas Chapter 209 govern my Florida condominium?",
        answer: "No. Texas Property Code Chapter 209 is discussed for Texas residential subdivisions within its definitions—it does not govern Florida condominiums or out-of-state projects.",
      },
      {
        id: "condominium-vs-hoa-fine-differences-faq-5",
        question: "Where do I learn assessment versus fine rules for my type?",
        answer: "Read /guides/assessment-vs-fine-differences after you confirm association type so ledger labels match the right procedure.",
      },
    ],
    sources: [
      {
        citation: "Recorded declaration, bylaws, and community rules",
        description: "Project-type labels, enforcement articles, and fine schedules for your community.",
      },
      {
        citation: "MyHOAAppeal state law hub",
        description: "Separate statutory tracks for condominiums, cooperatives, and planned communities by state.",
        url: "/state-laws",
      },
    ],
    internalLinks: [
      {
        label: "Legal terminology glossary",
        href: "/guides/hoa-legal-terminology-glossary",
        description: "Keep association, condominium, and cooperative terms distinct.",
      },
      {
        label: "Reading statutes and CC&Rs",
        href: "/guides/reading-hoa-statutes-and-ccrs",
        description: "Definition-first research before penalty sections.",
      },
      {
        label: "Assessments vs fines",
        href: "/guides/assessment-vs-fine-differences",
        description: "Separate charge types once you know your regime.",
      },
    ],
    cta: {
      headline: "Draft with the correct regime cited",
      body: "After you match statute definitions to your deed, write a letter that quotes the enforcement article for your association type—not a mismatched chapter.",
      href: "/",
      linkLabel: "Draft a letter from your facts",
    },
  },
};
