import React, { ReactNode } from 'react';
import type * as Stitches from '@stitches/react';
// import * as RadixCheckbox from '@radix-ui/react-checkbox';

import useStyles from './Button.styles';

// export type ButtonProps = Stitches.ComponentProps<typeof RadixCheckbox.Root> & {}
export type ButtonProps = {
  children: ReactNode;
};

const Button = ({ children, ...props }: ButtonProps): JSX.Element => {
  const styles = useStyles();

  return <div className={styles.wrapper}>{children}</div>;
};

export default Button;
