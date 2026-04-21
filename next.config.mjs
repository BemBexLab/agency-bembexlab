/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "olive-peafowl-546702.hostingersite.com",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["react-icons"],
  },
};

export default nextConfig;
