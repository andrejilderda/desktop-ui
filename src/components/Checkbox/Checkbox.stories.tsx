import React from 'react';
import { Meta } from '@storybook/react';
import Checkbox from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta;

export const Default = () => <Checkbox checked={false} />;
export const Checked = () => <Checkbox checked={true} />;
export const Indeterminate = () => <Checkbox checked="indeterminate" />;
export const WithinForm = () => (
  <form>
    <Checkbox checked="indeterminate" />
  </form>
);
