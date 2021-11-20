import React from 'react';
import styled from 'styled-components';
import {
    borderRadius,
    buttonStyle,
    color,
    ColorProps,
    variant,
    space,
    fontSize,
    SpaceProps,
    FontSizeProps,
} from 'styled-system';

interface DefaultProps {
    borderRadius?: 0 | 2 | 4 | 8;
    variant?: 'primary' | 'secondary' | 'warning' | 'danger' | 'white';
    size?: 'small' | 'medium' | 'large';
}
interface Props extends ColorProps, DefaultProps, SpaceProps, FontSizeProps {
    children: React.ReactNode;
}

const buttonSize = variant({
    prop: 'size',
    key: 'buttonSizes',
});

export const ThemedButton = styled('button')<Props>(
    {
        appearance: 'button',
        border: 0,
        outline: 0,
    },
    borderRadius,
    buttonSize,
    buttonStyle,
    color,
    space,
    fontSize,
);
