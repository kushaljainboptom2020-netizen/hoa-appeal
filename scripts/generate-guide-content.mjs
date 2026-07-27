/**
 * Generates unique long-form bodies for all 50 guides.
 * Run: node scripts/generate-guide-content.mjs
 */
import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "lib", "content", "guides", "guides.generated.ts");

/** @typedef {{
 *  slug: string;
 *  topic: string;
 *  angle: string;
 *  audience: string;
 *  stakes: string;
 *  myth: string;
 *  practice: string;
 *  pitfall: string;
 *  sectionThemes: string[];
 *  faqPairs: [string, string][];
 *  sources: { citation: string; description: string; url?: string }[];
 *  ctaHook: string;
 * }} GuideSeed */

/** @type {GuideSeed[]} */
const SEEDS = [
  {
    slug: "understanding-your-rights",
    topic: "homeowner rights when fined",
    angle: "rights exist on paper and in your recorded documents long before a board meeting starts",
    audience: "owners staring at a first violation letter",
    stakes: "paying without review can look like an admission and feed lien pathways",
    myth: "that HOAs can fine for anything labeled a community standard",
    practice: "map notice, cure, hearing, and written-decision duties before arguing aesthetics",
    pitfall: "missing a short appeal window while you research the perfect argument",
    sectionThemes: [
      "procedural due process in private communities",
      "notice content boards must provide",
      "cure windows and privilege threats",
      "document hierarchy: statutes, CC&Rs, rules, fine schedules",
      "building a rights checklist for your lot",
    ],
    faqPairs: [
      ["Do I lose rights if I partially cure?", "Partial cure often helps goodwill but does not waive notice or hearing challenges if you dispute the fine itself."],
      ["Is a portal message enough notice?", "Only if your documents authorize electronic notice and you consented; otherwise demand the method your CC&Rs require."],
      ["Can the board skip a hearing?", "Only when statutes and documents allow; many communities still require an opportunity to be heard before fines become final."],
      ["What if the rule is vague?", "Vague standards support arbitrary-enforcement arguments—ask for the measurable criteria the inspector used."],
      ["Should I pay under protest?", "Sometimes to stop liens, but label the payment clearly and continue the written appeal so the dispute stays alive."],
      ["Where do state laws fit?", "State HOA or condo acts can add hearing, records, and assessment rules on top of your private covenants."],
    ],
    sources: [
      { citation: "Uniform Common Interest Ownership Act (model)", description: "Model framework many states adapt for association governance and owner protections.", url: "https://www.uniformlaws.org/" },
      { citation: "Community Associations Institute educational materials", description: "Industry explanations of governing documents and enforcement ladders.", url: "https://www.caionline.org/" },
      { citation: "State legislative code portals", description: "Primary text for planned community and condominium statutes in your jurisdiction." },
    ],
    ctaHook: "turn your rights checklist into a formatted dispute letter",
  },
  {
    slug: "how-to-collect-evidence",
    topic: "evidence collection for fine appeals",
    angle: "boards decide with packets, not vibes—dated exhibits win more than eloquence",
    audience: "owners who need a file before a hearing date",
    stakes: "without proof, selective enforcement and cure attempts evaporate in debate",
    myth: "that a single phone photo without landmarks is enough",
    practice: "index photos, emails, vendor quotes, and neighbor comparisons by date",
    pitfall: "altering images or harassing neighbors while gathering comparables",
    sectionThemes: [
      "what counts as persuasive HOA evidence",
      "photo standards: light, landmarks, timestamps",
      "correspondence and portal exports",
      "vendor and weather documentation",
      "ethical neighbor comparisons",
    ],
    faqPairs: [
      ["Do I need a lawyer to gather evidence?", "No—owners can build strong files; counsel becomes useful when liens or court loom."],
      ["Can I use drone photos?", "If legal in your airspace and not harassing; include altitude notes and lot markers."],
      ["Should evidence go to the manager or board?", "Send to the address your documents specify and keep delivery proof."],
      ["How many neighbor examples?", "Three clear comparables beat twenty blurry ones."],
      ["What about audio recordings?", "Know one-party consent laws and meeting recording bans before you press record."],
      ["When is evidence too late?", "Submit before the hearing; late dumps look like ambush and may be ignored."],
    ],
    sources: [
      { citation: "Federal Rules of Evidence (analog principles)", description: "Relevance and authenticity concepts useful when organizing exhibits.", url: "https://www.law.cornell.edu/rules/fre" },
      { citation: "National Archives digital records guidance", description: "Best practices for preserving email and PDF authenticity.", url: "https://www.archives.gov/" },
      { citation: "NOAA / NWS historical weather data", description: "Independent weather logs that support cure-delay narratives.", url: "https://www.weather.gov/" },
    ],
    ctaHook: "attach your evidence index concepts inside a formal appeal letter",
  },
  {
    slug: "dealing-with-lien-threats",
    topic: "lien threats over unpaid fines",
    angle: "lien letters are leverage tools—verify the debt before you panic-pay",
    audience: "owners who received collections or lien warnings",
    stakes: "unverified fines can snowball into assessment liens and credit pressure",
    myth: "that every fine automatically becomes a foreclosable lien overnight",
    practice: "demand a ledger breakdown separating dues, fines, interest, and fees",
    pitfall: "ignoring certified demand letters while waiting for a perfect legal theory",
    sectionThemes: [
      "how fines migrate into collectible assessments",
      "reading lien warning language carefully",
      "preserving disputes while stopping escalation",
      "payment under protest strategies",
      "when foreclosure risk becomes concrete",
    ],
    faqPairs: [
      ["Is a lien the same as foreclosure?", "No—a lien is a claim; foreclosure is a separate process with additional notices."],
      ["Can I dispute after a lien is recorded?", "Often yes, but options narrow; act immediately and consider counsel."],
      ["Should I pay dues but not fines?", "Many owners do; confirm your documents allow allocation and state it in writing."],
      ["Do demand letters pause appeals?", "They should not; keep appealing while you verify charges."],
      ["What belongs in a response letter?", "Ledger request, dispute statement, hearing demand, and delivery proof."],
      ["When is an attorney essential?", "When foreclosure is threatened, counsel appears, or amounts jump into four figures."],
    ],
    sources: [
      { citation: "Consumer Financial Protection Bureau debt collection basics", description: "General consumer context for demand communications.", url: "https://www.consumerfinance.gov/" },
      { citation: "State association lien statutes", description: "Jurisdiction-specific rules on assessment liens and notice." },
      { citation: "County recorder self-help pages", description: "How recorded liens appear in public indexes." },
    ],
    ctaHook: "dispute improper charges in writing before a lien narrative hardens",
  },
  {
    slug: "hoa-meeting-preparation",
    topic: "preparing for board hearings",
    angle: "volunteer directors skim—your job is a three-minute story with numbered exhibits",
    audience: "owners with a hearing on the calendar",
    stakes: "rambling presentations waste the only live chance to correct the record",
    myth: "that emotional speeches outperform indexed packets",
    practice: "rehearse an opening, bring three copies, and ask for a written decision",
    pitfall: "confronting the manager personally instead of addressing the decision-makers",
    sectionThemes: [
      "pre-hearing logistics and agendas",
      "opening statement structure",
      "exhibit handling in person and on video",
      "questions that test procedure",
      "post-hearing follow-up emails",
    ],
    faqPairs: [
      ["Can I bring a helper?", "Usually yes as support; check if non-owners may speak."],
      ["What if time is limited to three minutes?", "Lead with the ask, then the top three defects."],
      ["Should I read the whole letter?", "Summarize; offer the full letter as Exhibit A."],
      ["Can the board postpone?", "Request a continuance in writing if exhibits were withheld."],
      ["Is attire important?", "Neat and calm beats theatrical; signal seriousness without aggression."],
      ["What if counsel for the HOA attends?", "Stay scripted; consider pausing for your own attorney."],
    ],
    sources: [
      { citation: "Robert's Rules of Order (meeting norms)", description: "Common procedural customs boards reference for speaking order.", url: "https://robertsrules.com/" },
      { citation: "State open-meeting / association meeting statutes", description: "Notice and owner-comment frameworks where applicable." },
      { citation: "Community association hearing best-practice guides", description: "Educational materials on fair owner hearings." },
    ],
    ctaHook: "pair your hearing packet with a clean written appeal letter",
  },
];

