import React, { ReactNode } from 'react';
import type * as Stitches from '@stitches/react';
// import * as RadixCheckbox from '@radix-ui/react-checkbox';

import useStyles from './RadioGroup.styles';

// export type RadioGroupProps = Stitches.ComponentProps<typeof RadixCheckbox.Root> & {}
export type RadioGroupProps = {
  children: ReactNode;
};

const RadioGroup = ({ children, ...props }: RadioGroupProps): JSX.Element => {
  const styles = useStyles();

  return <div className={styles.wrapper}>{children}</div>;
};

export default RadioGroup;
