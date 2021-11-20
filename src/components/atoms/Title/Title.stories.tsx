import React from 'react';
import { Story, Meta } from '@storybook/react';

import Title, { Props } from './Title';

export default {
    title: 'Atoms/Title',
    component: Title,
} as Meta;

const Template: Story<Props> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Welcome',
};

export const small = Template.bind({});
small.args = {
    children: 'Welcome',
    fontSize: 25,
};

export const Colorful = Template.bind({});
Colorful.args = {
    children: 'Welcome',
    color: 'tomato',
};

export const MonoText = Template.bind({});
MonoText.args = {
    children: 'Welcome',
    color: 'tomato',
    fontFamily: 'monospace',
};
