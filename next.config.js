const webpack = require('webpack');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  distDir: '.next',
  images: {
    domains: ['localhost'],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
    return config;
  },
};

module.exports = withPlugins([
  [withBundleAnalyzer],
], nextConfig)
