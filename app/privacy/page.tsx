import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | MyHOAAppeal",
  description:
    "Privacy Policy for MyHOAAppeal, a free US HOA fine appeal letter generator. Includes CCPA rights for California residents.",
};

const LAST_UPDATED = "May 22, 2026";

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated={LAST_UPDATED}>
      <section>
        <h2 className="text-xl font-semibold text-white">United States service</h2>
        <p className="mt-3 leading-relaxed">
          MyHOAAppeal is intended for homeowners and residents in the{" "}
          <strong className="text-slate-200">United States</strong> who are
          disputing fines or violations issued by a homeowners association (HOA)
          or community association. This site is not directed at users outside the
          U.S.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Information we collect</h2>
        <p className="mt-3 leading-relaxed">
          The appeal letter wizard runs primarily in your browser. Information
          you enter (name, property address, HOA details, violation details, and
          defense selections) is used to generate your letter on your device. We
          do not require an account to use the generator.
        </p>
        <p className="mt-3 leading-relaxed">
          If you copy, download, or print your letter, that export happens on
          your device. We do not store your completed appeal letters on our
          servers unless a future feature explicitly states otherwise.
        </p>
        <p className="mt-3 leading-relaxed">
          We may collect standard web analytics data (such as page views and
          general traffic patterns) through Google Analytics when enabled. See
          the Cookies and analytics section below.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">
          We do not sell your personal information
        </h2>
        <p className="mt-3 leading-relaxed">
          MyHOAAppeal does not sell personal information to third parties. We do
          not share wizard form contents with data brokers.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">
          California residents (CCPA / CPRA)
        </h2>
        <p className="mt-3 leading-relaxed">
          If you are a California resident, you may have rights under the
          California Consumer Privacy Act (CCPA), as amended by the California
          Privacy Rights Act (CPRA), including:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
          <li>The right to know what personal information we collect and how it is used</li>
          <li>The right to request deletion of personal information we hold about you</li>
          <li>The right to opt out of the sale or sharing of personal information (we do not sell personal information)</li>
          <li>The right not to receive discriminatory treatment for exercising these rights</li>
        </ul>
        <p className="mt-3 leading-relaxed">
          To submit a privacy request, contact us at{" "}
          <a
            href="mailto:insighteyecare9988@gmail.com"
            className="text-emerald-400 underline-offset-2 hover:underline"
          >
            insighteyecare9988@gmail.com
          </a>
          . We will respond within the timeframes required by applicable law.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Cookies and analytics</h2>
        <p className="mt-3 leading-relaxed">
          We may use cookies or similar technologies through Google Analytics to
          understand how visitors use the site. You can limit tracking through
          your browser settings or applicable opt-out tools provided by Google.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Third-party links</h2>
        <p className="mt-3 leading-relaxed">
          The site may link to third-party services (for example, certified mail
          or legal referral partners). Those sites have their own privacy
          policies. We are not responsible for their practices.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Not legal advice</h2>
        <p className="mt-3 leading-relaxed">
          MyHOAAppeal provides document templates and educational content related
          to U.S. HOA disputes. We are not a law firm and do not provide legal
          advice. Consult a licensed attorney in your state for advice specific to
          your situation and applicable state HOA or property laws.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Governing law</h2>
        <p className="mt-3 leading-relaxed">
          This Privacy Policy is governed by the laws of the State of Delaware,
          without regard to conflict-of-law principles, except where federal or
          state privacy laws (including California privacy laws) require
          otherwise.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Contact</h2>
        <p className="mt-3 leading-relaxed">
          Privacy questions:{" "}
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
