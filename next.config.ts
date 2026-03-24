import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
      { protocol: "https", hostname: "www.framer.com" },
      { protocol: "https", hostname: "www.vectorlogo.zone" },
    ],
  },
};

export default nextConfig;
