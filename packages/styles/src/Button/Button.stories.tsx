import type { Meta, StoryObj } from "@storybook/react";
import styles from "./Button.module.css";

import { Button } from "./Button";

const meta = {
  title: "Styles/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    classNames: styles.accent,
  },
};

export default meta;
