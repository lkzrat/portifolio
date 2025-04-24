/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  distDir: 'build',
  basePath: '/portifolio',
};

module.exports = nextConfig;