// Remaining 46 seeds will be appended programmatically below with unique fields.
const MORE = [
  ["hoa-fine-appeal-process", "end-to-end appeal workflow", "appeals fail when owners skip the boring calendar math", "process-minded owners", "missed cutoffs end disputes before merits begin", "that calling the manager equals a formal appeal", "write, deliver, calendar, and escalate in sequence", "oral deals without confirmation emails"],
  ["how-to-write-an-hoa-appeal-letter", "drafting appeal letters", "letters persuade when they read like short pleadings", "owners writing their first dispute letter", "unclear asks produce vague denials", "that longer letters always win", "use caption, facts, defects, exhibits, and a specific remedy", "insulting directors in the opening paragraph"],
  ["sample-hoa-appeal-letter-structure", "letter outline sections", "structure is strategy—each heading does a job", "owners who freeze at a blank page", "disorganized letters bury their best facts", "that copying a viral template is enough", "outline first, then fill with lot-specific facts", "pasting someone else's property details"],
  ["hoa-hearing-what-to-expect", "hearing mechanics", "hearings are meetings with a decision, not debates to win by volume", "first-time hearing participants", "surprise procedures can silence your exhibits", "that every hearing looks like small claims court", "ask who decides, what the record includes, and when you get writing", "arriving without copies of your packet"],
  ["after-the-hoa-hearing-next-steps", "post-hearing actions", "the hearing is a midpoint—minutes and follow-up decide the ending", "owners waiting on a board vote", "silence after a hearing lets bad minutes harden", "that no news means you won", "confirm outcomes in writing within forty-eight hours", "celebrating early and missing a second appeal rung"],
  ["appealing-an-hoa-fine-in-court", "court review of fines", "courts reward exhausted internal remedies and clean records", "owners considering litigation", "filing too soon can waste filing fees", "that any unfair fine automatically equals damages", "exhaust documents, preserve exhibits, then evaluate claims", "suing without reading fee-shifting clauses"],
  ["checklist-before-paying-an-hoa-fine", "pre-payment verification", "payment is a strategic choice, not a reflex", "owners ready to click pay online", "paying can complicate later refunds", "that portals always show lawful balances", "verify notice, schedule, cure, and appeal rights first", "paying from a joint account without documenting protest"],
  ["selective-enforcement-hoa-fines", "uneven enforcement proof", "fairness arguments need street-level proof, not rumors", "owners who see neighbors untreated", "weak comparisons get dismissed as gossip", "that one different lot proves your case alone", "photograph similarly situated lots and request enforcement logs", "posting neighbors on social media"],
  ["photographic-evidence-for-hoa-appeals", "appeal photography", "photos fail when they cannot identify the lot or the date", "owners documenting yards and facades", "blurry night shots invite disbelief", "that more photos always mean stronger cases", "wide shot, detail shot, landmark, and timestamp every set", "staging scenes that misrepresent conditions"],
  ["requesting-hoa-records-and-violation-files", "records requests", "you cannot rebut what you are not allowed to see", "owners blocked from inspector files", "vague requests get vague denials", "that managers may forever refuse photos", "cite document inspection clauses and state records statutes", "demanding unrelated owner account data"],
  ["comparing-neighbor-enforcement-records", "neighbor comparison methods", "comparables work when they match rule, season, and visibility", "owners building selective-enforcement charts", "mismatched comparisons look opportunistic", "that different architecture voids all comparisons", "match rule text, photo angles, and dates carefully", "trespassing to get better angles"],
  ["certified-mail-and-notice-proof", "delivery and notice proof", "deadlines run on proof, not memory", "owners mailing appeals and hearing requests", "lost emails without exports sink timelines", "that a phone call creates a deadline extension", "use certified mail plus PDF email archives", "waiting for a return receipt before calendar protection"],
  ["preparing-exhibits-for-hoa-hearings", "hearing exhibit packets", "numbered tabs turn chaos into a board-readable story", "owners assembling hearing binders", "unlabeled stacks force directors to guess", "that digital-only packets always display correctly on Zoom", "index, number, and pre-send exhibits", "springing new exhibits mid-hearing without notice"],
  ["retaliatory-enforcement-by-hoa-boards", "retaliation patterns", "timing after complaints often tells the real story", "owners fined after speaking up", "retaliation claims need chronology", "that disagreement with the board is itself a violation", "log complaint dates against new inspections", "accusing individuals without documentary timing"],
  ["hoa-fine-schedules-and-caps", "fine schedules and limits", "amounts invented in emails are weaker than adopted schedules", "owners shocked by fine size", "uncapped daily fines can dwarf the underlying issue", "that boards may set any amount in the moment", "demand the adoption vote and published schedule", "ignoring caps buried in statutes or CC&Rs"],
  ["cure-periods-before-hoa-fines", "cure windows", "cure clocks start when notice is effective, not when you feel ready", "owners racing a cure deadline", "miscounting mail days burns rights", "that starting work automatically pauses fines", "confirm start date, method of notice, and extension requests in writing", "oral extension promises without email confirmation"],
  ["daily-fines-and-accruing-penalties", "daily accruing fines", "the meter matters as much as the initial amount", "owners watching balances climb", "accrual during pending hearings may be challengeable", "that daily fines always equal separate new violations", "ask whether accrual pauses and under what authority", "waiting weeks before objecting while totals explode"],
  ["assessment-vs-fine-differences", "assessments versus fines", "labels on ledgers decide lien and voting consequences", "owners confused by portal line items", "mislabeling can change enforcement tools", "that every charge is automatically an assessment", "force a breakdown and cite definitions in your documents", "commingling payments without written allocation"],
  ["hoa-collections-and-demand-letters", "collections demand response", "collection letters deserve ledger scrutiny, not fear alone", "owners receiving attorney or agency demands", "silence can be spun as non-dispute", "that hiring a collector proves the fine was valid", "respond with verification requests and dispute language", "phone negotiations without written confirmation"],
  ["hoa-foreclosure-risks-from-unpaid-fines", "foreclosure risk from fines", "foreclosure is rare but real—treat threats with documentation", "owners seeing foreclosure language", "panic sales and rushed payments may be unnecessary", "that unpaid fines always end in lost homes within weeks", "verify lien validity and statutory notice chains", "ignoring counsel when foreclosure petitions appear"],
  ["privilege-suspension-and-amenity-bans", "amenity and privilege bans", "losing pool access can pressure payment of disputed fines", "owners locked out of amenities", "suspensions may require the same process as fines", "that amenities are pure privileges beyond review", "cite hearing and notice clauses before privileges drop", "trespassing amenities after suspension notices"],
  ["hoa-due-process-rights", "due process frameworks", "fair process is the spine of every other dispute theory", "owners citing fairness without structure", "buzzwords without document cites fall flat", "that private HOAs owe full constitutional trials", "translate due process into notice, hearing, and reasoned decision asks", "skipping document reading for internet slogans"],
  ["hoa-fine-timelines-and-deadlines", "timeline and deadline management", "a one-page timeline outperforms a ten-page rant", "owners juggling cure and appeal dates", "conflicting dates in letters create traps", "that weekends never count", "build a reverse calendar from the worst-case cutoff", "trusting portal clocks without downloading PDFs"],
  ["reading-hoa-statutes-and-ccrs", "reading statutes and covenants", "definitions sections quietly decide half of fine fights", "owners opening dense legal PDFs", "skimming only the violation letter misses controlling text", "that statutes always override every CC&R sentence the same way", "read definitions, enforcement, meetings, then remedies", "quoting repealed statute numbers from old blogs"],
  ["hoa-legal-terminology-glossary", "legal glossary for owners", "precise words keep letters professional and searchable", "owners decoding jargon on notices", "misusing lien and assessment terms muddies asks", "that slang and legal terms are interchangeable", "learn the vocabulary your board and statutes actually use", "copying Latin phrases you cannot explain"],
  ["state-hoa-law-basics-for-homeowners", "state law basics", "state acts are uneven—know which family covers your community", "owners comparing advice across states", "wrong statute families waste appeals", "that one national HOA code controls everything", "identify condo act versus planned community act coverage", "assuming neighbor-state rules apply locally"],
  ["condominium-vs-hoa-fine-differences", "condo versus HOA fines", "unit boundaries and common elements change who is fined for what", "townhome and condo owners", "misfiled appeals under the wrong act", "that condo and HOA procedures are identical", "confirm regime type from the deed and master documents", "citing planned-community cases in a pure condo dispute"],
  ["statute-of-limitations-for-hoa-fines", "limitation periods", "old violations sometimes age out of clean enforcement", "owners facing stale charges", "limitation analysis is fact-heavy", "that associations never face timing defenses", "log first inspection dates against filing and demand dates", "DIY limitation arguments in high-stakes foreclosure cases"],
  ["homeowner-bill-of-rights-hoa-enforcement", "practical owner rights framework", "a rights checklist keeps emotional disputes disciplined", "owners rebuilding trust after unfair treatment", "scattershot complaints dilute strong claims", "that bills of rights are only ceremonial", "score your case against notice, access, hearing, and consistency", "publishing accusations without evidence"],
  ["hoa-board-meeting-rules-and-minutes", "meeting rules and minutes", "minutes are the memory of the association—get them right", "owners challenging fine votes", "inaccurate minutes rewrite history", "that informal chats equal official action", "request agendas, attendance, and motion text", "relying solely on hallway conversations"],
  ["open-meeting-laws-and-hoa-transparency", "transparency and open meetings", "secrecy around fines invites procedural challenges", "owners excluded from decision rooms", "executive session misuse hides rationale", "that all HOA discussions must be public everywhere", "compare your statute and bylaws on open sessions", "disrupting meetings instead of using comment rights"],
  ["conflict-of-interest-on-hoa-boards", "board conflicts", "a conflicted voter can poison an otherwise lawful fine", "owners facing neighbor-directors with grudges", "uncalled conflicts look like bias", "that friendship alone always voids a vote", "request recusal when financial or personal stakes appear", "public shaming instead of written recusal asks"],
  ["management-company-roles-in-hoa-fines", "manager versus board roles", "managers recommend; boards should decide—force that distinction", "owners dealing only with portal agents", "letters from managers may lack board authority", "that the management company is the HOA", "ask who voted and when the fine was adopted", "insulting line staff who cannot waive fines"],
  ["amending-ccrs-vs-enforcing-rules", "amendments versus enforcement", "you cannot enforce tomorrow's amenity rule with yesterday's vote", "owners hit by shifting standards", "after-the-fact standards smell arbitrary", "that board resolutions always equal recorded amendments", "demand the recorded instrument that created the rule", "ignoring proper amendment procedures when you want change too"],
  ["challenging-arbitrary-hoa-fines", "arbitrary fine challenges", "arbitrary means unbounded discretion dressed as standards", "owners fined for taste disputes", "subjective aesthetics without metrics", "that any dislike equals a violation", "force measurable criteria or published guidelines", "personal attacks on the inspector's taste"],
  ["architectural-review-denials-and-appeals", "architectural review appeals", "ACC denials need guideline citations, not vibes", "owners denied exterior changes", "silent denials block meaningful appeals", "that neighbor opinions replace design guidelines", "request written reasons tied to recorded standards", "starting construction while an appeal is pending"],
  ["landscaping-and-maintenance-violation-appeals", "landscape and maintenance appeals", "living plants and weather make rigid cure clocks unfair", "owners with lawn, mulch, or paint citations", "ignoring vendor delays looks like defiance", "that brown grass always equals neglect", "document irrigation limits, storms, and contractor queues", "letting truly hazardous conditions linger"],
  ["parking-and-vehicle-hoa-fines", "parking and vehicle fines", "parking rules live on signs, maps, and guest exceptions", "owners ticketed in driveways or streets", "missing signage photos lose easy defenses", "that tow threats equal proven violations", "photograph signs, spaces, and timestamps", "blocking fire lanes during disputes"],
  ["noise-and-nuisance-hoa-violations", "noise and nuisance disputes", "nuisance claims need logs, not adjectives", "owners accused of disturbance", "one anonymous complaint can distort facts", "that any neighbor annoyance is automatically finable", "keep time-of-day logs and quiet-hours text", "escalating with counter-harassment"],
  ["pet-related-hoa-fines", "pet-related fines", "pet rules collide with accommodation laws and uneven enforcement", "pet owners facing waste or leash fines", "breed bans and weight rules vary wildly", "that service animal issues are pure HOA taste calls", "separate covenant violations from disability accommodations", "ignoring genuine safety incidents involving pets"],
  ["short-term-rental-hoa-enforcement", "short-term rental enforcement", "city permits and CC&Rs can point opposite directions", "investor and primary-home STR operators", "fines may pile beside permit fights", "that a city license always defeats CC&Rs", "map recorded rental covenants against local ordinances", "operating during an active injunction"],
  ["emergency-fines-and-safety-violations", "emergency and safety fines", "cure the hazard first, then litigate procedure", "owners facing life-safety citations", "delaying safety fixes to win arguments backfires", "that emergencies erase all hearing rights forever", "document immediate cure and still challenge defective process", "disabling safety systems during disputes"],
  ["seasonal-and-weather-related-cure-delays", "weather cure delays", "weather is a fact pattern boards understand when you prove it", "owners in freeze, flood, or heat seasons", "unsupported weather excuses fail", "that any rainstorm extends every deadline automatically", "attach NWS data and contractor emails", "waiting until after the fine posts to mention storms"],
  ["insurance-claims-and-hoa-fine-disputes", "insurance and fine coordination", "adjusters and HOAs keep different clocks—bridge them in writing", "owners repairing insured damage under fine pressure", "dual timelines create false noncompliance", "that an open claim freezes all HOA rules", "share scopes of work and ETA letters with the board", "abandoning either claim or appeal entirely"],
  ["mediation-and-adr-for-hoa-disputes", "mediation and ADR", "neutral rooms settle fine fights that hearings freeze", "owners stuck after a denial", "skipping ADR where required can block court", "that mediation means you admit guilt", "prepare a short brief and settlement ranges", "treating mediators like hostile judges"],
  ["when-to-hire-an-hoa-attorney", "hiring association counsel", "knowing when DIY ends is itself a homeowner skill", "owners facing counsel on the other side", "late lawyer involvement limits options", "that every small fine needs a lawsuit", "hire when liens, foreclosure, or complex statutes dominate", "waiting until the courthouse steps"],
];

