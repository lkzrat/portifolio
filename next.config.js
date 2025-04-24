/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  distDir: 'build',
  basePath: isProduction ? '/portifolio' : '',
};

module.exports = nextConfig;
