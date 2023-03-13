import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import clsx from "clsx";
import styles from "@desktop-ui/styles/src/label/label.module.css";

export type LabelProps = LabelPrimitive.LabelProps;

export const Label = ({ className, ...props }: LabelProps) => (
  <LabelPrimitive.Root className={clsx(className, styles.label)} {...props} />
);
