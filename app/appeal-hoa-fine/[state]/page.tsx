import { notFound } from "next/navigation";
import { AppealLandingPage } from "@/components/AppealLandingPage";
import { JsonLd } from "@/components/JsonLd";
import {
  buildStateMetadata,
  getAllStateSlugs,
  getStateBySlug,
} from "@/lib/seo/statePages";
import { buildHowToSchema } from "@/lib/seo/jsonLd";

export async function generateStaticParams() {
  return getAllStateSlugs().map((state) => ({ state }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const config = getStateBySlug(state);
  if (!config) return {};
  return buildStateMetadata(config);
}

export default async function StateAppealPage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const config = getStateBySlug(state);
  if (!config) notFound();

  return (
    <>
      <JsonLd schema={buildHowToSchema(config)} />
      <AppealLandingPage stateConfig={config} />
    </>
  );
}
