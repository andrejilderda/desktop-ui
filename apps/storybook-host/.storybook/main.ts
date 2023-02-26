import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  refs: (_config, { configType }) => {
    console.log("configType", configType);
    if (configType === "DEVELOPMENT") {
      return {
        react: {
          title: "React",
          url: "http://localhost:6007",
        },
        styles: {
          title: "Styles",
          url: "http://localhost:6008",
        },
      };
    }

    return {
      react: {
        title: "React",
        url: "https://desktop-ui-react.netlify.app/",
      },
      styles: {
        title: "Styles",
        url: "https://desktop-ui-styles.netlify.app/",
      },
    };
  },
};
export default config;
