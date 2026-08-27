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
    maxFineLabel: "$100 per violation",
    noticeWindow: "10-day hearing notice required",
    citation: "Cal. Civ. Code § 5850 / AB 130",
    defenseClause:
      "Failure to provide the required 10-day hearing notice can invalidate the fine under Cal. Civ. Code § 5850 / AB 130.",
  },
  FL: {
    maxFineLabel: "$100 per day, capped at $1,000 aggregate",
    noticeWindow: "14-day notice to committee required",
    citation: "Fla. Stat. § 720.305(2)",
    defenseClause:
      "Failure to provide 14-day written notice invalidates the fine under Fla. Stat. § 720.305.",
  },
  CO: {
    maxFineLabel: "$500 total cap",
    noticeWindow: "Two 30-day cure periods required",
    citation: "C.R.S. § 38-33.3-209.5",
    defenseClause:
      "Skipping both 30-day cure periods is a statutory defect under C.R.S. § 38-33.3-209.5.",
  },
  VA: {
    maxFineLabel: "$50 for a single offense, or $10 per day up to 90 days",
    noticeWindow: "Advance written notice required before a charge becomes due",
    citation: "Va. Code § 55.1-1819",
    defenseClause:
      "A charge above the $50 / $10-per-day (90-day) statutory cap, or imposed without required notice, is challengeable under Va. Code § 55.1-1819.",
  },
};

const FALLBACK_FINE_CAP: StateFineCapRecord = {
  maxFineLabel:
    "No uniform statewide dollar cap — confirm the amount is authorized in your CC&Rs",
  noticeWindow: "Standard 10–14 day statutory notice requirement",
  citation: "Governing documents + state association/condominium act",
  defenseClause:
    "Lack of documented CC&R authorization or defective 10–14 day written notice is a primary defense in most states.",
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
