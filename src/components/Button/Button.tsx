import React from 'react';
import { ThemedButton } from './Button.styled';
import { SpaceProps, FontSizeProps } from 'styled-system';
import PropTypes from 'prop-types';

export interface ButtonProps extends SpaceProps, FontSizeProps {
    /**
     * Is this the principal call to action on the page?
     */

    borderRadius?: 0 | 2 | 4 | 8;

    variant?: 'primary' | 'secondary' | 'warning' | 'danger' | 'white';
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Button UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({ variant, size, label, ...props }) => (
    <ThemedButton variant={variant} size={size} {...props}>
        {label}
    </ThemedButton>
);

Button.defaultProps = {
    variant: 'primary',
    size: 'small',
    borderRadius: 2,
};

Button.propTypes = {
    borderRadius: PropTypes.oneOf([0, 2, 4, 8]),
    variant: PropTypes.oneOf(['primary', 'secondary', 'warning', 'danger', 'white']),
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default Button;
