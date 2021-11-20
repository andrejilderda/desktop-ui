import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { DefaultTheme } from 'styled-components';

import darkTheme from '../../theme';
import PropTypes from 'prop-types';

interface Props {
    children: React.ReactNode;
    theme?: DefaultTheme;
}

const ThemeProvider: React.FC<Props> = ({ children, theme }) => {
    if (theme) {
        return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
    }
    return <StyledThemeProvider theme={darkTheme}>{children}</StyledThemeProvider>;
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.any,
};

export default ThemeProvider;
