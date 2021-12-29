import React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import useStyles from './Progress.styles';

export interface ProgressProps extends ProgressPrimitive.ProgressProps {
  active?: boolean;
  indeterminate?: boolean;
  size?: 16 | 32 | 64;
  variant?: 'bar' | 'ring';
}

const Progress = ({
  size = 16,
  indeterminate,
  value = null,
  variant = 'bar',
  active,
}: ProgressProps) => {
  const styles = useStyles({ size, value });

  if (active === false) return null;

  return (
    <>
      {variant === 'bar' ? (
        <ProgressPrimitive.Root className={styles.rail} value={value}>
          <ProgressPrimitive.Indicator
            className={styles.track}
            style={{ width: `${value}%` }}
          />
        </ProgressPrimitive.Root>
      ) : (
        <ProgressPrimitive.Root className={styles.ringWrapper} value={value}>
          <ProgressPrimitive.Indicator asChild>
            <svg
              aria-live="polite"
              aria-busy="true"
              className={styles.ringIndicator}
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className={styles.ring}
                fill="none"
                strokeWidth="2.5"
                strokeLinecap="round"
                cx="16"
                cy="16"
                r="16"
                strokeDasharray={
                  !indeterminate ? `${value}px 100px` : undefined
                }
              ></circle>
            </svg>
          </ProgressPrimitive.Indicator>
        </ProgressPrimitive.Root>
      )}
    </>
  );
};

export default Progress;
