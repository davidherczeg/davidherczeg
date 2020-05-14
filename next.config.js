const path = require('path');

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.svg/,
      exclude: path.resolve(__dirname, 'node_modules'),
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
