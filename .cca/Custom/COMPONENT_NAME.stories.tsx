import React from 'react';
import { Meta } from '@storybook/react';
import COMPONENT_NAME, { COMPONENT_NAMEProps } from './COMPONENT_NAME';

export default {
  title: 'Components/COMPONENT_NAME',
  component: COMPONENT_NAME,
} as Meta;

export const Default = ({ ...props }: COMPONENT_NAMEProps) => (
  <COMPONENT_NAME {...props}>Nothing here yet…</COMPONENT_NAME>
);
