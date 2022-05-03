const path = require('path');
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

module.exports = {
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../packages/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../stories/**/*.stories.mdx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-addon-designs',
  ],
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve('./'),
      path.resolve('./packages'),
    ];
    config.plugins.push(new VanillaExtractPlugin());

    return config;
  },
};
