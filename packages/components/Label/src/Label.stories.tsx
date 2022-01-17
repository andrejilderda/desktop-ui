import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import Label from './Label';

export default {
  title: 'Components/Label',
  component: Label,
} as Meta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Label' };
Default.storyName = 'Label';
