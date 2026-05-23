import { getStateLetterContext } from "@/lib/seo/statePages";

function weaveSupportingDetails(base: string, details: string): string {
  const trimmed = details.trim();
  if (!trimmed) return base;
  return `${base} The following circumstances are particularly relevant to my position: ${trimmed}`;
}

const DEFENSE_PARAGRAPH_BUILDERS: Record<string, (details: string) => string> = {
  "First-time offense requesting waiver": (details) =>
    weaveSupportingDetails(
      "I respectfully submit that this violation represents my first documented offense within the community and that I have otherwise maintained a consistent record of compliance with the association's governing documents. Imposing the full assessed penalty in these circumstances would be disproportionate to the conduct at issue and inconsistent with the equitable enforcement standards the board is obligated to apply. I therefore request that the board exercise its discretion to waive this fine in recognition of my good-faith history as a responsible homeowner.",
      details
    ),

  "Lack of proper written notice period": (details) =>
    weaveSupportingDetails(
      "A central element of my defense is that the association failed to provide adequate written notice and a reasonable opportunity to cure before imposing this penalty, as required by the governing documents and applicable procedural standards. Due process in HOA enforcement necessarily includes clear, timely communication of the alleged violation, the governing rule relied upon, and the timeframe within which corrective action may be taken. The notice I received does not satisfy these requirements, and enforcement predicated on deficient notice should not be sustained.",
      details
    ),

  "Inaccurate date/false claim": (details) =>
    weaveSupportingDetails(
      "I formally dispute the factual basis of this violation notice, including the date and circumstances asserted therein, which do not accurately reflect the condition of my property at the relevant time. The board's enforcement authority depends upon a truthful and verifiable record of non-compliance; where that record is materially inaccurate, the imposition of a fine cannot stand. I request that the board review all internal documentation, inspection logs, and photographic evidence relied upon in issuing this notice and correct the record accordingly.",
      details
    ),

  "Weather/Drought conditions": (details) =>
    weaveSupportingDetails(
      "The condition cited in this notice was substantially caused by documented weather and drought conditions beyond my reasonable control, which temporarily prevented me from maintaining landscaping standards to the degree ordinarily expected. Homeowners cannot be held to the same maintenance benchmarks during periods of environmental hardship when municipal water restrictions, extreme heat, or drought advisories are in effect. I acted in good faith and took reasonable steps consistent with those constraints, and I respectfully ask the board to consider this context before sustaining the penalty.",
      details
    ),

  "Violation already remedied": (details) =>
    weaveSupportingDetails(
      "I bring to the board's attention that the alleged violation was corrected promptly upon discovery and, in any event, prior to the issuance or finalization of this penalty. The purpose of the association's enforcement process is to secure compliance, not to punish homeowners who have already cured the cited condition. Because the underlying concern has been fully remedied, continuing to assess a fine serves no legitimate remedial purpose and should be withdrawn as a matter of fairness and proportionality.",
      details
    ),

  "No clear rule exists in Bylaws": (details) =>
    weaveSupportingDetails(
      "The conduct for which I have been fined is not clearly proscribed by a specific, ascertainable provision of the community's recorded bylaws, covenants, or rules and regulations. Homeowners are entitled to fair notice of the standards by which their conduct will be judged; penalties based on vague, ambiguous, or unwritten expectations cannot be enforced consistently or lawfully. I respectfully request that the board identify the precise governing provision relied upon and, if none exists with sufficient clarity, dismiss this violation.",
      details
    ),

  "Missed city pickup schedule": (details) =>
    weaveSupportingDetails(
      "The placement or timing of my trash receptacles was consistent with the municipal solid-waste collection schedule, and any appearance of non-compliance resulted from a missed or delayed city pickup rather than willful disregard of community standards. Homeowners routinely coordinate trash placement with public collection calendars, and a single deviation caused by municipal service disruption should not be treated as a deliberate violation warranting a monetary penalty. I request that the board verify the applicable collection schedule and withdraw this fine.",
      details
    ),

  "Blown over by wind": (details) =>
    weaveSupportingDetails(
      "The condition observed was transient in nature and caused by wind or other environmental factors that displaced receptacles or debris without any intentional or negligent conduct on my part. I promptly addressed the situation once it came to my attention. Penalizing homeowners for brief, weather-related conditions that are promptly corrected is inconsistent with reasonable enforcement and the board's duty to distinguish between willful violations and unavoidable temporary circumstances.",
      details
    ),

  "Bylaws don't specify timing": (details) =>
    weaveSupportingDetails(
      "The governing documents do not establish clear, objective standards regarding the timing, placement, or retrieval of trash receptacles sufficient to support the fine imposed. Where association rules are silent or ambiguous on the specific requirement allegedly violated, homeowners cannot be held liable for a breach that was not reasonably foreseeable. I respectfully ask the board to clarify the applicable rule or, in the absence of a clear standard, vacate this penalty entirely.",
      details
    ),
};

const NOTICE_DEFENSE_STRATEGY = "Lack of proper written notice period";

function appendStateNoticeHook(paragraph: string, stateCode: string): string {
  if (!stateCode) return paragraph;
  const hook = getStateLetterContext(stateCode)?.noticeDefenseHook;
  if (!hook) return paragraph;
  return `${paragraph} ${hook}`;
}

export function buildDefenseParagraph(
  strategy: string,
  supportingDetails: string,
  stateCode?: string
): string {
  const builder = DEFENSE_PARAGRAPH_BUILDERS[strategy];
  const base = builder
    ? builder(supportingDetails)
    : weaveSupportingDetails(
        "Based on the facts of my case, the governing documents of this association, and principles of fair and consistent enforcement, I respectfully submit that this fine should be waived or substantially reduced. The circumstances surrounding this violation do not support the penalty as assessed.",
        supportingDetails
      );

  if (strategy === NOTICE_DEFENSE_STRATEGY && stateCode) {
    return appendStateNoticeHook(base, stateCode);
  }

  return base;
}
