import { AppealWizard } from "@/components/AppealWizard";
import { HeroSection } from "@/components/HeroSection";
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
};

export function AppealLandingPage({ stateConfig }: AppealLandingPageProps) {
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
        />
        {stateConfig && <StateStatuteBanner stateConfig={stateConfig} />}
        <StateFineCalculator initialState={stateConfig?.code} />
        <HowItWorksSection />
        <AppealWizard
          initialState={stateConfig?.code}
          statePageLabel={stateConfig?.name}
        />
        {stateConfig && legalContent && (
          <StateLegalResource content={legalContent} stateConfig={stateConfig} />
        )}
        <StateBrowseFooter />
      </main>
      <SiteFooter />
    </div>
  );
}
