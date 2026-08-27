import type { ViolationCategory } from "@/lib/wizard/constants";

export type FineCalculatorCategoryId =
  | "landscaping"
  | "trash"
  | "parking"
  | "architectural"
  | "general";

export type FineCalculatorCategory = {
  id: FineCalculatorCategoryId;
  label: string;
  wizardValue: Exclude<ViolationCategory, "">;
};

export type StateFineCapRecord = {
  maxFineLabel: string;
  noticeWindow: string;
  citation: string;
  defenseClause: string;
};

export type ResolvedStateFineCap = StateFineCapRecord & {
  stateCode: string;
  stateName: string;
  isFallback: boolean;
};
