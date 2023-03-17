import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import clsx from "clsx";
import styles from "@desktop-ui/styles/src/progress/progress.module.css";

export interface ProgressProps {
  children: React.ReactNode;
}

export interface ProgressProps extends ProgressPrimitive.ProgressProps {
  /** set to a null to make loader indeterminate */
  value: ProgressPrimitive.ProgressProps["value"];
  active?: boolean;
  variant?: "bar" | "ring";
  /** only applicable to ring */
  size?: 16 | 32 | 64;
  /** only applicable to ring */
  state?: "default" | "paused" | "error";
}

export const Progress = ({
  size = 16,
  value = null,
  variant = "bar",
  active,
  state,
}: ProgressProps) => {
  const isIndeterminate = !value && value !== 0;

  if (active === false) return null;

  return (
    <>
      {variant === "bar" ? (
        <ProgressPrimitive.Root className={styles.progress} value={value}>
          <ProgressPrimitive.Indicator
            className={clsx(styles.progress__indicator)}
            data-state={state}
            style={{ width: `${value}%` }}
          />
        </ProgressPrimitive.Root>
      ) : (
        <ProgressPrimitive.Root value={value} asChild>
          <svg
            aria-live="polite"
            aria-busy="true"
            className={clsx(styles["progress--ring"])}
            data-size={size}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ProgressPrimitive.Indicator asChild>
              <circle
                className={styles["progress__indicator--ring"]}
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
