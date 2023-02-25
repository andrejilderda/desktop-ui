import { html } from "lit-html";
import clsx from "clsx";
import { GlobalTypes, DecoratorFunction, Parameters } from "@storybook/types";
import "@desktop-ui/storybook-config/storybook-styles.css";
import * as config from "@desktop-ui/storybook-config";

import "../src/global/global.module.css";

export const parameters: Parameters = { ...config.parameters };

export const globalTypes: GlobalTypes = config.globalTypes;

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
