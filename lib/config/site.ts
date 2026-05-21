/**
 * Single source of truth for the canonical site URL.
 *
 * Set NEXT_PUBLIC_SITE_URL in your Vercel / Netlify project settings.
 * The fallback keeps builds working locally and in CI without an env file.
 * Changing the domain later only requires updating the env variable —
 * no source code edit needed.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.myhoaappeal.com";

/** Returns the site origin with no trailing slash. */
export function getSiteOrigin(): string {
  return SITE_URL.replace(/\/$/, "");
}
