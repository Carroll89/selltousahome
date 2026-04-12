/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
};

module.exports = nextConfig;
