import { getStateLabel } from "@/lib/wizard/constants";
import type {
  FineCalculatorCategory,
  FineCalculatorCategoryId,
  ResolvedStateFineCap,
  StateFineCapRecord,
} from "./types";

export const FINE_CALCULATOR_CATEGORIES: FineCalculatorCategory[] = [
  { id: "landscaping", label: "Landscaping", wizardValue: "landscaping" },
  { id: "trash", label: "Trash/Waste", wizardValue: "trash" },
  { id: "parking", label: "Parking/Vehicle", wizardValue: "vehicle" },
  { id: "architectural", label: "Architectural", wizardValue: "unapproved" },
  { id: "general", label: "General Rules", wizardValue: "other" },
];

const FEATURED_FINE_CAPS: Record<string, StateFineCapRecord> = {
  CA: {
    maxFineLabel:
      "Lesser of the published schedule or $100 per violation, unless the board makes a written open-meeting health-or-safety finding (Civ. Code § 5850)",
    noticeWindow:
      "At least 10 days' written notice before a discipline meeting (Civ. Code § 5855). Not a statement that a missed notice voids the fine.",
    citation: "Cal. Civ. Code §§ 5850 and 5855",
    defenseClause:
      "If the Davis-Stirling Act applies, compare the notice with Civil Code § 5855 and the penalty limit in § 5850, including the health-or-safety exception. Do not describe a missed notice as automatically voiding the fine.",
  },
  FL: {
    maxFineLabel:
      "$100 per violation and $1,000 aggregate for a continuing violation, unless the governing documents allow a different amount (§ 720.305)",
    noticeWindow:
      "At least 14 days' written notice of a hearing before an independent committee (§ 720.305). Not a hearing before the board, and not the condominium statute.",
    citation: "Fla. Stat. § 720.305",
    defenseClause:
      "If § 720.305 applies, the board may not impose the fine unless it first gives at least 14 days' written notice of a hearing before a committee that meets the independence rules. Do not say a missed notice voids the fine. Condominiums are under Chapter 718.",
  },
  CO: {
    maxFineLabel:
      "For a non-safety violation, total fines for that violation not to exceed $500 in the text reviewed (§ 38-33.3-209.5). Confirm the current section.",
    noticeWindow:
      "Certified mail and 30 days to cure before a fine for a non-safety violation. Two consecutive 30-day periods are the condition stated before legal action, not a second wait before the first fine.",
    citation: "C.R.S. § 38-33.3-209.5",
    defenseClause:
      "If § 38-33.3-209.5 applies, quote the health-or-safety distinction and confirm the current codified text. Do not describe two 30-day periods as a wait that must finish before any fine.",
  },
  VA: {
    maxFineLabel:
      "Confirm § 55.1-1819 on the Virginia LIS site. Commonly published text describes $50 for a single offense or $10 per day, not assessed beyond 90 days.",
    noticeWindow:
      "Confirm the cure opportunity and hearing notice on the LIS page for § 55.1-1819. Do not apply the Property Owners' Association Act to a condominium it does not cover.",
    citation: "Va. Code § 55.1-1819 (confirm on LIS)",
    defenseClause:
      "Ask the association to identify the section it used and confirm the current § 55.1-1819 text on the Virginia LIS site before you cite a dollar cap.",
  },
};

const FALLBACK_FINE_CAP: StateFineCapRecord = {
  maxFineLabel: "See governing documents — statewide dollar cap not confirmed on this page",
  noticeWindow: "See governing documents — statewide day count not confirmed on this page",
  citation: "Official state code plus the recorded declaration",
  defenseClause:
    "Ask the association to identify the declaration section that authorizes the fine and the notice it sent. This site does not state a national notice-day rule.",
};

export function getFineCalculatorCategory(
  id: FineCalculatorCategoryId
): FineCalculatorCategory | undefined {
  return FINE_CALCULATOR_CATEGORIES.find((category) => category.id === id);
}

export function getStateFineCap(stateCode: string): ResolvedStateFineCap {
  const featured = FEATURED_FINE_CAPS[stateCode];
  const record = featured ?? FALLBACK_FINE_CAP;
  return {
    ...record,
    stateCode,
    stateName: getStateLabel(stateCode),
    isFallback: !featured,
  };
}

export function formatDefenseClause(
  record: ResolvedStateFineCap,
  categoryLabel?: string
): string {
  if (!categoryLabel) return record.defenseClause;
  return `${record.defenseClause} Raise this defect for ${categoryLabel.toLowerCase()} violations in your appeal.`;
}

export type { FineCalculatorCategory, FineCalculatorCategoryId, ResolvedStateFineCap };
