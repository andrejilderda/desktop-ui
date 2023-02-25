import React from "react";
import clsx from "clsx";
import { GlobalTypes, DecoratorFunction, Parameters } from "@storybook/types";
import * as config from "@desktop-ui/storybook-config";
import "@desktop-ui/styles/src/global/global.module.css";
import "@desktop-ui/storybook-config/storybook-styles.css";

export const parameters: Parameters = { ...config.parameters };

export const globalTypes: GlobalTypes = config.globalTypes;

export const decorators: DecoratorFunction[] = [
  (StoryFn, context) => {
    const { theme, mode } = context.globals;

    const Story = StoryFn() as React.ReactElement;

    if (mode === "side-by-side" || mode === "stacked")
      return (
        <div
          className={clsx("story-preview", mode && `story-preview--${mode}`)}
        >
          <div className={`dui-theme dui-light ${theme}`}>
            <div className="story-wrapper">{Story}</div>
          </div>
          <div className={`dui-theme dui-dark ${theme}`}>
            <div className="story-wrapper">{Story}</div>
          </div>
        </div>
      );

    return (
      <div className="story-preview">
        <div
          className={`dui-theme ${
            mode === "auto" ? "" : `dui-${mode}`
          } ${theme}`}
        >
          <div className="story-wrapper">{Story}</div>
        </div>
      </div>
    );
  },
];
