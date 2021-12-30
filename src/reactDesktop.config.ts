import generateTheme from './theme';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  themes,
  createTheme,
  getTheme,
  config,
  createStitchesTheme,
} = generateTheme([
  {
    theme: 'macos',
    mode: ['light', 'dark'],
    useWindowBlur: true,
  },
  {
    theme: 'windows',
    mode: ['light', 'dark'],
    useWindowBlur: false,
  },
]);
