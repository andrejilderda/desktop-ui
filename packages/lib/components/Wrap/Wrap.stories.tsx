import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import Wrap from './Wrap';

export default {
  title: 'Utils/Wrap',
  component: Wrap,
  argTypes: {
    // testProp: {
    //   table: { disable: true }, // hide from argsTable
    //   control: { disable: true }, // disable control in ArgsTable
    // },
  },
} as Meta<typeof Wrap>;

const Template: ComponentStory<typeof Wrap> = (args) => <Wrap {...args} />;

export const WithWrapper = Template.bind({});
WithWrapper.args = {
  if: true,
  with: (children) => <div>Conditional wrapping div: {children}</div>,
  children: <>Children</>,
};

export const WithoutWrapper = WithWrapper.bind({});
WithoutWrapper.args = { ...WithWrapper.args, if: false };
