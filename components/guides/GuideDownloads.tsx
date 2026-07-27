import type { GuideDownloadable } from "@/lib/content/guides/types";

type GuideDownloadsProps = {
  downloadables: GuideDownloadable[];
};

export function GuideDownloads({ downloadables }: GuideDownloadsProps) {
  if (downloadables.length === 0) return null;

  return (
    <div className="mt-6 space-y-3">
      {downloadables.map((item) => (
        <a
          key={item.href}
          href={item.href}
          download
          className="flex flex-col gap-1 rounded-lg border border-emerald-700/40 bg-emerald-950/30 px-4 py-4 transition-colors hover:border-emerald-500/60 hover:bg-emerald-950/50 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="font-medium text-white">{item.label}</p>
            <p className="mt-1 text-sm leading-relaxed text-slate-400">
              {item.description}
            </p>
          </div>
          <span className="mt-2 shrink-0 text-sm font-medium uppercase tracking-wider text-emerald-400 sm:mt-0">
            Download {item.fileType}
          </span>
        </a>
      ))}
    </div>
  );
}
