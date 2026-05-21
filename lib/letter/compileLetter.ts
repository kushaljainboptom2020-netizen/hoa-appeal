import { getStateLabel, getViolationLabel } from "@/lib/wizard/constants";
import { sanitizeLetterText } from "@/lib/wizard/sanitizeInput";
import type { AppealFormData } from "@/lib/wizard/formState";
import { buildDefenseParagraph } from "@/lib/letter/defenseParagraphs";
import { generateViolationNoticeId } from "@/lib/letter/deterministicId";
import { formatCurrency, formatDate, formatToday } from "@/lib/letter/format";
import type { CompiledLetter } from "@/lib/letter/types";

export function compileAppealLetter(formData: AppealFormData): CompiledLetter {
  const violationId = generateViolationNoticeId(formData);
  const stateLabel = getStateLabel(formData.state) || "[State]";
  const violationLabel =
    getViolationLabel(formData.violationCategory) || "[Violation Category]";
  const noticeDate = formatDate(formData.dateOfNotice);
  const fineAmount = formatCurrency(formData.fineAmount);

  const fullName = sanitizeLetterText(formData.fullName, 120);
  const propertyAddress = sanitizeLetterText(formData.propertyAddress, 200);
  const hoaCompany = sanitizeLetterText(formData.hoaManagementCompany, 150);
  const supportingDetails = sanitizeLetterText(formData.supportingDetails, 2000);

  const paragraph1 = `I, ${fullName || "[Your Name]"}, hereby submit this formal written notice of appeal to dispute the violation notice issued against my property. I am formally contesting the violation I received on ${noticeDate} regarding ${violationLabel}, which carries an assessed penalty totaling ${fineAmount}. I do not concede liability for this violation and respectfully demand that the board review this matter in full before any fine is deemed final or collected.`;

  const paragraph2 = buildDefenseParagraph(
    formData.primaryDefenseStrategy,
    supportingDetails
  );

  const paragraph3 = `Pursuant to the governing statutes and administrative guidelines applicable to homeowners associations in ${stateLabel}, I hereby demand a formal hearing before the HOA board of directors at which I may present this appeal and all supporting evidence. I further request that the association produce all photographic evidence, inspection reports, violation logs, and proof of tracking or certified delivery relied upon in connection with this violation notice. I reserve all rights available to me under the association's governing documents and applicable state law pending resolution of this appeal.`;

  return {
    headerLeft: {
      lines: [
        formatToday(),
        hoaCompany || "[HOA Management Company]",
        stateLabel,
      ],
    },
    headerRight: {
      lines: [
        fullName || "[Your Name]",
        propertyAddress || "[Your Address]",
      ],
    },
    subject: `FORMAL NOTICE OF APPEAL: VIOLATION NOTICE # ${violationId}`,
    paragraphs: [
      sanitizeLetterText(paragraph1, 8000),
      sanitizeLetterText(paragraph2, 8000),
      sanitizeLetterText(paragraph3, 8000),
    ],
    signOff: `Sincerely,\n${fullName || "[Your Name]"}`,
  };
}

function blockToPlainText(block: { lines: string[] }): string {
  return block.lines.join("\n");
}

export function compiledLetterToPlainText(letter: CompiledLetter): string {
  return [
    blockToPlainText(letter.headerLeft),
    "",
    blockToPlainText(letter.headerRight),
    "",
    letter.subject,
    "",
    ...letter.paragraphs,
    "",
    letter.signOff,
  ].join("\n");
}
