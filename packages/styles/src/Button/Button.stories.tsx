import styles from "./button.module.css";
import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit-html";

const mergeClasses = (...classes: (string | undefined)[]) =>
  classes.filter(Boolean).join(" ");

const meta: Meta<{ className: string }> = {
  title: "Button",
  render: ({ className }) => html`<div class="${className}">Button</div>`,
};

export default meta;

export const Default: StoryObj = {
  args: {
    className: styles.button,
  },
};

export const Accent: StoryObj = {
  args: {
    className: mergeClasses(styles.button, styles.accent),
  },
};
