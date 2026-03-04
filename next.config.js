/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allow images from localhost during development
    // Add your production domain here when deploying, e.g.:
    // domains: ['yourdomain.com'],
    unoptimized: false,
  },
};

module.exports = nextConfig;