const SECTION_VERBS = [
  "Translate",
  "Operationalize",
  "Audit",
  "Document",
  "Challenge",
  "Sequence",
  "Compare",
  "Preserve",
];

function wordCount(s) {
  return String(s).split(/\s+/).filter(Boolean).length;
}

/** Append at most one enrichment sentence — never spam the same pad pool. */
function stretch(text, target, pads) {
  let result = text.trim();
  if (wordCount(result) >= target || !pads.length) return result;
  return `${result} ${pads[0]}`;
}

function uniquePads(seed, idx) {
  const pool = [
    `Keep a reverse calendar of every deadline that touches ${seed.topic}.`,
    `When ${seed.audience} rush, they often skip ${seed.practice.split(",")[0].toLowerCase()}.`,
    `Treat claims such as ${seed.myth} as hypotheses to test against the recorded text.`,
    `If ${seed.pitfall} appears, disclose it early and note the corrective step in writing.`,
    `Export portal notices as PDFs so later readers inherit the same facts you saw.`,
    `Separate aesthetic disagreements from procedural defects before you draft the ask.`,
  ];
  const start = idx % pool.length;
  return [pool[start], pool[(start + 1) % pool.length]];
}

function gerundize(verb) {
  const irregular = {
    Translate: "Translating",
    Operationalize: "Operationalizing",
    Audit: "Auditing",
    Document: "Documenting",
    Challenge: "Challenging",
    Sequence: "Sequencing",
    Compare: "Comparing",
    Preserve: "Preserving",
  };
  return irregular[verb] || `${verb}ing`;
}

