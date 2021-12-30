import React, { ReactNode } from 'react';
import type * as Stitches from '@stitches/react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import useStyles from './Dialog.styles';

const DialogOverlay = React.forwardRef<HTMLDivElement, DialogOverlayProps>(
  function DialogOverlay(
    props: Stitches.ComponentProps<typeof DialogPrimitive.Overlay>,
    forwardedRef: React.ForwardedRef<HTMLDivElement>,
  ) {
    const styles = useStyles();

    return (
      <DialogPrimitive.Overlay
        className={`${styles.base} ${styles.overlay}`}
        {...props}
        ref={forwardedRef}
      />
    );
  },
);

interface DialogContentProps
  extends Stitches.ComponentProps<typeof DialogPrimitive.Content> {
  size?: 'standard' | 'min' | 'max';
}

const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(
  function DialogContent(
    { size = 'standard', ...props }: DialogContentProps,
    forwardedRef: React.ForwardedRef<HTMLDivElement>,
  ) {
    const styles = useStyles({ size });

    return (
      <DialogPrimitive.Content
        className={styles.content}
        {...props}
        ref={forwardedRef}
      />
    );
  },
);

interface DialogFooterProps {
  children: ReactNode;
}

const DialogFooter = (props: DialogFooterProps) => {
  const styles = useStyles();

  return <div className={styles.footer} {...props} />;
};

const DialogTitle = React.forwardRef<HTMLHeadingElement, DialogTitleProps>(
  function DialogTitle(
    props: Stitches.ComponentProps<typeof DialogPrimitive.Title>,
    forwardedRef: React.ForwardedRef<HTMLHeadingElement>,
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

const DialogDescription = React.forwardRef<
  HTMLParagraphElement,
  DialogDescriptionProps
>(function DialogDescription(
  props: Stitches.ComponentProps<typeof DialogPrimitive.Description>,
  forwardedRef: React.ForwardedRef<HTMLParagraphElement>,
) {
  const styles = useStyles();

  return (
    <DialogPrimitive.Description
      className={styles.description}
      {...props}
      ref={forwardedRef}
    />
  );
});

// const DialogClose = React.forwardRef<HTMLButtonElement, DialogCloseProps>(
//   function DialogClose(
//     props: Stitches.ComponentProps<typeof DialogPrimitive.Close>,
//     forwardedRef: React.ForwardedRef<HTMLButtonElement>,
//   ) {
//     const styles = useStyles();

//     return (
//       <DialogPrimitive.Close
//         className={styles.close}
//         {...props}
//         ref={forwardedRef}
//       />
//     );
//   },
// );

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;

const Root = Dialog;
const Trigger = DialogTrigger;
const Portal = DialogPortal;
const Overlay = DialogOverlay;
const Content = DialogContent;
const Footer = DialogFooter;
const Title = DialogTitle;
const Description = DialogDescription;
// const Close = DialogClose;
const { createDialogScope, LabelWarningProvider } = DialogPrimitive;

export {
  createDialogScope,
  //
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  // DialogClose,
  //
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Footer,
  Title,
  Description,
  // Close,
  //
  LabelWarningProvider,
};

type DialogProps = DialogPrimitive.DialogProps;
type DialogTriggerProps = DialogPrimitive.DialogTriggerProps;
type DialogPortalProps = DialogPrimitive.DialogPortalProps;
type DialogOverlayProps = DialogPrimitive.DialogOverlayProps;
// type DialogContentProps = DialogPrimitive.DialogContentProps;
type DialogTitleProps = DialogPrimitive.DialogTitleProps;
type DialogDescriptionProps = DialogPrimitive.DialogDescriptionProps;
// type DialogCloseProps = DialogPrimitive.DialogCloseProps;

export type {
  DialogProps,
  DialogTriggerProps,
  DialogPortalProps,
  DialogOverlayProps,
  DialogContentProps,
  DialogTitleProps,
  DialogDescriptionProps,
  // DialogCloseProps,
};
