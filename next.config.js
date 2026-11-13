/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed output: "export" to support dynamic routes with SSR on Amplify
  images: {
    // Using remotePatterns instead of deprecated domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'heybuddystorage.blob.core.windows.net',
      },
      {
        protocol: 'https',
        hostname: 'heybuddy-images.s3.ap-south-1.amazonaws.com',
      },
    ],
  // Serve modern formats (AVIF/WebP) from next/image and /_next/image.
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async redirects() {
    const host = [{ type: "host", value: "heybuddy.co.in" }];
    return [
      // One canonical host: non-www -> www.
      { source: "/:path*", has: host, destination: "https://www.heybuddy.co.in/:path*", permanent: true },
      // Old /pages/* URLs (from the previous site + old sitemap).
      { source: "/pages/services/3dmodeling", destination: "/services/3d-modeling", permanent: true },
      { source: "/pages/services/ardevelopment", destination: "/services/ar-development", permanent: true },
      { source: "/pages/services/vrdevelopment", destination: "/services/vr-development", permanent: true },
      { source: "/pages/services/customsoftware", destination: "/services/custom-software", permanent: true },
      { source: "/pages/services/aidevelopment", destination: "/services/ai-development", permanent: true },
      { source: "/pages/services/gamedevelopment", destination: "/services/game-development", permanent: true },
      { source: "/pages/services/digital-marketing-services", destination: "/services/digital-marketing", permanent: true },
      { source: "/pages/services/aiads", destination: "/services/ai-ads", permanent: true },
      { source: "/pages/blog/:slug*", destination: "/blog", permanent: true },
      // Old numbered blog URLs (blog1..blog8) no longer exist.
      { source: "/blog/blog:n(\\d+)", destination: "/blog", permanent: true },
      { source: "/pages/:path*", destination: "/:path*", permanent: true },
      // Old un-hyphenated service slugs.
      { source: "/services/3dmodeling", destination: "/services/3d-modeling", permanent: true },
      { source: "/services/ardevelopment", destination: "/services/ar-development", permanent: true },
      { source: "/services/vrdevelopment", destination: "/services/vr-development", permanent: true },
      { source: "/services/customsoftware", destination: "/services/custom-software", permanent: true },
      { source: "/services/aiads", destination: "/services/ai-ads", permanent: true },
      { source: "/services/gamedevelopment", destination: "/services/game-development", permanent: true },
      // Duplicate routes merged into one URL each.
      { source: "/services/aidevelopment", destination: "/services/ai-development", permanent: true },
      { source: "/services/ai-ads-creative-services", destination: "/services/ai-ads", permanent: true },
      { source: "/cases/:id", destination: "/casestudies/3ddevelopment/:id", permanent: true },
      { source: "/casestudies/vrdevelopment/:path*", destination: "/casestudies/vr-development/:path*", permanent: true },
      { source: "/casestudies/customsoftware/:path*", destination: "/casestudies/custom-software/:path*", permanent: true },
      { source: "/sliderpages", destination: "/", permanent: true },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    // Fix for react-icons and other vendor chunks
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
