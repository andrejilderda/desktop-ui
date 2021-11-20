import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import darkTheme, { lightTheme } from '../src/theme';

const themes = [darkTheme, lightTheme];
addDecorator(withThemesProvider(themes), ThemeProvider);

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    options: {
        storySort: {
            order: ['Docs', 'Getting Started', 'Components'],
        },
    },
};
