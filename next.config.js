/** @type {import('next').NextConfig} */
const nextConfig = {
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
