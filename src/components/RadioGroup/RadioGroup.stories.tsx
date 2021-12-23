import React from 'react';
import { Meta } from '@storybook/react';
import RadioGroup, { RadioGroupProps } from './RadioGroup';

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
} as Meta;

export const Default = ({ ...props }: RadioGroupProps) => (
  <RadioGroup {...props}>Nothing here yet…</RadioGroup>
);
