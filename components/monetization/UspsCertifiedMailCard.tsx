"use client";

import { ExternalLink, Mail } from "lucide-react";
import { getAffiliateLinks } from "@/lib/monetization/affiliateLinks";

type UspsCertifiedMailCardProps = {
  onInteract?: () => void;
};

export function UspsCertifiedMailCard({ onInteract }: UspsCertifiedMailCardProps) {
  const { mailformUsps } = getAffiliateLinks();

  if (!mailformUsps) return null;

  return (
    <div className="flex h-full flex-col justify-between rounded-xl border-2 border-amber-500/40 bg-gradient-to-br from-amber-500/15 via-slate-800/80 to-slate-900/90 p-5 shadow-lg shadow-amber-900/10 ring-1 ring-amber-400/20">
      <div>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-300">
          <Mail className="h-3.5 w-3.5" />
          Premium delivery
        </div>
        <p className="text-sm leading-relaxed text-slate-300">
          HOA rules typically require appeals to be sent via Certified Mail to
          legally prove delivery timelines. Skip the post office—mail it
          programmatically right now.
        </p>
      </div>
      <a
        href={mailformUsps}
        target="_blank"
        rel="noopener noreferrer sponsored"
        onClick={onInteract}
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-4 py-3.5 text-sm font-bold text-slate-950 transition-colors hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/60 focus:ring-offset-2 focus:ring-offset-slate-900"
      >
        Send via USPS Certified Mail Instantly ($7.99)
        <ExternalLink className="h-4 w-4 shrink-0" />
      </a>
    </div>
  );
}
