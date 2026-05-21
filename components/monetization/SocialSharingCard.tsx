"use client";

import { useState } from "react";
import { Copy, MessageCircle, Share2 } from "lucide-react";
import {
  buildNextdoorShareText,
  buildRedditShareUrl,
  buildTwitterShareUrl,
} from "@/lib/monetization/socialShare";

export function SocialSharingCard() {
  const [nextdoorStatus, setNextdoorStatus] = useState<"idle" | "copied" | "error">(
    "idle"
  );

  const handleCopyNextdoor = async () => {
    try {
      await navigator.clipboard.writeText(buildNextdoorShareText());
      setNextdoorStatus("copied");
      setTimeout(() => setNextdoorStatus("idle"), 2500);
    } catch {
      setNextdoorStatus("error");
    }
  };

  const twitterUrl = buildTwitterShareUrl();
  const redditUrl = buildRedditShareUrl();

  return (
    <section
      className="rounded-xl border border-emerald-500/25 bg-emerald-500/5 p-5 sm:p-6"
      aria-labelledby="social-sharing-heading"
    >
      <div className="mb-4 flex items-start gap-3">
        <Share2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
        <div>
          <h3
            id="social-sharing-heading"
            className="text-lg font-semibold text-white"
          >
            Did MyHOAAppeal save you money?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            Don&apos;t let rogue boards take advantage of your community. Help
            your neighbors fight back by sharing this tool.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <button
          type="button"
          onClick={handleCopyNextdoor}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-300 transition-colors hover:bg-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 sm:min-w-[200px]"
        >
          <Copy className="h-4 w-4" />
          {nextdoorStatus === "copied"
            ? "Copied!"
            : nextdoorStatus === "error"
              ? "Copy failed"
              : "Copy Nextdoor Share Text"}
        </button>
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500/40 sm:min-w-[140px]"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          Share on X
        </a>
        <a
          href={redditUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500/40 sm:min-w-[140px]"
        >
          <MessageCircle className="h-4 w-4" />
          Share on Reddit
        </a>
      </div>
    </section>
  );
}
