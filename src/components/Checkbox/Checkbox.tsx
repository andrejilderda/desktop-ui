import React, { ReactNode } from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import type * as Stitches from '@stitches/react';
import { Check, Minus } from 'phosphor-react';

import useStyles from './Checkbox.styles';
import { useId } from 'src/hooks/useId';
import { ConditionalWrapper } from 'src/utils/helpers';

export type CheckboxProps = Stitches.ComponentProps<
  typeof RadixCheckbox.Root
> & {
  label?: string | ReactNode;
};

const Checkbox = ({
  id: idProp,
  checked,
  onCheckedChange,
  label,
  ...props
}: CheckboxProps): JSX.Element => {
  const styles = useStyles({ checked });
  const id = useId(idProp);

  return (
    <ConditionalWrapper
      condition={!!label}
      wrapper={(children) => <div className={styles.wrapper}>{children}</div>}
    >
      <RadixCheckbox.Root
        id={id}
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
      {label && <label htmlFor={id}>{label}</label>}
    </ConditionalWrapper>
  );
};

export default Checkbox;
