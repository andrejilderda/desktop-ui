import React from 'react';
import type * as Stitches from '@stitches/react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import useStyles from './Dialog.styles';

const Dialog = DialogPrimitive.Root;

const DialogTrigger = React.forwardRef<unknown, DialogTriggerProps>(
  function DialogTrigger(
    props: Stitches.ComponentProps<typeof DialogPrimitive.Trigger>,
    forwardedRef: any,
  ) {
    const styles = useStyles();

    return (
      <DialogPrimitive.Trigger
        className={styles.trigger}
        {...props}
        ref={forwardedRef}
      />
    );
  },
);

const DialogPortal = (
  props: Stitches.ComponentProps<typeof DialogPrimitive.Portal>,
) => {
  const styles = useStyles();

  return <DialogPrimitive.Portal className={styles.portal} {...props} />;
};

const DialogOverlay = React.forwardRef<unknown, DialogOverlayProps>(
  function DialogOverlay(
    props: Stitches.ComponentProps<typeof DialogPrimitive.Overlay>,
    forwardedRef: any,
  ) {
    const styles = useStyles();

    return (
      <DialogPrimitive.Overlay
        className={styles.overlay}
        {...props}
        ref={forwardedRef}
      />
    );
  },
);

const DialogContent = React.forwardRef<unknown, DialogContentProps>(
  function DialogContent(
    props: Stitches.ComponentProps<typeof DialogPrimitive.Content>,
    forwardedRef: any,
  ) {
    const styles = useStyles();

    return (
      <DialogPrimitive.Content
        className={styles.content}
        {...props}
        ref={forwardedRef}
      />
    );
  },
);

const DialogTitle = React.forwardRef<unknown, DialogTitleProps>(
  function DialogTitle(
    props: Stitches.ComponentProps<typeof DialogPrimitive.Title>,
    forwardedRef: any,
  ) {
    const styles = useStyles();

    return (
      <DialogPrimitive.Title
        className={styles.title}
        {...props}
        ref={forwardedRef}
      />
    );
  },
);

const DialogDescription = React.forwardRef<unknown, DialogDescriptionProps>(
  function DialogDescription(
    props: Stitches.ComponentProps<typeof DialogPrimitive.Description>,
    forwardedRef: any,
  ) {
    const styles = useStyles();

    return (
      <DialogPrimitive.Description
        className={styles.description}
        {...props}
        ref={forwardedRef}
      />
    );
  },
);

const DialogClose = React.forwardRef<unknown, DialogCloseProps>(
  function DialogClose(
    props: Stitches.ComponentProps<typeof DialogPrimitive.Close>,
    forwardedRef: any,
  ) {
    const styles = useStyles();

    return (
      <DialogPrimitive.Close
        className={styles.close}
        {...props}
        ref={forwardedRef}
      />
    );
  },
);

const Root = Dialog;
const Trigger = DialogTrigger;
const Portal = DialogPortal;
const Overlay = DialogOverlay;
const Content = DialogContent;
const Title = DialogTitle;
const Description = DialogDescription;
const Close = DialogClose;
const { createDialogScope, LabelWarningProvider } = DialogPrimitive;

export {
  createDialogScope,
  //
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
  //
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
  Close,
  //
  LabelWarningProvider,
};

type DialogProps = DialogPrimitive.DialogProps;
type DialogTriggerProps = DialogPrimitive.DialogTriggerProps;
type DialogPortalProps = DialogPrimitive.DialogPortalProps;
type DialogOverlayProps = DialogPrimitive.DialogOverlayProps;
type DialogContentProps = DialogPrimitive.DialogContentProps;
type DialogTitleProps = DialogPrimitive.DialogTitleProps;
type DialogDescriptionProps = DialogPrimitive.DialogDescriptionProps;
type DialogCloseProps = DialogPrimitive.DialogCloseProps;

export type {
  DialogProps,
  DialogTriggerProps,
  DialogPortalProps,
  DialogOverlayProps,
  DialogContentProps,
  DialogTitleProps,
  DialogDescriptionProps,
  DialogCloseProps,
};
