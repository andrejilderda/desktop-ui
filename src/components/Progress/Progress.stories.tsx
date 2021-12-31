import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import Progress from './Progress';

export default {
  title: 'Components/Progress',
  component: Progress,
} as Meta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args) => (
  <Progress {...args} />
);

export const BarDeterminate = Template.bind({});
BarDeterminate.args = { value: 20 };
BarDeterminate.storyName = 'Bar - determinate';

export const BarStatus = Template.bind({});
BarStatus.args = {
  value: 66,
  status: 'paused',
};
BarStatus.storyName = 'Bar - statuses';

export const BarIndeterminate = Template.bind({});
BarIndeterminate.args = {};
BarIndeterminate.storyName = 'Bar - indeterminate';

// Ring
export const RingDeterminate = Template.bind({});
RingDeterminate.args = { variant: 'ring', value: 66 };
RingDeterminate.storyName = 'Ring - determinate';

export const RingIndeterminate = Template.bind({});
RingIndeterminate.args = { variant: 'ring', value: null };
RingIndeterminate.storyName = 'Ring - indeterminate';

export const RingSizes = Template.bind({});
RingSizes.args = { variant: 'ring', value: 66, size: 64 };
RingSizes.storyName = 'Ring - sizes';
