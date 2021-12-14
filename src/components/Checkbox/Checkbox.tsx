import React from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { styled } from './../../reactDesktop.config';
import type * as Stitches from '@stitches/react';
import ThemeConsumer from '../../contexts/ThemeProvider/ThemeConsumer';

type CheckboxProps = Stitches.ComponentProps<typeof CheckboxRoot>;

const CheckboxRoot = styled(RadixCheckbox.Root, {
  variants: {
    themeMode: {
      dark: {
        outline: '10px solid purple',
      },
    },
    theme: {
      macos: {
        background: 'green',
      },
    },
  },
});

const Checkbox = ({ checked }: CheckboxProps): JSX.Element => {
  return (
    <ThemeConsumer forwardProps={['mode', 'theme']}>
      <CheckboxRoot>
        <RadixCheckbox.Indicator>
          {checked === 'indeterminate' && 'indeterminate'}
          {checked === true && 'TRUE'}
        </RadixCheckbox.Indicator>
      </CheckboxRoot>
    </ThemeConsumer>
  );
};

export default Checkbox;
