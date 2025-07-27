/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // ← this is crucial for static export
  images: {
    unoptimized: true, // ← required because Next can't optimize images in export mode
    domains: ['images.ctfassets.net'], // still needed if you're fetching images from Contentful
  },
};

export default nextConfig;
