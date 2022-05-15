const tokens = require('./libs/styles/src/lib/tokens/index.js');

module.exports = {
  plugins: {
    'postcss-preset-env': {},
    'postcss-nested': {},
    'postcss-design-tokens': { tokens },
  },
};
