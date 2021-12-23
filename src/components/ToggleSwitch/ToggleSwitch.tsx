import React, { ReactNode } from 'react';
import type * as Stitches from '@stitches/react';
// import * as RadixCheckbox from '@radix-ui/react-checkbox';

import useStyles from './ToggleSwitch.styles';

// export type ToggleSwitchProps = Stitches.ComponentProps<typeof RadixCheckbox.Root> & {}
export type ToggleSwitchProps = {
  children: ReactNode;
};

const ToggleSwitch = ({ children, ...props }: ToggleSwitchProps): JSX.Element => {
  const styles = useStyles();

  return <div className={styles.wrapper}>{children}</div>;
};

export default ToggleSwitch;
