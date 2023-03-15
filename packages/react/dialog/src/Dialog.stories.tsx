import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../button/src/index";
import React, { useEffect } from "react";
import { useArgs } from "@storybook/client-api";
import * as Dialog from ".";

const meta = {
  title: "Dialog",
  component: Dialog.Root,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Dialog.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

const isElementLoaded = async (selector: string) => {
  while (document.querySelector(selector) === null) {
    await new Promise((resolve) => requestAnimationFrame(resolve));
  }
  return document.querySelector(selector);
};

export const Default: Story = {
  render: ({ defaultOpen, open, ...props }) => {
    const [args, updateArgs] = useArgs();

    // TODO: make this more robust once we have a ThemeProvider to retrieve
    // the root-element from to be passed to `container` here
    const [container, setContainer] = React.useState<HTMLElement | null>(null);
    if (!container) {
      isElementLoaded(".dui-theme").then((selector) =>
        setContainer((selector || document.body) as HTMLElement)
      );
    }

    const [openState, setOpen] = React.useState(defaultOpen || open || false);

    // keep the open state in sync with the Storybook controls and vice versa
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);

    useEffect(() => {
      updateArgs({ open: openState });
    }, [openState]);

    return (
      <Dialog.Root
        open={openState}
        onOpenChange={(open) => setOpen(open)}
        {...props}
      >
        <Dialog.Trigger asChild>
          <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        </Dialog.Trigger>
        <Dialog.Portal container={container}>
          <Dialog.Overlay>
            <Dialog.Content data-size="standard">
              <Dialog.Title>Title</Dialog.Title>
              <Dialog.Description>
                This is body text. Windows 11 marks a visual evolution of the
                operating system. We have evolved our design language alongside
                with Fluent to create a design which is human, universal and
                truly feels like Windows. The design principles below have
                guided us throughout the journey of making Windows the
                best-in-class implementation of Fluent.
              </Dialog.Description>
              <Dialog.Footer>
                <Button onClick={() => setOpen(false)} variant="accent">
                  Confirm
                </Button>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    );
  },
  args: {
    defaultOpen: true,
    open: true,
  },
};
