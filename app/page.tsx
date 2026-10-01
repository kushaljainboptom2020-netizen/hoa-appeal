import type { Metadata } from "next";
import { AppealLandingPage } from "@/components/AppealLandingPage";
import { StateMapExploreSection } from "@/components/StateMapExploreSection";
import { JsonLd } from "@/components/JsonLd";
import { buildSoftwareApplicationSchema } from "@/lib/seo/jsonLd";
import { pageMetadata } from "@/lib/seo/metaFormat";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "HOA Fine Appeal Letter Generator | MyHOAAppeal",
    description:
      "Free template that helps U.S. homeowners draft an HOA fine appeal from their own notice and governing documents. Not a law firm and not legal advice.",
    path: "/",
  }),
};

export default function Home() {
  return (
    <>
      <JsonLd schema={buildSoftwareApplicationSchema()} />
      <AppealLandingPage exploreSection={<StateMapExploreSection />} />
    </>
  );
}
