import type { Metadata } from "next";
import { AppealLandingPage } from "@/components/AppealLandingPage";
import { JsonLd } from "@/components/JsonLd";
import { buildSoftwareApplicationSchema } from "@/lib/seo/jsonLd";
import { canonicalPath } from "@/lib/seo/siteUrl";

export const metadata: Metadata = {
  title: "MyHOAAppeal — HOA fine appeal letter template",
  description:
    "Free template that helps U.S. homeowners draft an HOA fine appeal from their own notice and governing documents. Not a law firm and not legal advice.",
  alternates: {
    canonical: canonicalPath("/"),
  },
  openGraph: {
    title: "MyHOAAppeal — HOA fine appeal letter template",
    description:
      "Draft an HOA fine appeal letter from your own facts. Educational state pages and sample letters sit next to the tool.",
    url: canonicalPath("/"),
    type: "website",
    siteName: "MyHOAAppeal",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd schema={buildSoftwareApplicationSchema()} />
      <AppealLandingPage />
    </>
  );
}
