import styles from "./button.module.css";
import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit-html";

const mergeClasses = (...classes: (string | undefined)[]) =>
  classes.filter(Boolean).join(" ");

type ButtonArgs = { className: string; disabled: boolean };

const meta: Meta<ButtonArgs> = {
  title: "Button",
  tags: ["autodocs"],
  render: ({ className, disabled }) =>
    html`<button class="${className}" ?disabled=${disabled}>Button</button>`,
};

export default meta;
type Story = StoryObj<ButtonArgs>;

export const Default: Story = {
  args: {
    className: styles.button,
    disabled: false,
  },
};

export const DefaultDisabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Accent: Story = {
  args: {
    ...Default.args,
    className: mergeClasses(styles.button, styles.accent),
  },
};

export const AccentDisabled: Story = {
  args: {
    ...Default.args,
    className: mergeClasses(styles.button, styles.accent),
    disabled: true,
  },
};
