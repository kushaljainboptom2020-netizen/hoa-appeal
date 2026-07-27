/**
 * Generates educational assets + printable worksheet PDFs + branded SVG
 * infographics for all 50 guides.
 * Run: node scripts/generate-guide-assets.mjs
 */
import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import {
  buildChecklistSvg,
  buildComparisonSvg,
  buildProcessSvg,
  buildTimelineSvg,
  infographicHref,
} from "./lib/guide-infographic-svgs.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_TS = join(ROOT, "lib", "content", "guides", "assets.generated.ts");
const PDF_DIR = join(ROOT, "public", "guides", "worksheets");
const SVG_DIR = join(ROOT, "public", "guides", "infographics");

/** @typedef {"rights-process"|"appeals-letters"|"evidence-enforcement"|"money-liens"|"rules-terminology"} Cat */

/** @type {{ slug: string; title: string; category: Cat; focus: string; decisionFocus: string; compareA: string; compareB: string; compareC: string }[]} */
const GUIDES = [
  { slug: "understanding-your-rights", title: "Understanding Your Rights When an HOA Fines You", category: "rights-process", focus: "notice, cure, hearing, and written decision rights", decisionFocus: "whether your notice meets procedural requirements", compareA: "Valid notice", compareB: "Defective notice", compareC: "No written notice" },
  { slug: "how-to-collect-evidence", title: "How to Collect Evidence for an HOA Fine Appeal", category: "evidence-enforcement", focus: "dated photos, logs, and records that boards can verify", decisionFocus: "whether your evidence packet is hearing-ready", compareA: "Strong exhibit", compareB: "Weak exhibit", compareC: "Unusable exhibit" },
  { slug: "dealing-with-lien-threats", title: "Dealing With HOA Lien Threats Over Unpaid Fines", category: "money-liens", focus: "verifying debt before lien escalation", decisionFocus: "whether to pay under protest or dispute first", compareA: "Lien warning", compareB: "Recorded lien", compareC: "Foreclosure notice" },
  { slug: "hoa-meeting-preparation", title: "Preparing to Present Your Case at an HOA Board Hearing", category: "appeals-letters", focus: "opening remarks, exhibits, and a clear ask", decisionFocus: "whether you are ready to present live", compareA: "Prepared owner", compareB: "Underprepared owner", compareC: "Hostile presentation" },
  { slug: "hoa-fine-appeal-process", title: "The HOA Fine Appeal Process Step by Step", category: "appeals-letters", focus: "the full path from notice to written decision", decisionFocus: "which appeal stage you are in now", compareA: "Informal dispute", compareB: "Formal hearing", compareC: "Post-hearing escalation" },
  { slug: "how-to-write-an-hoa-appeal-letter", title: "How to Write an Effective HOA Fine Appeal Letter", category: "appeals-letters", focus: "facts, citations, defects, exhibits, and remedy", decisionFocus: "whether your letter is complete enough to send", compareA: "Complete letter", compareB: "Emotional letter", compareC: "Incomplete letter" },
  { slug: "sample-hoa-appeal-letter-structure", title: "Sample HOA Appeal Letter Structure and Outline", category: "appeals-letters", focus: "section-by-section letter architecture", decisionFocus: "which letter section needs work", compareA: "Header & facts", compareB: "Legal arguments", compareC: "Remedy & exhibits" },
  { slug: "hoa-hearing-what-to-expect", title: "What to Expect at an HOA Fine Hearing", category: "appeals-letters", focus: "agenda flow, speaking order, and decision timing", decisionFocus: "how to respond to common hearing surprises", compareA: "Open hearing", compareB: "Closed session", compareC: "Manager-only conference" },
  { slug: "after-the-hoa-hearing-next-steps", title: "After the HOA Hearing: Next Steps for Homeowners", category: "appeals-letters", focus: "written decisions, deadlines, and escalation", decisionFocus: "what to do after the board rules", compareA: "Win / reduction", compareB: "Denial", compareC: "No written decision" },
  { slug: "appealing-an-hoa-fine-in-court", title: "Appealing an HOA Fine in Court", category: "appeals-letters", focus: "exhaustion, jurisdiction, and evidence preservation", decisionFocus: "whether court is proportionate to the dispute", compareA: "Small claims", compareB: "Civil court", compareC: "ADR first" },
  { slug: "checklist-before-paying-an-hoa-fine", title: "Checklist Before Paying an HOA Fine", category: "money-liens", focus: "verify, document, and preserve dispute rights before payment", decisionFocus: "whether paying now helps or hurts you", compareA: "Pay under protest", compareB: "Hold payment", compareC: "Partial payment" },
  { slug: "selective-enforcement-hoa-fines", title: "Selective Enforcement of HOA Fines Explained", category: "evidence-enforcement", focus: "comparable neighbors and unequal application proof", decisionFocus: "whether you have enough comparables", compareA: "Clear comparable", compareB: "Ambiguous comparable", compareC: "No comparable" },
  { slug: "photographic-evidence-for-hoa-appeals", title: "Photographic Evidence for HOA Fine Appeals", category: "evidence-enforcement", focus: "light, landmarks, timestamps, and authenticity", decisionFocus: "whether a photo set will persuade the board", compareA: "Timestamped series", compareB: "Single snapshot", compareC: "Edited / cropped only" },
  { slug: "requesting-hoa-records-and-violation-files", title: "Requesting HOA Records and Violation Files", category: "evidence-enforcement", focus: "inspection rights, written requests, and follow-up", decisionFocus: "what records to demand first", compareA: "Governing docs", compareB: "Violation file", compareC: "Financial ledger" },
  { slug: "comparing-neighbor-enforcement-records", title: "Comparing Neighbor Enforcement Records in HOA Disputes", category: "evidence-enforcement", focus: "ethical, documented comparisons that show uneven rules", decisionFocus: "how to use neighbor data without harassment", compareA: "Public-visible violation", compareB: "Portal record match", compareC: "Anecdote only" },
  { slug: "certified-mail-and-notice-proof", title: "Certified Mail and Proof of HOA Notice", category: "evidence-enforcement", focus: "delivery receipts, green cards, and portal exports", decisionFocus: "which delivery method closes proof gaps", compareA: "Certified mail", compareB: "Email / portal", compareC: "Hand delivery" },
  { slug: "preparing-exhibits-for-hoa-hearings", title: "Preparing Exhibits for HOA Hearings", category: "evidence-enforcement", focus: "indexed packets boards can skim in minutes", decisionFocus: "whether your exhibit index is board-ready", compareA: "Indexed binder", compareB: "Loose emails", compareC: "Oral-only case" },
  { slug: "retaliatory-enforcement-by-hoa-boards", title: "Retaliatory Enforcement by HOA Boards", category: "evidence-enforcement", focus: "timing patterns after complaints or votes", decisionFocus: "whether retaliation indicators justify escalation", compareA: "Post-complaint fine", compareB: "Routine inspection fine", compareC: "Unrelated third-party tip" },
  { slug: "hoa-fine-schedules-and-caps", title: "HOA Fine Schedules and Caps Explained", category: "money-liens", focus: "published schedules, daily caps, and unauthorized amounts", decisionFocus: "whether the assessed amount matches adopted schedules", compareA: "Schedule-compliant", compareB: "Above schedule", compareC: "No published schedule" },
  { slug: "cure-periods-before-hoa-fines", title: "Cure Periods Before HOA Fines Begin", category: "rights-process", focus: "reasonable cure windows and proof of attempt", decisionFocus: "whether the cure period was fair and usable", compareA: "Adequate cure window", compareB: "Rushed cure window", compareC: "No cure offered" },
  { slug: "daily-fines-and-accruing-penalties", title: "Daily Fines and Accruing HOA Penalties", category: "money-liens", focus: "stopping accrual, caps, and ledger challenges", decisionFocus: "how to stop daily accrual quickly", compareA: "Continuing violation", compareB: "One-time violation", compareC: "Disputed continuing claim" },
  { slug: "assessment-vs-fine-differences", title: "Assessments vs Fines: Critical Differences for Owners", category: "money-liens", focus: "dues vs penalties and how ledgers blur them", decisionFocus: "whether a charge is a fine or an assessment", compareA: "Regular assessment", compareB: "Fine / penalty", compareC: "Fee / cost recovery" },
  { slug: "hoa-collections-and-demand-letters", title: "HOA Collections and Demand Letters", category: "money-liens", focus: "reading demands, disputing, and protecting appeal rights", decisionFocus: "how to answer a collections demand", compareA: "First demand", compareB: "Attorney demand", compareC: "Credit threat" },
  { slug: "hoa-foreclosure-risks-from-unpaid-fines", title: "HOA Foreclosure Risks From Unpaid Fines", category: "money-liens", focus: "when unpaid fines become foreclosure pathways", decisionFocus: "how urgent foreclosure risk really is", compareA: "Early delinquency", compareB: "Lien recorded", compareC: "Foreclosure filing" },
  { slug: "privilege-suspension-and-amenity-bans", title: "Privilege Suspension and Amenity Bans by HOAs", category: "money-liens", focus: "amenity cuts, due process, and written challenges", decisionFocus: "whether a privilege ban followed your documents", compareA: "Documented suspension", compareB: "Informal ban", compareC: "Essential-service cut" },
  { slug: "hoa-due-process-rights", title: "HOA Due Process Rights for Homeowners", category: "rights-process", focus: "notice, opportunity to be heard, and impartial process", decisionFocus: "which due-process step was skipped", compareA: "Full process", compareB: "Partial process", compareC: "No process" },
  { slug: "hoa-fine-timelines-and-deadlines", title: "HOA Fine Timelines and Critical Deadlines", category: "rights-process", focus: "appeal windows, cure clocks, and calendar discipline", decisionFocus: "which deadline controls your next move", compareA: "Appeal window open", compareB: "Appeal window closing", compareC: "Appeal window missed" },
  { slug: "reading-hoa-statutes-and-ccrs", title: "How to Read HOA Statutes and CC&Rs", category: "rules-terminology", focus: "document hierarchy and conflict resolution", decisionFocus: "which document controls the fine", compareA: "State statute", compareB: "CC&Rs", compareC: "Rules / guidelines" },
  { slug: "hoa-legal-terminology-glossary", title: "HOA Legal Terminology Glossary for Homeowners", category: "rules-terminology", focus: "key terms that appear in notices and ledgers", decisionFocus: "which term is driving your dispute", compareA: "Assessment", compareB: "Violation", compareC: "Hearing / appeal" },
  { slug: "state-hoa-law-basics-for-homeowners", title: "State HOA Law Basics Every Homeowner Should Know", category: "rules-terminology", focus: "how state acts interact with private covenants", decisionFocus: "whether state law adds protections beyond CC&Rs", compareA: "Planned community act", compareB: "Condo act", compareC: "General corporation law" },
  { slug: "condominium-vs-hoa-fine-differences", title: "Condominium vs HOA Fine Differences", category: "rules-terminology", focus: "unit vs lot enforcement and shared elements", decisionFocus: "whether condo or HOA rules apply to your fine", compareA: "Condo unit fine", compareB: "HOA lot fine", compareC: "Shared-element dispute" },
  { slug: "statute-of-limitations-for-hoa-fines", title: "Statute of Limitations Issues for HOA Fines", category: "rules-terminology", focus: "time bars on collection and enforcement claims", decisionFocus: "whether age of the fine creates a defense", compareA: "Recent fine", compareB: "Stale fine", compareC: "Revived / restated charge" },
  { slug: "homeowner-bill-of-rights-hoa-enforcement", title: "A Practical Homeowner Bill of Rights for HOA Enforcement", category: "rights-process", focus: "statutory owner protections during enforcement", decisionFocus: "which bill-of-rights protection applies", compareA: "Records access", compareB: "Hearing rights", compareC: "Fair collection limits" },
  { slug: "hoa-board-meeting-rules-and-minutes", title: "HOA Board Meeting Rules and Minutes", category: "rules-terminology", focus: "agendas, minutes, and proving what the board decided", decisionFocus: "whether meeting records support your appeal", compareA: "Approved minutes", compareB: "Draft minutes", compareC: "No minutes" },
  { slug: "open-meeting-laws-and-hoa-transparency", title: "Open Meeting Laws and HOA Transparency", category: "rules-terminology", focus: "owner-notice requirements and closed-session limits", decisionFocus: "whether a fine decision needed an open meeting", compareA: "Open vote", compareB: "Closed session", compareC: "Manager unilateral action" },
  { slug: "conflict-of-interest-on-hoa-boards", title: "Conflicts of Interest on HOA Boards", category: "rules-terminology", focus: "recusal, related-party bias, and process fairness", decisionFocus: "whether a conflict tainted the fine decision", compareA: "Disclosed conflict", compareB: "Hidden conflict", compareC: "No conflict evidence" },
  { slug: "management-company-roles-in-hoa-fines", title: "Management Company Roles in HOA Fines", category: "rules-terminology", focus: "manager authority vs board decision-making", decisionFocus: "who actually imposed or can reverse the fine", compareA: "Board-imposed fine", compareB: "Manager-issued fine", compareC: "Attorney-directed fine" },
  { slug: "amending-ccrs-vs-enforcing-rules", title: "Amending CC&Rs vs Enforcing Existing Rules", category: "rules-terminology", focus: "when boards need amendments instead of new fines", decisionFocus: "whether the rule was properly adopted", compareA: "Recorded covenant", compareB: "Board-adopted rule", compareC: "Unwritten custom" },
  { slug: "challenging-arbitrary-hoa-fines", title: "Challenging Arbitrary HOA Fines", category: "appeals-letters", focus: "vague standards and inconsistent measurements", decisionFocus: "whether the standard used was objective enough", compareA: "Measurable standard", compareB: "Vague aesthetic", compareC: "No cited rule" },
  { slug: "architectural-review-denials-and-appeals", title: "Architectural Review Denials and Appeals", category: "appeals-letters", focus: "ARC denials, guidelines, and appeal paths", decisionFocus: "how to challenge an architectural denial", compareA: "Guideline-based denial", compareB: "Subjective denial", compareC: "Silent / delayed ARC" },
  { slug: "landscaping-and-maintenance-violation-appeals", title: "Appealing Landscaping and Maintenance HOA Violations", category: "appeals-letters", focus: "lawn, trees, and maintenance standards with proof", decisionFocus: "whether weather or access blocked a fair cure", compareA: "Clear maintenance duty", compareB: "Disputed boundary", compareC: "Weather / vendor delay" },
  { slug: "parking-and-vehicle-hoa-fines", title: "Parking and Vehicle HOA Fines: How to Dispute Them", category: "appeals-letters", focus: "street vs driveway rules and tow/fine overlap", decisionFocus: "whether the parking rule was clearly posted and applied", compareA: "Assigned space", compareB: "Guest parking", compareC: "Street / overflow" },
  { slug: "noise-and-nuisance-hoa-violations", title: "Noise and Nuisance HOA Violations", category: "appeals-letters", focus: "subjective nuisance claims and corroboration", decisionFocus: "how to answer a nuisance complaint with facts", compareA: "Measured noise log", compareB: "Single complaint", compareC: "Anonymous tip" },
  { slug: "pet-related-hoa-fines", title: "Pet-Related HOA Fines and Appeals", category: "appeals-letters", focus: "leash, waste, breed, and service-animal issues", decisionFocus: "whether the pet fine matches adopted pet rules", compareA: "Rule-based pet fine", compareB: "Breed / weight ban", compareC: "Assistance animal issue" },
  { slug: "short-term-rental-hoa-enforcement", title: "Short-Term Rental HOA Enforcement and Fines", category: "appeals-letters", focus: "STR bans, leases, and enforcement evidence", decisionFocus: "whether STR enforcement followed your covenants", compareA: "Recorded STR ban", compareB: "Rule-only ban", compareC: "Municipal + HOA overlap" },
  { slug: "emergency-fines-and-safety-violations", title: "Emergency Fines and Safety Violations", category: "rights-process", focus: "true emergencies vs accelerated ordinary fines", decisionFocus: "whether emergency process was justified", compareA: "Imminent hazard", compareB: "Ordinary violation labeled emergency", compareC: "Post-event fine" },
  { slug: "seasonal-and-weather-related-cure-delays", title: "Seasonal and Weather-Related HOA Cure Delays", category: "rights-process", focus: "weather logs and reasonable extension requests", decisionFocus: "whether to request a weather-based extension", compareA: "Documented storm delay", compareB: "Mild weather", compareC: "Vendor backlog only" },
  { slug: "insurance-claims-and-hoa-fine-disputes", title: "Insurance Claims and HOA Fine Disputes", category: "money-liens", focus: "claim timelines overlapping fine cure clocks", decisionFocus: "how insurance interacts with the fine clock", compareA: "Open claim", compareB: "Denied claim", compareC: "No insurance angle" },
  { slug: "mediation-and-adr-for-hoa-disputes", title: "Mediation and ADR for HOA Fine Disputes", category: "appeals-letters", focus: "when mediation beats hearings or court", decisionFocus: "whether ADR is available and useful now", compareA: "Documented ADR clause", compareB: "Voluntary mediation", compareC: "ADR not available" },
  { slug: "when-to-hire-an-hoa-attorney", title: "When to Hire an HOA Attorney", category: "appeals-letters", focus: "cost-benefit triggers for counsel", decisionFocus: "whether the dispute justifies legal fees", compareA: "High stakes / lien", compareB: "Low-dollar fine", compareC: "Complex multi-issue case" },
];

