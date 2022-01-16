import { createTheme } from '@vanilla-extract/css';
import { themeContract } from 'lib/themes/theme.css';
import variables, { colors } from './variables.css';

export const theme = {
  name: 'macos',
  light: createTheme(
    themeContract,
    { colors: colors.light, ...variables },
    'macos-light',
  ),
  dark: createTheme(
    themeContract,
    { colors: colors.dark, ...variables },
    'macos-dark',
  ),
};

export default theme;
