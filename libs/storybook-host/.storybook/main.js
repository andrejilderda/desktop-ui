const rootMain = require('../../../.storybook/main');

const { mergeConfig } = require('vite');
const viteTsConfigPaths = require('vite-tsconfig-paths').default;

module.exports = {
  ...rootMain,
  stories: [
    ...rootMain.stories,
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [...rootMain.addons],
  // To customize Vite configuration see:
  // https://storybook.js.org/docs/react/builders/vite#configuration
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      plugins: [
        viteTsConfigPaths({
          root: '../../../',
        }),
      ],
    });
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  features: {
    buildStoriesJson: true,
  },
  refs: {
    styles: {
      title: 'Styles',
      url: 'http://localhost:4401',
    },
  },
};
