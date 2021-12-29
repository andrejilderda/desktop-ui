import React from 'react';
import { Meta } from '@storybook/react';
import * as Dialog from './Dialog';
import Button from '../Button';

export default {
  title: 'Components/Dialog',
  component: Dialog.Root,
} as Meta;

export const Default = ({}) => {
  const [open, setOpen] = React.useState(true);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>Open</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay>
          <Dialog.Content>
            <Dialog.Title>Title</Dialog.Title>
            Content
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
