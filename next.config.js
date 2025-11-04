/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed output: "export" to support dynamic routes with SSR on Amplify
  images: {
    // domains: ["heybuddywebsite.s3.ap-south-1.amazonaws.com"],
    domains: ["heybuddystorage.blob.core.windows.net"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'heybuddystorage.blob.core.windows.net',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