function pdfHref(slug) {
  return `/guides/worksheets/${slug}-worksheet.pdf`;
}

function buildDecisionTree(g) {
  return {
    heading: `Decision tree: ${g.decisionFocus}`,
    intro: `Use this yes/no path to decide your next action on ${g.focus}. Outcomes are educational starting points—confirm against your CC&Rs and state law.`,
    startId: "start",
    nodes: [
      {
        id: "start",
        prompt: `Do you already have written materials covering ${g.focus}?`,
        options: [
          { label: "Yes — I have notices or governing excerpts", nextId: "quality" },
          { label: "No — I am starting from a verbal warning or rumor", nextId: "collect" },
        ],
      },
      {
        id: "collect",
        prompt: "Can you obtain the written notice, fine schedule, and relevant CC&R/rule pages within 48 hours?",
        options: [
          { label: "Yes — I can request or download them", result: `Request the file in writing today, then re-run this tree for ${g.focus}. Do not rely on memory alone.` },
          { label: "No — the association will not provide records", result: `Send a dated records request, keep delivery proof, and note the refusal in your appeal packet about ${g.focus}.` },
        ],
      },
      {
        id: "quality",
        prompt: `Does your packet clearly address ${g.decisionFocus}?`,
        options: [
          { label: "Yes — defects and facts are indexed", nextId: "deadline" },
          { label: "Not yet — gaps remain", result: `Fill gaps with dated exhibits before you argue ${g.focus}. Incomplete packets invite denials on procedure.` },
        ],
      },
      {
        id: "deadline",
        prompt: "Is an appeal, cure, or response deadline still open?",
        options: [
          { label: "Yes — time remains", result: `Calendar the deadline, submit a written position on ${g.focus}, and request a hearing or written decision in the same letter.` },
          { label: "Unsure / possibly missed", result: `Ask in writing for the controlling deadline and whether late submissions are accepted. Preserve ${g.focus} arguments even while clarifying timing.` },
          { label: "No — the window closed", result: `Document why the window was missed (late notice, portal failure, etc.) and escalate via payment-under-protest, mediation, or counsel depending on stakes.` },
        ],
      },
    ],
  };
}

