import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Shield } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { LEGAL_LAST_UPDATED } from "@/lib/config/site";
import {
  getAllGuideSlugs,
  getGuideBySlug,
} from "@/lib/content/guides";

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  return (
    <div className="min-h-screen bg-slate-950">
      <header className="border-b border-slate-800/80">
        <nav className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-5">
          <Link
            href="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-90"
          >
            <Shield className="h-7 w-7 text-emerald-500" />
            <span className="text-lg font-bold tracking-tight text-white">
              MyHOAAppeal
            </span>
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <article>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {guide.title}
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Last updated: {LEGAL_LAST_UPDATED}
          </p>

          <div className="mt-10 space-y-10 text-slate-300">
            {guide.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-semibold text-white">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="mt-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <section className="mt-12 rounded-xl border border-slate-800 bg-slate-900/40 px-5 py-6">
            <h2 className="text-lg font-semibold text-white">
              Draft your formal appeal letter
            </h2>
            <p className="mt-3 leading-relaxed">
              Use MyHOAAppeal&apos;s free letter generator to turn these strategies
              into a professionally formatted HOA fine dispute letter. This guide is
              educational and does not constitute legal advice.
            </p>
            <p className="mt-4">
              <Link
                href="/"
                className="text-emerald-400 underline-offset-2 hover:underline"
              >
                Start your appeal letter
              </Link>
            </p>
          </section>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
