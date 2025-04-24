/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  distDir: 'build',
  basePath: isProduction ? '/portifolio' : '',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.glb$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'static/models/',
            publicPath: '/_next/static/models/',
            name: '[name].[hash].[ext]',
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
