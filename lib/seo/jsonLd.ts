import { GENERIC_STATUTE_FALLBACK, type StateSeoConfig } from "./statePages";
import { SITE_URL } from "./siteUrl";

export function buildWebApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "MyHOAAppeal — Free HOA Fine Dispute Letter Generator",
    url: SITE_URL,
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Instantly create a legally structured dispute and appeal letter to fight unreasonable HOA fines. 100% free.",
    inLanguage: "en-US",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  };
}

export function buildHowToSchema(config: StateSeoConfig) {
  const { name, slug, statuteReference } = config;
  const hasCustomStatute = statuteReference !== GENERIC_STATUTE_FALLBACK;

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to dispute an HOA fine in ${name}`,
    description: `A step-by-step guide to appealing an HOA fine in ${name}${
      hasCustomStatute ? `, informed by ${statuteReference}` : ""
    }.`,
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Review the fine notice",
        text: `Read the HOA violation notice carefully and note the stated violation, fine amount, and response deadline. In ${name}, ${
          hasCustomStatute
            ? statuteReference
            : "state HOA statutes require the association to follow proper notice procedures before imposing fines"
        }.`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Gather supporting evidence",
        text: "Collect photographs, correspondence, receipts, and any CC&Rs or bylaw excerpts relevant to the violation. Strong documentation is the foundation of a successful appeal.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Generate your appeal letter with MyHOAAppeal",
        text: `Use MyHOAAppeal's free generator to produce a professionally formatted ${name} HOA fine dispute letter, tailored to your situation and aligned with ${name} HOA law.`,
        url: `${SITE_URL}/appeal-hoa-fine/${slug}`,
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Submit the letter to your HOA board",
        text: "Deliver the appeal letter before the stated deadline. Certified mail or hand-delivery with a signed receipt is strongly recommended to create an undeniable paper trail.",
      },
    ],
  };
}
