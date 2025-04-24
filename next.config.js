/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    serverActions: {},
  },
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portifolio/' : '',
  basePath: '/portifolio',
};

module.exports = nextConfig;
