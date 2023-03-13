import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
  // There's an issue where providing an ignore glob is not working:
  // https://github.com/storybookjs/storybook/issues/11181#issuecomment-1455449562
  // stories: ["./../../**/*.mdx", "./../../**!(/node_modules)/**/*.stories.@(js|jsx|ts|tsx)"],
  stories: ["./../../**/src/*.mdx", "./../../**/src/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: true
  }
};
export default config;