import type { NextConfig } from "next";
import { legacyRedirects } from "./lib/seo/legacyRedirects";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/terms-of-service",
        permanent: true,
      },
      {
        source: "/editorial",
        destination: "/editorial-policy",
        permanent: true,
      },
      {
        source: "/ai",
        destination: "/ai-transparency",
        permanent: true,
      },
      {
        source: "/team",
        destination: "/authors",
        permanent: true,
      },
      ...legacyRedirects(),
    ];
  },
};

export default nextConfig;
