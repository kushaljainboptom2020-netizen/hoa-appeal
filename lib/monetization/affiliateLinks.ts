/**
 * Affiliate link helpers — env-gated for production.
 *
 * Set the corresponding NEXT_PUBLIC_* variable on Vercel / Netlify to
 * activate each CTA. When a variable is absent the consuming component
 * hides the link entirely so no placeholder URLs appear in production.
 */
export type AffiliateLinks = {
  mailformUsps: string | null;
  rocketLawyer: string | null;
};

export function getAffiliateLinks(): AffiliateLinks {
  const mailformId = process.env.NEXT_PUBLIC_MAILFORM_AFFILIATE_ID;
  const rocketLawyerId = process.env.NEXT_PUBLIC_ROCKETLAWYER_AFFILIATE_ID;

  return {
    mailformUsps: mailformId
      ? `https://www.mailform.io?affiliate=${mailformId}`
      : null,
    rocketLawyer: rocketLawyerId
      ? `https://www.rocketlawyer.com/?affiliate=${rocketLawyerId}`
      : null,
  };
}
