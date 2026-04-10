/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "olive-peafowl-546702.hostingersite.com"],
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
