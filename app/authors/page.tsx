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
    "Meet the MyHOAAppeal editorial authors and reviewers who write and fact-check educational HOA fine appeal guides.",
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
          Educational articles on MyHOAAppeal list a named author and reviewer so
          readers can see who wrote and checked the page. Profiles describe
          editorial focus areas—not legal representation. Learn how we publish in
          our{" "}
          <Link
            href="/editorial-policy"
            className="text-emerald-400 underline-offset-2 hover:underline"
          >
            Editorial Policy
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
