/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jupitermedianepal.com',
      },
    ],
  },
};

module.exports = nextConfig;