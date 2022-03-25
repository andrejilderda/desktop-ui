import React, { ReactNode } from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import type * as Stitches from '@stitches/react';
import { Check, Minus } from 'phosphor-react';

import useStyles from './Checkbox.styles';
import { useId } from 'src/hooks/useId';
import { ConditionalWrapper } from 'src/utils/helpers';
import Label from 'components/Label/src/index';

export type CheckboxProps = Stitches.ComponentProps<
  typeof RadixCheckbox.Root
> & {
  label?: string | ReactNode;
};

const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    { id: idProp, checked, onCheckedChange, label, ...props }: CheckboxProps,
    forwardedRef: React.ForwardedRef<HTMLButtonElement>,
  ) => {
    const styles = useStyles({ checked, disabled: props.disabled });
    const id = useId(idProp);

    return (
      <ConditionalWrapper
        condition={!!label}
        wrapper={(children) => (
          <Label className={styles.wrapper} asChild>
            <div>{children}</div>
          </Label>
        )}
      >
        <>
          <div className={styles.checkboxWrapper}>
            {/* zero-width space character for aligning the checkbox properly (thanks to Adam Wathan) */}
            &#8203;
            <RadixCheckbox.Root
              id={id}
              checked={checked}
              onCheckedChange={onCheckedChange}
              className={styles.root}
              data-checked={checked !== false ? checked : null}
              ref={forwardedRef}
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
          </div>
          {label && <span className={styles.label}>{label}</span>}
        </>
      </ConditionalWrapper>
    );
  },
);

export default Checkbox;
