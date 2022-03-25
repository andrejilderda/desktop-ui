import React from 'react';
import { Meta } from '@storybook/react';
import Checkbox from './Checkbox';
import Pseudo from './../../../.storybook/components/Pseudo';
import { Default } from './Checkbox.stories';

export default {
  title: 'Legacy/Checkbox/Pseudo',
  component: Checkbox,
} as Meta;

export const Hover = () => (
  <Pseudo state="hover">
    <Default />
  </Pseudo>
);
export const Active = () => (
  <Pseudo state="active">
    <Default />
  </Pseudo>
);
export const FocusVisible = () => (
  <Pseudo state="focus-visible">
    <Default />
  </Pseudo>
);
