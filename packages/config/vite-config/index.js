// This .js-file is a workaround for the issue:
// vite.config.ts can't import untranspiled ts files from other packages in the same monorepo #5370
// https://github.com/vitejs/vite/issues/5370
const cssInjectedByJsPlugin = require("vite-plugin-css-injected-by-js").default;
const react = require("@vitejs/plugin-react").default;
const dts = require("vite-plugin-dts");
const { defineConfig } = require("vite");
const { getCssModulesConfig } = require("./get-css-modules-config");

const createViteConfig = ({
  name, // @desktop-ui/react-<component>
  fileName = "index",
  entry = "src/index.ts",
}) =>
  defineConfig({
    plugins: [
      react(),
      cssInjectedByJsPlugin({ styleId: name }),
      dts({
        insertTypesEntry: true,
      }),
    ],
    build: {
      lib: {
        entry,
        name,
        fileName,
      },
      rollupOptions: {
        external: ["react", "react-dom"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      },
    },
  });

module.exports = { createViteConfig, getCssModulesConfig };
