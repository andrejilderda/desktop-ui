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

const ButtonComp = ({ asChild, ...props }: ButtonProps): JSX.Element => {
  const Comp = asChild ? Slot : 'button';
  return <Comp {...props} />;
};

const Button = ({
  variant = 'default',
  ...props
}: ButtonProps): JSX.Element => {
  const styles = useStyles({ variant });

  return <ButtonComp className={styles.element} {...props} />;
};

export default Button;
