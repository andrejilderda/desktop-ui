import React from 'react';
import { Meta } from '@storybook/react';
import ToggleSwitch, { ToggleSwitchProps } from './ToggleSwitch';
import Pseudo from '../../../.storybook/components/Pseudo';
import { Default } from './ToggleSwitch.stories';

export default {
  title: 'Components/ToggleSwitch/Pseudo',
  component: ToggleSwitch,
} as Meta;

export const Hover = (props: Partial<ToggleSwitchProps>) => (
  <Pseudo state="hover">
    <Default {...props}>hover</Default>
  </Pseudo>
);
export const Active = (props: Partial<ToggleSwitchProps>) => (
  <Pseudo state="active">
    <Default {...props}>active</Default>
  </Pseudo>
);
export const FocusVisible = (props: Partial<ToggleSwitchProps>) => (
  <Pseudo state="focus-visible">
    <Default {...props}>focus-visible</Default>
  </Pseudo>
);

const PseudoStyleGroup = (props: Partial<ToggleSwitchProps>) => (
  <div style={{ display: 'flex', gap: '10px' }}>
    <div>
      <Default {...props}>default</Default>
    </div>
    <Hover {...props} />
    <Active {...props} />
    <FocusVisible {...props} />
  </div>
);

export const AllPseudoStyles = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    Default
    <PseudoStyleGroup />
    Checked
    <PseudoStyleGroup defaultChecked checked />
  </div>
);
