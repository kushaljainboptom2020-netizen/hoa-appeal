import { AppealWizard } from "@/components/AppealWizard";
import { HeroSection } from "@/components/HeroSection";
import { StateBrowseFooter } from "@/components/StateBrowseFooter";
import { StateStatuteBanner } from "@/components/StateStatuteBanner";
import {
  getStateHeroCopy,
  type StateSeoConfig,
} from "@/lib/seo/statePages";

type AppealLandingPageProps = {
  stateConfig?: StateSeoConfig;
};

export function AppealLandingPage({ stateConfig }: AppealLandingPageProps) {
  const heroCopy = stateConfig ? getStateHeroCopy(stateConfig) : undefined;

  return (
    <main className="min-h-screen bg-slate-950">
      <HeroSection
        headline={heroCopy?.headline}
        subheadline={heroCopy?.subheadline}
      />
      {stateConfig && <StateStatuteBanner stateConfig={stateConfig} />}
      <AppealWizard initialState={stateConfig?.code} />
      <StateBrowseFooter />
    </main>
  );
}
