type AdSenseSize = "leaderboard" | "medium-rectangle";

type AdSensePlaceholderProps = {
  /** Visual label for the slot (e.g. "Leaderboard", "In-content"). */
  slotLabel?: string;
  /** Standard IAB slot dimensions — locks layout before ad script loads. */
  size?: AdSenseSize;
  className?: string;
};

const SIZE_STYLES: Record<
  AdSenseSize,
  { minHeight: string; maxWidth: string; label: string }
> = {
  leaderboard: {
    minHeight: "min-h-[90px]",
    maxWidth: "max-w-[728px]",
    label: "728 × 90 leaderboard",
  },
  "medium-rectangle": {
    minHeight: "min-h-[250px]",
    maxWidth: "max-w-[300px]",
    label: "300 × 250 medium rectangle",
  },
};

/**
 * Reserved aspect-ratio container for a Google AdSense responsive display unit.
 *
 * Renders only when NEXT_PUBLIC_ADSENSE_CLIENT_ID is set in the hosting
 * environment. When the variable is absent (local dev, staging, or before
 * AdSense approval) the component returns null and takes up no space.
 *
 * To activate: set NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX
 * in Vercel / Netlify and swap the inner placeholder for your ad script.
 */
export function AdSensePlaceholder({
  slotLabel = "Responsive Display",
  size = "leaderboard",
  className = "",
}: AdSensePlaceholderProps) {
  if (!process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID) return null;

  const styles = SIZE_STYLES[size];

  return (
    <div
      className={`flex w-full justify-center ${className}`}
      role="complementary"
      aria-label={`Advertisement: ${slotLabel}`}
    >
      <div
        className={`relative w-full ${styles.maxWidth} ${styles.minHeight} overflow-hidden rounded-lg`}
      >
        {/* Replace this div with your AdSense ins tag when ready */}
        <div className="absolute inset-0" />
      </div>
    </div>
  );
}
