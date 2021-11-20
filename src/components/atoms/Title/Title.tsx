import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledTitle } from './Title.styled';
import { TypographyProps, SpaceProps, FontSizeProps } from 'styled-system';

export interface Props extends HTMLAttributes<HTMLElement>, SpaceProps, FontSizeProps, TypographyProps {
    children: React.ReactNode;
    verticalAlign?: string;
}

const Title: React.FC<Props> = ({ children, ...props }) => <StyledTitle {...props}>{children}</StyledTitle>;

Title.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Title;
