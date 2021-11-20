import React from 'react';
import { Story, Meta } from '@storybook/react';

import Icon from './Icon';

export default {
    title: 'Atoms/Icon',
    component: Icon,
} as Meta;

const Template: Story = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {};
