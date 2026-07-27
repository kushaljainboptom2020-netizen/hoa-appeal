export { SITE_URL } from "@/lib/config/site";
import { SITE_URL } from "@/lib/config/site";

/** Absolute canonical URL with no trailing slash (except site root). */
export function canonicalPath(path = "/"): string {
  if (!path || path === "/") {
    return SITE_URL.replace(/\/$/, "");
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized.replace(/\/$/, ""), SITE_URL).toString();
}
