import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Label } from "@desktop-ui/react-label";
import clsx from "clsx";
import styles from "@desktop-ui/styles/src/radio-group/radio-group.module.css";

type RadioGroupProps = React.ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Root
>;

export const RadioGroup = ({
  children,
  ...props
}: RadioGroupProps): JSX.Element => {
  return (
    <RadioGroupPrimitive.Root {...props}>
      <div className={clsx(styles["radio-group"], props.className)}>
        {children}
      </div>
    </RadioGroupPrimitive.Root>
  );
};

export const RadioGroupItem = React.forwardRef<
  HTMLButtonElement,
  RadioGroupPrimitive.RadioGroupItemProps
>(function RadioGroupItem(
  { children, id: idProp, ...props }: RadioGroupPrimitive.RadioGroupItemProps,
  ref: any
): JSX.Element {
  const generatedId = React.useId();
  const id = idProp || generatedId;

  return (
    <div className={styles["radio-group__item"]}>
      <RadioGroupPrimitive.Item
        className={styles["radio-group__input"]}
        id={id}
        ref={ref}
        {...props}
      >
        <RadioGroupPrimitive.Indicator
          className={styles["radio-group__indicator"]}
        />
      </RadioGroupPrimitive.Item>
      {children && (
        <Label asChild>
          <label className={styles["radio-group__label"]} htmlFor={id}>
            {children}
          </label>
        </Label>
      )}
    </div>
  );
});

RadioGroup.Item = RadioGroupItem;
