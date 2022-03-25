import { forwardRef, ReactNode } from 'react';
import * as styles from './checkbox.css';
import * as RadixCheckbox from '@radix-ui/react-checkbox';

import type * as Stitches from '@stitches/react';
import { Check, Minus } from 'phosphor-react';
import { useId } from 'src/hooks/useId';
import { ConditionalWrapper } from 'src/utils/helpers';
import { Label } from 'components/Label/src';
import clsx from 'clsx';

export type CheckboxProps = Stitches.ComponentProps<
  typeof RadixCheckbox.Root
> & {
  label?: string | ReactNode;
};

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    {
      id: idProp,
      checked,
      onCheckedChange,
      label,
      disabled,
      ...props
    }: CheckboxProps,
    forwardedRef: React.ForwardedRef<HTMLButtonElement>,
  ) => {
    const id = useId(idProp);

    return (
      <ConditionalWrapper
        condition={!!label}
        wrapper={(children) => (
          <Label asChild>
            <div
              className={clsx(
                styles.wrapper,
                styles.wrapperVariants({ disabled }),
              )}
            >
              {children}
            </div>
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
              disabled={disabled}
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

Checkbox.displayName = 'Checkbox';
