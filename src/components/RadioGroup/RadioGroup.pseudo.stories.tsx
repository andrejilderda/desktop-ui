import React from 'react';
import { Meta } from '@storybook/react';
import RadioGroup, { RadioGroupProps } from './RadioGroup';
import Pseudo from '../../../.storybook/components/Pseudo';

export default {
  title: 'Legacy/RadioGroup/Pseudo',
  component: RadioGroup,
} as Meta;

const Default = ({ children, ...props }: RadioGroupProps) => {
  return (
    <RadioGroup {...props}>
      <RadioGroup.Item value="foo">{children}</RadioGroup.Item>
    </RadioGroup>
  );
};

export const Hover = (props: Partial<RadioGroupProps>) => (
  <Pseudo state="hover">
    <Default {...props}>hover</Default>
  </Pseudo>
);
export const Active = (props: Partial<RadioGroupProps>) => (
  <Pseudo state="active">
    <Default {...props}>active</Default>
  </Pseudo>
);
export const FocusVisible = (props: Partial<RadioGroupProps>) => (
  <Pseudo state="focus-visible">
    <Default {...props}>focus-visible</Default>
  </Pseudo>
);

const PseudoStyleGroup = (props: Partial<RadioGroupProps>) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    <Default {...props}>default</Default>
    <Hover {...props} />
    <Active {...props} />
    <FocusVisible {...props} />
  </div>
);

export const AllPseudoStyles = () => (
  <div style={{ display: 'flex', gap: '20px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      Default
      <PseudoStyleGroup />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      Checked
      <PseudoStyleGroup value="foo" defaultChecked />
    </div>
  </div>
);
