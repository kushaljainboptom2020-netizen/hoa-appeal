import type { StateStatute } from "@/lib/content/states/types";

type StateStatuteListProps = {
  items: StateStatute[];
};

export function StateStatuteList({ items }: StateStatuteListProps) {
  return (
    <dl className="mt-6 space-y-4">
      {items.map((statute) => (
        <div
          key={statute.citation}
          className="rounded-lg border border-slate-800 bg-slate-900/40 px-4 py-3"
        >
          <dt className="font-mono text-sm font-medium text-emerald-400">
            {statute.citation}
          </dt>
          <dd className="mt-2 text-sm leading-relaxed text-slate-300">
            {statute.summary}
          </dd>
        </div>
      ))}
    </dl>
  );
}
