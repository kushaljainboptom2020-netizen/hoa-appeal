export type StaticMapLink = {
  code: string;
  name: string;
  href: string;
};

type MapPlaceholderProps = {
  links: StaticMapLink[];
  /** Accessible name for the fallback list of state links. */
  label: string;
  hint: string;
};

/**
 * Lightweight stand-in for the interactive map on pages where the map is a
 * secondary browse widget rather than the main content.
 *
 * Server-rendering the full SVG would put its ~214 KB of path data into both
 * the HTML and the RSC hydration payload — roughly 94 KB gzip per page, paid
 * again on every navigation, versus a JS chunk the browser caches once. So the
 * geometry stays in the lazily loaded chunk and this reserves the exact
 * aspect ratio (the map viewBox is 960x600) to keep CLS at zero.
 *
 * The state links are still emitted, visually hidden, so the markup remains
 * crawlable and reachable by screen readers before the map arrives.
 */
export function MapPlaceholder({ links, label, hint }: MapPlaceholderProps) {
  return (
    <div className="relative">
      <div
        className="aspect-[960/600] w-full animate-pulse rounded-lg bg-slate-800/40"
        aria-hidden
      />

      <nav className="sr-only" aria-label={label}>
        <ul>
          {links.map((link) => (
            <li key={link.code}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="pointer-events-none mt-3 min-h-[3.25rem] rounded-lg border border-slate-800 bg-slate-950/90 px-3.5 py-2.5 text-sm shadow-lg shadow-black/30 backdrop-blur-sm">
        <p className="text-slate-500">{hint}</p>
      </div>
    </div>
  );
}
