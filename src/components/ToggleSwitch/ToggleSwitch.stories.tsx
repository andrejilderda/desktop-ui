import React from 'react';
import { Meta } from '@storybook/react';
import ToggleSwitch, { ToggleSwitchProps } from './ToggleSwitch';

export default {
  title: 'Components/ToggleSwitch',
  component: ToggleSwitch,
} as Meta;

export const Default = ({ ...props }: ToggleSwitchProps) => (
  <ToggleSwitch {...props}>Nothing here yet…</ToggleSwitch>
);
