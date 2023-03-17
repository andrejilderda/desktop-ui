import type { Meta, StoryObj } from "@storybook/react";

import { RadioGroup } from ".";

const meta = {
  title: "RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroup.Item value="1">One</RadioGroup.Item>
      <RadioGroup.Item value="2">Two</RadioGroup.Item>
      <RadioGroup.Item value="3">Three</RadioGroup.Item>
    </RadioGroup>
  ),

  args: {
    defaultValue: "1",
  },
};
