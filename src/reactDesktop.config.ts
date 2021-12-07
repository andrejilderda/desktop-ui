import generateTheme from './theme';

export const {
  styled,
  css,
  globalCss,
  globalStyles,
  keyframes,
  getCssText,
  theme,
  themes,
  createTheme,
  config,
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
