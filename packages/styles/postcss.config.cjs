const path = require("path");

module.exports = {
  parser: "postcss-scss",
  plugins: [
    require("postcss-mixins")({
      mixinsDir: path.join(__dirname, "src/mixins"),
    }),
    require("postcss-simple-vars"),
    require("postcss-preset-env"),
    require("@daltontan/postcss-import-json")({
      prefix: "--dui-",
    }),
    require("postcss-dark-theme-class")({
      darkSelector: ".dui-dark",
      lightSelector: ".dui-light",
      rootSelector: [":root", ".dui-theme"],
    }),
    require("postcss-import"),
    require("postcss-nested"),
    require("@csstools/postcss-design-tokens"),
    require("cssnano")({
      preset: [
        "default",
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
  ],
};
