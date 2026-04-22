/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "randomuser.me"],
  },
  // Disable source maps in development
  productionBrowserSourceMaps: false,
  // Optimize compilation
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

module.exports = nextConfig;
