import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import Button from './Button';
import mdx from './Button.mdx';

export default {
  title: 'Legacy/Button',
  component: Button,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    className: {
      control: { disable: true },
    },
    asChild: {
      control: { disable: true },
    },
  },
} as Meta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button {...args}>{children ? children : 'Button'}</Button>
);

export const Default = Template.bind({});
Default.args = { variant: 'default' };

export const Accent = Template.bind({});
Accent.args = { variant: 'accent' };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const AsChildProp = Template.bind({});
AsChildProp.args = {
  asChild: true,
  children: <a href="https://www.example.com">As anchor element</a>,
};

AsChildProp.storyName = 'As anchor (asChild-prop)';
