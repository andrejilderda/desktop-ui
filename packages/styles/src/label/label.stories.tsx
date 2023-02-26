import styles from "./label.module.css";
import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit-html";

type LabelArgs = { className: string; disabled: boolean };

const meta: Meta<LabelArgs> = {
  title: "Label",
  tags: ["autodocs"],
  render: () => html`<label class="${styles.label}" for="foo">Label</label>`,
};

export default meta;
type Story = StoryObj<LabelArgs>;

export const Default: Story = {};
