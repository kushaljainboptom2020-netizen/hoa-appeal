import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LEGAL_LAST_UPDATED } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "About Us | MyHOAAppeal",
  description:
    "Learn why HOAShield and MyHOAAppeal were created to help U.S. homeowners dispute unfair HOA fines with transparent, formal appeal tools.",
};

export default function AboutPage() {
  return (
    <LegalPageLayout title="About Us" lastUpdated={LEGAL_LAST_UPDATED}>
      <section>
        <h2 className="text-xl font-semibold text-white">Why HOAShield exists</h2>
        <p className="mt-3 leading-relaxed">
          HOAShield was created to level the playing field for homeowners facing
          aggressive property management firms and community associations. Too
          often, residents receive violation notices and fines without clear
          guidance on how to respond formally, on deadline, and in language that
          boards and managers take seriously.
        </p>
        <p className="mt-3 leading-relaxed">
          MyHOAAppeal (myhoaappeal.com) is the public home of that mission: a
          free, accessible way for U.S. homeowners to prepare professionally
          structured appeal letters and to understand the formal dispute pathways
          available under their state and association rules—without needing a
          costly retainer on day one.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Who we serve</h2>
        <p className="mt-3 leading-relaxed">
          We serve homeowners and residents across the{" "}
          <strong className="text-slate-200">United States</strong> who are
          disputing HOA fines, assessments, or violation notices. Whether you are
          challenging a first-time penalty or responding to a pattern of
          enforcement you believe is unfair or inconsistent, our tools are
          designed to help you document your position clearly and respectfully.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">What we provide</h2>
        <p className="mt-3 leading-relaxed">
          MyHOAAppeal offers a browser-based letter generator that compiles formal
          template layouts from information you supply—names, property details,
          violation facts, and defense selections you choose. State-specific pages
          reference general U.S. HOA and property-law concepts to help you frame
          your appeal in context. Your inputs stay on your device; we do not
          require an account to draft a letter.
        </p>
        <p className="mt-3 leading-relaxed">
          Our goal is transparent access: helping you see what a formal written
          dispute can look like so you can copy, print, or mail your letter on
          your own terms.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">What we are not</h2>
        <p className="mt-3 leading-relaxed">
          MyHOAAppeal and HOAShield are not a law firm. We do not provide legal
          advice, representation, or an attorney-client relationship. Generated
          content is educational and template-based. For advice tailored to your
          HOA documents, deadlines, and state law, consult a licensed attorney in
          your jurisdiction.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Get in touch</h2>
        <p className="mt-3 leading-relaxed">
          Questions about the site, privacy, or terms? Visit our{" "}
          <Link
            href="/contact"
            className="text-emerald-400 underline-offset-2 hover:underline"
          >
            Contact
          </Link>{" "}
          page or review our{" "}
          <Link
            href="/terms-of-service"
            className="text-emerald-400 underline-offset-2 hover:underline"
          >
            Terms of Service
          </Link>
          .
        </p>
      </section>
    </LegalPageLayout>
  );
}
