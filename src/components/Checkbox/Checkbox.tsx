import React from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { styled } from 'src/reactDesktop.config';
import type * as Stitches from '@stitches/react';
import ThemeConsumer from 'src/contexts/ThemeProvider/ThemeConsumer';
import { Check } from 'phosphor-react';

export type CheckboxProps = Stitches.ComponentProps<typeof CheckboxRoot>;

const CheckboxRoot = styled(RadixCheckbox.Root, {
  background: '$checkboxFill',
  border: '$borderWidths$default solid $checkboxBorder',
  borderRadius: '$1',
  height: '$checkbox',
  width: '$checkbox',
  position: 'relative',

  compoundVariants: [
    {
      theme: 'windows',
      checked: true,
      css: {
        background: '$checkboxFillSelected',
        border: 'none',
      },
    },
  ],

  variants: {
    // needed to trigger compoundVariants & make Stitches infer types correctly
    theme: {},
    themeMode: {},
    checked: {
      true: {},
      false: {},
      indeterminate: {},
    },
  },
});

const StyledIndicator = styled(RadixCheckbox.Indicator, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledCheck = styled(Check, {
  position: 'absolute',

  color: '$checkboxCheck',
});

const Checkbox = ({ checked, ...props }: CheckboxProps): JSX.Element => {
  return (
    <ThemeConsumer>
      <CheckboxRoot checked={checked} {...props}>
        <StyledIndicator>
          <StyledCheck />
        </StyledIndicator>
        {/* {checked === 'indeterminate' && 'indeterminate'}
        {checked === true && 'TRUE'} */}
      </CheckboxRoot>
    </ThemeConsumer>
  );
};

export default Checkbox;
