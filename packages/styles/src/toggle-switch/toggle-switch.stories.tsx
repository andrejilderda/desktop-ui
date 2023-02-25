import styles from "./toggle-switch.module.css";
import type { Meta, StoryObj } from "@storybook/web-components";
import { html, nothing } from "lit-html";

type ToggleSwitchArgs = {
  checked: boolean | "indeterminate";
  disabled: boolean;
};

const meta: Meta<ToggleSwitchArgs> = {
  title: "ToggleSwitch",
  tags: ["autodocs"],
  render: ({ checked, disabled }) =>
    html`
      <button
        class="${styles["toggle-switch"]}"
        type="button"
        role="switch"
        data-state="${checked ? "checked" : nothing}"
        disabled="${disabled ? "true" : nothing}"
      >
        <span class="${styles["toggle-switch__thumb"]}"></span>
      </button>
    `,
};

export default meta;
type Story = StoryObj<ToggleSwitchArgs>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
  },
};

export const DefaultDisabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Checked: Story = {
  args: {
    ...Default.args,
    checked: true,
  },
};

export const CheckedDisabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    checked: true,
  },
};
