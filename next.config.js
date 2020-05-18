const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
  exclude: path.resolve(__dirname, 'assets/svg'),
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg/,
      exclude: path.resolve(__dirname, 'node_modules'),
      use: ['@svgr/webpack'],
    });

    return config;
  },
});
