import styles from "./progress.module.css";
import type { Meta, StoryObj } from "@storybook/web-components";
import { html, nothing } from "lit-html";

// TODO: document class names
type ProgressArgs = {
  value: number | null;
  variant: "bar" | "ring";
  state?: "paused" | "error" | "indeterminate";
  size?: "16" | "32" | "64";
};

const meta: Meta<ProgressArgs> = {
  title: "Progress",
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1,
      },
      if: {
        arg: "state",
        neq: "indeterminate",
      },
    },
    variant: { control: "inline-radio", options: ["bar", "ring"] },
    state: {
      control: "radio",
      options: ["loading", "paused", "error", "indeterminate"],
    },
    size: {
      control: "inline-radio",
      options: ["16", "32", "64"],
      if: {
        arg: "variant",
        eq: "ring",
      },
    },
  },
  render: ({ value, variant, state = "loading", size }) => html`
    ${variant === "bar"
      ? html` <div class="${styles.progress}" data-state="${state}">
          <div
            data-state="${state}"
            class="progress__indicator"
            style="${state === "indeterminate" ? "" : `width: ${value}%`}"
          ></div>
        </div>`
      : ""}
     
    ${variant === "ring"
      ? html`
          <svg
            class="${styles["progress--ring"]}"
            data-state="${state}"
            data-size="${size ?? "16"}"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              class="${styles["progress__indicator--ring"]}"
              fill="none"
              stroke-width="2.5"
              stroke-linecap="round"
              cx="16"
              cy="16"
              r="16"
              data-state="${state}"
              stroke-dasharray="${state === "indeterminate"
                ? nothing
                : `${value}px  100px`}"
            ></circle>
          </svg>
        `
      : ""}
  `,
};

export default meta;
type Story = StoryObj<ProgressArgs>;

export const BarDefault: Story = {
  args: {
    value: 33,
    variant: "bar",
  },
};

export const BarPaused: Story = {
  args: {
    ...BarDefault.args,
    state: "paused",
  },
};

export const BarError: Story = {
  args: {
    ...BarDefault.args,
    state: "error",
  },
};

// TODO: add conditional type for indeterminate state
// When state is indeterminate, value should be nullable
export const BarIndeterminate: Story = {
  args: {
    variant: "bar",
    state: "indeterminate",
  },
};

export const RingDefault: Story = {
  args: {
    variant: "ring",
    value: 66,
  },
};

// TODO: add conditional type for indeterminate state
// When state is indeterminate, value should be nullable
export const RingIndeterminate: Story = {
  args: {
    variant: "ring",
    state: "indeterminate",
  },
};

// SIZES
export const RingSizes: Story = {
  args: {
    variant: "ring",
    state: "indeterminate",
    size: "64",
  },
};
