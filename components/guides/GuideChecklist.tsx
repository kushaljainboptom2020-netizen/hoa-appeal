import type { GuideChecklistAsset } from "@/lib/content/guides/types";

type GuideChecklistProps = {
  checklist: GuideChecklistAsset;
};

export function GuideChecklist({ checklist }: GuideChecklistProps) {
  return (
    <div className="mt-6">
      <p className="text-sm leading-relaxed text-slate-400">{checklist.intro}</p>
      <div className="mt-5 space-y-5">
        {checklist.categories.map((category) => (
          <div
            key={category.category}
            className="rounded-lg border border-slate-800 bg-slate-900/40 p-4"
          >
            <h3 className="font-medium text-white">{category.category}</h3>
            <ul className="mt-3 list-none space-y-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-slate-300"
                >
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
    </div>
  );
}
