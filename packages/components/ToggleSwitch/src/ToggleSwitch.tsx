import React from 'react';
import type * as Stitches from '@stitches/react';
import * as styles from './toggleSwitch.css';
import * as RadixSwitch from '@radix-ui/react-switch';
import { useId } from 'src/hooks/useId';

export type ToggleSwitchProps = Stitches.ComponentProps<
  typeof RadixSwitch.Root
>;

const ToggleSwitch = ({
  id: idProp,
  ...props
}: ToggleSwitchProps): JSX.Element => {
  const id = useId(idProp);

  return (
    <RadixSwitch.Root className={styles.root} id={id} {...props}>
      <RadixSwitch.Thumb className={styles.thumb} />
    </RadixSwitch.Root>
  );
};

export default ToggleSwitch;
