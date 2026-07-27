import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import {
  CONTENT_REVIEWED_AT,
  CONTENT_UPDATED_AT,
} from "@/lib/content/editorial/attribution";
import { canonicalPath } from "@/lib/seo/siteUrl";

export const metadata: Metadata = {
  title: "Editorial Policy | MyHOAAppeal",
  description:
    "How MyHOAAppeal researches, writes, reviews, and updates educational HOA fine appeal content—including authorship, sourcing, and corrections.",
  alternates: {
    canonical: canonicalPath("/editorial-policy"),
  },
};

export default function EditorialPolicyPage() {
  return (
    <LegalPageLayout
      title="Editorial Policy"
      lastUpdated={CONTENT_UPDATED_AT}
      lastReviewed={CONTENT_REVIEWED_AT}
    >
      <section>
        <h2 className="text-xl font-semibold text-white">Purpose</h2>
        <p className="mt-3 leading-relaxed">
          MyHOAAppeal publishes educational guides and state HOA fine resources to
          help U.S. homeowners understand common notice, hearing, and appeal
          workflows. This policy explains how we create, attribute, review, and
          correct that content.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">What we publish</h2>
        <p className="mt-3 leading-relaxed">
          We publish consumer-education articles about HOA fines, evidence,
          hearings, liens, and related terminology, plus state overview pages that
          summarize commonly cited statutes and typical process steps. We do not
          publish personalized legal advice, case strategy for a specific dispute,
          or attorney advertising.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Authorship and review</h2>
        <p className="mt-3 leading-relaxed">
          Every educational article lists a named{" "}
          <Link
            href="/authors"
            className="text-emerald-400 underline-offset-2 hover:underline"
          >
            author
          </Link>{" "}
          and a named reviewer, with last updated and last reviewed dates. Authors
          draft and revise educational copy. Reviewers check sourcing, clarity,
          disclaimer language, and consistency with this policy before
          republication.
        </p>
        <p className="mt-3 leading-relaxed">
          Authors and reviewers are editorial contributors. They are not MyHOAAppeal
          attorneys, and an author or reviewer byline does not create an
          attorney-client relationship.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Sources and citations</h2>
        <p className="mt-3 leading-relaxed">
          Articles include a Sources and citations section listing primary
          references used while compiling the page—typically official legislative
          publications, statute compilations, and related educational materials.
          Readers should verify current statutory text before citing it in formal
          correspondence. Details of our verification steps are on the{" "}
          <Link
            href="/fact-checking"
            className="text-emerald-400 underline-offset-2 hover:underline"
          >
            Fact Checking
          </Link>{" "}
          page.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Updates and corrections</h2>
        <p className="mt-3 leading-relaxed">
          We update articles when statutes, process descriptions, or internal
          standards change, and we record a new last updated date. Material factual
          corrections are reviewed again and receive a refreshed last reviewed
          date. If you believe a page contains an error, contact us via the{" "}
          <Link
            href="/contact"
            className="text-emerald-400 underline-offset-2 hover:underline"
          >
            Contact
          </Link>{" "}
          page with the URL and the correction you recommend.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Independence and limits</h2>
        <p className="mt-3 leading-relaxed">
          Editorial decisions prioritize clarity and source support for homeowners.
          Sponsored or affiliate placements, when present, are labeled separately
          from educational copy. MyHOAAppeal is not a law firm; educational content
          cannot replace advice from a licensed attorney in your jurisdiction.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Related policies</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
          <li>
            <Link
              href="/fact-checking"
              className="text-emerald-400 underline-offset-2 hover:underline"
            >
              Fact Checking
            </Link>
          </li>
          <li>
            <Link
              href="/ai-transparency"
              className="text-emerald-400 underline-offset-2 hover:underline"
            >
              AI Transparency
            </Link>
          </li>
          <li>
            <Link
              href="/authors"
              className="text-emerald-400 underline-offset-2 hover:underline"
            >
              Authors and reviewers
            </Link>
          </li>
        </ul>
      </section>
    </LegalPageLayout>
  );
}
