import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "cdn.dummyjson.com" },
      { hostname: "picsum.photos" },
      { hostname: "fastly.picsum.photos" },
    ],
  },
};
export default nextConfig;
