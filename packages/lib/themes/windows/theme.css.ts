import { createTheme } from '@vanilla-extract/css';
import { themeContract } from 'lib/themes/globalTheme.css';
import variables, { colors } from './variables.css';

const theme = {
  name: 'windows',
  light: createTheme(
    themeContract,
    { colors: colors.light, ...variables },
    'windows-light',
  ),
  dark: createTheme(
    themeContract,
    { colors: colors.dark, ...variables },
    'windows-dark',
  ),
};

export default theme;
