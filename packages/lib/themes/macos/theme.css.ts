import { createTheme } from '@vanilla-extract/css';
import vars from 'lib/themes/globalTheme.css';
import { ThemeMode } from 'lib/types';
import variables, { colors } from './variables.css';

const theme: Record<ThemeMode, string> = {
  light: createTheme(
    vars,
    { colors: colors.light, ...variables },
    'macos-light',
  ),
  dark: createTheme(vars, { colors: colors.dark, ...variables }, 'macos-dark'),
};

export default theme;
