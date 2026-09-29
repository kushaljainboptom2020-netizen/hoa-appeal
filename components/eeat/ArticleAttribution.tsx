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
  const { publishedAt, updatedAt } = resolveAttribution(attribution);

  return (
    <div className="mt-4 space-y-3 border-t border-slate-800/80 pt-4 text-sm text-slate-400">
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
          {eyebrow}
        </p>
      ) : null}

      <p>
        <span className="text-slate-500">Written by </span>
        <span className="font-medium text-slate-200">MyHOAAppeal Editorial</span>
      </p>
      <p className="text-xs leading-relaxed text-slate-500">
        This is an organizational credit. Named profiles on the{" "}
        <Link
          href="/authors"
          className="text-slate-400 underline-offset-2 hover:text-emerald-400 hover:underline"
        >
          authors
        </Link>{" "}
        page are internal role labels, not verified outside experts. A date on
        this page is a content edit, not an attorney review of every statute.
        See the{" "}
        <Link
          href="/editorial-policy"
          className="text-slate-400 underline-offset-2 hover:text-emerald-400 hover:underline"
        >
          editorial policy
        </Link>{" "}
        and{" "}
        <Link
          href="/fact-checking"
          className="text-slate-400 underline-offset-2 hover:text-emerald-400 hover:underline"
        >
          fact-checking
        </Link>{" "}
        notes.
      </p>

      <p className="flex flex-wrap gap-x-4 gap-y-1 text-slate-500">
        <span>
          Published:{" "}
          <time dateTime={attribution.publishedAtIso}>{publishedAt}</time>
        </span>
        <span>
          Content edited:{" "}
          <time dateTime={attribution.updatedAtIso}>{updatedAt}</time>
        </span>
      </p>
    </div>
  );
}
