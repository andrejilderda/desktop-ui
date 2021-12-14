import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Checkbox, { CheckboxProps } from './Checkbox';
import { CheckedState } from '@radix-ui/react-checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta;

export const Default = ({
  checked,
  ...props
}: CheckboxProps & { checked: CheckedState }) => {
  const [checkedState, setCheckedState] = useState<CheckedState>(checked);
  const onCheckedChange = (value: CheckedState) => {
    setCheckedState(value);
    action('onCheckedChange')('checked', value);
  };

  return (
    <Checkbox
      checked={checkedState}
      onCheckedChange={onCheckedChange}
      {...props}
    />
  );
};

export const Checked = () => <Default defaultChecked={true} checked={true} />;
export const Indeterminate = () => <Default checked="indeterminate" />;
export const WithinForm = () => (
  <form>
    <Default checked="indeterminate" />
  </form>
);
