const nrwlConfig = require('@nrwl/react/plugins/webpack.js');

module.exports = (config) => {
  nrwlConfig(config);
  return {
    ...config,
    module: {
      rules: [
        ...config.module.rules,
        {
          test: /\.css$|\.scss$|\.sass$|\.less$|\.styl$/,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
      ],
    },
  };
};
