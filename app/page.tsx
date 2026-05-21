import { AppealLandingPage } from "@/components/AppealLandingPage";
import { JsonLd } from "@/components/JsonLd";
import { buildWebApplicationSchema } from "@/lib/seo/jsonLd";

export default function Home() {
  return (
    <>
      <JsonLd schema={buildWebApplicationSchema()} />
      <AppealLandingPage />
    </>
  );
}
