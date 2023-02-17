import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  // stories: ["./../**/*.mdx", "./../../**/*.stories.@(js|jsx|ts|tsx)"],
  stories: [
    // There's an issue where the glob is not being resolved correctly and is
    // matching files outside of the given directory:
    // https://github.com/storybookjs/storybook/issues/21031
    // This is a workaround for now.
    "../../button/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
