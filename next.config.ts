import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["0day-zeroui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
