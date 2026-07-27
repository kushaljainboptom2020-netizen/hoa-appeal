type GuideInfographicFigureProps = {
  src: string;
  title: string;
  caption: string;
};

export function GuideInfographicFigure({
  src,
  title,
  caption,
}: GuideInfographicFigureProps) {
  return (
    <figure className="mt-5 overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40">
      {/* eslint-disable-next-line @next/next/no-img-element -- static branded SVG from public/ */}
      <img
        src={src}
        alt={title}
        className="h-auto w-full"
        loading="lazy"
        decoding="async"
      />
      <figcaption className="border-t border-slate-800 px-4 py-3 text-sm text-slate-400">
        {caption}{" "}
        <a
          href={src}
          download
          className="font-medium text-emerald-400 underline-offset-2 hover:underline"
        >
          Download SVG
        </a>
      </figcaption>
    </figure>
  );
}
