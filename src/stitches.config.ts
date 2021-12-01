import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
    // IDEA - for themes you have a:
    // - base (Windows / macOS)
    //   - light (f.e. {...base, ...light})
    //   - dark
    //   - unfocused
    //
    // can it get its value from osProvider?)
    // for the dark theme we can then override certain values

    // TODO: map tokens of Fluent UI
    // https://fluentuipr.z22.web.core.windows.net/heads/master/theming-designer/index.html
    // and macOS:
    // https://gist.github.com/ajilderda/8677c565cddc969e6aae7df48622d47c
    // to theme

    theme: {
        colors: {
            gray500: 'hsl(206,10%,76%)',
            blue500: 'hsl(206,100%,50%)',
            // how aliases are used
            background: '$blue500',
            foreground: '$gray500',
            button: '$green500',
        },
        space: {
            1: '5px',
            2: '10px',
            3: '15px',
        },
        fontSizes: {
            1: '12px',
            2: '13px',
            3: '15px',
        },
        fonts: {
            untitled: 'Untitled Sans, apple-system, sans-serif',
            mono: 'Söhne Mono, menlo, monospace',
        },
        fontWeights: {},
        lineHeights: {},
        letterSpacings: {},
        sizes: {},
        borderWidths: {},
        borderStyles: {},
        radii: {},
        shadows: {},
        zIndices: {},
        transitions: {},
    },
    // media: {
    //     bp1: '(min-width: 480px)',
    // },
    utils: {
        marginX: (value: number) => ({ marginLeft: value, marginRight: value }),
    },
});

export const darkTheme = createTheme({
    colors: {
        background: 'black',
        foreground: 'white',
        button: 'foreground',
    },
});

export const globalStyles = globalCss({
    html: { margin: 0, backgroundColor: '$background', color: '$foreground' },
});
