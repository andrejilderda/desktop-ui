import "./_elevation.css";
import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit-html";

type ElevationArgs = {
  elevation?: 0 | 2 | 8 | 16 | 32 | 128;
};

const meta: Meta<ElevationArgs> = {
  title: "Elevation",
  render: ({ elevation }) =>
    html`<div>
      <div class="circle elevation-${elevation}" />
      ${elevation}
    </div>`,
};

export default meta;
type Story = StoryObj<ElevationArgs>;

export const All: Story = {
  render: () =>
    html`<div class="wrapper">
      <div class="circle elevation-0">0</div>
      <div class="circle elevation-2">2</div>
      <div class="circle elevation-8">8</div>
      <div class="circle elevation-16">16</div>
      <div class="circle elevation-32">32</div>
      <div class="circle elevation-128">128</div>
    </div>`,
  args: {},
};

export const Elevation0: Story = {
  name: "0",
  args: {
    elevation: 0,
  },
};

export const Elevation2: Story = {
  name: "2",
  args: {
    elevation: 2,
  },
};

export const Elevation8: Story = {
  name: "8",
  args: {
    elevation: 8,
  },
};

export const Elevation16: Story = {
  name: "16",
  args: {
    elevation: 16,
  },
};

export const Elevation32: Story = {
  name: "32",
  args: {
    elevation: 32,
  },
};

export const Elevation128: Story = {
  name: "128",
  args: {
    elevation: 128,
  },
};
