import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Optimize for production
  swcMinify: true,
  // Handle images properly
  images: {
    domains: ['i.dummyjson.com'],
  },
  // Standalone output for better deployment
  output: 'standalone',
};

export default nextConfig;
