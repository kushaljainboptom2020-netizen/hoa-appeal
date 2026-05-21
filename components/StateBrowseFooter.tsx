import Link from "next/link";
import { STATE_SEO_CONFIG } from "@/lib/seo/statePages";

export function StateBrowseFooter() {
  return (
    <footer
      className="border-t border-slate-800 bg-slate-900/30"
      aria-label="Browse appeal letters by state"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <h2 className="text-lg font-semibold text-white sm:text-xl">
          Browse by State
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-400">
          Find a free HOA fine appeal letter generator tailored to your state&apos;s
          requirements.
        </p>
        <nav className="mt-8" aria-label="State appeal letter pages">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {STATE_SEO_CONFIG.map((state) => (
              <li key={state.slug}>
                <Link
                  href={`/appeal-hoa-fine/${state.slug}`}
                  className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                >
                  {state.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
