const path = require('path');

module.exports = {
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../stories/**/*.stories.mdx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve('./'),
    ];

    return config;
  },
};
