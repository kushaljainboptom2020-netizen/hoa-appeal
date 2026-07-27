import type { StateContentParagraphs } from "@/lib/content/states/types";

type StateContentSectionProps = StateContentParagraphs & {
  id?: string;
  className?: string;
};

export function StateContentSection({
  id,
  heading,
  paragraphs,
  bullets,
  className = "",
}: StateContentSectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      <h2 className="text-xl font-semibold text-white sm:text-2xl">{heading}</h2>
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 48)} className="mt-4 leading-relaxed text-slate-300">
          {paragraph}
        </p>
      ))}
      {bullets && bullets.length > 0 && (
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-slate-300">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
