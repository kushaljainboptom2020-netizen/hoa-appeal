import type { StateEvidenceCategory } from "@/lib/content/states/types";

type StateEvidenceChecklistProps = {
  categories: StateEvidenceCategory[];
};

export function StateEvidenceChecklist({ categories }: StateEvidenceChecklistProps) {
  return (
    <div className="mt-6 space-y-5">
      {categories.map((category) => (
        <div
          key={category.category}
          className="rounded-lg border border-slate-800 bg-slate-900/40 p-4"
        >
          <h3 className="font-medium text-white">{category.category}</h3>
          <ul className="mt-3 list-none space-y-2">
            {category.items.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                <span
                  className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-slate-600"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
