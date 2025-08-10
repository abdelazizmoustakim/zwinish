/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net'], // still needed if you're fetching images from Contentful
  },
};

export default nextConfig;
