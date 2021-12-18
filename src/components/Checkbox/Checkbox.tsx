import React from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { css, styled } from 'src/reactDesktop.config';
import type * as Stitches from '@stitches/react';
import ThemeConsumer from 'src/contexts/ThemeProvider/ThemeConsumer';
import { Check, Minus } from 'phosphor-react';

export type CheckboxProps = Stitches.ComponentProps<typeof RadixCheckbox.Root>;

const selectedStyles = {
  background: '$checkboxFillSelected',
  border: 'none',
};

const CheckboxRoot = styled(RadixCheckbox.Root, {
  background: '$checkboxFill',
  border: '$borderWidths$default solid $checkboxBorder',
  borderRadius: '$1',
  height: '$checkbox',
  width: '$checkbox',
  position: 'relative',

  compoundVariants: [
    {
      _theme: 'windows',
      _checked: true,
      css: {
        ...selectedStyles,
      },
    },
    {
      _theme: 'windows',
      _checked: 'indeterminate',
      css: {
        ...selectedStyles,
      },
    },
  ],

  variants: {
    // needed to trigger compoundVariants & make Stitches infer types correctly
    _theme: {},
    _themeMode: {},
    _themeWindowBlur: {},
    _checked: {
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

const StyledMinus = styled(Minus, {
  position: 'absolute',

  color: '$checkboxCheck',
});

const Checkbox = ({
  checked,
  onCheckedChange,
  ...props
}: CheckboxProps): JSX.Element => {
  return (
    <ThemeConsumer>
      <CheckboxRoot
        checked={checked}
        onCheckedChange={onCheckedChange}
        _checked={checked}
        {...props}
      >
        <StyledIndicator>
          {checked === 'indeterminate' ? <StyledMinus /> : <StyledCheck />}
        </StyledIndicator>
      </CheckboxRoot>
    </ThemeConsumer>
  );
};

export default Checkbox;
