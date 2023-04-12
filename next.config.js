/** @type {import('next').NextConfig} */
const withOptimizedImages = require("next-optimized-images");

const nextConfig = withOptimizedImages({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.ctfassets.net"],
    format: ["image/avif", "image/webp"],
  },
});

module.exports = nextConfig;
