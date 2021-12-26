import React from 'react';
import { Meta } from '@storybook/react';
import Checkbox from './Checkbox';
import { Default } from './Checkbox.stories';

export default {
  title: 'Components/Checkbox/Pseudo',
  component: Checkbox,
} as Meta;

export const Hover = () => <Default />;
Hover.parameters = { pseudo: { hover: true } };
export const Active = () => <Default />;
Active.parameters = { pseudo: { active: true } };
export const FocusVisible = () => <Default />;
FocusVisible.parameters = { pseudo: { focusVisible: true } };
