import React from 'react';
import styled from 'styled-components';
import {
    typography,
    TypographyProps,
    color,
    ColorProps,
    space,
    fontSize,
    SpaceProps,
    FontSizeProps,
} from 'styled-system';

interface Props extends ColorProps, SpaceProps, FontSizeProps, TypographyProps {
    children: React.ReactNode;
    verticalAlign?: string;
}

export const StyledTitle = styled('h1')<Props>(
    {
        display: 'inline-block',
    },
    color,
    space,
    fontSize,
    typography,
);
