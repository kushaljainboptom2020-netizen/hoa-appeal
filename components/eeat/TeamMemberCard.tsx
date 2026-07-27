import Link from "next/link";
import type { TeamMember } from "@/lib/content/team";

type TeamMemberCardProps = {
  member: TeamMember;
};

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const roleLabel = member.role === "author" ? "Author" : "Reviewer";

  return (
    <article className="border-t border-slate-800/80 py-8 first:border-t-0 first:pt-0">
      <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">
        {roleLabel}
      </p>
      <h2 className="mt-2 text-xl font-semibold text-white">
        <Link
          href={`/authors/${member.slug}`}
          className="underline-offset-2 hover:text-emerald-400 hover:underline"
        >
          {member.name}
        </Link>
      </h2>
      <p className="mt-1 text-sm text-slate-400">{member.title}</p>
      <p className="mt-4 leading-relaxed text-slate-300">{member.bio[0]}</p>
      <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-sm text-slate-500">
        {member.expertise.slice(0, 3).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="mt-4">
        <Link
          href={`/authors/${member.slug}`}
          className="text-sm text-emerald-400 underline-offset-2 hover:underline"
        >
          View full profile
        </Link>
      </p>
    </article>
  );
}
