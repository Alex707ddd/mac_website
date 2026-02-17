import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.districtcouncils.gov.hk',
      },
    ],
  },
};

export default nextConfig;
