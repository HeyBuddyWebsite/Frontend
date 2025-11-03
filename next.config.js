/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    // domains: ["heybuddywebsite.s3.ap-south-1.amazonaws.com"],
    domains: ["heybuddystorage.blob.core.windows.net"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
