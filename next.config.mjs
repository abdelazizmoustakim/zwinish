/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net'], // still needed if you're fetching images from Contentful
  },
  // Disable experimental features that might cause issues
  experimental: {
    optimizeCss: false,
    optimizePackageImports: false,
  },
  // Ensure we're using the stable build process
  swcMinify: true,
  // Disable webpack 5 module resolution issues
  webpack: (config, { isServer }) => {
    // Fix for CSS processing issues
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
};

export default nextConfig;
