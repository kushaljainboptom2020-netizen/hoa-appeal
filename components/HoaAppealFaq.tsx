"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { HOA_APPEAL_FAQ_ITEMS } from "@/lib/content/hoaAppealFaq";

type HoaAppealFaqProps = {
  stateName?: string;
};

export function HoaAppealFaq({ stateName }: HoaAppealFaqProps) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(
    HOA_APPEAL_FAQ_ITEMS[0]?.id ?? null
  );

  function toggle(id: string) {
    setOpenId((current) => (current === id ? null : id));
  }

  return (
    <section
      id="hoa-appeal-faq"
      aria-labelledby={`${baseId}-heading`}
      className="border-t border-slate-800/80 bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-emerald-400">
            HOA fine appeal guide
          </p>
          <h2
            id={`${baseId}-heading`}
            className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400">
            {stateName ? (
              <>
                Educational answers for homeowners disputing fines in{" "}
                <strong className="font-medium text-slate-300">{stateName}</strong>
                . Laws vary by state and community—verify deadlines and procedures in
                your CC&amp;Rs and local statutes.
              </>
            ) : (
              <>
                In-depth guidance on HOA fine appeals, formal dispute letters, and
                owner rights nationwide. Always confirm deadlines and procedures in
                your governing documents and state law.
              </>
            )}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="divide-y divide-slate-800 rounded-2xl border border-slate-800 bg-slate-900/40 shadow-xl shadow-black/20">
            {HOA_APPEAL_FAQ_ITEMS.map((item, index) => {
              const isOpen = openId === item.id;
              const panelId = `${baseId}-panel-${item.id}`;
              const buttonId = `${baseId}-button-${item.id}`;

              return (
                <div key={item.id} className="group">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(item.id)}
                      className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-slate-800/40 sm:px-6 sm:py-6"
                    >
                      <span className="pr-2 text-base font-semibold leading-snug text-white sm:text-lg">
                        <span className="mr-2 text-emerald-500/80" aria-hidden>
                          {String(index + 1).padStart(2, "0")}.
                        </span>
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`mt-0.5 h-5 w-5 shrink-0 text-emerald-400 transition-transform duration-300 ${
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
                    <div className="border-t border-slate-800/80 px-5 pb-6 pt-2 sm:px-6 sm:pb-8">
                      <div className="text-sm sm:text-base">{item.answer}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
