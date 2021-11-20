import { DefaultTheme } from 'styled-components';

interface ThemeColors {
    primary: string;
    secondary: string;
    warning: string;
    danger: string;
    blue: string;
    tomato: string;
    purple: string;
}

interface ThemeButtonVariant {
    color: string;
    backgroundColor: string;
}

interface ThemeButtons {
    primary?: ThemeButtonVariant;
    secondary?: ThemeButtonVariant;
    danger?: ThemeButtonVariant;
}

interface ThemedButtonsSizes {
    small?: Record<string, unknown>;
    medium?: Record<string, unknown>;
    large?: Record<string, unknown>;
}

interface CustomTheme {
    name?: string;
    buttons?: ThemeButtons;
    buttonSizes?: ThemedButtonsSizes;
}

declare module 'styled-components' {
    export interface DefaultTheme extends CustomTheme {
        colors: ThemeColors;
        fonts: Array<string>;
        space: Array<number>;
        fontSizes: Array<number>;
        radii: Array<number>;
    }
}

export const baseTheme: DefaultTheme = {
    space: [0, 2, 4, 8, 16, 32],
    colors: {
        blue: '#07c',
        tomato: 'tomato',
        purple: 'purple',
        primary: '#025D92',
        secondary: 'green',
        warning: '#025D92',
        danger: 'red',
    },
    fonts: ['sans-serif', 'Roboto'],
    fontSizes: [12, 14, 16, 18, 24, 32],
    radii: [0, 2, 4, 8],
};

const lightTheme: DefaultTheme = {
    ...baseTheme,
    name: 'Light Theme',
    buttons: {
        primary: {
            color: 'white',
            backgroundColor: baseTheme.colors.blue,
        },
        secondary: {
            color: 'white',
            backgroundColor: baseTheme.colors.purple,
        },
        danger: {
            color: 'white',
            backgroundColor: baseTheme.colors.tomato,
        },
    },
    buttonSizes: {
        small: {
            fontSize: baseTheme.fontSizes[0],
            padding: `10px 16px`,
        },
        medium: {
            fontSize: baseTheme.fontSizes[1],
            padding: `11px 20px`,
        },
        large: {
            fontSize: baseTheme.fontSizes[2],
            padding: `12px 24px`,
        },
    },
};

const darkTheme: DefaultTheme = {
    ...baseTheme,
    name: 'Dark Theme',
    buttons: {
        primary: {
            color: 'white',
            backgroundColor: baseTheme.colors.primary,
        },
        secondary: {
            color: 'white',
            backgroundColor: baseTheme.colors.secondary,
        },
        danger: {
            color: 'white',
            backgroundColor: baseTheme.colors.danger,
        },
    },
    buttonSizes: {
        small: {
            fontSize: baseTheme.fontSizes[0],
            padding: `10px 16px`,
        },
        medium: {
            fontSize: baseTheme.fontSizes[1],
            padding: `11px 20px`,
        },
        large: {
            fontSize: baseTheme.fontSizes[2],
            padding: `12px 24px`,
        },
    },
};

export { darkTheme as default, lightTheme };
