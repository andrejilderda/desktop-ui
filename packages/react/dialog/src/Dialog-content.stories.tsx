import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../button/src/index";

import * as Dialog from ".";

const meta = {
  title: "Dialog/Content",
  component: Dialog.Content,
  argTypes: {
    size: { control: "inline-radio", options: ["min", "standard", "max"] },
  },
} satisfies Meta<typeof Dialog.Content>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props) => {
    return (
      <Dialog.Root open>
        <Dialog.Content {...props}>
          <Dialog.Title>Title</Dialog.Title>
          <Dialog.Description>
            This is body text. Windows 11 marks a visual evolution of the
            operating system. We have evolved our design language alongside with
            Fluent to create a design which is human, universal and truly feels
            like Windows. The design principles below have guided us throughout
            the journey of making Windows the best-in-class implementation of
            Fluent.
          </Dialog.Description>
          <Dialog.Footer>
            <Button variant="accent">Confirm</Button>
            <Button>Cancel</Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Root>
    );
  },
  args: {
    size: "standard",
  },
};
