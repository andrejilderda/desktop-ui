import React, { ReactNode } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as styles from 'components/Dialog/src/dialog.css';
import clsx from 'clsx';

const DialogOverlay = React.forwardRef<HTMLDivElement, DialogOverlayProps>(
  function DialogOverlay(
    props: DialogOverlayProps,
    forwardedRef: React.ForwardedRef<HTMLDivElement>,
  ) {
    return (
      <DialogPrimitive.Overlay
        className={`${styles.base} ${styles.overlay}`}
        {...props}
        ref={forwardedRef}
      />
    );
  },
);

interface DialogContentProps extends DialogPrimitive.DialogContentProps {
  size?: 'standard' | 'min' | 'max';
  className?: string;
}

const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(
  function DialogContent(
    { size = 'standard', className, ...props }: DialogContentProps,
    forwardedRef: React.ForwardedRef<HTMLDivElement>,
  ) {
    return (
      <DialogPrimitive.Content
        className={clsx(
          styles.content,
          styles.contentSizeRecipe({ size: size }),
          className,
        )}
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
  return <div className={styles.footer} {...props} />;
};

const DialogTitle = React.forwardRef<HTMLHeadingElement, DialogTitleProps>(
  function DialogTitle(
    props: DialogTitleProps,
    forwardedRef: React.ForwardedRef<HTMLHeadingElement>,
  ) {
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
  props: DialogDescriptionProps,
  forwardedRef: React.ForwardedRef<HTMLParagraphElement>,
) {
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
