import type { CompiledLetter } from "@/lib/letter/types";
import { sanitizeLetterText } from "@/lib/wizard/sanitizeInput";

type LetterPreviewProps = {
  letter: CompiledLetter;
};

function HeaderBlock({
  block,
  align,
}: {
  block: CompiledLetter["headerLeft"];
  align: "left" | "right";
}) {
  return (
    <div className={align === "right" ? "text-right" : "text-left"}>
      {block.lines.map((line, i) => (
        <p key={i} className="leading-snug">
          {sanitizeLetterText(line, 500)}
        </p>
      ))}
    </div>
  );
}

export function LetterPreview({ letter }: LetterPreviewProps) {
  return (
    <div className="max-h-[28rem] overflow-y-auto rounded-xl border border-slate-600/80 bg-slate-700/30">
      <div
        id="letter-print-root"
        className="letter-canvas bg-white px-10 py-8 font-serif text-[15px] leading-relaxed text-slate-900 shadow-inner"
      >
        <div className="mb-8 flex justify-between gap-8">
          <HeaderBlock block={letter.headerLeft} align="left" />
          <HeaderBlock block={letter.headerRight} align="right" />
        </div>

        <p className="mb-6 font-semibold tracking-wide text-slate-900">
          {sanitizeLetterText(letter.subject, 300)}
        </p>

        <div className="space-y-4 text-justify">
          {letter.paragraphs.map((paragraph, i) => (
            <p key={i}>{sanitizeLetterText(paragraph, 8000)}</p>
          ))}
        </div>

        <p className="mt-8 whitespace-pre-line">
          {sanitizeLetterText(letter.signOff, 500)}
        </p>
      </div>
    </div>
  );
}
