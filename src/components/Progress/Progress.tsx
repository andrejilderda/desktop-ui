import React from 'react';

import useStyles from './Progress.styles';

export type ProgressProps = {
  active?: boolean;
  indeterminate?: boolean;
  size?: 16 | 32 | 64;
};

const Progress = ({ size = 16, active }: ProgressProps) => {
  const styles = useStyles({ size });

  if (active === false) return null;

  return (
    <div className={styles.wrapper}>
      <svg
        aria-live="polite"
        aria-busy="true"
        className={styles.indeterminateSpinner}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className={styles.circle}
          fill="none"
          strokeWidth="2.5"
          strokeLinecap="round"
          cx="16"
          cy="16"
          r="13"
        ></circle>
      </svg>
    </div>
  );
};

export default Progress;