function buildProcessFlow(g) {
  const topic = g.focus;
  return {
    heading: `Interactive process timeline: ${g.title.replace(/^The /, "")}`,
    intro: `Follow these stages in order when working through ${topic}. Expand each step for estimated time, required documents, and common mistakes. Skip steps only when your documents expressly allow it.`,
    steps: [
      {
        step: 1,
        title: "Capture the trigger",
        description: `Save the notice, portal message, invoice, or verbal summary that started the dispute about ${topic}. Note the date received.`,
        estimatedTime: "Same day (30–90 min)",
        documentsRequired: [
          "Violation notice, invoice, or portal message",
          "Envelope postmark or delivery receipt",
          "Dated note of when you first learned of the issue",
        ],
        commonMistakes: [
          "Relying on a verbal warning without a written artifact",
          "Forgetting to photograph the notice date and cited rule",
        ],
      },
      {
        step: 2,
        title: "Pull controlling text",
        description: `Locate the statute, CC&R, rule, and fine-schedule language that supposedly authorizes action on ${topic}.`,
        estimatedTime: "1–3 days",
        documentsRequired: [
          "CC&R / rule pages cited in the notice",
          "Current fine schedule",
          "Bylaws appeal or hearing clause",
        ],
        commonMistakes: [
          "Arguing fairness before confirming the board cited a real rule",
          "Using an outdated schedule that no longer matches the ledger",
        ],
      },
      {
        step: 3,
        title: "Build the evidence spine",
        description: `Assemble dated photos, correspondence, ledgers, and comparables that speak directly to ${g.decisionFocus}.`,
        estimatedTime: "2–5 days",
        documentsRequired: [
          "Dated photos or maintenance logs",
          "Correspondence export",
          "Comparable-neighbor notes (when relevant)",
          "One-page exhibit index",
        ],
        commonMistakes: [
          "Photos without dates, landmarks, or consistent angles",
          "Dumping unsorted emails instead of labeled exhibits",
        ],
      },
      {
        step: 4,
        title: "Choose the procedural path",
        description: `Pick cure, informal dispute, formal hearing, payment under protest, ADR, or counsel based on deadlines and stakes around ${topic}.`,
        estimatedTime: "Per notice window (often 7–14 days)",
        documentsRequired: [
          "Deadline calendar from the notice and bylaws",
          "Draft remedy sentence (waive / reduce / re-notice / reverse)",
          "Proof of any cure already completed",
        ],
        commonMistakes: [
          "Missing the internal appeal deadline while still gathering evidence",
          "Asking for conflicting remedies in the same letter",
        ],
      },
      {
        step: 5,
        title: "Submit a written ask",
        description: `Send one clear remedy request (waive, reduce, re-notice, or reverse) tied to ${g.decisionFocus}, with exhibits attached.`,
        estimatedTime: "1–2 hours to finalize + send",
        documentsRequired: [
          "Signed appeal or dispute letter",
          "Indexed exhibits",
          "Certified-mail / portal delivery proof",
        ],
        commonMistakes: [
          "Sending exhibits without a clear ask on the first page",
          "Failing to keep delivery proof for the appeal packet",
        ],
      },
      {
        step: 6,
        title: "Confirm the outcome in writing",
        description: `Demand or calendar a written decision, update your ledger notes, and decide whether escalation is still proportionate.`,
        estimatedTime: "1–7 days after hearing or board action",
        documentsRequired: [
          "Written decision or refusal-to-decide record",
          "Updated ledger screenshot",
          "Post-decision deadline calendar",
        ],
        commonMistakes: [
          "Assuming silence means the fine was waived",
          "Paying without noting payment under protest when escalation continues",
        ],
      },
    ],
  };
}

