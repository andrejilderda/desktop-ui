import React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as styles from 'components/Progress/src/progress.css';
import clsx from 'clsx';

export interface ProgressProps extends ProgressPrimitive.ProgressProps {
  /** set to a null to make loader indeterminate */
  value: ProgressPrimitive.ProgressProps['value'];
  active?: boolean;
  variant?: 'bar' | 'ring';
  /** only applicable to ring */
  size?: 16 | 32 | 64;
  /** only applicable to ring */
  status?: 'default' | 'paused' | 'error';
}

const Progress = ({
  size = 16,
  value = null,
  variant = 'bar',
  active,
  status,
}: ProgressProps) => {
  const isIndeterminate = !value && value !== 0;

  if (active === false) return null;

  return (
    <>
      {variant === 'bar' ? (
        <ProgressPrimitive.Root className={styles.rail} value={value}>
          <ProgressPrimitive.Indicator
            className={clsx(styles.track, styles.trackStatusRecipe({ status }))}
            style={{ width: `${value}%` }}
          />
        </ProgressPrimitive.Root>
      ) : (
        <ProgressPrimitive.Root value={value} asChild>
          <svg
            aria-live="polite"
            aria-busy="true"
            className={clsx(
              styles.ringWrapper,
              styles.ringWrapperSizeRecipe({ size }),
            )}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ProgressPrimitive.Indicator asChild>
              <circle
                className={styles.ring}
                fill="none"
                strokeWidth="2.5"
                strokeLinecap="round"
                cx="16"
                cy="16"
                r="16"
                strokeDasharray={
                  !isIndeterminate ? `${value}px 100px` : undefined
                }
              ></circle>
            </ProgressPrimitive.Indicator>
          </svg>
        </ProgressPrimitive.Root>
      )}
    </>
  );
};

export default Progress;
