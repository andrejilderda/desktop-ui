import React from 'react';
import type * as Stitches from '@stitches/react';
import * as RadixSwitch from '@radix-ui/react-switch';
import useStyles from './ToggleSwitch.styles';
import { useId } from 'src/hooks/useId';

export type ToggleSwitchProps = Stitches.ComponentProps<
  typeof RadixSwitch.Root
>;

const ToggleSwitch = ({
  id: idProp,
  checked,
  ...props
}: ToggleSwitchProps): JSX.Element => {
  const styles = useStyles();
  const id = useId(idProp);

  return (
    <RadixSwitch.Root className={styles.root} id={id} {...props}>
      <RadixSwitch.Thumb className={styles.thumb} />
    </RadixSwitch.Root>
  );
};

export default ToggleSwitch;