function headingFor(verb, theme) {
  const cleaned = theme.replace(/^(document|audit|challenge|compare)\s+/i, "");
  return `${verb} ${cleaned}`;
}

function buildSeedFromTuple(t, i) {
  const [slug, topic, angle, audience, stakes, myth, practice, pitfall] = t;
  const themes = [
    `what ${topic} requires before you argue the merits`,
    `reading notices, statutes, and CC&Rs for ${topic}`,
    `a practical owner workflow for ${topic}`,
    `exhibits that make ${topic} reviewable to a volunteer board`,
    `escalation options if ${topic} stalls after a written denial`,
  ];
  return {
    slug,
    topic,
    angle,
    audience,
    stakes,
    myth,
    practice,
    pitfall,
    sectionThemes: themes,
    faqPairs: [
      [`What is the first step for ${topic}?`, `Save the notice as a PDF, calendar every stated deadline, and quote the exact rule cited before drafting arguments about ${topic}.`],
      [`Does state law always control ${topic}?`, `State statutes matter, but recorded CC&Rs and adopted fine schedules often supply the operational details for ${topic}.`],
      [`Can I handle ${topic} without an attorney?`, `Many owners handle early stages themselves; bring counsel when liens, foreclosure, or opposing attorneys enter the picture.`],
      [`How does evidence change outcomes on ${topic}?`, `Dated photos, delivery proof, and ledger breakdowns convert narrative complaints about ${topic} into reviewable exhibits.`],
      [`What mistake do ${audience} make most?`, `They wait too long, rely on oral assurances, or forget that ${pitfall} can erase otherwise strong positions.`],
      [`When should I escalate beyond the board?`, `Escalate after a written denial or silence past your document deadlines—mediation, state agencies, or court depending on ${topic}.`],
    ],
    sources: [
      {
        citation: "Uniform Law Commission — UCIOA educational materials",
        description: `Model association governance concepts that often inform ${topic}.`,
        url: "https://www.uniformlaws.org/",
      },
      {
        citation: "Community Associations Institute educational library",
        description: "Industry primers on governing documents, hearings, and enforcement ladders.",
        url: "https://www.caionline.org/",
      },
      {
        citation: "Recorded CC&Rs and bylaws for your community",
        description: "Controlling private-law text for enforcement and appeals.",
      },
      ...(i % 2 === 0
        ? [{
            citation: "Cornell LII — state statutes overview",
            description: "Starting point for locating planned-community and condominium codes.",
            url: "https://www.law.cornell.edu/wex/homeowners_association",
          }]
        : [{
            citation: "Consumer Financial Protection Bureau — debt collection basics",
            description: "Context for demand letters that may accompany disputed fines.",
            url: "https://www.consumerfinance.gov/",
          }]),
    ],
    ctaHook: `convert your notes on ${topic} into a formal dispute letter`,
  };
}

