import { AppealLandingPage } from "@/components/AppealLandingPage";
import { JsonLd } from "@/components/JsonLd";
import { buildSoftwareApplicationSchema } from "@/lib/seo/jsonLd";

export default function Home() {
  return (
    <>
      <JsonLd schema={buildSoftwareApplicationSchema()} />
      <AppealLandingPage />
    </>
  );
}
