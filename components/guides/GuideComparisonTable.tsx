import type { GuideComparisonTable } from "@/lib/content/guides/types";

type GuideComparisonTableViewProps = {
  table: GuideComparisonTable;
};

export function GuideComparisonTableView({ table }: GuideComparisonTableViewProps) {
  return (
    <div className="mt-6">
      <p className="text-sm leading-relaxed text-slate-400">{table.intro}</p>
      <div className="mt-5 overflow-x-auto rounded-lg border border-slate-800">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-900/60">
              <th className="px-4 py-3 font-semibold text-white">Factor</th>
              {table.columns.map((column) => (
                <th key={column} className="px-4 py-3 font-semibold text-emerald-400">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row.label} className="border-b border-slate-800/80 last:border-0">
                <td className="px-4 py-3 font-medium text-slate-200">{row.label}</td>
                {row.values.map((value, index) => (
                  <td
                    key={`${row.label}-${table.columns[index]}`}
                    className="px-4 py-3 leading-relaxed text-slate-400"
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
