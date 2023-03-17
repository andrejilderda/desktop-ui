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
    size: 64,
  },
};
