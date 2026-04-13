/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve optimized images as WebP (smaller than JPEG, wide browser support)
    formats: ['image/webp'],
    // Cache optimized images for 30 days, revalidate every 24h
    minimumCacheTTL: 2592000,
    // Allow reasonable device widths for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  // Set proper cache headers for static assets
  async headers() {
    return [
      {
        // Static images in /public/images/
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, immutable',
          },
        ],
      },
      {
        // Next.js static chunks, CSS, fonts
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Favicons and other public root files
        source: '/:path(favicon.ico|apple-touch-icon.png|favicon-32x32.png|favicon-16x16.png|site.webmanifest|robots.txt)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
