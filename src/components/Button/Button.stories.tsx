import React from 'react';
import { Meta } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

export const Default = ({ children, ...props }: Partial<ButtonProps>) => (
  <Button {...props}>{children ? children : 'Default button'}</Button>
);

export const Accent = () => <Default variant="accent">Accent color</Default>;
export const Disabled = () => <Default disabled>Disabled color</Default>;

export const AsChildProp = ({ ...props }: ButtonProps) => (
  <Button {...props} asChild>
    <a href="https://www.example.com">As anchor element</a>
  </Button>
);

AsChildProp.storyName = 'As anchor (asChild-prop)';
