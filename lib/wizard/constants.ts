export const US_STATES = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
] as const;

export const VIOLATION_CATEGORIES = [
  { value: "", label: "Select violation category" },
  { value: "landscaping", label: "Landscaping & Lawn" },
  { value: "trash", label: "Trash Cans" },
  { value: "unapproved", label: "Unapproved Modification" },
  { value: "vehicle", label: "Vehicle & Parking" },
  { value: "holiday", label: "Holiday Decorations" },
  { value: "other", label: "Other" },
] as const;

export type ViolationCategory =
  | ""
  | "landscaping"
  | "trash"
  | "unapproved"
  | "vehicle"
  | "holiday"
  | "other";

const GENERAL_DEFENSE_OPTIONS = [
  "First-time offense requesting waiver",
  "Lack of proper written notice period",
  "Inaccurate date/false claim",
] as const;

const LANDSCAPING_DEFENSE_OPTIONS = [
  "Weather/Drought conditions",
  "Violation already remedied",
  "No clear rule exists in Bylaws",
] as const;

const TRASH_DEFENSE_OPTIONS = [
  "Missed city pickup schedule",
  "Bylaws don't specify timing",
  "Blown over by wind",
] as const;

export function getDefenseOptions(
  category: ViolationCategory
): readonly string[] {
  switch (category) {
    case "landscaping":
      return [...LANDSCAPING_DEFENSE_OPTIONS, ...GENERAL_DEFENSE_OPTIONS];
    case "trash":
      return [...TRASH_DEFENSE_OPTIONS, ...GENERAL_DEFENSE_OPTIONS];
    default:
      return GENERAL_DEFENSE_OPTIONS;
  }
}

export function getViolationLabel(value: ViolationCategory): string {
  return (
    VIOLATION_CATEGORIES.find((c) => c.value === value)?.label ?? value
  );
}

export function getStateLabel(value: string): string {
  return US_STATES.find((s) => s.value === value)?.label ?? value;
}
