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