function buildComparisonTable(g) {
  return {
    heading: `Comparison: ${g.compareA} vs ${g.compareB} vs ${g.compareC}`,
    intro: `Use this side-by-side view when evaluating options related to ${g.focus}. Prefer the column that matches your documents and evidence.`,
    columns: [g.compareA, g.compareB, g.compareC],
    rows: [
      {
        label: "Typical signal",
        values: [
          `Clear written basis for ${g.compareA.toLowerCase()}`,
          `Partial or contested basis for ${g.compareB.toLowerCase()}`,
          `High risk if you only have ${g.compareC.toLowerCase()}`,
        ],
      },
      {
        label: "Owner priority",
        values: [
          `Preserve ${g.compareA.toLowerCase()} with indexed proof`,
          `Convert ${g.compareB.toLowerCase()} into a documented record`,
          `Do not rely on ${g.compareC.toLowerCase()} alone`,
        ],
      },
      {
        label: "Board / manager reaction",
        values: [
          "Harder to dismiss when exhibits are complete",
          "May stall or ask for more information",
          "Often treated as insufficient without follow-up writing",
        ],
      },
      {
        label: "Next educational move",
        values: [
          `Advance the formal path for ${g.focus}`,
          `Send a clarifying letter addressing ${g.decisionFocus}`,
          `Collect missing documents before arguing substance`,
        ],
      },
      {
        label: "Escalation risk if ignored",
        values: [
          "Lower if you stay on deadline",
          "Medium — ambiguity can harden into denial",
          `Higher — ${g.compareC.toLowerCase()} gaps feed collections narratives`,
        ],
      },
    ],
  };
}

