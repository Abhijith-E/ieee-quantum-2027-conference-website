import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Fix Next.js dev server blocking JS assets on local network devices
  allowedDevOrigins: ['http://172.16.243.127:3000', '172.16.243.127'],
};

export default nextConfig;
