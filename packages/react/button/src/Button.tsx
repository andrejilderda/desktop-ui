import * as React from "react";
import clsx from "clsx";
import styles from "@desktop-ui/styles/src/button/button.module.css";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
  variant?: "accent";
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({ children, variant, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button, variant && styles[variant])}
      {...props}
    >
      {children}
    </button>
  );
};
