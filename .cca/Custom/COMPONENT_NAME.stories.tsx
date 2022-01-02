import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import COMPONENT_NAME from './COMPONENT_NAME';

export default {
  title: 'Components/COMPONENT_NAME',
  component: COMPONENT_NAME,
  argTypes: {
    // testProp: {
    //   table: { disable: true }, // hide from argsTable
    // },
    // className: {
    //   control: { disable: true }, // disable control in ArgsTable
    // },
  },
} as Meta<typeof COMPONENT_NAME>;

const Template: ComponentStory<typeof COMPONENT_NAME> = (args) => (
  <COMPONENT_NAME {...args} />
);

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'COMPONENT_NAME';
