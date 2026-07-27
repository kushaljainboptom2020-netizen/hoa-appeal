import Link from "next/link";
import {
  resolveAttribution,
  type EditorialAttribution,
} from "@/lib/content/editorial/attribution";

type ArticleAttributionProps = {
  attribution: EditorialAttribution;
  /** Optional compact label above the byline */
  eyebrow?: string;
};

export function ArticleAttribution({
  attribution,
  eyebrow,
}: ArticleAttributionProps) {
  const { author, reviewer, publishedAt, updatedAt, reviewedAt } =
    resolveAttribution(attribution);
  const authorQualifications = author.credentials.slice(0, 2);
  const reviewerQualifications = reviewer.credentials.slice(0, 1);

  return (
    <div className="mt-4 space-y-3 border-t border-slate-800/80 pt-4 text-sm text-slate-400">
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
          {eyebrow}
        </p>
      ) : null}

      <div>
        <p>
          <span className="text-slate-500">Written by </span>
          <Link
            href={author.profilePath}
            className="font-medium text-slate-200 underline-offset-2 hover:text-emerald-400 hover:underline"
          >
            {author.name}
          </Link>
          <span className="text-slate-600"> · </span>
          <span className="text-slate-500">{author.title}</span>
        </p>
        {authorQualifications.length > 0 ? (
          <div className="mt-1.5 text-xs leading-relaxed text-slate-500">
            <p className="text-slate-600">Qualifications</p>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              {authorQualifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <div>
        <p>
          <span className="text-slate-500">Reviewed by </span>
          <Link
            href={reviewer.profilePath}
            className="font-medium text-slate-200 underline-offset-2 hover:text-emerald-400 hover:underline"
          >
            {reviewer.name}
          </Link>
          <span className="text-slate-600"> · </span>
          <span className="text-slate-500">{reviewer.title}</span>
        </p>
        {reviewerQualifications.length > 0 ? (
          <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
            <span className="text-slate-600">Qualifications: </span>
            {reviewerQualifications[0]}
          </p>
        ) : null}
      </div>

      <p className="text-xs leading-relaxed text-slate-500">
        Editorial review: {reviewer.name} checks citations, claim balance, and
        disclaimer clarity before publication. See our{" "}
        <Link
          href="/editorial-policy"
          className="text-slate-400 underline-offset-2 hover:text-emerald-400 hover:underline"
        >
          Editorial Policy
        </Link>
        ,{" "}
        <Link
          href="/fact-checking"
          className="text-slate-400 underline-offset-2 hover:text-emerald-400 hover:underline"
        >
          Fact Checking
        </Link>
        , and{" "}
        <Link
          href="/ai-transparency"
          className="text-slate-400 underline-offset-2 hover:text-emerald-400 hover:underline"
        >
          AI Transparency
        </Link>{" "}
        pages.
      </p>

      <p className="flex flex-wrap gap-x-4 gap-y-1 text-slate-500">
        <span>
          Published:{" "}
          <time dateTime={attribution.publishedAtIso}>{publishedAt}</time>
        </span>
        <span>
          Last updated:{" "}
          <time dateTime={attribution.updatedAtIso}>{updatedAt}</time>
        </span>
        <span>
          Last reviewed:{" "}
          <time dateTime={attribution.reviewedAtIso}>{reviewedAt}</time>
        </span>
      </p>
    </div>
  );
}
