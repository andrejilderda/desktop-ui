import React from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import type * as Stitches from '@stitches/react';
import { Check, Minus } from 'phosphor-react';

import useStyles from './Checkbox.styles';

export type CheckboxProps = Stitches.ComponentProps<typeof RadixCheckbox.Root>;

const Checkbox = ({
  checked,
  onCheckedChange,
  ...props
}: CheckboxProps): JSX.Element => {
  const styles = useStyles({ checked });

  return (
    <RadixCheckbox.Root
      checked={checked}
      onCheckedChange={onCheckedChange}
      className={styles.root}
      {...props}
    >
      <RadixCheckbox.Indicator className={styles.indicator}>
        {checked === 'indeterminate' ? (
          <Minus className={styles.minus} />
        ) : (
          <Check className={styles.check} />
        )}
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
};

export default Checkbox;
