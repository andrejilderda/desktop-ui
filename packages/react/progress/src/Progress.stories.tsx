import type { Meta, StoryObj } from "@storybook/react";

import { Progress } from ".";

const meta = {
  title: "Progress",
  component: Progress,
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
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
  },
};
