import styles from "./checkbox.module.css";
import type { Meta, StoryObj } from "@storybook/web-components";
import { html, nothing } from "lit-html";

type CheckboxArgs = { checked: boolean | "indeterminate"; disabled: boolean };

const meta: Meta<CheckboxArgs> = {
  title: "Checkbox",
  tags: ["autodocs"],
  render: ({ checked, disabled }) =>
    html`<div class="${styles.checkbox}">
      <!-- zero-width space character for aligning the label to the checkbox properly -->
      &#8203;
      <button
        class="${styles.checkbox__root}"
        data-state="${checked ? "checked" : nothing}"
        disabled="${disabled ? "true" : nothing}"
      >
        <span class="${styles.checkbox__indicator}">
          <!-- indeterminate indicator -->
          ${checked === "indeterminate"
            ? html` <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
                class="${styles.checkbox__indeterminate}"
              >
                <rect width="256" height="256" fill="none"></rect>
                <line
                  x1="40"
                  y1="128"
                  x2="216"
                  y2="128"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></line>
              </svg>`
            : nothing}
          <!-- checked indicator -->
          ${checked === true
            ? html`
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentcolor"
                  viewBox="0 0 256 256"
                  class="${styles.checkbox__check}"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <polyline
                    points="216 72.005 104 184 48 128.005"
                    fill="none"
                    stroke="currentcolor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  ></polyline>
                </svg>
              `
            : nothing}
        </span>
      </button>
    </div>`,
};

export default meta;
type Story = StoryObj<CheckboxArgs>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    ...Default.args,
    checked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    ...Default.args,
    checked: "indeterminate",
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};