function buildChecklist(g) {
  return {
    heading: `Checklist for ${g.focus}`,
    intro: `Mark each item only when you can hand a stranger the supporting file. This checklist is tailored to ${g.title}.`,
    categories: [
      {
        category: "Documents on hand",
        items: [
          `Written notice or invoice tied to ${g.focus}`,
          "Current CC&Rs, rules, and fine schedule excerpts",
          "Delivery proof (certified mail, portal export, or email headers)",
        ],
      },
      {
        category: "Evidence quality",
        items: [
          `Dated materials that address ${g.decisionFocus}`,
          "One-page timeline of key events",
          "Exhibit index with short labels (A, B, C…)",
        ],
      },
      {
        category: "Procedural safeguards",
        items: [
          "Appeal / cure / hearing deadline calendared",
          "Clear written remedy (waive, reduce, re-notice, reverse)",
          "Plan for payment under protest if lien pressure rises",
        ],
      },
      {
        category: "Before you stop working the file",
        items: [
          `Confirm whether ${g.compareA.toLowerCase()} or ${g.compareB.toLowerCase()} better describes your posture`,
          "Save a PDF export of the full packet",
          "Note any verbal promises in a same-day email",
        ],
      },
    ],
  };
}

function buildTimeline(g) {
  return {
    heading: `Interactive timeline for ${g.focus}`,
    intro: `Typical sequence owners encounter when dealing with ${g.focus}. Expand each stage for documents and pitfalls. Replace example windows with the dates in your governing documents.`,
    events: [
      {
        label: "Trigger / notice",
        duration: "Day 0",
        notes: `Violation letter, invoice, or demand referencing ${g.focus} arrives.`,
        documentsRequired: [
          "Violation letter or invoice",
          "Delivery proof / portal export",
        ],
        commonMistakes: [
          "Ignoring early inspection photos that later become exhibit A",
          "Losing the envelope that shows the mailing date",
        ],
      },
      {
        label: "Document pull",
        duration: "Days 0–3",
        notes: `Gather CC&Rs, schedules, and records that control ${g.decisionFocus}.`,
        documentsRequired: [
          "CC&Rs and rules cited",
          "Fine schedule",
          "Prior correspondence on the same issue",
        ],
        commonMistakes: [
          "Starting to write before you have the controlling text",
          "Mixing draft rules with recorded covenants",
        ],
      },
      {
        label: "Cure or early response",
        duration: "Per notice (often 7–14 days)",
        notes: "Cure if appropriate; otherwise send a written dispute preserving hearing rights.",
        documentsRequired: [
          "Cure photos or vendor invoice",
          "Written dispute letter if not curing",
          "Delivery proof",
        ],
        commonMistakes: [
          "Curing without asking for written confirmation",
          "Letting the cure window expire while waiting on a phone call",
        ],
      },
      {
        label: "Hearing / board review",
        duration: "Often 2–6 weeks after request",
        notes: `Present indexed exhibits focused on ${g.focus}; ask for a written decision.`,
        documentsRequired: [
          "Indexed exhibit packet",
          "Hearing agenda or appearance confirmation",
          "One-sentence remedy ask",
        ],
        commonMistakes: [
          "Showing up without copies for the board",
          "Skipping a written decision request on the record",
        ],
      },
      {
        label: "Written decision",
        duration: "Promptly after hearing (document-driven)",
        notes: "Confirm outcome in writing; calendar any post-decision deadlines.",
        documentsRequired: [
          "Written decision letter",
          "Updated ledger entry",
          "Minutes request (if decision is oral only)",
        ],
        commonMistakes: [
          "Accepting an oral outcome without a dated writing",
          "Missing post-decision escalation clocks",
        ],
      },
      {
        label: "Escalation fork",
        duration: "After denial or silence",
        notes: `Choose payment under protest, ADR, counsel, or court based on stakes around ${g.focus}.`,
        documentsRequired: [
          "Full appeal record to date",
          "Collections / lien notice if any",
          "ADR clause or counsel intake notes",
        ],
        commonMistakes: [
          "Escalating before the internal record is complete",
          "Paying without preserving dispute rights when a lien is threatened",
        ],
      },
    ],
  };
}

