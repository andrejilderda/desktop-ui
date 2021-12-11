/* eslint-disable react/display-name */
import React from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { styled } from './../../reactDesktop.config';
import rd from '../../constants/classNames';
import type * as Stitches from '@stitches/react';

type Foo = Stitches.ComponentProps<typeof CheckboxRoot>;

const CheckboxRoot = styled(RadixCheckbox.Root, {
  [rd['macos']]: {
    backgroundColor: '$foreground',
    borderRadius: '9999px',
    fontSize: '13px',
    border: '0',
    outline: '2px solid red',
    width: '20px',
    height: '20px',
  },
  [rd['macos-dark']]: {
    background: 'red !important',
    border: '4px solid purple',
  },
  [rd['macos-dark-blur']]: {
    background: 'red !important',
    border: '4px solid green',
  },

  [rd['windows']]: {
    backgroundColor: 'yellow',
  },
});

const Checkbox = ({ checked, ...props }: Foo): JSX.Element => {
  return (
    <>
      <CheckboxRoot {...props}>
        <RadixCheckbox.Indicator>
          {checked === 'indeterminate' && 'indeterminate'}
          {checked === true && 'TRUE'}
        </RadixCheckbox.Indicator>
      </CheckboxRoot>
    </>
  );
};

export default Checkbox;
