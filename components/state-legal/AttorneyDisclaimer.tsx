type AttorneyDisclaimerProps = {
  /** State name for state pages, or a short label like "this guide". */
  stateName?: string;
  contextLabel?: string;
};

export function AttorneyDisclaimer({
  stateName,
  contextLabel,
}: AttorneyDisclaimerProps) {
  const place = contextLabel ?? (stateName ? `${stateName}` : "this resource");
  const jurisdiction = stateName
    ? `HOA and condominium law in ${stateName}`
    : "HOA and condominium law";
  const attorneyWhere = stateName
    ? `in ${stateName}`
    : "in your state";

  return (
    <aside
      id="attorney-disclaimer"
      className="scroll-mt-24 rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-5"
      aria-label="Legal disclaimer"
    >
      <h2 className="text-lg font-semibold text-amber-200">Attorney disclaimer</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        The information on {place} is provided for general educational purposes
        only. MyHOAAppeal is not a law firm, and nothing here creates an
        attorney-client relationship. {jurisdiction} changes through legislation,
        administrative rules, and court decisions; your recorded CC&amp;Rs,
        bylaws, and fine schedules may impose requirements beyond what statutes
        describe.
      </p>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        Before recording a lien response, attending a formal hearing with
        association counsel present, or filing suit, consult a licensed attorney
        who practices community association or real property law {attorneyWhere}.
        Deadlines for internal appeals, mediation, and litigation are often
        strict and may not be extended because you relied on general web content.
      </p>
    </aside>
  );
}