function buildVisualSummary(g) {
  return {
    heading: `Visual summary: ${g.title}`,
    intro: `Five takeaways to remember about ${g.focus}. Use them as a one-page briefing before you write or speak.`,
    takeaways: [
      {
        title: "Start with procedure",
        detail: `Map notice, cure, hearing, and decision duties before debating the aesthetics of ${g.focus}.`,
      },
      {
        title: "Make the decision point explicit",
        detail: `Your appeal should answer ${g.decisionFocus} with exhibits, not adjectives.`,
      },
      {
        title: "Compare options deliberately",
        detail: `Know whether you are closer to ${g.compareA}, ${g.compareB}, or ${g.compareC} before you escalate.`,
      },
      {
        title: "Write one remedy sentence",
        detail: `Boards skim—state waive, reduce, re-notice, or reverse in a single line tied to ${g.focus}.`,
      },
      {
        title: "Keep escalation proportionate",
        detail: `Match collections risk and dollar amount to mediation, counsel, or court only after the packet is complete.`,
      },
    ],
  };
}

function buildDownloadables(g) {
  return [
    {
      label: `${g.title} — owner worksheet (PDF)`,
      description: `Printable packet with the decision path, process steps, checklist, timeline, and visual summary for ${g.focus}.`,
      href: pdfHref(g.slug),
      fileType: "pdf",
    },
    {
      label: `${g.title} — process flowchart (SVG)`,
      description: `Branded vector process diagram for ${g.focus}.`,
      href: infographicHref(g.slug, "process"),
      fileType: "svg",
    },
    {
      label: `${g.title} — comparison chart (SVG)`,
      description: `Side-by-side comparison of ${g.compareA}, ${g.compareB}, and ${g.compareC}.`,
      href: infographicHref(g.slug, "comparison"),
      fileType: "svg",
    },
    {
      label: `${g.title} — deadline timeline (SVG)`,
      description: `Visual timeline of deadlines and durations for ${g.focus}.`,
      href: infographicHref(g.slug, "timeline"),
      fileType: "svg",
    },
    {
      label: `${g.title} — checklist (SVG)`,
      description: `Printable checklist categories for documenting ${g.focus}.`,
      href: infographicHref(g.slug, "checklist"),
      fileType: "svg",
    },
  ];
}