for (const [i, tuple] of MORE.entries()) {
  SEEDS.push(buildSeedFromTuple(tuple, i));
}

function introParagraphs(seed, idx) {
  const pads = uniquePads(seed, idx);
  const variants = [
    [
      `Most guides about ${seed.topic} start with fear. This one starts with ${seed.angle}. If you are among ${seed.audience}, your first advantage is refusing ${seed.myth}. The practical stakes are concrete: ${seed.stakes}.`,
      `MyHOAAppeal publishes educational playbooks so owners can ${seed.practice} without waiting for a crisis to teach them procedure. You will still confirm every deadline in your own documents—patterns here explain what to look for, not what your board must do in every state.`,
    ],
    [
      `${seed.audience[0].toUpperCase()}${seed.audience.slice(1)} often hear that associations always win. The quieter truth about ${seed.topic} is that ${seed.angle}. Boards lose leverage when owners replace myths like ${seed.myth} with a dated file.`,
      `This article walks through ${seed.practice}, flags ${seed.pitfall}, and keeps ${seed.stakes} in view. Use it as a field manual beside your CC&Rs, not as a substitute for counsel when amounts or foreclosure risk spike.`,
    ],
    [
      `If ${seed.topic} feels abstract, reframe it around a single lot, a single notice, and a single calendar. ${seed.angle}. That framing helps ${seed.audience} avoid ${seed.pitfall} while still moving quickly enough to protect appeal windows.`,
      `We emphasize ${seed.practice} because volunteer directors rarely reverse fines based on outrage alone. When ${seed.stakes}, clarity beats volume.`,
    ],
    [
      `Ignore viral posts that claim ${seed.myth}. For ${seed.topic}, evidence and procedure decide outcomes. ${seed.angle}, which is why this guide speaks directly to ${seed.audience}.`,
      `You will see repeated attention to ${seed.practice} and early warnings about ${seed.pitfall}. Those two habits prevent ${seed.stakes} from becoming inevitable.`,
    ],
    [
      `Think of ${seed.topic} as a project with deliverables: notices saved, exhibits indexed, asks stated. ${seed.angle}. ${seed.audience[0].toUpperCase()}${seed.audience.slice(1)} who treat the work like a project outperform those who wait for perfect certainty.`,
      `Throughout, we challenge ${seed.myth} and keep returning to ${seed.practice}. The cost of ${seed.pitfall} is usually larger than the hour it takes to write a preservation email.`,
    ],
  ];
  const [a, b] = variants[idx % variants.length];
  return [stretch(a, 95, pads), stretch(b, 85, pads)];
}

