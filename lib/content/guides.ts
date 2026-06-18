export type GuideSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type GuideEntry = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  sections: GuideSection[];
};

export const GUIDE_ENTRIES: GuideEntry[] = [
  {
    slug: "understanding-your-rights",
    title: "Understanding Your Rights When an HOA Fines You",
    metaTitle:
      "Understanding Your HOA Fine Appeal Rights | Due Process & Notice | MyHOAAppeal",
    metaDescription:
      "Learn procedural due process, written notice requirements, and how to challenge arbitrary HOA enforcement before fines become final. A complete homeowner rights guide.",
    sections: [
      {
        heading: "What procedural due process means for HOA fines",
        paragraphs: [
          "Procedural due process is the legal principle that a homeowners association cannot punish you without following fair, predictable steps. In the HOA context, due process does not always mean a courtroom trial. It usually means the association must give you adequate written notice, a meaningful opportunity to respond, and—when your governing documents or state statute require it—a hearing before escalating fines, suspending privileges, or recording liens.",
          "Courts and state regulators frequently scrutinize whether an association followed its own enforcement ladder. If the board skipped notice, refused a hearing, or imposed a penalty not authorized in the CC&Rs or fine schedule, your HOA fine appeal may succeed on procedural grounds alone—even before debating whether you actually violated a rule.",
          "Document every step the association took or failed to take. Save the original violation letter, any follow-up emails from the manager, portal screenshots, and proof of when you mailed or delivered your written dispute. A clear timeline is one of the most powerful tools in a formal HOA appeal.",
        ],
        bullets: [
          "Written notice identifying the alleged rule violation and effective date",
          "A reasonable cure period before daily or recurring fines begin",
          "Access to the evidence supporting the charge (photos, inspection reports, logs)",
          "An opportunity to be heard by the board or a violation committee",
          "A written decision explaining the outcome and any remaining balance owed",
        ],
      },
      {
        heading: "Notice requirements boards must satisfy",
        paragraphs: [
          "Notice requirements vary by state HOA law, condominium act, and your recorded governing documents. At minimum, most communities must describe the violation with enough detail that a reasonable owner understands what conduct is disputed. Notices that say only \"landscaping violation\" or \"parking infraction\" without citing a rule section, date, or location often fail this standard.",
          "Many states require associations to mail notice to the owner's address of record or to post in a manner specified in the bylaws. Electronic notice through a portal may be valid only if your documents authorize it and you previously consented. If notice was sent to an old address after you updated records in writing, highlight that defect in your appeal letter.",
          "Pay close attention to appeal deadlines printed on the notice. Some associations require a written appeal within ten, fifteen, or thirty days. Calendar the postmark date, not the day you opened the envelope. Even if you need more time to gather evidence, submit a short preservation letter immediately stating that you dispute the fine and request a hearing.",
        ],
        bullets: [
          "Quote the exact covenant, rule, or fine schedule the board claims you violated",
          "Compare the notice language to the association's published enforcement policy",
          "Request clarification in writing if the violation description is vague or incomplete",
          "Confirm whether certified mail or personal delivery triggers different deadlines",
        ],
      },
      {
        heading: "Arbitrary enforcement and selective punishment",
        paragraphs: [
          "Arbitrary enforcement occurs when an association applies rules inconsistently—penalizing one homeowner while ignoring identical conditions on neighboring lots, or enforcing a rule that the board has allowed to lapse for years. Selective enforcement is not merely unfair; it can undermine the legal basis for a fine if you can show the association waived or abandoned the standard through custom and practice.",
          "To challenge arbitrary enforcement, gather comparative evidence. Photograph similar violations on adjacent properties on the same date. Request violation logs and enforcement histories through your state's records-access provisions for community associations. If the manager cannot produce prior citations for the same rule, say so explicitly in your dispute letter.",
          "Associations sometimes defend inconsistent enforcement by claiming they are \"stepping up\" compliance. That explanation does not automatically validate a retroactive crackdown against a single owner. Your appeal should argue that fairness requires uniform notice and cure opportunities across the community, not surprise penalties against one address.",
        ],
        bullets: [
          "Document identical conditions on neighboring lots without corresponding fines",
          "Request board meeting minutes discussing enforcement priorities or policy changes",
          "Identify whether the rule was enforced within the statute of limitations your documents imply",
          "Argue waiver if the board ignored the same issue during prior inspections",
        ],
      },
      {
        heading: "Turning rights into a formal written appeal",
        paragraphs: [
          "Knowing your rights matters only if you exercise them in writing before deadlines pass. A formal HOA fine appeal letter should cite the specific procedural defects you identified, request production of supporting evidence, and ask for a stay of further fines pending resolution. Use professional tone, numbered paragraphs, and a clear prayer for relief: withdrawal of the penalty, reduction to a warning, or a hearing date.",
          "MyHOAAppeal helps homeowners compile structured appeal drafts in minutes, but you remain responsible for verifying deadlines and document requirements in your jurisdiction. Consult a licensed attorney if the association has already referred the matter to counsel or threatened a lien.",
          "The goal of this guide is educational: to help you recognize when an HOA overstepped procedurally and to respond with the same formality the board expects from owners. Timely, documented appeals protect your financial interests and create a record if the dispute escalates to mediation, arbitration, or court.",
        ],
      },
    ],
  },
  {
    slug: "how-to-collect-evidence",
    title: "How to Collect Evidence for an HOA Fine Appeal",
    metaTitle:
      "How to Collect HOA Appeal Evidence | Photos, Records & Minutes | MyHOAAppeal",
    metaDescription:
      "Step-by-step guide to documenting property conditions, taking timestamped photos, and requesting official HOA meeting minutes to support your fine dispute.",
    sections: [
      {
        heading: "Start with a property condition log",
        paragraphs: [
          "Evidence collection begins the moment you receive a violation notice—or earlier, if you suspect selective enforcement. Create a property condition log: a dated journal describing the state of landscaping, exterior paint, parking areas, architectural features, and any other elements the HOA regulates. Write entries in neutral, factual language and avoid emotional commentary that could undermine credibility later.",
          "Pair each log entry with objective artifacts. Timestamped photographs, video clips, weather reports, contractor invoices, and permit applications corroborate your narrative. Store files in a dedicated folder organized by date and topic so you can attach the right exhibits to your appeal packet without scrambling at the deadline.",
          "If the alleged violation involves maintenance you completed, retain before-and-after images plus receipts showing materials, labor, and completion dates. Boards often withdraw fines when owners prove timely cure, even if a technical paperwork dispute remains.",
        ],
        bullets: [
          "Record date, time, weather, and camera orientation for every photo",
          "Photograph wide shots for context and close-ups for detail",
          "Keep original image files; avoid screenshots that strip metadata when possible",
          "Note names of witnesses who observed conditions or inspections",
        ],
      },
      {
        heading: "Taking timestamped photos that hold up under scrutiny",
        paragraphs: [
          "Timestamped photos are the backbone of many successful HOA fine appeals. Use a smartphone camera with location and time metadata enabled. Include a reference object or newspaper in at least one image if you need to prove the date visually. For recurring disputes—lawn color, fence staining, holiday decorations—shoot from the same angle weekly to demonstrate consistency or correction over time.",
          "When the association relies on its own photos, compare them carefully to yours. Look for differences in angle, lighting, or season that suggest the board's image is outdated or misleading. Request the full-resolution originals through your records request; compressed portal images may hide context that favors your position.",
          "Never alter or edit photos beyond basic cropping for clarity. Authenticity matters. If you enhance images, document what changed. Boards and hearing panels treat manipulated evidence skeptically, and courts may dismiss altered exhibits entirely.",
        ],
        bullets: [
          "Capture neighboring properties in frame when arguing selective enforcement",
          "Photograph posted signage, curb markings, or mailbox numbers for location proof",
          "Back up files to cloud storage immediately after each inspection round",
          "Print a contact sheet with filenames and captions for hearing packets",
        ],
      },
      {
        heading: "Requesting official HOA records and meeting minutes",
        paragraphs: [
          "Many states grant owners the right to inspect association books and records within a reasonable time. Typical requestable materials include violation ledgers, inspection reports, email chains between the manager and board, architectural review decisions, and official meeting minutes. The exact scope depends on your state's HOA or nonprofit corporation act—cite the applicable statute in your request letter.",
          "Submit the records request in writing to the address specified in your governing documents, usually the management company or board secretary. Ask for electronic copies if allowed to reduce delay. Set a reasonable deadline and state that the materials are needed for an pending fine appeal and hearing. Keep proof of delivery.",
          "Meeting minutes are especially valuable. They may reveal whether the board discussed enforcement campaigns, approved fine schedules, or waived penalties for other owners. Minutes also show whether your appeal was formally heard and what vote occurred. If minutes omit discussion of your case after a hearing, note the omission in your follow-up letter.",
        ],
        bullets: [
          "Identify the statute or document section authorizing your inspection rights",
          "List each record category separately (minutes, violation log, photos, emails)",
          "Request metadata or native files when photos are stored digitally",
          "Follow up in writing if the association misses the statutory response window",
        ],
      },
      {
        heading: "Organizing exhibits for your appeal packet",
        paragraphs: [
          "An appeal packet should read like a professional brief, not a loose pile of prints. Start with a cover letter summarizing your defenses and referencing exhibit numbers. Label each attachment: Exhibit A (notice), Exhibit B (timestamped photos), Exhibit C (records request and response), and so on. Include a table of contents for packets longer than ten pages.",
          "Cross-reference exhibits in your narrative. Instead of writing \"my lawn was compliant,\" write \"as shown in Exhibit B-3 through B-7, the turf met the community color standard on each Sunday inspection date.\" Specific citations make it harder for a board to ignore your evidence without a written rebuttal.",
          "Deliver the packet by a method that creates proof of receipt—certified mail, hand delivery with signature, or email with read receipt if your documents allow electronic notice. Retain a complete copy for yourself. Evidence wins appeals when decision-makers can follow your story without guessing which photo matches which allegation.",
        ],
      },
    ],
  },
  {
    slug: "dealing-with-lien-threats",
    title: "Dealing With HOA Lien Threats Over Unpaid Fines",
    metaTitle:
      "HOA Lien Threats & Unpaid Fines | Protect Your Property | MyHOAAppeal",
    metaDescription:
      "Serious guide to how unpaid HOA fines escalate toward property liens, and how timely formal appeals can pause collections and protect your home equity.",
    sections: [
      {
        heading: "How unpaid HOA fines escalate financially",
        paragraphs: [
          "An HOA fine often begins as a modest line item on your account ledger. If you do not respond in writing, the association may add late fees, interest, collection costs, and administrative charges authorized by your governing documents. Over weeks or months, a few hundred dollars can compound into a four-figure balance that feels disproportionate to the original violation.",
          "Escalation is not instantaneous. Most communities follow an internal sequence: initial notice, cure period, hearing, assessment of the fine, demand for payment, referral to counsel, and only then consideration of a lien or foreclosure action. Understanding that sequence helps you intervene at the earliest step with a formal appeal rather than waiting until legal counsel is already involved.",
          "Treat lien threats as urgent but not hopeless. Homeowners who document disputes early preserve leverage. Silence is frequently interpreted as acquiescence, allowing the board to characterize the fine as undisputed when applying late fees or recording instruments against your title.",
        ],
        bullets: [
          "Review your ledger line-by-line for unauthorized fees or duplicate charges",
          "Identify the document section authorizing each fee category",
          "Ask for a payoff breakdown in writing before sending any payment",
          "Confirm whether fines and assessments follow different collection rules",
        ],
      },
      {
        heading: "What an HOA lien means for your property",
        paragraphs: [
          "A lien is a legal claim against your property that can cloud title and complicate sales, refinances, and home equity lines. Depending on state law and your documents, an association lien may attach to unpaid fines, assessments, late charges, attorney fees, and costs of collection. Some states require a court order before foreclosure; others permit non-judicial steps after extensive notice.",
          "Recording a lien does not always mean immediate foreclosure, but it raises stakes dramatically. Buyers and lenders discover liens during title searches. Even if you intend to fight the underlying fine, a recorded lien can pressure owners into settlements they later regret.",
          "If you receive a lien notice or a letter from association counsel, read every deadline. States often mandate additional owner notification, opportunity to pay, or mediation before foreclosure filings. Missing those windows can shrink your options even if the original fine was weak on the merits.",
        ],
        bullets: [
          "Order a title report or preliminary title commitment to verify recorded claims",
          "Determine whether your state caps attorney fees recoverable by the association",
          "Ask whether payment plans are available while disputes remain pending",
          "Never ignore correspondence from association legal counsel",
        ],
      },
      {
        heading: "How timely formal appeals pause progression",
        paragraphs: [
          "A timely formal appeal does not automatically erase a fine, but it changes the narrative and may pause enforcement while the board considers your packet. Many governing documents require internal dispute resolution before referral to collections or liens. Filing a written appeal triggers those requirements and forces the association to respond on the record.",
          "In your appeal, explicitly request a stay of further late fees and a hold on lien preparation pending the outcome. Cite procedural defects, lack of evidence, or selective enforcement as independent grounds for suspension. Even if the board denies a stay, your request establishes that you contested the charge before escalation—useful in later mediation or court proceedings.",
          "Some owners pay under protest to stop lien clocks while continuing the appeal. That strategy depends on state law and your financial capacity. If you choose it, label the payment clearly as \"under protest\" and reserve all rights in writing. Partial payments without protest language may be treated as acknowledgment of the debt.",
        ],
        bullets: [
          "Send appeals before referral-to-counsel deadlines in your notice",
          "Request written confirmation that collections are paused during review",
          "Cite internal dispute-resolution procedures in your CC&Rs or bylaws",
          "Keep copies of every payment, appeal, and association response",
        ],
      },
      {
        heading: "Protective financial steps while disputing",
        paragraphs: [
          "While your appeal is pending, take protective steps that do not concede liability. Maintain homeowners insurance and property tax payments—those obligations are separate from HOA fines. Open a dedicated folder for all association correspondence. Consider consulting a real estate attorney if a lien has been recorded or foreclosure is mentioned.",
          "Explore state ombudsman programs, regulatory complaints, or mediation services where available. Some jurisdictions scrutinize associations that record liens while internal appeals remain unresolved. Regulatory attention can encourage boards to negotiate.",
          "MyHOAAppeal provides template tools to draft formal dispute letters quickly, but lien threats involve high financial risk. Educational guides cannot replace personalized legal advice. The protective mindset is simple: respond early, document everything, and never let an unverified penalty grow unchecked while hoping the board forgets.",
        ],
      },
    ],
  },
  {
    slug: "hoa-meeting-preparation",
    title: "Preparing to Present Your Case at an HOA Board Hearing",
    metaTitle:
      "HOA Board Hearing Preparation | Present Your Fine Appeal | MyHOAAppeal",
    metaDescription:
      "Frameworks for presenting your HOA fine appeal to a board panel: formal communication strategies, organized exhibits, and professional delivery tips.",
    sections: [
      {
        heading: "Understanding the hearing format",
        paragraphs: [
          "HOA hearings vary widely. Some associations use a standing violation committee that recommends outcomes to the board. Others convene the full board in an executive or open session. Your governing documents should describe who hears appeals, how much time each side receives, and whether owners may bring witnesses or legal advisors.",
          "Request the hearing rules in writing before the meeting. Ask how long you may speak, whether slides or exhibits are permitted, and if cross-examination of the inspector or manager is allowed. Knowing the format prevents surprises that throw off prepared remarks.",
          "Assume decision-makers have not read your appeal packet carefully. Prepare a concise oral summary that mirrors your written arguments: procedural defects, evidentiary gaps, cure completion, or selective enforcement. Lead with your strongest point, not chronological history.",
        ],
        bullets: [
          "Confirm date, time, location, and whether attendance is in person or virtual",
          "Ask whether the meeting is open to other owners or closed for privacy",
          "Request a copy of any board packet prepared about your case",
          "Clarify whether a written decision will follow and on what timeline",
        ],
      },
      {
        heading: "Formal communication strategies that build credibility",
        paragraphs: [
          "Board panels respond to respectful, structured communication. Address the chair or hearing officer by title, avoid sarcasm, and never interrupt other speakers. Refer to documents by exhibit number rather than waving loose papers. Phrases like \"as shown in Exhibit C\" signal preparation and make it easier for minutes to reflect your evidence.",
          "Use the problem-solution frame. Acknowledge community standards where appropriate, then explain why the fine is unjustified or should be reduced. Owners who admit minor oversights while disputing penalty severity often appear more reasonable than those who deny everything categorically.",
          "Close with a specific request: withdraw the fine, reduce it to a warning, grant additional cure time, or schedule a reinspection. Vague pleas to \"be fair\" rarely produce actionable outcomes. Decision-makers need a clear option they can vote on.",
        ],
        bullets: [
          "Open with a one-sentence summary of your requested outcome",
          "Limit oral remarks to agreed time limits; offer supplemental written comments",
          "Thank the panel for its time regardless of outcome",
          "Avoid personal attacks against managers, neighbors, or directors",
        ],
      },
      {
        heading: "Presenting exhibits and testimony effectively",
        paragraphs: [
          "Bring three copies of your exhibit binder: one for you, one for the panel, and one for the manager or counsel. Tab dividers and numbered exhibits save meeting time. If presenting digitally, test screen sharing or USB access before the session begins.",
          "If witnesses support your case—a contractor who completed work, a neighbor who observed conditions—confirm they are permitted and brief them on staying factual. Hearsay from spouses or friends is less persuasive than dated photos, invoices, and official records.",
          "When the association presents its evidence, take notes quietly. If their photos are outdated, say so when your turn returns and point to your timestamped counter-images. Ask whether the inspector followed the association's published enforcement checklist if one exists.",
        ],
        bullets: [
          "Prepare a one-page timeline the panel can keep after you leave",
          "Highlight three strongest exhibits; do not overwhelm with volume",
          "Offer to submit additional records within a reasonable post-hearing window if allowed",
          "Request that dissenting votes or abstentions be noted in minutes if applicable",
        ],
      },
      {
        heading: "Professional delivery and follow-up",
        paragraphs: [
          "Body language influences credibility even in community hearings. Stand or sit upright, speak at measured pace, and maintain calm eye contact with decision-makers—not the manager who issued the fine. Nervousness is normal; rehearsing your opening thirty seconds reduces rambling.",
          "Dress neatly. You need not wear formal business attire, but appearing put-together signals that you take the process seriously. Avoid aggressive gestures, pointing at individuals, or recording without permission where prohibited.",
          "After the hearing, send a brief thank-you email summarizing your requested outcome and attaching any promised supplemental materials. Monitor minutes from the meeting for accuracy. If the board rules against you, note appeal rights to higher internal bodies, mediation, or state remedies described in your documents. A professional hearing record strengthens every later step.",
        ],
      },
    ],
  },
];

const guideBySlug = new Map(GUIDE_ENTRIES.map((guide) => [guide.slug, guide]));

export function getAllGuideSlugs(): string[] {
  return GUIDE_ENTRIES.map((guide) => guide.slug);
}

export function getGuideBySlug(slug: string): GuideEntry | undefined {
  return guideBySlug.get(slug);
}
