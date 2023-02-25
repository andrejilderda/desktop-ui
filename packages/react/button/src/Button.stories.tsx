import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "accent"],
      defaultValue: "default",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
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
    variant: "accent",
  },
};

export const AccentDisabled: Story = {
  args: {
    ...Accent.args,
    disabled: true,
  },
};
