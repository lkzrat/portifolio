/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    unoptimized: true,
  },
  experimental: {
    serverActions: {},
  },
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portifolio/' : '',
  basePath: '/portifolio',
};

module.exports = nextConfig;
