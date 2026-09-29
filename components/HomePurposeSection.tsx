import Link from "next/link";

const SECTIONS = [
  {
    title: "What MyHOAAppeal is",
    body: "MyHOAAppeal helps a homeowner turn a fine notice into a written appeal. The tool asks for the facts you already have and downloads a letter you can edit. The guides and state pages explain what to look up. They are not a case evaluation.",
  },
  {
    title: "Who it is for",
    body: "It is for an owner or resident in a U.S. community association who received a fine or violation notice and wants a clear written response. If the letter mentions a lien, a foreclosure, or a lawsuit, hire a lawyer. This site cannot take that case.",
  },
  {
    title: "What problem it solves",
    body: "Notices are often short, and the useful sentences are in the declaration, the fine schedule, and sometimes a state statute. The site gives you a place to line those documents up and a template so the board receives dates, a quoted rule, and a specific request.",
  },
  {
    title: "How the tool works",
    body: "You choose a state, enter the notice details, and pick the points you want to raise. The letter is assembled in your browser. You should replace anything that does not match your documents before you send it.",
  },
  {
    title: "Why the information is limited on purpose",
    body: "A statewide rule is described only where this site checked the official section and kept the exceptions. Many state pages say a day count or a dollar cap was not confirmed. That is more useful than a number copied from another state.",
  },
  {
    title: "Where state rules differ",
    body: "Condominiums, cooperatives, and planned communities are often different statutes. Start with the comparison table, then open the state page. The map is only a directory.",
  },
] as const;

export function HomePurposeSection() {
  return (
    <section className="border-t border-slate-800/80 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          What this site does
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {SECTIONS.map((section) => (
            <article
              key={section.title}
              className="rounded-xl border border-slate-800 bg-slate-900/40 p-5"
            >
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {section.body}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Link
            href="/state-laws"
            className="rounded-xl border border-slate-800 px-4 py-4 text-sm text-slate-200 hover:border-emerald-500/40"
          >
            <span className="block font-semibold text-white">State pages</span>
            Checked limits, and clear statements when a limit was not confirmed.
          </Link>
          <Link
            href="/samples"
            className="rounded-xl border border-slate-800 px-4 py-4 text-sm text-slate-200 hover:border-emerald-500/40"
          >
            <span className="block font-semibold text-white">Sample letters</span>
            Fictional examples. Replace the facts. They do not guarantee a result.
          </Link>
          <Link
            href="/guides"
            className="rounded-xl border border-slate-800 px-4 py-4 text-sm text-slate-200 hover:border-emerald-500/40"
          >
            <span className="block font-semibold text-white">Guides</span>
            How to document a dispute, write the letter, and when to hire a lawyer.
          </Link>
        </div>
        <div className="mt-8 max-w-3xl text-sm leading-relaxed text-slate-400">
          <p>
            MyHOAAppeal provides general educational information and
            document-generation assistance. It does not provide professional
            legal advice, and using the template does not create an
            attorney-client relationship.
          </p>
        </div>
      </div>
    </section>
  );
}
