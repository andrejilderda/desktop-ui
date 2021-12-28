import React from 'react';
import type * as Stitches from '@stitches/react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import Label from '../Label';

import useStyles from './RadioGroup.styles';
import { useId } from 'src/hooks/useId';

export type RadioGroupProps = Stitches.ComponentProps<
  typeof RadioGroupPrimitive.Root
>;

type RadioGroupItemProps = RadioGroupPrimitive.RadioGroupItemProps;

const RadioGroup = ({ children, ...props }: RadioGroupProps): JSX.Element => {
  const styles = useStyles();

  return (
    <RadioGroupPrimitive.Root {...props}>
      <div className={styles.group}>{children}</div>
    </RadioGroupPrimitive.Root>
  );
};

export const RadioGroupItem = React.forwardRef<
  HTMLButtonElement,
  RadioGroupItemProps
>(function RadioGroupItem(
  { children, id: idProp, ...props }: RadioGroupItemProps,
  ref: any,
): JSX.Element {
  const styles = useStyles();
  const id = useId(idProp);

  return (
    <div className={styles.item}>
      <RadioGroupPrimitive.Item
        className={styles.radio}
        {...props}
        id={id}
        ref={ref}
      >
        <RadioGroupPrimitive.Indicator className={styles.indicator} />
      </RadioGroupPrimitive.Item>
      {children && (
        <Label asChild>
          <label className={styles.label} htmlFor={id}>
            {children}
          </label>
        </Label>
      )}
    </div>
  );
});

RadioGroup.Item = RadioGroupItem;

export default RadioGroup;
