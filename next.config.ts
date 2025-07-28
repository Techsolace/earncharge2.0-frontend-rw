import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", "avatar.vercel.sh"],
    unoptimized: true,
  },
};

export default nextConfig;
