import type { GuideBrief } from "./briefs";

export const PART_BRIEFS: Partial<Record<string, GuideBrief>> = {
  "how-to-collect-evidence": {
    intro: [
      "A fine fight turns on what you can show: dated photos, a simple log of calls and emails, and copies of association records that support your version of events.",
      "Start from the violation notice and the rule it cites, then build a folder a board member could review in ten minutes without chasing you for missing pages.",
    ],
    sections: [
      {
        heading: "Gather dated photos first",
        paragraphs: [
          "Photograph the area the notice describes on the same day you receive the letter, if safety allows, and again after any cure work you perform.",
          "Save originals on your phone or camera with metadata intact; when you print, write the capture date in the margin so nobody argues about timing later.",
        ],
        bullets: [
          "Wide shot showing street or unit context",
          "Close-up of the cited condition or repair",
          "After photo if you changed anything visible",
        ],
      },
      {
        heading: "Keep a contact log",
        paragraphs: [
          "One spreadsheet or notebook row per conversation: date, person, channel, and a one-sentence summary of what was said or promised.",
          "If the manager sends a follow-up email, attach it to that row instead of letting threads live only in your inbox.",
        ],
      },
      {
        heading: "Request association records formally",
        paragraphs: [
          "Use whatever records process your declaration or management agreement describes—often a written request to the board or manager with a reasonable scope.",
          "Ask for violation photos the association relied on, ledger entries for the fine, and minutes that mention your address or violation ID if those items exist.",
        ],
      },
      {
        heading: "Organize exhibits for review",
        paragraphs: [
          "Number each document on a cover sheet: Notice, Rule excerpt, Photo set A, Log page 1, and so on.",
          "Store certified-mail receipts and email PDFs in the same order you plan to reference in a letter or hearing packet.",
        ],
      },
    ],
    conclusion: [
      "Solid evidence is boring on purpose: dated images, a disciplined log, and records you requested in writing give decision-makers something concrete beyond memory.",
    ],
    faqs: [
      {
        id: "how-to-collect-evidence-faq-1",
        question: "Do I need professional photos?",
        answer: "Usually not. Clear, dated images you took yourself beat blurry board snapshots if they show context and the cited condition. Label prints if metadata might be stripped.",
      },
      {
        id: "how-to-collect-evidence-faq-2",
        question: "What belongs in the contact log?",
        answer: "Date, name, phone or email, what was discussed, and any deadline mentioned. One line per touchpoint keeps your story consistent across letters and meetings.",
      },
      {
        id: "how-to-collect-evidence-faq-3",
        question: "Can I ask for the association’s violation photos?",
        answer: "If your governing documents or local records rules allow, request them in writing with the violation ID. Compare their dates to yours before you argue about cure timing.",
      },
      {
        id: "how-to-collect-evidence-faq-4",
        question: "Should I send evidence before a hearing?",
        answer: "Follow whatever your notice or rules require. Many communities want a packet copied to the manager several days ahead; missing that step can limit what the board will consider live.",
      },
      {
        id: "how-to-collect-evidence-faq-5",
        question: "How much is enough?",
        answer: "Enough to show the cited rule, what the property looked like when the notice issued, and any steps you took to comply. Extra clutter can hide the two facts that matter.",
      },
    ],
    sources: [
      {
        citation: "Your recorded declaration, bylaws, and rules",
        description: "Your community defines enforcement steps, fine schedules, and any owner records rights—you must read your own recorded set, not a generic template.",
      },
      {
        citation: "State HOA law hub",
        description: "Navigation to help you orient toward statutory topics; verify every summary against primary sources for your jurisdiction.",
        url: "/state-laws",
      },
    ],
    internalLinks: [
      {
        label: "HOA fine appeal overview",
        href: "/appeal-hoa-fine",
        description: "Where evidence fits in the broader appeal path for your community.",
      },
      {
        label: "Write an appeal letter",
        href: "/guides/how-to-write-an-hoa-appeal-letter",
        description: "Turn exhibits into a structured written request.",
      },
      {
        label: "Meeting preparation",
        href: "/guides/hoa-meeting-preparation",
        description: "Bring the same folder when you speak to the board in person.",
      },
    ],
    cta: {
      headline: "Attach facts to a clear ask",
      body: "When your photos, log, and records are numbered, draft a letter that cites exhibits instead of repeating arguments from memory.",
      href: "/",
      linkLabel: "Draft a letter from your facts",
    },
  },

  "dealing-with-lien-threats": {
    intro: [
      "A lien letter raises the stakes beyond a routine fine: ledgers, collection language, and sometimes attorney fees appear on one page.",
      "Treat the envelope as a deadline to verify numbers and get qualified help—not as something to toss because you disagree with the underlying violation.",
    ],
    sections: [
      {
        heading: "Verify the alleged balance",
        paragraphs: [
          "Compare the lien demand to your payment history, special assessments, and the fine line items on prior notices.",
          "Request a ledger breakdown in writing if charges merged fines, late fees, and collection costs without explanation.",
        ],
        bullets: [
          "Match each line to a prior notice you saved",
          "Flag duplicate fine postings or missing credits",
          "Note dates payments cleared your bank",
        ],
      },
      {
        heading: "Open every lien-related envelope",
        paragraphs: [
          "Ignoring certified mail does not make the underlying claim disappear; it can limit your options if a recording or suit follows.",
          "Read for who signed the letter—manager, board, or outside counsel—and whether it describes a recording yet or only a threat.",
        ],
      },
      {
        heading: "Escalate to qualified counsel",
        paragraphs: [
          "Liens touch property rights and document-specific remedies; a local attorney can read your declaration’s collection article and your state’s recording rules together.",
          "Bring the lien paper, full ledger request responses, and your violation file so counsel is not reconstructing facts from memory.",
        ],
      },
      {
        heading: "Avoid casual payment promises",
        paragraphs: [
          "Verbal assurances to “just pay half” rarely bind the association and may not stop recording if the board already voted to proceed.",
          "Do not assume a generic internet defense applies; recorded instruments and prior waivers control what arguments are even available.",
        ],
      },
    ],
    conclusion: [
      "Lien threats demand verified numbers, prompt attention to official mail, and professional review— not improvised shortcuts or silence.",
    ],
    faqs: [
      {
        id: "dealing-with-lien-threats-faq-1",
        question: "Should I pay the lien amount to make it go away?",
        answer: "Payment may resolve the ledger entry but can affect later arguments about the underlying fine. Ask counsel how your declaration treats partial payments and releases before you send a large check.",
      },
      {
        id: "dealing-with-lien-threats-faq-2",
        question: "Is every lien letter the same?",
        answer: "No. Some are precollection notices; others follow a recorded claim. The title, sender, and recording references tell you which path you are on.",
      },
      {
        id: "dealing-with-lien-threats-faq-3",
        question: "Can I dispute the fine and the lien separately?",
        answer: "Often the lien rests on the same balance as the fine, but collection steps may have their own procedural requirements. Counsel can map which dispute to raise first.",
      },
      {
        id: "dealing-with-lien-threats-faq-4",
        question: "What if I never received earlier notices?",
        answer: "That fact may matter, but proof standards vary by document and forum. Save your mail history and ask the manager for delivery logs rather than assuming automatic victory.",
      },
      {
        id: "dealing-with-lien-threats-faq-5",
        question: "Will this site tell me a magic defense?",
        answer: "No. We explain tasks and document review; lien outcomes depend on your recorded covenants and advice from a lawyer licensed where the property sits.",
      },
    ],
    sources: [
      {
        citation: "Your recorded declaration, bylaws, and rules",
        description: "Collection powers, notice sequences, and lien authorization language live in your community’s recorded instruments—obtain and read your copies.",
      },
      {
        citation: "MyHOAAppeal editorial policy",
        description: "How we frame educational content and when we direct readers to verify with counsel.",
        url: "/editorial-policy",
      },
    ],
    internalLinks: [
      {
        label: "When to hire an HOA attorney",
        href: "/guides/when-to-hire-an-hoa-attorney",
        description: "Timing and preparation before liens or suits accelerate.",
      },
      {
        label: "Collect evidence for appeals",
        href: "/guides/how-to-collect-evidence",
        description: "Build the ledger and notice file counsel will need.",
      },
      {
        label: "Before paying a fine",
        href: "/guides/checklist-before-paying-an-hoa-fine",
        description: "Understand payment signals if you are weighing a partial payoff.",
      },
    ],
    cta: {
      headline: "Liens are not DIY experiments",
      body: "Verified balances and recorded instruments should guide your next move. Use attorney guidance when collection letters mention recording or foreclosure paths.",
      href: "/guides/when-to-hire-an-hoa-attorney",
      linkLabel: "Review attorney timing guidance",
    },
  },

  "hoa-meeting-preparation": {
    intro: [
      "Board meetings compress your story into minutes. Preparation means short opening remarks, exhibits in order, and questions that fit the agenda—not a surprise slideshow. A meeting custom is not a legal right until you confirm it in the declaration or other governing documents.",
      "Read the meeting notice for time limits, public-comment rules, and whether your fine appeal is a separate agenda item or part of open forum.",
    ],
    sections: [
      {
        heading: "Draft concise opening remarks",
        paragraphs: [
          "Lead with violation ID, date of notice, and the relief you want in one sentence before you explain background.",
          "Practice staying under the comment cap your rules publish; boards often cut speakers who repeat the letter they already received.",
        ],
      },
      {
        heading: "Order exhibits for clarity",
        paragraphs: [
          "Hand the secretary the same numbered packet you kept for yourself: notice, rule excerpt, photos, log excerpts.",
          "Place the most decisive page first—often a dated photo or ledger correction—so tired volunteers see your point before page ten.",
        ],
        bullets: [
          "Tab or sticky-note the first photo",
          "Include a one-page timeline summary",
          "Bring spare copies for directors",
        ],
      },
      {
        heading: "Prepare questions for directors",
        paragraphs: [
          "Write two or three questions tied to procedure: which step authorized the fine, whether a cure window applied, who verified the violation.",
          "Avoid rhetorical questions; ask for answers the minutes can record or that staff can research after the meeting.",
        ],
      },
      {
        heading: "Rehearse without overloading the room",
        paragraphs: [
          "Run through remarks once aloud with a timer. Cut anecdotes that do not change the board’s decision matrix.",
          "Decide in advance who speaks if multiple owners attend—multiple voices repeating the same story can burn the clock without adding facts.",
        ],
      },
    ],
    conclusion: [
      "Meetings reward brevity: scripted openings, sequenced exhibits, and procedural questions respect the board’s format while keeping your record straight.",
    ],
    faqs: [
      {
        id: "hoa-meeting-preparation-faq-1",
        question: "Can I bring new evidence the board has never seen?",
        answer: "Sometimes, but many associations expect advance copies. Check your notice and prior manager emails; late surprises may be deferred to a continuance.",
      },
      {
        id: "hoa-meeting-preparation-faq-2",
        question: "Should my attorney attend?",
        answer: "Optional. Counsel can keep comments legal and procedural, but confirm whether your community allows representative speech during owner comment periods.",
      },
      {
        id: "hoa-meeting-preparation-faq-3",
        question: "What if I am nervous speaking?",
        answer: "Read from a single page of bullets. Directors prefer a clear script to an unstructured vent; your packet carries detail they can read later.",
      },
      {
        id: "hoa-meeting-preparation-faq-4",
        question: "Do I get a vote that night?",
        answer: "Agendas vary. Some fines are decided in executive session with a public report later. Ask the chair how your item will be handled before you assume a roll-call vote.",
      },
      {
        id: "hoa-meeting-preparation-faq-5",
        question: "How is this different from a formal hearing?",
        answer: "Hearings often follow a published enforcement article with witness rules. Meetings may only offer comment time. Match your prep to the event named on your invitation.",
      },
    ],
    sources: [
      {
        citation: "Your recorded declaration, bylaws, and rules",
        description: "Meeting notice requirements, comment limits, and enforcement hearing steps are defined in your governing documents—not in this article.",
      },
      {
        citation: "State HOA law hub",
        description: "Orientation links for statutory meeting topics; confirm details in primary sources.",
        url: "/state-laws",
      },
    ],
    internalLinks: [
      {
        label: "What to expect at a hearing",
        href: "/guides/hoa-hearing-what-to-expect",
        description: "Contrast comment periods with formal hearing procedures.",
      },
      {
        label: "Collect evidence",
        href: "/guides/how-to-collect-evidence",
        description: "Build the exhibit stack you will carry into the room.",
      },
      {
        label: "After the hearing",
        href: "/guides/after-the-hoa-hearing-next-steps",
        description: "Follow up when the meeting ends without a written decision.",
      },
    ],
    cta: {
      headline: "Turn meeting notes into a letter",
      body: "If the board asks for written follow-up, reuse your exhibit numbers in a clean request instead of retyping facts from scratch.",
      href: "/",
      linkLabel: "Draft a letter from your facts",
    },
  },

  "hoa-fine-appeal-process": {
    intro: [
      "Appealing a fine is a sequence: understand the notice, find the appeal or hearing path in your documents, respond in the channel those documents name, and ask for a written outcome.",
      "Calendar every deadline the association gives you, but treat the declaration and applicable association law as the source of timing—not the summary in this guide.",
    ],
    sections: [
      {
        heading: "Read the penalty notice twice",
        paragraphs: [
          "First pass for the cited rule, amount, and any cure language. Second pass for instructions about hearings, written appeals, or payment while disputing.",
          "Highlight verbs: “must request,” “may appeal,” “within … days of delivery.” Those phrases point to your next mandatory step.",
        ],
      },
      {
        heading: "Locate your appeal pathway",
        paragraphs: [
          "Search your declaration and rules for enforcement articles, fine schedules, and alternate dispute steps.",
          "If the notice cites a handbook section, open the adopted version on file—not an outdated PDF from a neighbor.",
        ],
        bullets: [
          "Fine schedule adoption date",
          "Hearing or appeal election language",
          "Contact for delivering written requests",
        ],
      },
      {
        heading: "Send written requests promptly",
        paragraphs: [
          "Use the delivery method your documents require: certified mail, portal upload, or email to a published address.",
          "State clearly that you are appealing or requesting a hearing, include violation ID, and list exhibits you are submitting.",
        ],
      },
      {
        heading: "Track decision deadlines carefully",
        paragraphs: [
          "When the board promises a decision by a meeting date, note it on your calendar and follow up if silence continues past that session.",
          "If no deadline appears anywhere, ask in writing when you should expect a written decision rather than guessing a universal waiting period.",
        ],
      },
    ],
    conclusion: [
      "Process beats drama: read the notice, follow the document path, write your request, and insist on a recorded decision—while sourcing all timing from your own governing stack.",
    ],
    faqs: [
      {
        id: "hoa-fine-appeal-process-faq-1",
        question: "Is there a standard 30-day appeal window nationwide?",
        answer: "No. Some communities specify days from notice delivery; others tie appeals to the next board meeting. Your declaration and the notice itself control.",
      },
      {
        id: "hoa-fine-appeal-process-faq-2",
        question: "Can I skip straight to court?",
        answer: "Many declarations expect internal steps first. Skipping them can affect later forums; see our court guide and counsel before filing.",
      },
      {
        id: "hoa-fine-appeal-process-faq-3",
        question: "What if the manager says appeals are informal?",
        answer: "Friendly conversation does not replace a step your documents require. Confirm in writing what official track your appeal is on.",
      },
      {
        id: "hoa-fine-appeal-process-faq-4",
        question: "Should I pay during the appeal?",
        answer: "That depends on ledger treatment and lien language in your instruments. Use the paying checklist and your counsel when balances are escalating.",
      },
      {
        id: "hoa-fine-appeal-process-faq-5",
        question: "Who actually decides?",
        answer: "Documents may assign fines to the board, a committee, or management with board ratification. The notice often names the deciding body—verify against bylaws.",
      },
    ],
    sources: [
      {
        citation: "Your recorded declaration, bylaws, and rules",
        description: "Appeal windows, hearing triggers, and fine adoption procedures are community-specific; only your recorded set is authoritative for timing.",
      },
      {
        citation: "Appeal overview",
        description: "Site navigation summarizing how owners move from notice to relief without replacing your documents.",
        url: "/appeal-hoa-fine",
      },
    ],
    internalLinks: [
      {
        label: "Write an appeal letter",
        href: "/guides/how-to-write-an-hoa-appeal-letter",
        description: "Format the written step in your sequence.",
      },
      {
        label: "Hearing expectations",
        href: "/guides/hoa-hearing-what-to-expect",
        description: "When your pathway names a hearing instead of paper review.",
      },
      {
        label: "After the hearing",
        href: "/guides/after-the-hoa-hearing-next-steps",
        description: "Close the loop once the board listens.",
      },
    ],
    cta: {
      headline: "Put your process on paper",
      body: "When you know the next required step, draft a letter that matches your declaration’s appeal or hearing language.",
      href: "/",
      linkLabel: "Draft a letter from your facts",
    },
  },

  "how-to-write-an-hoa-appeal-letter": {
    intro: [
      "A useful appeal letter reads like a short brief: caption, neutral facts, a specific request, and numbered exhibits—not an emotional essay. Quote the declaration or other governing documents instead of inventing a statewide deadline.",
      "Write for a volunteer director who has fifty emails today and needs your violation ID on line one.",
    ],
    sections: [
      {
        heading: "Open with a clear caption",
        paragraphs: [
          "Top block: your name, address, violation or account number, date, and delivery method if you mail it.",
          "Subject line or RE line should quote the rule section from the notice so staff can file the letter with the right file.",
        ],
      },
      {
        heading: "State facts without theatrics",
        paragraphs: [
          "One paragraph on what happened, keyed to dates in your log and photos. Avoid insults; they do not change whether the rule applies.",
          "Separate facts from arguments: “On March 4 I received notice #1182” belongs before “The board skipped the cure step.”",
        ],
        bullets: [
          "Notice date and delivery method",
          "Cure or repair dates you documented",
          "Manager contacts already attempted",
        ],
      },
      {
        heading: "Ask for specific relief",
        paragraphs: [
          "Request something the board can grant: waive the fine, reopen cure, schedule a hearing, or correct the ledger.",
          "If you want a written decision, say so explicitly and name the email or address where it should be sent.",
        ],
      },
      {
        heading: "Attach numbered exhibit copies",
        paragraphs: [
          "End with an exhibit list matching stickers on your pages: Ex. 1 Notice, Ex. 2 Rule excerpt, Ex. 3 Photo set.",
          "Mention in the letter that copies are enclosed or uploaded so nobody claims they never received your evidence.",
        ],
      },
    ],
    conclusion: [
      "Caption, dated facts, a concrete ask, and exhibits turn scattered notes into a letter a board can act on without a second call for basics.",
    ],
    faqs: [
      {
        id: "how-to-write-an-hoa-appeal-letter-faq-1",
        question: "How long should the letter be?",
        answer: "Often two pages plus exhibits. Directors skim; put the request on page one and push backup to attachments.",
      },
      {
        id: "how-to-write-an-hoa-appeal-letter-faq-2",
        question: "Should I cite state law?",
        answer: "You may reference topics you verified in primary sources, but anchor arguments in your declaration first. Overquoting statutes without tying them to facts rarely helps volunteers.",
      },
      {
        id: "how-to-write-an-hoa-appeal-letter-faq-3",
        question: "Can I email instead of mail?",
        answer: "Only if your documents or prior manager instructions allow it. When in doubt, use the channel the notice specifies and keep a delivery receipt.",
      },
      {
        id: "how-to-write-an-hoa-appeal-letter-faq-4",
        question: "Do I need a lawyer to write it?",
        answer: "Many owners write first letters themselves. Counsel becomes more important when liens, suits, or complex corporate issues appear.",
      },
      {
        id: "how-to-write-an-hoa-appeal-letter-faq-5",
        question: "What if I already sent an angry email?",
        answer: "Follow with a structured letter that corrects tone but adds exhibits and a clear ask. The second document can become the official appeal if timed correctly.",
      },
    ],
    sources: [
      {
        citation: "Your recorded declaration, bylaws, and rules",
        description: "Required appeal contents, delivery addresses, and hearing triggers come from your community’s adopted text.",
      },
      {
        citation: "Letter and sample navigation",
        description: "Browse formatted examples and placeholders without copying legal conclusions from another state.",
        url: "/samples",
      },
    ],
    internalLinks: [
      {
        label: "Appeal letter builder",
        href: "/",
        description: "Draft from your facts with guided fields.",
      },
      {
        label: "Sample structure checklist",
        href: "/guides/sample-hoa-appeal-letter-structure",
        description: "Section headings before you fill paragraphs.",
      },
      {
        label: "Fine appeal process",
        href: "/guides/hoa-fine-appeal-process",
        description: "Where the letter sits in your overall sequence.",
      },
    ],
    cta: {
      headline: "Start from your caption block",
      body: "Enter violation ID, dates, and relief in the builder, then attach the exhibit list you already numbered.",
      href: "/",
      linkLabel: "Draft a letter from your facts",
    },
  },

  "sample-hoa-appeal-letter-structure": {
    intro: [
      "This page is a checklist of sections—not a fill-in lawsuit or a guaranteed-winning template.",
      "Use it to confirm you have each block before you open formatted examples on the samples page or your own draft in the letter builder.",
    ],
    sections: [
      {
        heading: "Use headings as placeholders",
        paragraphs: [
          "Caption, Facts, Request, Exhibits, Signature—each heading gets bullet prompts, not prewritten legal conclusions.",
          "Swap labels if your declaration uses “petition” or “hearing request” instead of “appeal.”",
        ],
      },
      {
        heading: "Mirror your governing documents",
        paragraphs: [
          "If your rules require a sworn statement or owner occupancy attestation, add a placeholder line under Signature.",
          "Note any page-limit or copy count the enforcement article mentions so your final PDF matches procedure.",
        ],
        bullets: [
          "Caption with violation ID",
          "Facts tied to dated exhibits",
          "Relief tied to document options",
        ],
      },
      {
        heading: "Route readers toward samples",
        paragraphs: [
          "Formatted letter PDFs and editable outlines live at /samples; pick the layout closest to your delivery method.",
          "Samples show spacing and tone—not outcomes. Replace every bracket with your dates and rule citations.",
        ],
      },
      {
        heading: "Keep tone neutral and brief",
        paragraphs: [
          "Structure guides should stay short so owners focus on accuracy, not rhetoric copied from unrelated disputes.",
          "When a section feels empty, you likely need another exhibit, not another adjective.",
        ],
      },
    ],
    conclusion: [
      "Treat this structure as a preflight list, then move to /samples or the builder once each heading has your facts—not borrowed language.",
    ],
    faqs: [
      {
        id: "sample-hoa-appeal-letter-structure-faq-1",
        question: "Is this a complete letter I can mail?",
        answer: "No. It lists sections you must populate with your notice, rule excerpts, and exhibits.",
      },
      {
        id: "sample-hoa-appeal-letter-structure-faq-2",
        question: "Where are full examples?",
        answer: "On /samples, organized for navigation. Download or view there after you complete this checklist.",
      },
      {
        id: "sample-hoa-appeal-letter-structure-faq-3",
        question: "Can I change section order?",
        answer: "Keep caption and request easy to find. Some communities expect facts before exhibits; follow any example your manager previously accepted.",
      },
      {
        id: "sample-hoa-appeal-letter-structure-faq-4",
        question: "Do samples include state-specific clauses?",
        answer: "They may highlight research prompts. You must verify any statutory mention against primary sources for your property.",
      },
      {
        id: "sample-hoa-appeal-letter-structure-faq-5",
        question: "How does this relate to the writing guide?",
        answer: "The writing guide explains prose choices; this page is the skeleton you check off before drafting.",
      },
    ],
    sources: [
      {
        citation: "Your recorded declaration, bylaws, and rules",
        description: "Section labels and required statements must match what your community adopted.",
      },
      {
        citation: "HOA appeal letter samples",
        description: "Navigation to downloadable layouts and formatting examples—not legal advice.",
        url: "/samples",
      },
    ],
    internalLinks: [
      {
        label: "Browse samples",
        href: "/samples",
        description: "Formatted letters and outlines after your checklist is complete.",
      },
      {
        label: "How to write the letter",
        href: "/guides/how-to-write-an-hoa-appeal-letter",
        description: "Prose and exhibit tips for each section.",
      },
      {
        label: "Letter builder",
        href: "/",
        description: "Generate a draft from your entered facts.",
      },
    ],
    cta: {
      headline: "Checklist done? Draft next",
      body: "Carry your section list into the builder or a sample file and replace every placeholder with your violation details.",
      href: "/",
      linkLabel: "Draft a letter from your facts",
    },
  },

  "hoa-hearing-what-to-expect": {
    intro: [
      "A formal hearing is not casual open comment: someone runs the agenda, speakers take turns, and time limits often come straight from your rules packet. The hearing format itself comes from the declaration or other governing documents, and sometimes from a statute you still have to open.",
      "Know who may speak for you, how long each segment lasts, and how to ask for a written decision before you walk into the room.",
    ],
    sections: [
      {
        heading: "Learn who may speak",
        paragraphs: [
          "Documents may limit presentation to the record owner, a spouse, or a licensed representative. Confirm before you bring a tenant or friend to the podium.",
          "If the association’s attorney attends, expect procedural objections—stay on facts and procedure rather than debating their role.",
        ],
      },
      {
        heading: "Check time limits beforehand",
        paragraphs: [
          "Rules often cap owner presentation and board questioning separately. Ask the manager for the enforcement hearing policy if it was not attached to your notice.",
          "Bring a trimmed outline that fits the cap; hand longer exhibits to the panel instead of reading them aloud.",
        ],
        bullets: [
          "Owner speaking minutes allowed",
          "Board question period length",
          "Whether rebuttal is permitted",
        ],
      },
      {
        heading: "Bring organized paper copies",
        paragraphs: [
          "Offer one binder for the panel plus a copy for the manager’s file. Tabs should match the exhibit numbers in your letter.",
          "Expect questions on dates and photos; point to tabs instead of shuffling loose pages.",
        ],
      },
      {
        heading: "Request a written outcome",
        paragraphs: [
          "Before you leave, ask when and how the decision will be issued—email, portal message, or mailed letter.",
          "If the panel deliberates privately, note that on your log so follow-up timing matches what they promised publicly.",
        ],
      },
    ],
    conclusion: [
      "Hearings run on rules: confirmed speakers, respected time limits, neat exhibits, and an explicit ask for a written decision afterward.",
    ],
    faqs: [
      {
        id: "hoa-hearing-what-to-expect-faq-1",
        question: "Can the board ask me questions?",
        answer: "Usually yes, within the published hearing format. Answer briefly and refer to exhibit tabs when detail is already in your packet.",
      },
      {
        id: "hoa-hearing-what-to-expect-faq-2",
        question: "Will witnesses help?",
        answer: "Only if your rules allow witness testimony and you notified the association in advance. Neighbor character statements rarely replace dated photos.",
      },
      {
        id: "hoa-hearing-what-to-expect-faq-3",
        question: "What if I miss the hearing date?",
        answer: "Consequences depend on your declaration—some treat absence as waiver. Request a continuance in writing before the date if travel or illness interferes.",
      },
      {
        id: "hoa-hearing-what-to-expect-faq-4",
        question: "Is the decision final that night?",
        answer: "Panels may vote immediately or issue a written order later. Clarify which applies before you assume the fine disappeared.",
      },
      {
        id: "hoa-hearing-what-to-expect-faq-5",
        question: "Should I record the session?",
        answer: "Recording rules vary by community and venue. Ask the chair before you start a phone recorder.",
      },
    ],
    sources: [
      {
        citation: "Your recorded declaration, bylaws, and rules",
        description: "Hearing composition, notice content, and decision formats are spelled out in your governing stack.",
      },
      {
        citation: "State HOA law hub",
        description: "Navigation for meeting and hearing topics to verify in primary law.",
        url: "/state-laws",
      },
    ],
    internalLinks: [
      {
        label: "Prepare for the meeting",
        href: "/guides/hoa-meeting-preparation",
        description: "Overlapping skills when your slot is on a regular agenda.",
      },
      {
        label: "After the hearing",
        href: "/guides/after-the-hoa-hearing-next-steps",
        description: "Follow up when the gavel drops without a letter.",
      },
      {
        label: "Appeal process overview",
        href: "/guides/hoa-fine-appeal-process",
        description: "Where the hearing sits in your enforcement ladder.",
      },
    ],
    cta: {
      headline: "Send a hearing request in writing",
      body: "If you still need to schedule the hearing, draft a letter that cites your documents and lists exhibits before the date is set.",
      href: "/",
      linkLabel: "Draft a letter from your facts",
    },
  },

  "after-the-hoa-hearing-next-steps": {
    intro: [
      "The gavel is not the finish line. Many communities issue a written decision days or weeks later, and minutes may lag another cycle. Any later deadline lives in the decision letter, the declaration, or other governing documents.",
      "Your next tasks are to obtain that decision, pull relevant minutes when posted, and calendar any reply deadline the board or manager gave you.",
    ],
    sections: [
      {
        heading: "Request the written decision",
        paragraphs: [
          "Email or mail a short note referencing the hearing date and violation ID, asking for the outcome in writing if you have not received it.",
          "Keep a copy of the request; silence becomes easier to discuss when your log shows polite follow-ups with dates.",
        ],
      },
      {
        heading: "Obtain minutes when published",
        paragraphs: [
          "Minutes may summarize the vote without attaching your exhibits. Request the section that references your fine or ask when draft minutes will post.",
          "Compare minutes to what you heard live; discrepancies matter if you later escalate internally or with counsel.",
        ],
        bullets: [
          "Hearing date and agenda item number",
          "Vote tally if recorded",
          "Any continuance or cure order mentioned",
        ],
      },
      {
        heading: "Calendar the next stated deadline",
        paragraphs: [
          "If the panel gave you ten days to cure or to pay under protest, enter that date immediately with a reminder two days prior.",
          "Do not invent a universal appeal window—use only the deadline printed on the decision or read aloud at the hearing.",
        ],
      },
      {
        heading: "Update your exhibit file",
        paragraphs: [
          "Add the decision letter, minutes excerpt, and your follow-up emails to the numbered binder.",
          "Note on the timeline whether you plan further internal appeal or need attorney review before the next step.",
        ],
      },
    ],
    conclusion: [
      "After the hearing, paperwork continues: chase the written decision, capture minutes, and honor only the deadlines you were actually given.",
    ],
    faqs: [
      {
        id: "after-the-hoa-hearing-next-steps-faq-1",
        question: "How long should I wait for a decision?",
        answer: "Wait the interval the chair announced, then follow up in writing. If nothing was announced, ask for a reasonable timeframe tied to the next board meeting.",
      },
      {
        id: "after-the-hoa-hearing-next-steps-faq-2",
        question: "Can I appeal a hearing outcome?",
        answer: "Only if your documents provide a further step—rehearing, board ratification, or court. Read the decision letter for instructions rather than assuming automatic review.",
      },
      {
        id: "after-the-hoa-hearing-next-steps-faq-3",
        question: "What if minutes omit my hearing?",
        answer: "Request correction or supplemental minutes if your rules allow. Save your own notes and witness contacts in the meantime.",
      },
      {
        id: "after-the-hoa-hearing-next-steps-faq-4",
        question: "Should I pay if the decision says pay?",
        answer: "See the paying checklist and your counsel if liens were discussed. Payment timing can affect later arguments.",
      },
      {
        id: "after-the-hoa-hearing-next-steps-faq-5",
        question: "When is court appropriate?",
        answer: "Usually after internal remedies are exhausted and a lawyer reviews your record. Our court guide discusses timing with counsel, not shortcuts.",
      },
    ],
    sources: [
      {
        citation: "Your recorded declaration, bylaws, and rules",
        description: "Post-hearing appeals, cure periods, and minute adoption rules are community-specific.",
      },
      {
        citation: "MyHOAAppeal editorial policy",
        description: "Site policy on educational limits and verifying outcomes with primary sources.",
        url: "/editorial-policy",
      },
    ],
    internalLinks: [
      {
        label: "Hearing expectations",
        href: "/guides/hoa-hearing-what-to-expect",
        description: "Refresh procedural rules before your follow-up wave.",
      },
      {
        label: "Appeal process",
        href: "/guides/hoa-fine-appeal-process",
        description: "Next internal step if the decision is unfavorable.",
      },
      {
        label: "Court appeals",
        href: "/guides/appealing-an-hoa-fine-in-court",
        description: "When internal paths are exhausted.",
      },
    ],
    cta: {
      headline: "Document your follow-up",
      body: "Draft a short letter requesting the written decision and confirming any deadline the panel announced.",
      href: "/",
      linkLabel: "Draft a letter from your facts",
    },
  },

  "appealing-an-hoa-fine-in-court": {
    intro: [
      "Court is rarely the first productive move in a routine fine dispute. Internal notices, hearings, and written decisions usually come earlier in your governing stack. Court is a last step. Read the declaration or other governing documents, then ask a lawyer in your state which forum applies.",
      "Before filing anything, involve a lawyer who can read your complete record and explain whether a lawsuit fits your facts—without guessing filing deadlines from internet charts.",
    ],
    sections: [
      {
        heading: "Exhaust internal steps first",
        paragraphs: [
          "Judges often expect associations to follow their own enforcement ladder. Summarize each notice, appeal, hearing, and decision you already received.",
          "If you skipped a document-required step, counsel can advise whether curing that gap matters before a complaint is drafted.",
        ],
      },
      {
        heading: "Recognize when courts differ",
        paragraphs: [
          "Some disputes land in small claims; others need civil courts comfortable with covenant interpretation. Venue and procedure are not interchangeable.",
          "A lawyer licensed where the property sits identifies the forum and the claims that match your record—not generic templates.",
        ],
        bullets: [
          "Complete internal decision letters",
          "Numbered exhibit binder",
          "Ledger history if liens involved",
        ],
      },
      {
        heading: "Involve counsel before filing",
        paragraphs: [
          "Self-filed pleadings that misstate association type or relief requested can waste fees and irritate the bench.",
          "Bring counsel the same timeline you used for the board so they see procedural gaps and factual strengths quickly.",
        ],
      },
      {
        heading: "Do not guess filing deadlines",
        paragraphs: [
          "Limitation periods depend on claim type, document language, and prior events—not on round numbers copied from unrelated states.",
          "Only counsel calculating from your dates and local rules should tell you whether time remains; this article will not invent a day count.",
        ],
      },
    ],
    conclusion: [
      "Litigation belongs in a lawyer’s hands after internal processes are documented—never as a first impulse driven by guessed deadlines or online formulas.",
    ],
    faqs: [
      {
        id: "appealing-an-hoa-fine-in-court-faq-1",
        question: "Can I sue because the fine feels unfair?",
        answer: "Feelings alone rarely state a claim. Counsel looks for procedural defects, misapplied rules, or statutory issues tied to evidence you already collected.",
      },
      {
        id: "appealing-an-hoa-fine-in-court-faq-2",
        question: "Will I recover attorney fees?",
        answer: "Fee shifting depends on documents and outcomes. Ask counsel about your declaration’s fee clause before assuming recovery.",
      },
      {
        id: "appealing-an-hoa-fine-in-court-faq-3",
        question: "Is small claims always easier?",
        answer: "Caps and procedural limits vary. Some covenant issues exceed small-claims comfort; lawyers know local court preferences.",
      },
      {
        id: "appealing-an-hoa-fine-in-court-faq-4",
        question: "Should I stop paying assessments?",
        answer: "Withholding assessments to protest a fine can trigger separate collection paths. Separate fine disputes from assessment obligations unless counsel advises otherwise.",
      },
      {
        id: "appealing-an-hoa-fine-in-court-faq-5",
        question: "Does this site file suits for me?",
        answer: "No. We educate owners about preparation; litigation requires a licensed attorney acting on your instructions.",
      },
    ],
    sources: [
      {
        citation: "Your recorded declaration, bylaws, and rules",
        description: "Enforcement ladders, fee clauses, and alternative dispute requirements shape whether and how court is available.",
      },
      {
        citation: "When to hire an HOA attorney",
        description: "Internal navigation on professional review before high-stakes steps—not a substitute for legal advice.",
        url: "/guides/when-to-hire-an-hoa-attorney",
      },
    ],
    internalLinks: [
      {
        label: "When to hire an HOA attorney",
        href: "/guides/when-to-hire-an-hoa-attorney",
        description: "Align litigation timing with professional review.",
      },
      {
        label: "After the hearing",
        href: "/guides/after-the-hoa-hearing-next-steps",
        description: "Ensure you have written decisions before escalating.",
      },
      {
        label: "Dealing with lien threats",
        href: "/guides/dealing-with-lien-threats",
        description: "When collection moves beyond ordinary fines.",
      },
    ],
    cta: {
      headline: "Court papers need a lawyer",
      body: "Share your hearing record and decisions with counsel before choosing a forum or drafting a complaint.",
      href: "/guides/when-to-hire-an-hoa-attorney",
      linkLabel: "Review attorney timing guidance",
    },
  },

  "checklist-before-paying-an-hoa-fine": {
    intro: [
      "Paying a fine can signal acceptance, trigger lien releases, or simply clear the ledger—depending on how your documents and the manager apply payments.",
      "Before you write a check, ask what the payment communicates and whether a memo line can preserve your dispute without surprising you later.",
    ],
    sections: [
      {
        heading: "Understand what payment implies",
        paragraphs: [
          "Some boards treat payment as waiver of appeal rights; others post payments under protest if documents allow.",
          "Read the fine schedule and collection article for language about partial payments, protests, and continued enforcement.",
        ],
        bullets: [
          "Does payment stop further daily fines?",
          "Does it close the appeal window?",
          "Does it affect lien filing timelines?",
        ],
      },
      {
        heading: "Read your fine schedule language",
        paragraphs: [
          "Schedules adopted after your violation may still matter if properly recorded and noticed—compare adoption dates on the manager’s copy.",
          "Note whether the amount on the letter matches the schedule tier for a first offense versus repeat violations.",
        ],
      },
      {
        heading: "Question whether memos help",
        paragraphs: [
          "A check memo stating “under protest” or referencing a pending appeal may preserve your position if your declaration recognizes protest payments.",
          "If staff says memos are ignored, ask for written confirmation of how they will code the ledger entry instead.",
        ],
      },
      {
        heading: "Document protest if you pay",
        paragraphs: [
          "Send a one-page letter the same day: amount paid, violation ID, and that payment is not a waiver of your appeal.",
          "Attach a copy of the cleared check or receipt so your timeline matches the association’s accounting system.",
        ],
      },
    ],
    conclusion: [
      "Paying without thinking can bind you silently—clarify ledger treatment, use protest language only when documents support it, and paper the transaction the same day.",
    ],
    faqs: [
      {
        id: "checklist-before-paying-an-hoa-fine-faq-1",
        question: "Will paying stop a lien?",
        answer: "Sometimes, if the balance clears and release procedures are followed. Verify in writing that the lien will be released and recorded if applicable.",
      },
      {
        id: "checklist-before-paying-an-hoa-fine-faq-2",
        question: "Can I pay fines but not assessments?",
        answer: "Managers may apply payments to oldest debt first. Ask how they allocate checks before you assume the fine line item zeroed out.",
      },
      {
        id: "checklist-before-paying-an-hoa-fine-faq-3",
        question: "Is a memo enough without a letter?",
        answer: "Memos help when recognized; a matching letter creates a clearer file if the board later disputes your intent.",
      },
      {
        id: "checklist-before-paying-an-hoa-fine-faq-4",
        question: "Should I withhold payment while appealing?",
        answer: "Risk varies with lien clauses and interest language. Use lien and attorney guides when collection escalates beyond a simple fine letter.",
      },
      {
        id: "checklist-before-paying-an-hoa-fine-faq-5",
        question: "Does online portal payment count?",
        answer: "Usually yes. Screenshot confirmation and note whether the portal offered a protest field before you clicked submit.",
      },
    ],
    sources: [
      {
        citation: "Your recorded declaration, bylaws, and rules",
        description: "Payment allocation, protest rights, and fine schedules are defined in your community’s adopted documents.",
      },
      {
        citation: "Appeal overview",
        description: "Navigation for steps that may continue even after partial payment.",
        url: "/appeal-hoa-fine",
      },
    ],
    internalLinks: [
      {
        label: "Letter builder",
        href: "/",
        description: "Draft a protest letter the day you pay.",
      },
      {
        label: "Fine appeal process",
        href: "/guides/hoa-fine-appeal-process",
        description: "See where payment fits relative to appeals.",
      },
      {
        label: "Lien threats",
        href: "/guides/dealing-with-lien-threats",
        description: "When balances move into collection.",
      },
    ],
    cta: {
      headline: "Pair payment with paper",
      body: "If you decide to pay, generate a protest letter that matches your documents and attach the receipt the same day.",
      href: "/",
      linkLabel: "Draft a letter from your facts",
    },
  },
};
