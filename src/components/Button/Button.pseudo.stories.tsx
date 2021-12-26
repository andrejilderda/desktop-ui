import React from 'react';
import { Meta } from '@storybook/react';
import Button, { ButtonProps } from './Button';
import Pseudo from '../../../.storybook/components/Pseudo';
import { Default } from './Button.stories';

export default {
  title: 'Components/Button/Pseudo',
  component: Button,
} as Meta;

export const Hover = (props: Partial<ButtonProps>) => (
  <Pseudo state="hover">
    <Default {...props}>hover</Default>
  </Pseudo>
);
export const Active = (props: Partial<ButtonProps>) => (
  <Pseudo state="active">
    <Default {...props}>active</Default>
  </Pseudo>
);
export const FocusVisible = (props: Partial<ButtonProps>) => (
  <Pseudo state="focus-visible">
    <Default {...props}>focus-visible</Default>
  </Pseudo>
);

const PseudoStyleGroup = (props: Partial<ButtonProps>) => (
  <div style={{ display: 'flex', gap: '10px' }}>
    <Default {...props}>default</Default>
    <Hover {...props} />
    <Active {...props} />
    <FocusVisible {...props} />
  </div>
);

export const AllPseudoStyles = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    Default
    <PseudoStyleGroup />
    Accent
    <PseudoStyleGroup variant="accent" />
  </div>
);
