import React from 'react';
import { ThemeProvider } from 'styled-components';
import darkTheme from '../theme';

export function withTheme<P>(WrappedComponent: React.ComponentType<P>): React.FC<P> {
    const ComponentWithTheme = (props: P) => {
        return (
            <ThemeProvider theme={darkTheme}>
                <WrappedComponent {...props} />
            </ThemeProvider>
        );
    };
    return ComponentWithTheme;
}
export default withTheme;