function buildInfographics(g) {
  return {
    process: infographicHref(g.slug, "process"),
    comparison: infographicHref(g.slug, "comparison"),
    timeline: infographicHref(g.slug, "timeline"),
    checklist: infographicHref(g.slug, "checklist"),
  };
}

function buildAssets(g) {
  return {
    decisionTree: buildDecisionTree(g),
    processFlow: buildProcessFlow(g),
    comparisonTable: buildComparisonTable(g),
    checklist: buildChecklist(g),
    timeline: buildTimeline(g),
    visualSummary: buildVisualSummary(g),
    downloadables: buildDownloadables(g),
    infographics: buildInfographics(g),
  };
}

/** Minimal multi-page PDF writer (Helvetica, no external deps). */
function escapePdfText(str) {
  return String(str)
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)")
    .replace(/[^\x20-\x7E]/g, (ch) => {
      const code = ch.charCodeAt(0);
      if (code === 0x2019 || code === 0x2018) return "'";
      if (code === 0x201c || code === 0x201d) return '"';
      if (code === 0x2013 || code === 0x2014) return "-";
      if (code === 0x2026) return "...";
      return " ";
    });
}

function wrapLine(text, maxChars) {
  const words = String(text).split(/\s+/).filter(Boolean);
  const lines = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars) {
      if (current) lines.push(current);
      current = word.length > maxChars ? word.slice(0, maxChars) : word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines.length ? lines : [""];
}

function buildWorksheetLines(g, assets) {
  /** @type {string[]} */
  const lines = [];
  const push = (t = "") => lines.push(t);
  const pushWrap = (t, max = 92) => {
    for (const line of wrapLine(t, max)) push(line);
  };

  push("MyHOAAppeal — Educational worksheet");
  push(g.title);
  push("Educational use only. Not legal advice. Verify against your CC&Rs and state law.");
  push("");
  push("== VISUAL SUMMARY ==");
  pushWrap(assets.visualSummary.intro);
  for (const t of assets.visualSummary.takeaways) {
    push(`* ${t.title}: ${t.detail}`);
  }
  push("");
  push("== PROCESS FLOW ==");
  for (const s of assets.processFlow.steps) {
    push(`${s.step}. ${s.title} [${s.estimatedTime}]`);
    pushWrap(`   ${s.description}`);
    push(`   Documents: ${s.documentsRequired.join("; ")}`);
    push(`   Avoid: ${s.commonMistakes.join("; ")}`);
  }
  push("");
  push("== CHECKLIST ==");
  for (const cat of assets.checklist.categories) {
    push(cat.category);
    for (const item of cat.items) push(`[ ] ${item}`);
    push("");
  }
  push("== TIMELINE ==");
  for (const e of assets.timeline.events) {
    push(`${e.label} | ${e.duration}`);
    pushWrap(`   ${e.notes}`);
    push(`   Documents: ${e.documentsRequired.join("; ")}`);
    push(`   Avoid: ${e.commonMistakes.join("; ")}`);
  }
  push("");
  push("== DECISION TREE (print path) ==");
  pushWrap(assets.decisionTree.intro);
  for (const node of assets.decisionTree.nodes) {
    push(`Q (${node.id}): ${node.prompt}`);
    for (const opt of node.options) {
      const dest = opt.nextId ? `-> go to ${opt.nextId}` : `-> ${opt.result}`;
      pushWrap(`   - ${opt.label} ${dest}`);
    }
  }
  push("");
  push("== COMPARISON SNAPSHOT ==");
  push(`Columns: ${assets.comparisonTable.columns.join(" | ")}`);
  for (const row of assets.comparisonTable.rows) {
    push(row.label);
    row.values.forEach((v, i) => {
      pushWrap(`   [${assets.comparisonTable.columns[i]}] ${v}`);
    });
  }
  push("");
  push("Generated for educational purposes by MyHOAAppeal.");
  return lines;
}

