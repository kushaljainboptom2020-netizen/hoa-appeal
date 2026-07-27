import Link from "next/link";
import { SUPPORT_EMAIL } from "@/lib/config/site";

const PRIMARY_LINKS = [
  { href: "/about", label: "About" },
  { href: "/guides", label: "Guides" },
  { href: "/decision-tree", label: "Decision Tree" },
  { href: "/readiness-calculator", label: "Readiness Calculator" },
  { href: "/map", label: "State Map" },
  { href: "/faq", label: "FAQ" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/authors", label: "Authors" },
  { href: "/contact", label: "Contact" },
] as const;

const TRUST_LINKS = [
  { href: "/editorial-policy", label: "Editorial Policy" },
  { href: "/fact-checking", label: "Fact Checking" },
  { href: "/ai-transparency", label: "AI Transparency" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
] as const;

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
          aria-label="Site"
        >
          {PRIMARY_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-400 transition-colors hover:text-emerald-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <nav
          className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm"
          aria-label="Trust and policies"
        >
          {TRUST_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-400 transition-colors hover:text-emerald-400"
            >
              {link.label}
            </Link>
          ))}
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
