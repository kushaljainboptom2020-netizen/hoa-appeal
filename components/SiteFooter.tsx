import Link from "next/link";
import { SUPPORT_EMAIL } from "@/lib/config/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-slate-800 bg-slate-900/40"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
        <p className="text-center text-sm text-slate-400">
          Serving homeowners across the{" "}
          <strong className="font-medium text-slate-300">United States</strong>
        </p>
        <nav
          className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm"
          aria-label="Legal and policies"
        >
          <Link
            href="/about"
            className="text-slate-400 transition-colors hover:text-emerald-400"
          >
            About
          </Link>
          <Link
            href="/guides"
            className="text-slate-400 transition-colors hover:text-emerald-400"
          >
            Guides
          </Link>
          <Link
            href="/contact"
            className="text-slate-400 transition-colors hover:text-emerald-400"
          >
            Contact
          </Link>
          <Link
            href="/privacy-policy"
            className="text-slate-400 transition-colors hover:text-emerald-400"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="text-slate-400 transition-colors hover:text-emerald-400"
          >
            Terms of Service
          </Link>
        </nav>
        <p className="mt-3 text-center text-sm text-slate-500">
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-slate-400 transition-colors hover:text-emerald-400"
          >
            {SUPPORT_EMAIL}
          </a>
        </p>
        <p className="mt-4 text-center text-xs leading-relaxed text-slate-500">
          Governed by the laws of the State of Delaware. California residents:
          see our{" "}
          <Link
            href="/privacy-policy"
            className="text-slate-400 underline-offset-2 hover:text-emerald-400 hover:underline"
          >
            Privacy Policy
          </Link>{" "}
          for CCPA rights.
        </p>
        <p className="mt-6 text-center text-xs text-slate-600">
          © {year} MyHOAAppeal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
