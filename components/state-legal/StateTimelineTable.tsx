import type { StateTimelineEvent } from "@/lib/content/states/types";

type StateTimelineTableProps = {
  events: StateTimelineEvent[];
};

export function StateTimelineTable({ events }: StateTimelineTableProps) {
  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-slate-800">
      <table className="w-full min-w-[480px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-800 bg-slate-900/60">
            <th className="px-4 py-3 font-semibold text-white">Stage</th>
            <th className="px-4 py-3 font-semibold text-white">Typical window</th>
            <th className="px-4 py-3 font-semibold text-white">Notes</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.label} className="border-b border-slate-800/80 last:border-0">
              <td className="px-4 py-3 font-medium text-slate-200">{event.label}</td>
              <td className="px-4 py-3 text-emerald-400">{event.duration}</td>
              <td className="px-4 py-3 leading-relaxed text-slate-400">{event.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
