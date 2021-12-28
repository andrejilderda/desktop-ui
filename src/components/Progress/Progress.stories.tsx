import React from 'react';
import { Meta } from '@storybook/react';
import Progress, { ProgressProps } from './Progress';

export default {
  title: 'Components/Progress',
  component: Progress,
} as Meta;

export const Default = (props: ProgressProps) => <Progress {...props} />;
export const Sizes = () => (
  <>
    <Default size={16} />
    <Default size={32} />
    <Default size={64} />
  </>
);
