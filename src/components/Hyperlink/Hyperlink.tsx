import React, { ReactNode } from 'react';
import type * as Stitches from '@stitches/react';
// import * as RadixCheckbox from '@radix-ui/react-checkbox';

import useStyles from './Hyperlink.styles';

// export type HyperlinkProps = Stitches.ComponentProps<typeof RadixCheckbox.Root> & {}
export type HyperlinkProps = {
  children: ReactNode;
};

const Hyperlink = ({ children, ...props }: HyperlinkProps): JSX.Element => {
  const styles = useStyles();

  return <div className={styles.wrapper}>{children}</div>;
};

export default Hyperlink;
