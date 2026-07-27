import Link from "next/link";
import type { TeamMember } from "@/lib/content/team";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import {
  CONTENT_REVIEWED_AT,
  CONTENT_UPDATED_AT,
} from "@/lib/content/editorial/attribution";

type TeamMemberProfileProps = {
  member: TeamMember;
};

export function TeamMemberProfile({ member }: TeamMemberProfileProps) {
  const roleLabel = member.role === "author" ? "Author" : "Reviewer";

  return (
    <LegalPageLayout
      title={member.name}
      lastUpdated={CONTENT_UPDATED_AT}
      lastReviewed={CONTENT_REVIEWED_AT}
    >
      <p className="-mt-4 text-sm text-emerald-400">
        {roleLabel} · {member.title}
      </p>

      <section>
        <h2 className="text-xl font-semibold text-white">About</h2>
        {member.bio.map((paragraph) => (
          <p key={paragraph.slice(0, 48)} className="mt-3 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Qualifications</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
          {member.credentials.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Areas of expertise</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
          {member.expertise.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Editorial standards</h2>
        <p className="mt-3 leading-relaxed">
          All educational articles list an author, a reviewer, published,
          updated, and reviewed dates, and a sources section. Learn how we work
          in our{" "}
          <Link
            href="/editorial-policy"
            className="text-emerald-400 underline-offset-2 hover:underline"
          >
            Editorial Policy
          </Link>
          ,{" "}
          <Link
            href="/fact-checking"
            className="text-emerald-400 underline-offset-2 hover:underline"
          >
            Fact Checking
          </Link>
          , and{" "}
          <Link
            href="/ai-transparency"
            className="text-emerald-400 underline-offset-2 hover:underline"
          >
            AI Transparency
          </Link>{" "}
          pages.
        </p>
        <p className="mt-3 leading-relaxed">
          MyHOAAppeal is not a law firm. Team members provide educational content
          and editorial review only—not legal advice or representation.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">More from the team</h2>
        <p className="mt-3 leading-relaxed">
          <Link
            href="/authors"
            className="text-emerald-400 underline-offset-2 hover:underline"
          >
            Browse all authors and reviewers
          </Link>
        </p>
      </section>
    </LegalPageLayout>
  );
}
