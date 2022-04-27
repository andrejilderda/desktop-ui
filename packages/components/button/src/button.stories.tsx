import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import mdx from './Button.mdx';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    wrapperClass: {
      table: { disable: true },
      control: { disable: true }, // disable control in ArgsTable
    },
  },
} as Meta;

const Template: Story<ButtonProps & { wrapperClass: string }> = ({
  wrapperClass,
  ...args
}) => (
  <div className={wrapperClass || ''}>
    <Button {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};

export const Accent = Template.bind({});
Accent.args = {
  ...Default.args,
  variants: { variant: 'accent' },
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
