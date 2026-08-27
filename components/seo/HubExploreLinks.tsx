import Link from "next/link";

const HUB_LINKS = [
  { href: "/", label: "Appeal letter tool" },
  { href: "/decision-tree", label: "Decision tree" },
  { href: "/readiness-calculator", label: "Readiness calculator" },
  { href: "/map", label: "State map" },
  { href: "/state-laws", label: "State law comparison" },
  { href: "/guides", label: "Guides" },
  { href: "/faq", label: "FAQ" },
  { href: "/success-stories", label: "Success stories" },
] as const;

type HubExploreLinksProps = {
  /** Current hub path to exclude from the list */
  currentPath:
    | "/"
    | "/guides"
    | "/faq"
    | "/success-stories"
    | "/decision-tree"
    | "/readiness-calculator"
    | "/map"
    | "/state-laws";
};

export function HubExploreLinks({ currentPath }: HubExploreLinksProps) {
  const links = HUB_LINKS.filter((link) => link.href !== currentPath);

  return (
    <nav
      aria-label="Explore related sections"
      className="mt-8 rounded-xl border border-slate-800 bg-slate-900/40 px-5 py-4"
    >
      <p className="text-sm font-medium text-slate-200">Explore also</p>
      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-emerald-400 underline-offset-2 hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
