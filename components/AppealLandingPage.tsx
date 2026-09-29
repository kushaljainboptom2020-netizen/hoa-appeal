import { LazyAppealWizard } from "@/components/wizard/LazyAppealWizard";
import { WizardStaticShell } from "@/components/wizard/WizardStaticShell";
import { HeroSection } from "@/components/HeroSection";
import { HomePurposeSection } from "@/components/HomePurposeSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { SiteFooter } from "@/components/SiteFooter";
import { StateBrowseFooter } from "@/components/StateBrowseFooter";
import { StateFineCalculator } from "@/components/StateFineCalculator";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { StateLegalResource } from "@/components/state-legal/StateLegalResource";
import { StateStatuteBanner } from "@/components/StateStatuteBanner";
import { getStateLegalContent } from "@/lib/content/states";
import {
  getStateHeroCopy,
  type StateSeoConfig,
} from "@/lib/seo/statePages";

type AppealLandingPageProps = {
  stateConfig?: StateSeoConfig;
  /**
   * Homepage-only US map section. Passed in rather than imported so the 50
   * state routes never reference the map module, which carries 214 KB of SVG
   * path data they would otherwise download without rendering.
   */
  exploreSection?: React.ReactNode;
};

export function AppealLandingPage({
  stateConfig,
  exploreSection,
}: AppealLandingPageProps) {
  const heroCopy = stateConfig ? getStateHeroCopy(stateConfig) : undefined;
  const legalContent = stateConfig ? getStateLegalContent(stateConfig) : undefined;

  return (
    <div className="min-h-screen bg-slate-950">
      {stateConfig ? (
        <header className="border-b border-slate-800/80">
          <div className="mx-auto max-w-6xl px-4 py-5">
            <PageBreadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: `${stateConfig.name} HOA appeal` },
              ]}
            />
          </div>
        </header>
      ) : null}
      <main id="main-content">
        <HeroSection
          headline={heroCopy?.headline}
          subheadline={heroCopy?.subheadline}
          compact={Boolean(stateConfig)}
        />
        {stateConfig && legalContent ? (
          <StateLegalResource content={legalContent} stateConfig={stateConfig} />
        ) : (
          <HomePurposeSection />
        )}
        {stateConfig && <StateStatuteBanner stateConfig={stateConfig} />}
        <StateFineCalculator initialState={stateConfig?.code} />
        {stateConfig ? null : <HowItWorksSection />}
        {!stateConfig ? exploreSection : null}
        <LazyAppealWizard
          initialState={stateConfig?.code}
          statePageLabel={stateConfig?.name}
          placeholder={
            <WizardStaticShell
              initialState={stateConfig?.code}
              statePageLabel={stateConfig?.name}
            />
          }
        />
        <StateBrowseFooter />
      </main>
      <SiteFooter />
    </div>
  );
}
