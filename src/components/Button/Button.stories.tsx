import React from 'react';
import { Meta } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

export const Default = ({ ...props }: ButtonProps) => (
  <Button {...props}>Nothing here yet…</Button>
);
