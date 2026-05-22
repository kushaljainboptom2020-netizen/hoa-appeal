import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms of Service | MyHOAAppeal",
  description:
    "Terms of Service for MyHOAAppeal, a free US HOA fine appeal letter generator. Governed by Delaware law.",
};

const LAST_UPDATED = "May 22, 2026";

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Service" lastUpdated={LAST_UPDATED}>
      <section>
        <h2 className="text-xl font-semibold text-white">Agreement</h2>
        <p className="mt-3 leading-relaxed">
          By accessing or using MyHOAAppeal (the &quot;Site&quot;), you agree to
          these Terms of Service. If you do not agree, do not use the Site.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">United States users</h2>
        <p className="mt-3 leading-relaxed">
          The Site is designed for users in the{" "}
          <strong className="text-slate-200">United States</strong> seeking to
          prepare HOA or community association fine appeal and dispute letters.
          Content references U.S. state laws and HOA practices. The Site is not
          intended for use where local law would prohibit access or where HOA
          disputes are governed by non-U.S. law.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Service description</h2>
        <p className="mt-3 leading-relaxed">
          MyHOAAppeal offers a free online tool to generate formatted appeal
          letter drafts based on information you provide. The tool may reference
          general concepts from applicable U.S. state HOA and property statutes
          on state-specific pages, but output is not a substitute for professional
          legal review.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">No legal advice</h2>
        <p className="mt-3 leading-relaxed">
          MyHOAAppeal is not a law firm and does not provide legal advice,
          representation, or attorney-client relationships. You are responsible
          for verifying that any letter meets your HOA&apos;s requirements,
          deadlines, and the laws of your U.S. state. Consult a qualified attorney
          in your jurisdiction before relying on any generated document.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Your responsibilities</h2>
        <p className="mt-3 leading-relaxed">
          You agree to provide accurate information in the wizard, use the Site
          lawfully, and not misuse the service (including attempting to disrupt
          the Site, scrape it at abusive rates, or use it for fraudulent purposes).
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Disclaimer of warranties</h2>
        <p className="mt-3 leading-relaxed">
          The Site and generated letters are provided &quot;as is&quot; and
          &quot;as available&quot; without warranties of any kind, express or
          implied, including fitness for a particular purpose or accuracy of legal
          outcomes. We do not guarantee that an appeal will succeed or that any
          HOA will accept your letter.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Limitation of liability</h2>
        <p className="mt-3 leading-relaxed">
          To the fullest extent permitted by law, MyHOAAppeal and its operators
          shall not be liable for indirect, incidental, special, consequential,
          or punitive damages arising from your use of the Site or any generated
          documents, including lost fines, penalties, or legal costs.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Affiliate and third-party links</h2>
        <p className="mt-3 leading-relaxed">
          The Site may display links or offers from third parties (such as mail
          services or legal referral partners). We are not responsible for
          third-party products, services, or terms. Your use of third-party sites
          is at your own risk.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Privacy</h2>
        <p className="mt-3 leading-relaxed">
          Our collection and use of information is described in our{" "}
          <a href="/privacy" className="text-emerald-400 underline-offset-2 hover:underline">
            Privacy Policy
          </a>
          , including rights for California residents under the CCPA/CPRA.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Governing law and venue</h2>
        <p className="mt-3 leading-relaxed">
          These Terms are governed by the laws of the State of{" "}
          <strong className="text-slate-200">Delaware</strong>, without regard to
          its conflict-of-law rules. You agree that exclusive jurisdiction for
          disputes relating to these Terms or the Site shall lie in the state or
          federal courts located in Delaware, except where applicable consumer
          protection laws in your home state provide otherwise.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Changes</h2>
        <p className="mt-3 leading-relaxed">
          We may update these Terms from time to time. Continued use of the Site
          after changes are posted constitutes acceptance of the revised Terms.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Contact</h2>
        <p className="mt-3 leading-relaxed">
          Questions about these Terms:{" "}
          <a
            href="mailto:insighteyecare9988@gmail.com"
            className="text-emerald-400 underline-offset-2 hover:underline"
          >
            insighteyecare9988@gmail.com
          </a>
        </p>
      </section>
    </LegalPageLayout>
  );
}
