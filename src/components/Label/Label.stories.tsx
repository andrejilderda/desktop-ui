import React from 'react';
import { Meta } from '@storybook/react';
import Label, { LabelProps } from './Label';

export default {
  title: 'Components/Label',
  component: Label,
} as Meta;

export const Default = (props: LabelProps) => <Label {...props}>Label</Label>;
