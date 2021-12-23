import React, { ReactNode } from 'react';
import type * as Stitches from '@stitches/react';
// import * as RadixCheckbox from '@radix-ui/react-checkbox';

import useStyles from './COMPONENT_NAME.styles';

// export type COMPONENT_NAMEProps = Stitches.ComponentProps<typeof RadixCheckbox.Root> & {}
export type COMPONENT_NAMEProps = {
  children: ReactNode;
};

const COMPONENT_NAME = ({ children, ...props }: COMPONENT_NAMEProps): JSX.Element => {
  const styles = useStyles();

  return <div className={styles.wrapper}>{children}</div>;
};

export default COMPONENT_NAME;
