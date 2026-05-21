"use client";

import { useMemo, useState } from "react";
import { Copy, FileText, Printer } from "lucide-react";
import { LetterPreview } from "@/components/letter/LetterPreview";
import { MonetizationTrustPanel } from "@/components/monetization/MonetizationTrustPanel";
import { SocialSharingCard } from "@/components/monetization/SocialSharingCard";
import { UspsCertifiedMailCard } from "@/components/monetization/UspsCertifiedMailCard";
import {
  compileAppealLetter,
  compiledLetterToPlainText,
} from "@/lib/letter/compileLetter";
import type { AppealFormData } from "@/lib/wizard/formState";

type PreviewExportStepProps = {
  formData: AppealFormData;
};

export function PreviewExportStep({ formData }: PreviewExportStepProps) {
  const letter = useMemo(() => compileAppealLetter(formData), [formData]);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">(
    "idle"
  );
  const [copyError, setCopyError] = useState<string | null>(null);
  const [hasUsedDownloadActions, setHasUsedDownloadActions] = useState(false);

  const markDownloadInteraction = () => {
    setHasUsedDownloadActions(true);
  };

  const handleCopy = async () => {
    setCopyError(null);
    markDownloadInteraction();
    try {
      await navigator.clipboard.writeText(compiledLetterToPlainText(letter));
      setCopyStatus("copied");
      setTimeout(() => setCopyStatus("idle"), 2000);
    } catch {
      setCopyStatus("error");
      setCopyError(
        "Unable to copy to clipboard. Please select and copy the letter manually."
      );
    }
  };

  const handlePrint = () => {
    markDownloadInteraction();
    document.body.classList.add("printing");
    const cleanup = () => {
      document.body.classList.remove("printing");
      window.removeEventListener("afterprint", cleanup);
    };
    window.addEventListener("afterprint", cleanup);
    window.print();
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white">Preview & Export</h2>
        <p className="mt-1 text-sm text-slate-400">
          Review your generated appeal letter before printing or copying.
        </p>
      </div>

      <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-4 sm:p-6">
        <div className="mb-4 flex items-center gap-2 text-emerald-400">
          <FileText className="h-5 w-5" />
          <span className="text-sm font-medium">Letter Preview</span>
        </div>
        <LetterPreview letter={letter} />
      </div>

      <MonetizationTrustPanel />

      <div className="grid gap-4 lg:grid-cols-2">
        <button
          type="button"
          onClick={handlePrint}
          aria-label="Print or download appeal letter as PDF"
          className="inline-flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
        >
          <Printer className="h-4 w-4" aria-hidden />
          Print / Download PDF
        </button>
        <UspsCertifiedMailCard onInteract={markDownloadInteraction} />
      </div>

      <button
        type="button"
        onClick={handleCopy}
        aria-label={
          copyStatus === "copied"
            ? "Letter copied to clipboard"
            : "Copy appeal letter to clipboard"
        }
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-5 py-3 text-sm font-semibold text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-700/80 focus:outline-none focus:ring-2 focus:ring-slate-500/50"
      >
        <Copy className="h-4 w-4" aria-hidden />
        {copyStatus === "copied" ? "Copied!" : "Copy to Clipboard"}
      </button>

      {copyError && (
        <p className="text-sm text-red-400" role="alert">
          {copyError}
        </p>
      )}

      {hasUsedDownloadActions && <SocialSharingCard />}
    </div>
  );
}