function sectionBlock(seed, theme, idx, sIdx) {
  const pads = uniquePads(seed, idx + sIdx);
  const verb = SECTION_VERBS[(idx + sIdx) % SECTION_VERBS.length];
  const gerund = gerundize(verb);
  const heading = headingFor(verb, theme);
  const openers = [
    `${gerund} ${theme} begins with the notice packet: dates, quoted rules, and the remedy the association already chose.`,
    `For ${seed.topic}, ${gerund.toLowerCase()} ${theme} means connecting board conduct to ${seed.angle}.`,
    `${seed.audience[0].toUpperCase()}${seed.audience.slice(1)} should treat ${theme} as a checklist, not a slogan, before the hearing clock runs.`,
  ];
  const followUps = [
    `Build a dated spine—inspection, mailing, cure, hearing request, and decision—so ${seed.practice} is visible to directors who skim.`,
    `If ${seed.pitfall} is already in play, disclose corrective steps and ask for written reinspection rather than arguing only in the abstract.`,
    `Quote the governing sentence that controls ${theme}, then show how the association's conduct diverged on your lot.`,
  ];
  const p1 = stretch(
    `${openers[(idx + sIdx) % openers.length]} ${seed.audience[0].toUpperCase()}${seed.audience.slice(1)} should cite the recorded text before debating aesthetics.`,
    70,
    pads
  );
  const p2 = stretch(followUps[(idx + sIdx + 1) % followUps.length], 65, pads.slice(1));
  const p3 = `Tie ${theme} back to ${seed.stakes}: if the packet cannot show dates, quotes, and a clear remedy, volunteer directors will default to the manager's summary. Challenge ${seed.myth} with documents, not volume.`;
  const bulletSets = [
    [
      `Pull the notice PDF and highlight the sentence that allegedly supports ${theme}`,
      `List every date that matters for ${seed.topic} on one page`,
      `Prepare one exhibit tab that proves or disproves ${theme}`,
    ],
    [
      `Request the fine schedule or hearing minutes that touch ${theme}`,
      `Photograph conditions with landmarks so the lot is identifiable`,
      `Write a one-sentence ask tied to ${theme} before the hearing`,
    ],
    [
      `Compare neighboring lots only where the same rule and season apply`,
      `Confirm delivery method for any letter about ${theme}`,
      `Keep oral manager assurances restated in email the same day`,
    ],
  ];
  return {
    heading,
    paragraphs: [p1, p2, p3],
    bullets: bulletSets[(idx + sIdx) % bulletSets.length],
  };
}

