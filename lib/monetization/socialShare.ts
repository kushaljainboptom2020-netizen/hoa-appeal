import { getSiteOrigin } from "@/lib/config/site";

export function getSharePageUrl(): string {
  if (typeof window !== "undefined") {
    return window.location.href;
  }
  return getSiteOrigin();
}

export function buildNextdoorShareText(pageUrl?: string): string {
  const url = pageUrl ?? getSharePageUrl();
  return `Had an unfair HOA fine or violation notice? I used MyHOAAppeal to draft a formal appeal letter in minutes—completely free, no account needed. If your board has been aggressive lately, this is worth sharing with neighbors who might not know their options: ${url}`;
}

export function buildTwitterShareUrl(pageUrl?: string): string {
  const url = pageUrl ?? getSharePageUrl();
  const text =
    "Unfair HOA fine? MyHOAAppeal generates a free, formal appeal letter in minutes. Help your neighbors fight back.";
  const params = new URLSearchParams({
    text,
    url,
  });
  return `https://twitter.com/intent/tweet?${params.toString()}`;
}

export function buildRedditShareUrl(pageUrl?: string): string {
  const url = pageUrl ?? getSharePageUrl();
  const params = new URLSearchParams({
    url,
    title:
      "Free HOA fine appeal letter generator — helped me dispute a violation notice",
  });
  return `https://www.reddit.com/submit?${params.toString()}`;
}
