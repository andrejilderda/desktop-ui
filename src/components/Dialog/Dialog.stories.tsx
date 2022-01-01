import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import mdx from './Dialog.mdx';
import * as Dialog from './Dialog';
import Button from '../Button';

export default {
  title: 'Components/Dialog',
  component: Dialog.Root,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    size: {
      control: false,
    },
  },
} as Meta;

const Template: ComponentStory<typeof Dialog.Root & typeof Dialog.Content> = ({
  size,
}: Dialog.DialogContentProps) => {
  const [open, setOpen] = React.useState(true);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>Open</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay>
          <Dialog.Content size={size}>
            <Dialog.Title>Title</Dialog.Title>
            <Dialog.Description>
              This is body text. Windows 11 marks a visual evolution of the
              operating system. We have evolved our design language alongside
              with Fluent to create a design which is human, universal and truly
              feels like Windows. The design principles below have guided us
              throughout the journey of making Windows the best-in-class
              implementation of Fluent.
            </Dialog.Description>
            <Dialog.Footer>
              <Button variant="accent">Confirm</Button>
              <Button>Cancel</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export const Default = Template.bind({});
Default.args = {
  size: 'standard',
};