function createPdfFromLines(lines) {
  const leading = 13;
  const marginLeft = 48;
  const topY = 742;
  const minY = 48;
  const linesPerPage = Math.floor((topY - minY) / leading);
  const pages = [];
  for (let i = 0; i < lines.length; i += linesPerPage) {
    pages.push(lines.slice(i, i + linesPerPage));
  }
  if (pages.length === 0) pages.push([""]);

  /** @type {{ num: number; body: string }[]} */
  const objs = [];
  const add = (body) => {
    const num = objs.length + 1;
    objs.push({ num, body });
    return num;
  };

  const catalogNum = add("");
  const pagesNum = add("");
  const fontNum = add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");

  const pageNums = [];
  for (const pageLines of pages) {
    let stream = "BT\n/F1 10 Tf\n";
    let y = topY;
    for (const line of pageLines) {
      stream += `1 0 0 1 ${marginLeft} ${y} Tm (${escapePdfText(line)}) Tj\n`;
      y -= leading;
    }
    stream += "ET";
    const contentNum = add(
      `<< /Length ${Buffer.byteLength(stream, "utf8")} >>\nstream\n${stream}\nendstream`
    );
    const pageNum = add(
      `<< /Type /Page /Parent ${pagesNum} 0 R /MediaBox [0 0 612 792] /Contents ${contentNum} 0 R /Resources << /Font << /F1 ${fontNum} 0 R >> >> >>`
    );
    pageNums.push(pageNum);
  }

  objs[catalogNum - 1].body = `<< /Type /Catalog /Pages ${pagesNum} 0 R >>`;
  objs[pagesNum - 1].body = `<< /Type /Pages /Kids [${pageNums
    .map((n) => `${n} 0 R`)
    .join(" ")}] /Count ${pageNums.length} >>`;

  let pdf = "%PDF-1.4\n";
  /** @type {number[]} */
  const xref = [0];
  for (const obj of objs) {
    xref.push(Buffer.byteLength(pdf, "utf8"));
    pdf += `${obj.num} 0 obj\n${obj.body}\nendobj\n`;
  }
  const xrefStart = Buffer.byteLength(pdf, "utf8");
  pdf += `xref\n0 ${objs.length + 1}\n`;
  pdf += "0000000000 65535 f \n";
  for (let i = 1; i <= objs.length; i++) {
    pdf += `${String(xref[i]).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objs.length + 1} /Root ${catalogNum} 0 R >>\n`;
  pdf += `startxref\n${xrefStart}\n%%EOF\n`;
  return Buffer.from(pdf, "utf8");
}

function writeInfographics(g, assets) {
  const files = [
    {
      kind: "process",
      svg: buildProcessSvg({
        title: g.title,
        heading: assets.processFlow.heading,
        steps: assets.processFlow.steps,
      }),
    },
    {
      kind: "comparison",
      svg: buildComparisonSvg({
        title: g.title,
        heading: assets.comparisonTable.heading,
        columns: assets.comparisonTable.columns,
        rows: assets.comparisonTable.rows,
      }),
    },
    {
      kind: "timeline",
      svg: buildTimelineSvg({
        title: g.title,
        heading: assets.timeline.heading,
        events: assets.timeline.events,
      }),
    },
    {
      kind: "checklist",
      svg: buildChecklistSvg({
        title: g.title,
        heading: assets.checklist.heading,
        categories: assets.checklist.categories,
      }),
    },
  ];

  for (const file of files) {
    writeFileSync(join(SVG_DIR, `${g.slug}-${file.kind}.svg`), file.svg, "utf8");
  }
}

function generate() {
  if (GUIDES.length !== 50) {
    throw new Error(`Expected 50 guides, found ${GUIDES.length}`);
  }

  mkdirSync(PDF_DIR, { recursive: true });
  mkdirSync(SVG_DIR, { recursive: true });

  /** @type {Record<string, unknown>} */
  const out = {};
  for (const g of GUIDES) {
    const assets = buildAssets(g);
    out[g.slug] = assets;

    const lines = buildWorksheetLines(g, assets);
    const pdf = createPdfFromLines(lines);
    const pdfPath = join(PDF_DIR, `${g.slug}-worksheet.pdf`);
    writeFileSync(pdfPath, pdf);
    writeInfographics(g, assets);
  }

  const content = `// AUTO-GENERATED by scripts/generate-guide-assets.mjs — do not edit manually
import type { GuideEducationalAssets } from "./types";

export const GUIDE_ASSETS: Record<string, GuideEducationalAssets> = ${JSON.stringify(out, null, 2)};
`;

  mkdirSync(dirname(OUT_TS), { recursive: true });
  writeFileSync(OUT_TS, content, "utf8");
  console.log(`Wrote ${OUT_TS} (${Object.keys(out).length} guides)`);
  console.log(`Wrote ${GUIDES.length} PDFs to ${PDF_DIR}`);
  console.log(`Wrote ${GUIDES.length * 4} SVGs to ${SVG_DIR}`);
}

generate();
