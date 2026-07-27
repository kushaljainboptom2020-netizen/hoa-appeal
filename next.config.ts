import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
    ];
  },
};

export default nextConfig;
