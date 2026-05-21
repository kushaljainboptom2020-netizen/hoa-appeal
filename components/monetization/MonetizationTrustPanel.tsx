import { ExternalLink } from "lucide-react";
import { AdSensePlaceholder } from "@/components/monetization/AdSensePlaceholder";
import { getAffiliateLinks } from "@/lib/monetization/affiliateLinks";

export function MonetizationTrustPanel() {
  const { rocketLawyer } = getAffiliateLinks();

  return (
    <aside
      className="space-y-4 rounded-xl border border-slate-700/80 bg-slate-800/30 p-4 sm:p-5"
      aria-label="Resources and partner offers"
    >
      <AdSensePlaceholder
        slotLabel="Below letter preview"
        size="medium-rectangle"
      />

      {rocketLawyer && (
        <p className="text-center text-xs leading-relaxed text-slate-500">
          Need advanced legal representation? Connect with an{" "}
          <a
            href={rocketLawyer}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-0.5 font-medium text-slate-400 underline decoration-slate-600 underline-offset-2 transition-colors hover:text-emerald-400 hover:decoration-emerald-500/50"
          >
            On-Call Property Attorney via RocketLawyer
            <ExternalLink className="h-3 w-3" aria-hidden />
          </a>
          .
        </p>
      )}
    </aside>
  );
}
