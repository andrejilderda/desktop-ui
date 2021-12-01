/* eslint-disable react/display-name */
import React from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';

type CheckboxProps = RadixCheckbox.CheckboxProps;

const Checkbox = (props: CheckboxProps): JSX.Element => {
  return (
    <>
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
