import type { StateLegalContent, VerificationStatus } from "./types";

export type StateQualityAssessment = {
  code: string;
  editorialReviewRequired: boolean;
  hasOfficialUrl: boolean;
  hasVerifiedClaim: boolean;
  placeholder: boolean;
  notes: string[];
};

const PLACEHOLDER = /lorem ipsum|\bTODO\b|\bTBD\b|\[insert|coming soon/i;

export function sourceStatusLabel(status?: VerificationStatus): string | null {
  if (status === "verified") {
    return "Checked in our source review. Confirm the live code.";
  }
  if (status === "not-found") {
    return "No section URL stored for a statewide fine rule.";
  }
  if (status === "needs-review") {
    return "Not confirmed in our source check.";
  }
  return null;
}

export function assessStatePageQuality(
  content: StateLegalContent
): StateQualityAssessment {
  const notes: string[] = [];
  const hasOfficialUrl = content.sources.some((source) =>
    Boolean(source.url && /^https?:/i.test(source.url))
  );
  const hasVerifiedClaim = content.sources.some(
    (source) => source.verificationStatus === "verified"
  );
  const text = [
    ...content.overview.paragraphs,
    ...content.statutes.items.map((item) => item.citation),
    ...content.sources.map((source) => source.description),
  ].join(" ");
  const placeholder = PLACEHOLDER.test(text);

  if (!hasOfficialUrl) notes.push("No official source URL stored.");
  if (!hasVerifiedClaim) {
    notes.push("No statewide fine or notice claim is marked verified.");
  }
  if (placeholder) notes.push("Placeholder language detected.");

  return {
    code: content.code,
    editorialReviewRequired: !hasVerifiedClaim || placeholder || !hasOfficialUrl,
    hasOfficialUrl,
    hasVerifiedClaim,
    placeholder,
    notes,
  };
}
