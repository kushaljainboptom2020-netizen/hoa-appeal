import type { ReactNode } from "react";

export type HoaAppealFaqItem = {
  id: string;
  question: string;
  answer: ReactNode;
};

const p = (className: string) => `mt-4 leading-relaxed text-slate-300 ${className}`;

export const HOA_APPEAL_FAQ_ITEMS: HoaAppealFaqItem[] = [
  {
    id: "legal-rights-appealing-hoa-fine",
    question: "What are my legal rights when appealing an HOA fine?",
    answer: (
      <>
        <p className={p("mt-0")}>
          When you receive a homeowners association (HOA) fine or violation notice,
          you are not simply accepting a bill from a private company. In most U.S.
          communities, the association must follow its own governing documents—
          typically the Declaration of Covenants, Conditions, and Restrictions
          (CC&amp;Rs), bylaws, and rules—and often must also comply with state
          property or condominium statutes that define notice periods, due process,
          and owner appeal rights before a penalty becomes final.
        </p>
        <p className={p("")}>
          <strong className="text-slate-200">Written notice</strong> is the
          foundation of a lawful HOA fine appeal. Boards and management companies
          are generally required to describe the alleged violation with enough
          specificity that you can understand what rule was broken, when it
          occurred, and what cure or correction is expected. Vague notices such as
          &quot;landscaping noncompliance&quot; without dates, photos, or rule
          citations are a common basis for challenging an HOA fine in writing.
        </p>
        <p className={p("")}>
          <strong className="text-slate-200">Due process and hearing procedures</strong>{" "}
          vary by state and by your recorded documents. Many associations must offer
          a reasonable opportunity to be heard—through a violation committee,
          board hearing, or internal appeal panel—before suspending privileges,
          assessing daily fines, or recording liens. Your legal rights when appealing
          an HOA fine often include:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-slate-300">
          <li>Receiving advance written notice of the violation and proposed penalty</li>
          <li>Reviewing the evidence the association relies upon (photos, inspection logs, third-party reports)</li>
          <li>Presenting your defense, witnesses, or mitigating circumstances at a hearing</li>
          <li>Receiving a written decision with the basis for upholding or reducing the fine</li>
          <li>Pursuing further internal appeal or dispute resolution if your documents allow it</li>
        </ul>
        <p className={p("")}>
          Exercising these rights early—through a formal HOA fine appeal letter that
          cites your community rules and applicable state HOA law—creates a clear
          paper trail. That record matters if the dispute escalates to mediation,
          arbitration, or court, and it signals to the board that you understand
          procedural requirements rather than ignoring the penalty.
        </p>
      </>
    ),
  },
  {
    id: "write-formal-hoa-dispute-letter",
    question: "How do I write a formal dispute letter to a Homeowners Association?",
    answer: (
      <>
        <p className={p("mt-0")}>
          A formal dispute letter to a homeowners association is a business
          correspondence, not a casual email or text to your property manager. The
          goal is to document your position, preserve appeal deadlines, and request
          specific relief—such as withdrawal of the fine, a hearing, or production
          of records—using a tone that is firm, respectful, and unmistakably
          professional.
        </p>
        <p className={p("")}>
          Start with a clear header block: your name, property address, account or
          lot number, the date, and the HOA or management company&apos;s formal name
          and mailing address. Reference the violation notice by date and tracking
          number if one was provided. In the opening paragraph, state plainly that
          you are appealing the HOA fine or contesting the violation and that you
          reserve all rights under the CC&amp;Rs and state law.
        </p>
        <p className={p("")}>
          The body of your HOA dispute letter should cite rules clearly. Quote or
          paraphrase the exact covenant, rule section, or fine schedule the board
          claims you violated, then explain factually why the citation does not
          apply—or why the association failed to follow its own enforcement
          procedure. Use short paragraphs and bullet points for timelines, such as:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-slate-300">
          <li>When you received notice versus when the alleged violation occurred</li>
          <li>Whether a cure period was offered before fines began accruing</li>
          <li>Any prior inconsistent enforcement against neighboring properties</li>
          <li>Requests for a hearing date or written decision within a stated timeframe</li>
        </ul>
        <p className={p("")}>
          Close with a specific call to action: confirm receipt of your appeal,
          suspend further late fees pending resolution, and provide contact
          information for your preferred method of response. Mail or deliver the
          letter in a way that creates proof of sending—certified mail or email
          with read receipt—so you can demonstrate compliance with appeal timelines
          if the association later claims you missed a deadline.
        </p>
      </>
    ),
  },
  {
    id: "hoa-fine-without-proof-photos",
    question:
      "Can an HOA fine you without proof or photographic evidence?",
    answer: (
      <>
        <p className={p("mt-0")}>
          An HOA may impose fines only within the authority granted by its governing
          documents and state law. While many rules do not require photographic
          evidence in every case, associations still must support enforcement with
          reasonable documentation—inspection reports, dated photos, vendor
          invoices, or witness statements—especially when fines are recurring or
          substantial. A penalty issued without proof is often vulnerable to challenge
          as arbitrary or inconsistent enforcement.
        </p>
        <p className={p("")}>
          <strong className="text-slate-200">Arbitrary enforcement clauses</strong> in
          CC&amp;Rs and fair-housing principles both discourage selective punishment.
          If your board fines you for a brown lawn but ignores identical conditions
          on adjacent lots, or if a camera never captured the alleged parking
          violation, your HOA fine appeal should request the complete enforcement
          file. Ask when the inspection occurred, who conducted it, and whether
          standardized notice templates were used.
        </p>
        <p className={p("")}>
          You may also have rights to submit a{" "}
          <strong className="text-slate-200">records request</strong> under your
          state&apos;s HOA or nonprofit corporation act. Many statutes allow owners
          to inspect books and records reasonably related to the dispute, including
          violation logs, email chains between the manager and board, and
          photographs stored on a portal. If the association refuses to produce
          evidence while demanding payment, say so explicitly in your dispute letter
          and tie the refusal to your request for a hearing.
        </p>
        <p className={p("")}>
          Photographs are not always dispositive—some violations are proven by
          surveys, permits, or architectural review denials—but the burden should
          not fall entirely on the homeowner to disprove an undisclosed allegation.
          Document your own counter-evidence (dated photos, receipts, landscaping
          contracts) and attach it to your appeal packet when possible.
        </p>
      </>
    ),
  },
  {
    id: "refuse-pay-unverified-hoa-penalty",
    question:
      "What happens if you refuse to pay an unverified HOA violation penalty?",
    answer: (
      <>
        <p className={p("mt-0")}>
          Ignoring an HOA violation notice rarely makes the problem disappear. If
          you refuse to pay an unverified penalty without responding in writing,
          the association may treat the amount as delinquent and begin statutory
          escalations permitted under your documents and state law—late fees,
          interest, suspension of facility access, referral to collections, and in
          serious cases, preparation of a lien or foreclosure action after
          required notices and hearings.
        </p>
        <p className={p("")}>
          That does not mean you must pay a fine you believe is wrongful. The
          safer strategy is to{" "}
          <strong className="text-slate-200">dispute first, in writing</strong>,
          while understanding how your state treats pending assessments. Some
          owners pay under protest to stop lien clocks, then continue the appeal;
          others withhold payment until a hearing outcome. Your CC&amp;Rs and state
          HOA statutes define whether fines must be stayed during an internal
          appeal—cite those provisions in your letter.
        </p>
        <p className={p("")}>
          Typical escalation paths include:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-slate-300">
          <li>Additional daily or weekly fines until the violation is cured</li>
          <li>Legal demand letters from association counsel</li>
          <li>Recording a lien against your property for unpaid assessments or fines</li>
          <li>Foreclosure or judicial collection in extreme cases, subject to state notice requirements</li>
        </ul>
        <p className={p("")}>
          Timely formal appeals matter because they interrupt the narrative that you
          agreed to the charge by silence. Even if you ultimately negotiate a
          reduced amount, a documented HOA fine appeal shows you contested the
          violation on the record—protecting your rights and creating leverage for
          mediation or state regulatory complaints where available.
        </p>
      </>
    ),
  },
  {
    id: "hoa-appeal-deadlines-liens",
    question:
      "How long do you have to appeal an HOA fine before penalties escalate?",
    answer: (
      <>
        <p className={p("mt-0")}>
          HOA appeal deadlines are a blend of contractual time limits in your
          governing documents and mandatory timelines under state HOA, condominium,
          or planned-community statutes. Some associations require a written appeal
          within ten to thirty days of the violation notice; others tie appeals to
          the date of a scheduled hearing. Missing a deadline can allow the board
          to argue your challenge is untimely even if the underlying fine was weak.
        </p>
        <p className={p("")}>
          Read your notice carefully for phrases such as &quot;appeal within 15
          days,&quot; &quot;request a hearing before fines double,&quot; or
          &quot;failure to respond constitutes waiver.&quot; Calendar the postmark
          date, not the day you opened the letter. If the notice is ambiguous, send
          a short letter preserving your rights immediately while you gather
          records—do not wait for perfect evidence before opening the appeal clock.
        </p>
        <p className={p("")}>
          Penalties often escalate on a fixed schedule: initial notice, cure period,
          daily fines, referral to counsel, then lien filing. State law may require
          additional owner notice before a lien is recorded or before foreclosure
          proceedings begin. Understanding{" "}
          <strong className="text-slate-200">how long you have to appeal an HOA
          fine</strong> in your jurisdiction helps you prioritize a formal dispute
          letter over informal conversations with the manager, which may not stop
          automated accounting systems from posting charges.
        </p>
        <p className={p("")}>
          If you are near a deadline, submit a complete appeal using every available
          defense and attachment, then supplement with photos or expert statements
          later if your rules allow. The first filing&apos;s purpose is to protect
          your procedural rights; depth can follow without surrendering timeliness.
        </p>
      </>
    ),
  },
];
