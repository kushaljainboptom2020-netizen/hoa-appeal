import Link from "next/link";
import type { StateSource } from "@/lib/content/states/types";

type CitationSource = Pick<StateSource, "citation" | "description"> & {
  url?: string;
};

type SourcesAndCitationsProps = {
  sources: CitationSource[];
  stateName?: string;
  intro?: string;
};

export function SourcesAndCitations({
  sources,
  stateName,
  intro,
}: SourcesAndCitationsProps) {
  const introText =
    intro ??
    `Primary references used to compile this ${stateName ?? ""} HOA law overview. Verify current text through official state legislative services before citing in formal correspondence.`.replace(
      /\s+/g,
      " "
    );

  return (
    <section id="sources" className="scroll-mt-24">
      <h2 className="text-xl font-semibold text-white sm:text-2xl">
        Sources and citations
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-400">{introText}</p>
      <p className="mt-3 text-sm leading-relaxed text-slate-500">
        How we verify claims: see our{" "}
        <Link
          href="/fact-checking"
          className="text-emerald-400 underline-offset-2 hover:underline"
        >
          Fact Checking policy
        </Link>{" "}
        and{" "}
        <Link
          href="/editorial-policy"
          className="text-emerald-400 underline-offset-2 hover:underline"
        >
          Editorial Policy
        </Link>
        .
      </p>
      <ol className="mt-6 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-slate-300">
        {sources.map((source) => (
          <li key={source.citation}>
            <cite className="not-italic">
              <span className="font-medium text-slate-200">{source.citation}</span>
              {" — "}
              {source.description}
              {source.url && (
                <>
                  {" "}
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 underline-offset-2 hover:underline"
                  >
                    View source
                  </a>
                </>
              )}
            </cite>
          </li>
        ))}
      </ol>
    </section>
  );
}
