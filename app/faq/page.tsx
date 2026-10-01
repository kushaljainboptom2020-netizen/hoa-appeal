import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { HubExploreLinks } from "@/components/seo/HubExploreLinks";
import { PageChrome } from "@/components/seo/PageChrome";
import { LEGAL_LAST_UPDATED } from "@/lib/config/site";
import { FAQ_ARTICLES, getFaqsGroupedByCategory } from "@/lib/content/faq";
import { pairedGuideFaqHref } from "@/lib/seo/legacyRedirects";
import { buildFaqIndexSchema, firstSentence } from "@/lib/seo/faq";
import { pageMetadata } from "@/lib/seo/metaFormat";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "HOA Fine Appeal FAQ | MyHOAAppeal",
    description:
      "Common HOA fine questions, each with a short answer and a link to the guide that covers notice, hearings, evidence, and letters.",
    path: "/faq",
  }),
};

export default function FaqIndexPage() {
  const groups = getFaqsGroupedByCategory();

  return (
    <PageChrome
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "FAQ" },
      ]}
    >
      <JsonLd schema={buildFaqIndexSchema(FAQ_ARTICLES)} />
      <main id="main-content" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wider text-emerald-400">
            Question index
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            HOA Fine Appeal FAQ
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Last updated: {LEGAL_LAST_UPDATED}
          </p>
          <p className="mt-4 leading-relaxed text-slate-300">
            Each question here is a pointer, not a second article. The short
            answer is educational. The full explanation lives on the matching
            guide, including where state law and your recorded documents can
            differ. Individual <code className="text-slate-400">/faq/…</code>{" "}
            addresses redirect to those guides.
          </p>
        </div>

        <HubExploreLinks currentPath="/faq" />

        <div className="mt-12 space-y-14">
          {groups.map((group) => (
            <section key={group.category} aria-labelledby={`faq-cat-${group.category}`}>
              <h2
                id={`faq-cat-${group.category}`}
                className="text-xl font-semibold text-white sm:text-2xl"
              >
                {group.label}
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                {group.faqs.length} question{group.faqs.length === 1 ? "" : "s"}
              </p>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {group.faqs.map((faq) => (
                  <li key={faq.slug}>
                    <article className="flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900/40 p-5">
                      <div className="flex items-start gap-3">
                        <span
                          className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                          aria-hidden
                        >
                          <HelpCircle className="h-4 w-4" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-base font-semibold text-white">
                            {faq.question}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-slate-400">
                            {firstSentence(faq.directAnswer)}
                          </p>
                          <p className="mt-3">
                            <Link
                              href={pairedGuideFaqHref(faq.pairedGuideSlug)}
                              className="inline-flex items-center gap-1 text-sm font-medium text-emerald-400 underline-offset-2 hover:underline"
                            >
                              Read the guide
                              <ArrowRight className="h-4 w-4" aria-hidden />
                            </Link>
                          </p>
                        </div>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="mt-14 rounded-xl border border-slate-800 bg-slate-900/40 px-5 py-6">
          <h2 className="text-lg font-semibold text-white">
            Ready to draft a letter?
          </h2>
          <p className="mt-3 leading-relaxed text-slate-300">
            The generator builds a template from facts you enter. You edit it
            before you send it. It is not legal advice.
          </p>
          <p className="mt-4">
            <Link
              href="/#appeal-wizard"
              className="text-emerald-400 underline-offset-2 hover:underline"
            >
              Open the letter generator
            </Link>
          </p>
        </section>
      </main>
    </PageChrome>
  );
}
