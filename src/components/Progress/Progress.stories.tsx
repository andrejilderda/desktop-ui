import React from 'react';
import { Meta } from '@storybook/react';
import Progress, { ProgressProps } from './Progress';

export default {
  title: 'Components/Progress',
  component: Progress,
} as Meta;

const BaseBar = (props: ProgressProps) => <Progress {...props} />;

export const BarDeterminate = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <BaseBar value={0} />
    <BaseBar value={25} />
    <BaseBar value={50} />
    <BaseBar value={75} />
    <BaseBar value={100} />
  </div>
);
BarDeterminate.storyName = 'Bar - determinate';

export const BarIndeterminate = () => <BaseBar />;
BarIndeterminate.storyName = 'Bar - indeterminate';

// Ring
const BaseRing = (props: ProgressProps) => (
  <Progress {...props} variant="ring" />
);

export const RingDeterminate = () => (
  <div style={{ display: 'flex', gap: '20px' }}>
    <BaseRing value={0} />
    <BaseRing value={25} />
    <BaseRing value={50} />
    <BaseRing value={75} />
    <BaseRing value={100} />
  </div>
);
RingDeterminate.storyName = 'Ring - determinate';

export const RingIndeterminate = () => <BaseRing indeterminate />;
RingIndeterminate.storyName = 'Ring - indeterminate';

export const Sizes = () => (
  <div style={{ display: 'flex', gap: '20px' }}>
    <BaseRing size={16} value={66} />
    <BaseRing size={32} value={66} />
    <BaseRing size={64} value={66} />
  </div>
);
Sizes.storyName = 'Ring - sizes';
