import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LEGAL_LAST_UPDATED, SUPPORT_EMAIL } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy | MyHOAAppeal",
  description:
    "Privacy Policy for MyHOAAppeal. Client-side letter generation, no banking data collected, and disclosures for Google Analytics and Google AdSense.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated={LEGAL_LAST_UPDATED}>
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
        <h2 className="text-xl font-semibold text-white">
          Your data stays on your device
        </h2>
        <p className="mt-3 leading-relaxed">
          The appeal letter wizard runs entirely in your browser. Information you
          enter—such as your name, property address, HOA details, violation
          descriptions, and defense selections—is used locally on your device to
          compile your letter. We do not transmit wizard form contents to our
          servers for storage or processing. We do not require an account to use
          the generator.
        </p>
        <p className="mt-3 leading-relaxed">
          If you copy, download, or print your letter, that export happens on your
          device. We do not store completed appeal letters on our servers unless a
          future feature explicitly states otherwise in an updated policy.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">
          No sensitive banking or payment data
        </h2>
        <p className="mt-3 leading-relaxed">
          MyHOAAppeal does not collect, process, or store sensitive personal
          banking details. We do not ask for or retain payment card numbers, bank
          account numbers, routing numbers, or similar financial credentials
          through the letter generator or this website.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Information we may collect</h2>
        <p className="mt-3 leading-relaxed">
          When you contact us by email or through our contact page, we receive
          only what you choose to send (for example, your name, email address,
          and message text). Our contact form does not upload wizard data to our
          servers.
        </p>
        <p className="mt-3 leading-relaxed">
          We may collect standard web analytics data (such as page views, general
          traffic patterns, and device/browser type) through third-party services
          described in the Cookies, analytics, and advertising section below.
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
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-emerald-400 underline-offset-2 hover:underline"
          >
            {SUPPORT_EMAIL}
          </a>
          . We will respond within the timeframes required by applicable law.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">
          Cookies, analytics, and advertising
        </h2>
        <p className="mt-3 leading-relaxed">
          We may use cookies and similar technologies through{" "}
          <strong className="text-slate-200">Google Analytics</strong> when
          enabled (via our site configuration and measurement ID) to understand
          how visitors use the site, such as which pages are viewed and general
          engagement patterns.
        </p>
        <p className="mt-3 leading-relaxed">
          We may also use cookies and related technologies through{" "}
          <strong className="text-slate-200">Google AdSense</strong> to serve and
          optimize advertisements, measure ad performance, and help prevent fraud.
          Google and its partners may use cookies to personalize ads based on your
          visits to this and other websites, subject to your settings.
        </p>
        <p className="mt-3 leading-relaxed">
          You can manage ad personalization through{" "}
          <a
            href="https://adssettings.google.com"
            className="text-emerald-400 underline-offset-2 hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Google Ads Settings
          </a>
          . Learn more about how Google uses data at{" "}
          <a
            href="https://policies.google.com/technologies/ads"
            className="text-emerald-400 underline-offset-2 hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Google&apos;s advertising technologies policy
          </a>
          . You can also limit tracking through your browser settings or
          applicable opt-out tools provided by Google Analytics.
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
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-emerald-400 underline-offset-2 hover:underline"
          >
            {SUPPORT_EMAIL}
          </a>
        </p>
      </section>
    </LegalPageLayout>
  );
}