function conclusionParagraphs(seed, idx) {
  const pads = uniquePads(seed, idx + 9);
  const variants = [
    `Close your work on ${seed.topic} the same way you opened it: with a dated file and a clear ask. ${seed.angle}. If you only remember one habit, make it ${seed.practice}.`,
    `You do not need perfection to protect yourself on ${seed.topic}. You need speed on deadlines, precision on quotes, and restraint about ${seed.pitfall}. That combination keeps ${seed.stakes} from owning the outcome.`,
    `When ${seed.audience} leave a hearing or send a letter, they should already know the next calendar date. Myths like ${seed.myth} dissolve when the packet is boringly complete.`,
  ];
  return [
    stretch(variants[idx % 3], 75, pads),
    stretch(
      `This article is educational and is not legal advice. It cannot replace counsel from a licensed attorney in your state. Use it to organize questions, then verify controlling text in your recorded documents before relying on any single strategy for ${seed.topic}.`,
      65,
      pads
    ),
  ];
}

function buildFaq(seed, idx) {
  return seed.faqPairs.map(([q, a], i) => ({
    id: `${seed.slug}-faq-${i + 1}`,
    question: q,
    answer: stretch(
      `${a} Verify the controlling language in your recorded bylaws and state association statute before relying on a general answer about ${seed.topic}.`,
      50,
      uniquePads(seed, idx + i).slice(0, 1)
    ),
  }));
}

