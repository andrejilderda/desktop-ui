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
  refs: {
    react: {
      title: "React",
      url: "http://localhost:6007",
    },
    styles: {
      title: "Styles",
      url: "http://localhost:6008",
    },
  },
};
export default config;
