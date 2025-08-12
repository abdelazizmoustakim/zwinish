/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net'], // still needed if you're fetching images from Contentful
  },
  experimental: {
    // Disable lightningcss to avoid deployment issues
    optimizeCss: false,
  },
  // Ensure we're using the stable CSS processing
  swcMinify: true,
};

export default nextConfig;