function buildInternalLinks(seed, idx) {
  return [
    {
      label: "Free HOA appeal letter generator",
      href: "/",
      description: `Draft a structured letter that reflects what you learned about ${seed.topic} without starting from a blank page.`,
    },
    {
      label: "All educational guides",
      href: "/guides",
      description: `Browse related MyHOAAppeal articles that complement this focus on ${seed.topic}.`,
    },
    {
      label: "Browse state appeal resources",
      href: "/#browse-by-state",
      description: `Open a state-specific HOA fine page if your dispute turns on local statutes beyond general ${seed.topic} guidance.`,
    },
    {
      label: idx % 2 === 0 ? "Evidence collection guide" : "Owner rights guide",
      href: idx % 2 === 0 ? "/guides/how-to-collect-evidence" : "/guides/understanding-your-rights",
      description:
        idx % 2 === 0
          ? `Strengthen exhibits that support arguments developed in this ${seed.topic} article.`
          : `Revisit foundational process rights that intersect with ${seed.topic}.`,
    },
  ];
}

function buildCta(seed) {
  return {
    headline: `Ready to ${seed.ctaHook}?`,
    body: `Use MyHOAAppeal to produce a professionally formatted dispute letter that captures your facts on ${seed.topic}. This guide is educational and does not create an attorney-client relationship.`,
    href: "/",
    linkLabel: "Start your appeal letter",
  };
}

function approxWords(body) {
  return JSON.stringify(body).split(/\s+/).filter(Boolean).length;
}

function buildBody(seed, idx) {
  const sections = seed.sectionThemes.map((theme, sIdx) =>
    sectionBlock(seed, theme, idx, sIdx)
  );

  let body = {
    intro: introParagraphs(seed, idx),
    sections,
    conclusion: conclusionParagraphs(seed, idx),
    faq: buildFaq(seed, idx),
    sources: seed.sources,
    internalLinks: buildInternalLinks(seed, idx),
    cta: buildCta(seed),
  };

  // Top up short articles with unique practical depth (not pad spam)
  if (approxWords(body) < 1850) {
    body.sections.push({
      heading: `Field checklist for ${seed.topic}`,
      paragraphs: [
        `Before you close the file on ${seed.topic}, confirm you can hand a stranger your notice PDF, a one-page timeline, and a single-sentence remedy. ${seed.angle}.`,
        `${seed.audience[0].toUpperCase()}${seed.audience.slice(1)} who ${seed.practice} keep options open after a denial—the same packet supports mediation and counsel intake. Keep ${seed.stakes} visible in every follow-up so new readers inherit context.`,
        `Avoid ${seed.pitfall}. Myths such as ${seed.myth} dissolve when the exhibits are boringly complete and the ask is specific.`,
      ],
      bullets: [
        `Export every portal notice related to ${seed.topic}`,
        `Write the remedy you want in one sentence`,
        `Calendar the next deadline before you stop working the file`,
      ],
    });
  }
  if (approxWords(body) < 1850) {
    body.sections[0].paragraphs.push(
      `Owners who ${seed.practice} keep options open even after a denial—the same packet supports mediation and counsel intake. Restate oral assurances in email the same day so ${seed.topic} disputes do not depend on memory.`
    );
  }

  return body;
}

function generate() {
  if (SEEDS.length !== 50) {
    throw new Error(`Expected 50 seeds, found ${SEEDS.length}`);
  }
  const slugs = new Set();
  for (const s of SEEDS) {
    if (slugs.has(s.slug)) throw new Error(`Duplicate seed slug ${s.slug}`);
    slugs.add(s.slug);
  }

  /** @type {Record<string, unknown>} */
  const out = {};
  for (const [idx, seed] of SEEDS.entries()) {
    out[seed.slug] = buildBody(seed, idx);
  }

  const content = `// AUTO-GENERATED by scripts/generate-guide-content.mjs — do not edit manually
import type { GuideBody } from "./types";

export const GUIDE_BODIES: Record<string, GuideBody> = ${JSON.stringify(out, null, 2)};
`;

  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, content, "utf8");
  console.log(`Wrote ${OUT} (${Object.keys(out).length} guides)`);
}

generate();
