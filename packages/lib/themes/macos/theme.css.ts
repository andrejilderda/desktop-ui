import { createTheme } from '@vanilla-extract/css';
import { themeContract } from 'lib/themes/globalTheme.css';
import variables, { colors } from './variables.css';

const theme = {
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
