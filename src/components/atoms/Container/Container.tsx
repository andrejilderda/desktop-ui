import React from 'react';
import PropTypes from 'prop-types';
import { StyledDiv } from './Container.styled';

export interface Props {
    children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => <StyledDiv>{children}</StyledDiv>;

export default Container;

Container.propTypes = {
    children: PropTypes.node.isRequired,
};
