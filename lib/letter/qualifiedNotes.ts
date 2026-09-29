/**
 * Letter sentences limited to wording the legal audit already checked.
 * Other states tell the owner to attach the notice and the declaration.
 */

const VERIFIED_NOTES: Record<string, string> = {
  AL: "Alabama condominium associations are organized under Ala. Code § 35-8A. Some planned communities may fall under § 35-20 or only under recorded CC&Rs. This letter does not state a statewide number of days' notice. Confirm which statute applies before you rely on a hearing right.",
  AK: "AS 34.08 is the Alaska Uniform Common Interest Ownership Act, not only a condominium statute. Check AS 34.08.010 for coverage. This letter does not state a 30-day statewide notice window.",
  AZ: "If A.R.S. § 33-1803 applies to this planned community, the board may impose reasonable monetary penalties after notice and an opportunity to be heard, and a member who receives a written property-condition notice may respond by certified mail within 21 calendar days. This letter does not state a 10-day cure period. Condominiums are a different article.",
  CA: "If the Davis-Stirling Act applies, Civil Code § 5855 requires at least 10 days' prior written notice before a meeting to consider or impose discipline, and § 5850 limits a monetary penalty to the lesser of the published schedule or $100 per violation unless the board makes a written open-meeting finding of an adverse health or safety impact. A missed notice is not described here as automatically voiding the fine.",
  CO: "If C.R.S. § 38-33.3-209.5 applies, the text reviewed for this site uses certified mail and 30 days to cure before a fine for a non-safety violation, with total fines for that violation not to exceed $500. Two consecutive 30-day periods are the condition stated before legal action, not a second wait before the first fine. Confirm the current section. CCIOA is Article 33.3, not Article 33.",
  FL: "If § 720.305 applies, the board may not impose a fine unless it first gives at least 14 days' written notice of a hearing before a committee that meets the statute's independence rules. Dollar limits yield where the governing documents provide otherwise. This letter does not say a missed notice voids the fine, and it does not describe the hearing as a hearing before the board. Condominiums are under Chapter 718.",
  NY: "New York condominiums are created under Real Property Law Article 9-B. This letter does not state that New York law requires a fine hearing or a 30-day notice for cooperatives or planned-community HOAs.",
  TX: "If Texas Property Code Chapter 209 applies, § 209.006 requires written notice by certified mail before a fine. For a curable violation that is not a threat to public health or safety, the owner may request a hearing under § 209.007 on or before the 30th day after the notice was mailed. That date is not a rule that the notice itself must give 30 days before a fine. Subsection (d) is a repeat-violation exception.",
  VA: "If Va. Code § 55.1-1819 applies, confirm the current charge limits and hearing sequence on the Virginia LIS site before relying on a dollar figure. The Condominium Act is separate. This letter does not treat a secondary summary as a substitute for the official section.",
};

export function qualifiedNoticeNote(stateCode: string): string {
  const code = stateCode.trim().toUpperCase();
  return (
    VERIFIED_NOTES[code] ??
    "Attach the notice and the declaration sections the association cited. This letter does not state a statewide notice period or fine cap."
  );
}
