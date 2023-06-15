/** @type {import('next').NextConfig} */
const withOptimizedImages = require("next-optimized-images");

const nextConfig = withOptimizedImages({
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.ctfassets.net"],
    formats: ["image/avif", "image/webp"],
  },
  trailingSlash: true,
});

module.exports = nextConfig;
