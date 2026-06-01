import type { Metadata } from "next";
import { ContactForm } from "@/components/legal/ContactForm";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LEGAL_LAST_UPDATED, SUPPORT_EMAIL } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Contact | MyHOAAppeal",
  description:
    "Contact MyHOAAppeal support for site questions, privacy requests, and general inquiries. We do not provide legal advice by email.",
};

export default function ContactPage() {
  return (
    <LegalPageLayout title="Contact Us" lastUpdated={LEGAL_LAST_UPDATED}>
      <section>
        <p className="leading-relaxed">
          We are here to help with questions about MyHOAAppeal, your account-free
          use of the appeal letter generator, privacy requests, and site
          feedback. We typically respond within{" "}
          <strong className="text-slate-200">two business days</strong>.
        </p>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900/50 px-5 py-5 sm:px-6">
        <h2 className="text-lg font-semibold text-white">Direct email</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          Prefer email? Write to{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-emerald-400 underline-offset-2 hover:underline"
          >
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Send a message</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          This form is for general site support only. It does not submit your HOA
          wizard data to our servers. Do not use this form for legal advice,
          emergency disputes, or sensitive banking information.
        </p>
        <div className="mt-6">
          <ContactForm />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Your assurance</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-slate-400">
          <li>
            Support replies address site usage, privacy, and technical issues—not
            legal strategy or outcomes before your HOA board.
          </li>
          <li>
            Information you enter in the appeal wizard never passes through this
            contact form unless you choose to paste it yourself.
          </li>
          <li>
            We do not process or store payment card numbers, bank account numbers,
            or other financial credentials through this page.
          </li>
        </ul>
      </section>
    </LegalPageLayout>
  );
}
