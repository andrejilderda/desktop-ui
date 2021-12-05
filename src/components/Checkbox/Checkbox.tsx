/* eslint-disable react/display-name */
import React from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { styled } from './../../reactDesktop.config';

type CheckboxProps = RadixCheckbox.CheckboxProps;

const StyledButton = styled('button', {
  backgroundColor: '$foreground',
  borderRadius: '9999px',
  fontSize: '13px',
  border: '0',
});

const Checkbox = (props: CheckboxProps): JSX.Element => {
  return (
    <>
      <StyledButton>Styled button</StyledButton>
      <RadixCheckbox.Root {...props}>
        <RadixCheckbox.Indicator>
          {props.checked === 'indeterminate' && 'indeterminate'}
          {props.checked === true && 'TRUE'}
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
    </>
  );
};

export default Checkbox;
