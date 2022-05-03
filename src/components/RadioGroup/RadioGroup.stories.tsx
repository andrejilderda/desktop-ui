import React, { useRef, useState } from 'react';
import { Meta } from '@storybook/react';
import RadioGroup, { RadioGroupProps } from './RadioGroup';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Legacy/RadioGroup',
  component: RadioGroup,
} as Meta;

export const Default = ({ ...props }: RadioGroupProps) => {
  const ref = useRef(null);
  return (
    <RadioGroup {...props}>
      <RadioGroup.Item value="foo" ref={ref}>
        Foo
      </RadioGroup.Item>
      <RadioGroup.Item value="bar">Bar</RadioGroup.Item>
      <RadioGroup.Item value="baz">Baz</RadioGroup.Item>
    </RadioGroup>
  );
};

export const Controlled = ({ value, ...props }: RadioGroupProps) => {
  const [selectedValue, setSelectedValue] = useState<string>(value || 'foo');
  const onValueChange = (value: string) => {
    setSelectedValue(value);
    action('onCheckedChange')('checked', value);
  };

  return (
    <RadioGroup value={selectedValue} onValueChange={onValueChange} {...props}>
      <RadioGroup.Item value="foo">Foo</RadioGroup.Item>
      <RadioGroup.Item value="bar">Bar</RadioGroup.Item>
      <RadioGroup.Item value="baz">Baz</RadioGroup.Item>
    </RadioGroup>
  );
};
