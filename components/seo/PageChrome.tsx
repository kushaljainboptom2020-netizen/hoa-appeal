import type { ReactNode } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNavbar } from "@/components/SiteNavbar";
import {
  PageBreadcrumbs,
  type BreadcrumbItem,
} from "@/components/seo/PageBreadcrumbs";

type PageChromeProps = {
  children: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
};

export function PageChrome({ children, breadcrumbs }: PageChromeProps) {
  return (
    <div className="min-h-screen bg-slate-950">
      <SiteNavbar />
      {breadcrumbs ? (
        <header className="border-b border-slate-800/80">
          <div className="mx-auto max-w-6xl px-4 py-5">
            <PageBreadcrumbs items={breadcrumbs} />
          </div>
        </header>
      ) : null}
      {children}
      <SiteFooter />
    </div>
  );
}
