import { html } from "lit-html";
import clsx from "clsx";
import { GlobalTypes, DecoratorFunction, Parameters } from "@storybook/types";
import "../src/global/global.module.css";
import "./storybook-styles.css";

export const parameters: Parameters = {
  backgrounds: {
    default: "light",
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen",
};

export const globalTypes: GlobalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme/OS",
    defaultValue: "windows",
    toolbar: {
      icon: "browser",
      shortcuts: {
        next: {
          label: "Go to next theme",
          keys: ["L"],
        },
        previous: {
          label: "Go to previous theme",
          keys: ["K"],
        },
      },
      items: [
        {
          title: "macOS",
          value: "macos",
        },
        {
          title: "Windows",
          value: "windows",
        },
      ],
      showName: true,
    },
  },
  mode: {
    name: "Mode",
    defaultValue: "side-by-side",
    toolbar: {
      icon: "contrast",
      items: [
        "auto",
        { value: "light", icon: "circlehollow", title: "light" },
        { value: "dark", icon: "circle", title: "dark" },
        { value: "side-by-side", icon: "sidebar", title: "side by side" },
        { value: "stacked", icon: "bottombar", title: "stacked" },
      ],
      showName: true,
      shortcuts: {
        next: {
          label: "Go to next mode",
          keys: ["I"],
        },
        previous: {
          label: "Go to previous mode",
          keys: ["U"],
        },
      },
    },
  },
};

export const decorators: DecoratorFunction[] = [
  (Story, context) => {
    const { theme, mode } = context.globals;

    if (mode === "side-by-side" || mode === "stacked")
      return html`
        <div class=${clsx("story-preview", mode && `story-preview--${mode}`)}>
          <div class="dui-theme dui-light ${theme}">
            <div class="story-wrapper">${Story()}</div>
          </div>
          <div class="dui-theme dui-dark ${theme}">
            <div class="story-wrapper">${Story()}</div>
          </div>
        </div>
      `;

    return html`
      <div class="story-preview">
        <div class="dui-theme ${mode === "auto" ? "" : `dui-${mode}`} ${theme}">
          <div class="story-wrapper">${Story()}</div>
        </div>
      </div>
    `;
  },
];
