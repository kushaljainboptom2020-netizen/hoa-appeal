import type { Metadata } from "next";
import Link from "next/link";
import { TeamMemberCard } from "@/components/eeat/TeamMemberCard";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import {
  CONTENT_REVIEWED_AT,
  CONTENT_UPDATED_AT,
} from "@/lib/content/editorial/attribution";
import { getAuthors, getReviewers } from "@/lib/content/team";
import { canonicalPath } from "@/lib/seo/siteUrl";

export const metadata: Metadata = {
  title: "Authors & Reviewers | MyHOAAppeal",
  description:
    "Internal role labels used to organize MyHOAAppeal drafts. These names are not verified outside experts.",
  alternates: {
    canonical: canonicalPath("/authors"),
  },
};

export default function AuthorsIndexPage() {
  const authors = getAuthors();
  const reviewers = getReviewers();

  return (
    <LegalPageLayout
      title="Authors & Reviewers"
      lastUpdated={CONTENT_UPDATED_AT}
      lastReviewed={CONTENT_REVIEWED_AT}
    >
      <section>
        <p className="leading-relaxed">
          Article bylines say MyHOAAppeal Editorial. The names below are
          internal role labels used to organize drafts. This site does not
          publish verifiable outside credentials for them, and it does not
          assign a reviewer by the first letter of a state code. They are not
          attorneys. If you need advice about your fine, hire a lawyer in your
          state. Read the{" "}
          <Link
            href="/editorial-policy"
            className="text-emerald-400 underline-offset-2 hover:underline"
          >
            editorial policy
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Authors</h2>
        <div className="mt-4">
          {authors.map((member) => (
            <TeamMemberCard key={member.slug} member={member} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Reviewers</h2>
        <div className="mt-4">
          {reviewers.map((member) => (
            <TeamMemberCard key={member.slug} member={member} />
          ))}
        </div>
      </section>
    </LegalPageLayout>
  );
}
