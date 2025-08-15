/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net'], // still needed if you're fetching images from Contentful
    unoptimized: true, // Disable image optimization to avoid sharp issues
  },
  // Disable experimental features that might cause issues
  experimental: {
    optimizeCss: false,
  },
  // Disable webpack 5 module resolution issues
  webpack: (config, { isServer }) => {
    // Fix for CSS processing issues
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    // Disable SWC minification to avoid Windows compatibility issues
    config.optimization.minimize = false;
    return config;
  },
};

export default nextConfig;
