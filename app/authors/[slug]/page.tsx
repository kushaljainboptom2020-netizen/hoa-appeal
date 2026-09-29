import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TeamMemberProfile } from "@/components/eeat/TeamMemberProfile";
import { JsonLd } from "@/components/JsonLd";
import {
  getAllTeamSlugs,
  getTeamMemberBySlug,
} from "@/lib/content/team";
import { ORGANIZATION_ID } from "@/lib/seo/jsonLd";
import { SITE_URL } from "@/lib/seo/siteUrl";

export async function generateStaticParams() {
  return getAllTeamSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);
  if (!member) return {};

  const roleLabel = member.role === "author" ? "Author" : "Reviewer";
  return {
    title: `${member.name} | ${roleLabel} | MyHOAAppeal`,
    description: `${member.name}, ${member.title} at MyHOAAppeal. ${member.credentials[0]}`,
    alternates: {
      canonical: `${SITE_URL}/authors/${member.slug}`,
    },
  };
}

export default async function AuthorProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);
  if (!member) notFound();

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${member.name} role label`,
    description:
      "Internal editorial role label. This page does not verify an outside identity or professional credential.",
    url: `${SITE_URL}/authors/${member.slug}`,
    isPartOf: { "@id": ORGANIZATION_ID },
  };

  return (
    <>
      <JsonLd schema={pageSchema} />
      <TeamMemberProfile member={member} />
    </>
  );
}
