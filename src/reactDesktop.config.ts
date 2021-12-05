import generateTheme from './theme';

export const {
  styled,
  css,
  globalCss,
  globalStyles,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = generateTheme({ theme: 'macos', mode: 'light' });
