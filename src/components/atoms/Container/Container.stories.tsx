import React from 'react';
import { Story, Meta } from '@storybook/react';

import Container, { Props } from './Container';

export default {
    title: 'Atoms/Container',
    component: Container,
} as Meta;

const Template: Story<Props> = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: <span>Welcome</span>,
};
