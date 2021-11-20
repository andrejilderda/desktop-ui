import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button, { ButtonProps } from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
        },
        borderRadius: {
            control: {
                type: 'select',
                options: [2, 4, 8],
            },
        },
    },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primary',
    label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
    label: 'Button',
};

export const Danger = Template.bind({});
Danger.args = {
    variant: 'danger',
    label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
    label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button',
};

export const Rad2 = Template.bind({});
Rad2.args = {
    borderRadius: 2,
    label: 'Button',
};

export const Rad4 = Template.bind({});
Rad4.args = {
    borderRadius: 4,
    label: 'Button',
};

export const Rad8 = Template.bind({});
Rad8.args = {
    borderRadius: 8,
    label: 'Button',
};
