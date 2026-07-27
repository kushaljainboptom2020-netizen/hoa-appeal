"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import type { StateFaqItem } from "@/lib/content/states/types";

type StateFaqAccordionProps = {
  items: StateFaqItem[];
  stateName: string;
};

export function StateFaqAccordion({ items, stateName }: StateFaqAccordionProps) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <section id="state-faq" aria-labelledby={`${baseId}-heading`} className="scroll-mt-24">
      <h2 id={`${baseId}-heading`} className="text-xl font-semibold text-white sm:text-2xl">
        Frequently asked questions — {stateName}
      </h2>
      <p className="mt-4 leading-relaxed text-slate-300">
        Answers below address {stateName} HOA fine disputes specifically. Confirm
        deadlines in your governing documents and with a licensed attorney if your
        association has referred the matter to counsel.
      </p>

      <div className="mt-6 divide-y divide-slate-800 rounded-xl border border-slate-800 bg-slate-900/40">
        {items.map((item, index) => {
          const isOpen = openId === item.id;
          const panelId = `${baseId}-panel-${item.id}`;
          const buttonId = `${baseId}-button-${item.id}`;

          return (
            <div key={item.id}>
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-slate-800/40"
                >
                  <span className="text-base font-medium text-white">
                    <span className="mr-2 text-emerald-500/80" aria-hidden>
                      {String(index + 1).padStart(2, "0")}.
                    </span>
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`mt-0.5 h-5 w-5 shrink-0 text-emerald-400 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className={isOpen ? "block" : "hidden"}
              >
                <p className="border-t border-slate-800/80 px-5 pb-5 pt-2 text-sm leading-relaxed text-slate-300">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
