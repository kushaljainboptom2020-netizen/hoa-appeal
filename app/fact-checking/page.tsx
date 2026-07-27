import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import {
  CONTENT_REVIEWED_AT,
  CONTENT_UPDATED_AT,
} from "@/lib/content/editorial/attribution";
import { canonicalPath } from "@/lib/seo/siteUrl";

export const metadata: Metadata = {
  title: "Fact Checking Policy | MyHOAAppeal",
  description:
    "How MyHOAAppeal verifies HOA education claims against primary sources, reviews citations, and handles corrections.",
  alternates: {
    canonical: canonicalPath("/fact-checking"),
  },
};

export default function FactCheckingPage() {
  return (
    <LegalPageLayout
      title="Fact Checking"
      lastUpdated={CONTENT_UPDATED_AT}
      lastReviewed={CONTENT_REVIEWED_AT}
    >
      <section>
        <h2 className="text-xl font-semibold text-white">Our standard</h2>
        <p className="mt-3 leading-relaxed">
          Educational claims on MyHOAAppeal should be supportable by cited primary
          or clearly identified secondary sources. We prefer official legislative
          publications, enacted statute text, and recognized government or
          university consumer resources over anonymous forums or unverified
          summaries.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">What we check</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
          <li>Statute citations and short-name references on state pages</li>
          <li>Timeline, notice, and hearing descriptions for overbreadth</li>
          <li>FAQ answers for consistency with the article body and sources</li>
          <li>Whether disclaimer language remains clear and prominent</li>
          <li>That each article includes a Sources and citations section</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Review workflow</h2>
        <p className="mt-3 leading-relaxed">
          Before publication or a material update, a named reviewer evaluates the
          draft against this checklist. The reviewer is listed in the article
          byline with a last reviewed date. Authors and reviewers are identified on
          our{" "}
          <Link
            href="/authors"
            className="text-emerald-400 underline-offset-2 hover:underline"
          >
            Authors
          </Link>{" "}
          pages.
        </p>
        <p className="mt-3 leading-relaxed">
          AI-assisted drafts, when used, still require human source checks and
          editorial approval. See{" "}
          <Link
            href="/ai-transparency"
            className="text-emerald-400 underline-offset-2 hover:underline"
          >
            AI Transparency
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">What we do not claim</h2>
        <p className="mt-3 leading-relaxed">
          Fact checking confirms editorial support for educational statements. It
          does not guarantee that a statute has not changed since review, that a
          particular HOA’s CC&Rs match statewide defaults, or that a defense will
          succeed in your dispute. Always verify current law and your governing
          documents, and consult a licensed attorney for advice about your
          situation.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Corrections</h2>
        <p className="mt-3 leading-relaxed">
          If you find a factual error, outdated citation, or broken source link,
          email us through the{" "}
          <Link
            href="/contact"
            className="text-emerald-400 underline-offset-2 hover:underline"
          >
            Contact
          </Link>{" "}
          page with the article URL, the incorrect passage, and a suggested
          primary source. Substantive corrections update the last reviewed date
          after editorial verification.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Related policies</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
          <li>
            <Link
              href="/editorial-policy"
              className="text-emerald-400 underline-offset-2 hover:underline"
            >
              Editorial Policy
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
        </ul>
      </section>
    </LegalPageLayout>
  );
}
