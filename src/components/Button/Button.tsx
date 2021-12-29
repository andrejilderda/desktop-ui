import React, { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import useStyles from './Button.styles';

export type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  variant?: 'default' | 'accent';
  className?: string;
  asChild?: boolean;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', asChild, ...props }: ButtonProps, forwardedRef) => {
    const styles = useStyles({ variant });
    const Element = asChild ? Slot : 'button';

    return <Element className={styles.element} {...props} ref={forwardedRef} />;
  },
);

export default Button;
