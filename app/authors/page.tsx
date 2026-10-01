import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import {
  CONTENT_REVIEWED_AT,
  CONTENT_UPDATED_AT,
} from "@/lib/content/editorial/attribution";
import { pageMetadata } from "@/lib/seo/metaFormat";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Editorial Team | MyHOAAppeal",
    description:
      "MyHOAAppeal content is published by an editorial team. Named internal labels are not public experts and are not used as bylines.",
    path: "/authors",
  }),
};

export default function AuthorsIndexPage() {
  return (
    <LegalPageLayout
      title="Editorial team"
      lastUpdated={CONTENT_UPDATED_AT}
      lastReviewed={CONTENT_REVIEWED_AT}
    >
      <section>
        <p className="leading-relaxed">
          Public bylines say <strong className="text-slate-200">MyHOAAppeal Editorial</strong>.
          That is an organizational credit. This site does not publish individual
          author biographies, bar numbers, or employer claims.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Editorial responsibility</h2>
        <p className="mt-3 leading-relaxed">
          The editorial team maintains the letter template, educational guides,
          sample letters, and state pages. A date on a page is a content-edit
          date. It is not an attorney review of every statute.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">How sources are used</h2>
        <p className="mt-3 leading-relaxed">
          Statewide rules appear as verified only when this site recorded a
          source check. Other pages say a figure was not confirmed and link an
          official code location when one is stored. Secondary blogs are not
          treated as statutes.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Corrections</h2>
        <p className="mt-3 leading-relaxed">
          If you find an error, use the{" "}
          <Link
            href="/contact"
            className="text-emerald-400 underline-offset-2 hover:underline"
          >
            contact page
          </Link>
          . The{" "}
          <Link
            href="/editorial-policy"
            className="text-emerald-400 underline-offset-2 hover:underline"
          >
            editorial policy
          </Link>{" "}
          and{" "}
          <Link
            href="/fact-checking"
            className="text-emerald-400 underline-offset-2 hover:underline"
          >
            fact-checking notes
          </Link>{" "}
          describe the intended process.
        </p>
      </section>
    </LegalPageLayout>
  );
}
