import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import {
  CONTENT_REVIEWED_AT,
  CONTENT_UPDATED_AT,
} from "@/lib/content/editorial/attribution";
import { canonicalPath } from "@/lib/seo/siteUrl";

export const metadata: Metadata = {
  title: "AI Transparency | MyHOAAppeal",
  description:
    "How MyHOAAppeal uses AI-assisted drafting for educational HOA content, and how humans review, fact-check, and publish that content.",
  alternates: {
    canonical: canonicalPath("/ai-transparency"),
  },
};

export default function AiTransparencyPage() {
  return (
    <LegalPageLayout
      title="AI Transparency"
      lastUpdated={CONTENT_UPDATED_AT}
      lastReviewed={CONTENT_REVIEWED_AT}
    >
      <section>
        <h2 className="text-xl font-semibold text-white">Summary</h2>
        <p className="mt-3 leading-relaxed">
          MyHOAAppeal uses AI-assisted drafting tools to help produce educational
          guide and state resource copy at scale. AI does not publish on its own.
          Named human authors and reviewers are responsible for sourcing,
          accuracy checks, disclaimer language, and final publication decisions.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Where AI may be used</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
          <li>
            Drafting long-form educational sections for guides and state overview
            pages from editorial outlines and research notes
          </li>
          <li>
            Suggesting FAQ phrasing, headings, and internal-link descriptions for
            editor review
          </li>
          <li>
            Helping normalize structure so articles consistently include sources,
            attribution, and disclaimers
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Where AI is not used</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
          <li>
            Providing legal advice, case predictions, or personalized strategy for
            your dispute
          </li>
          <li>
            Replacing human fact checking of statute citations and source lists
          </li>
          <li>
            Deciding whether content is ready to publish without editorial review
          </li>
          <li>
            Processing the appeal-letter wizard inputs you enter in your browser
            for training or remote storage (wizard data stays on your device; see
            our{" "}
            <Link
              href="/privacy-policy"
              className="text-emerald-400 underline-offset-2 hover:underline"
            >
              Privacy Policy
            </Link>
            )
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Human oversight</h2>
        <p className="mt-3 leading-relaxed">
          Every educational article displays an author, a reviewer, last updated
          and last reviewed dates, and a Sources and citations section. Reviewers
          follow the{" "}
          <Link
            href="/fact-checking"
            className="text-emerald-400 underline-offset-2 hover:underline"
          >
            Fact Checking
          </Link>{" "}
          checklist and the{" "}
          <Link
            href="/editorial-policy"
            className="text-emerald-400 underline-offset-2 hover:underline"
          >
            Editorial Policy
          </Link>
          . Meet the team on our{" "}
          <Link
            href="/authors"
            className="text-emerald-400 underline-offset-2 hover:underline"
          >
            Authors
          </Link>{" "}
          pages.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Your responsibility</h2>
        <p className="mt-3 leading-relaxed">
          Even after human review, educational content can become outdated as laws
          and association documents change. Confirm current statute text and your
          CC&Rs before relying on any citation, and consult a licensed attorney for
          advice about your situation.
        </p>
      </section>
    </LegalPageLayout>
  );
}
