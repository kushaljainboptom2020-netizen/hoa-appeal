import type { AppealFormData } from "@/lib/wizard/formState";

function simpleHash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

export function generateViolationNoticeId(formData: AppealFormData): string {
  const seed = [
    formData.state,
    formData.dateOfNotice,
    formData.violationCategory,
    formData.fineAmount.replace(/[^0-9.]/g, ""),
    formData.propertyAddress.trim().toLowerCase(),
  ].join("|");

  const hash = simpleHash(seed).toString(36).toUpperCase().padStart(6, "0").slice(-6);
  const datePart = formData.dateOfNotice.replace(/-/g, "") || "00000000";
  return `${datePart}-${hash}`;
}
