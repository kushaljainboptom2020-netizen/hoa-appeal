import { ArrowLeft, ArrowRight } from "lucide-react";
import { AdSensePlaceholder } from "@/components/monetization/AdSensePlaceholder";
import { WizardStepper } from "@/components/WizardStepper";
import { Field, inputClassName } from "@/components/ui/Field";
import { US_STATES } from "@/lib/wizard/constants";

type WizardStaticShellProps = {
  initialState?: string;
  statePageLabel?: string;
};

/**
 * Server-rendered stand-in for {@link AppealWizard}.
 *
 * Ships in the HTML so the section has its real heading, structure and height
 * before any wizard JavaScript loads — that keeps the page crawlable and holds
 * CLS at zero. The fields are read-only: focusing one tells the surrounding
 * LazyIsland to load the real wizard, and nothing typed here can be lost in
 * the swap.
 */
export function WizardStaticShell({
  initialState,
  statePageLabel,
}: WizardStaticShellProps) {
  const stateLabel = initialState
    ? (US_STATES.find((s) => s.value === initialState)?.label ?? "")
    : "";

  return (
    <section
      id="appeal-wizard"
      aria-labelledby="appeal-wizard-heading"
      className="mx-auto max-w-6xl scroll-mt-8 px-4 pt-8 pb-24"
    >
      <div className="mb-8 text-center md:text-left">
        <h2
          id="appeal-wizard-heading"
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          Create Your Appeal Letter
        </h2>
        <p className="mt-2 text-slate-400">
          Complete each step below. Your letter updates as you go.
        </p>
      </div>

      <AdSensePlaceholder
        slotLabel="Above wizard"
        size="leaderboard"
        className="mb-6"
      />

      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl sm:p-8">
        <WizardStepper currentStep={1} />

        <div className="min-h-[320px]" aria-busy="true">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white">Basic Info</h2>
              <p className="mt-1 text-sm text-slate-400">
                Tell us who you are and which HOA issued the fine.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" htmlFor="fullName" required>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Jane Doe"
                  readOnly
                  autoComplete="name"
                  className={inputClassName(false)}
                />
              </Field>
              <Field
                label="HOA Management Company Name"
                htmlFor="hoaManagementCompany"
                required
              >
                <input
                  id="hoaManagementCompany"
                  name="hoaManagementCompany"
                  type="text"
                  placeholder="Sunset Hills Community Association"
                  readOnly
                  autoComplete="organization"
                  className={inputClassName(false)}
                />
              </Field>
              <div className="sm:col-span-2">
                <Field
                  label="Property Address"
                  htmlFor="propertyAddress"
                  required
                  hint="Street, city, state, and ZIP code"
                >
                  <input
                    id="propertyAddress"
                    name="propertyAddress"
                    type="text"
                    placeholder="123 Oak Lane, Unit 4B"
                    readOnly
                    autoComplete="street-address"
                    className={inputClassName(false)}
                  />
                </Field>
              </div>
              <Field
                label="State"
                htmlFor="state"
                required
                hint={
                  statePageLabel
                    ? `Your letter is tailored to ${statePageLabel}. Change below if needed.`
                    : undefined
                }
              >
                <input
                  id="state"
                  name="state"
                  type="text"
                  aria-label="Select your US state"
                  defaultValue={stateLabel}
                  placeholder="Select your state"
                  readOnly
                  className={inputClassName(false)}
                />
              </Field>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-slate-800 pt-6">
          <button
            type="button"
            disabled
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-transparent px-5 py-2.5 text-sm font-semibold text-slate-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back
          </button>
          <button
            type="button"
            aria-label="Go to next wizard step"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white"
          >
            Next
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
}
