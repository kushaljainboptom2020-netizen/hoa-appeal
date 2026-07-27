"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Menu, Shield, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "/map", label: "State Laws" },
  { href: "/guides", label: "Guides & FAQs" },
  { href: "/about", label: "About Us" },
] as const;

function scrollToWizard() {
  document.getElementById("appeal-wizard")?.scrollIntoView({
    behavior: "smooth",
  });
}

export function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <nav
      className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md"
      aria-label="Primary"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          <span className="relative flex h-8 w-8 items-center justify-center">
            <span
              className="absolute inset-0 rounded-lg bg-emerald-500/25 blur-md transition-opacity group-hover:opacity-100"
              aria-hidden
            />
            <Shield className="relative h-7 w-7 text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.55)]" />
          </span>
          <span className="text-lg font-bold tracking-tight text-white">
            MyHOAAppeal
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={scrollToWizard}
            className="hidden rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_24px_-4px_rgba(16,185,129,0.55)] transition-[background-color,box-shadow,transform] hover:bg-emerald-400 hover:shadow-[0_0_28px_-2px_rgba(52,211,153,0.65)] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:inline-flex"
          >
            Create Free Appeal
          </button>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900/60 p-2 text-slate-200 transition-colors hover:border-slate-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id={menuId}
        className={`border-t border-slate-800 bg-slate-900/95 lg:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800/70 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-1 sm:hidden">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                scrollToWizard();
              }}
              className="w-full rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
            >
              Create Free Appeal
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
