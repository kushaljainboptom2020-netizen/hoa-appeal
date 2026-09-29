import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNavbar } from "@/components/SiteNavbar";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950">
      <SiteNavbar />
      <main id="main-content" className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-sm font-medium uppercase tracking-wider text-emerald-400">
          404
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white">
          This page is not on MyHOAAppeal
        </h1>
        <p className="mt-4 leading-relaxed text-slate-300">
          The address may be mistyped, or the page may have moved. These
          sections are the useful places to continue.
        </p>
        <ul className="mt-8 space-y-3 text-base">
          <li>
            <Link
              href="/"
              className="font-medium text-emerald-400 underline-offset-2 hover:underline"
            >
              Appeal letter tool
            </Link>
            <span className="text-slate-400">
              {" "}
              — draft a template from your own facts
            </span>
          </li>
          <li>
            <Link
              href="/guides"
              className="font-medium text-emerald-400 underline-offset-2 hover:underline"
            >
              Guides
            </Link>
            <span className="text-slate-400">
              {" "}
              — process, evidence, and hearings
            </span>
          </li>
          <li>
            <Link
              href="/state-laws"
              className="font-medium text-emerald-400 underline-offset-2 hover:underline"
            >
              State law comparison
            </Link>
            <span className="text-slate-400">
              {" "}
              — which pages state a checked rule, and which do not
            </span>
          </li>
        </ul>
      </main>
      <SiteFooter />
    </div>
  );
}
