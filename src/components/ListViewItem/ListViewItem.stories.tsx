import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import ListViewItem from './ListViewItem';
import mdx from './ListViewItem.mdx';
import { Phone } from 'phosphor-react';

export default {
  title: 'Components/ListViewItem',
  component: ListViewItem,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    icon: { control: { disable: true } },
    asChild: { control: { disable: true } },
  },
} as Meta<typeof ListViewItem>;

const Template: ComponentStory<typeof ListViewItem> = (args) => (
  <ListViewItem {...args}>
    {args.children ? args.children : 'List item'}
  </ListViewItem>
);

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'ListViewItem';

export const WithIcon = Template.bind({});
WithIcon.args = { icon: <Phone /> };
