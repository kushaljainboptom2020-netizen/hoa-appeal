import type { AppealFormData } from "@/lib/wizard/formState";

const MAX_LENGTHS: Partial<Record<keyof AppealFormData, number>> = {
  fullName: 120,
  propertyAddress: 200,
  hoaManagementCompany: 150,
  supportingDetails: 2000,
  fineAmount: 12,
};

/** Strip HTML tags, script URIs, event handlers, and control characters. */
export function stripUnsafeContent(value: string): string {
  return value
    .replace(/<[^>]*>/gi, "")
    .replace(/javascript:/gi, "")
    .replace(/data:/gi, "")
    .replace(/on\w+\s*=/gi, "")
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "");
}

export function sanitizePersonName(value: string): string {
  return stripUnsafeContent(value)
    .replace(/[^a-zA-Z\s.'-]/g, "")
    .slice(0, MAX_LENGTHS.fullName);
}

export function sanitizeAddress(value: string): string {
  return stripUnsafeContent(value)
    .replace(/[^a-zA-Z0-9\s.,#'/()-]/g, "")
    .slice(0, MAX_LENGTHS.propertyAddress);
}

export function sanitizeCompanyName(value: string): string {
  return stripUnsafeContent(value)
    .replace(/[^a-zA-Z0-9\s.&,'()-]/g, "")
    .slice(0, MAX_LENGTHS.hoaManagementCompany);
}

export function sanitizeFineAmount(value: string): string {
  const stripped = stripUnsafeContent(value).replace(/[^\d.]/g, "");
  const parts = stripped.split(".");
  if (parts.length <= 1) {
    return parts[0].slice(0, MAX_LENGTHS.fineAmount);
  }
  const whole = parts[0];
  const fraction = parts.slice(1).join("").slice(0, 2);
  return `${whole}.${fraction}`.slice(0, MAX_LENGTHS.fineAmount);
}

export function sanitizeSupportingDetails(value: string): string {
  return stripUnsafeContent(value)
    .replace(/[<>]/g, "")
    .slice(0, MAX_LENGTHS.supportingDetails);
}

/** Safe plain text for letter preview and export (defense in depth). */
export function sanitizeLetterText(value: string, maxLen = 2000): string {
  return stripUnsafeContent(value)
    .replace(/[<>]/g, "")
    .slice(0, maxLen);
}

export function sanitizeFieldValue<K extends keyof AppealFormData>(
  field: K,
  value: AppealFormData[K]
): AppealFormData[K] {
  if (typeof value !== "string") return value;

  switch (field) {
    case "fullName":
      return sanitizePersonName(value) as AppealFormData[K];
    case "propertyAddress":
      return sanitizeAddress(value) as AppealFormData[K];
    case "hoaManagementCompany":
      return sanitizeCompanyName(value) as AppealFormData[K];
    case "fineAmount":
      return sanitizeFineAmount(value) as AppealFormData[K];
    case "supportingDetails":
      return sanitizeSupportingDetails(value) as AppealFormData[K];
    default:
      return stripUnsafeContent(value) as AppealFormData[K];
  }
}
