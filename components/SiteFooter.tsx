import Link from "next/link";
import { Shield } from "lucide-react";
import { SUPPORT_EMAIL } from "@/lib/config/site";

const TOOL_LINKS = [
  { href: "/#appeal-wizard", label: "Letter Generator" },
  { href: "/map", label: "State Law Hub" },
  { href: "/state-laws", label: "State Law Comparison" },
  { href: "/readiness-calculator", label: "Readiness Calculator" },
  { href: "/decision-tree", label: "Decision Tree" },
] as const;

const RESOURCE_LINKS = [
  { href: "/guides", label: "HOA Dispute Guides" },
  { href: "/appeal-hoa-fine/florida", label: "FL Chapter 720" },
  { href: "/appeal-hoa-fine/texas", label: "TX Section 209" },
  { href: "/appeal-hoa-fine/california", label: "CA Davis-Stirling Act" },
  { href: "/faq", label: "FAQ" },
] as const;

const LEGAL_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/editorial-policy", label: "Editorial Policy" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/contact", label: "Contact Us" },
] as const;

const TRUST_BADGES = [
  "100% Free",
  "No Account Required",
  "50 States",
] as const;

function FooterNavColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold tracking-wide text-white">{title}</h3>
      <nav className="mt-4" aria-label={title}>
        <ul className="space-y-2.5">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-slate-800 bg-slate-900/40"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50"
            >
              <Shield
                className="h-6 w-6 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.45)]"
                aria-hidden
              />
              <span className="text-base font-bold tracking-tight text-white">
                MyHOAAppeal
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Empowering homeowners with free, automated legal dispute tools
              across all 50 states.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="mt-4 inline-block text-sm text-slate-400 transition-colors hover:text-emerald-400"
            >
              {SUPPORT_EMAIL}
            </a>
            <ul className="mt-5 flex flex-wrap gap-2">
              {TRUST_BADGES.map((badge) => (
                <li
                  key={badge}
                  className="rounded-full border border-slate-800 bg-slate-950/60 px-2.5 py-1 text-[11px] font-medium text-slate-400"
                >
                  {badge}
                </li>
              ))}
            </ul>
          </div>

          <FooterNavColumn title="Tools & Features" links={TOOL_LINKS} />
          <FooterNavColumn title="Resources & Guides" links={RESOURCE_LINKS} />
          <FooterNavColumn title="Legal & Company" links={LEGAL_LINKS} />
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-800 pt-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-1.5">
            <p className="text-xs text-slate-500">
              © {year} MyHOAAppeal. All rights reserved.
            </p>
            <p className="text-xs leading-relaxed text-slate-600">
              California residents: see our{" "}
              <Link
                href="/privacy-policy"
                className="text-slate-500 underline-offset-2 hover:text-emerald-400 hover:underline"
              >
                Privacy Policy
              </Link>{" "}
              for CCPA rights.
            </p>
          </div>
          <p className="text-xs leading-relaxed text-slate-500 sm:max-w-sm sm:text-right">
            Governed by the laws of the State of Delaware. Designed for US
            Homeowners.
          </p>
        </div>
      </div>
    </footer>
  );
}
