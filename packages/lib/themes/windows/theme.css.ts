import { createTheme } from '@vanilla-extract/css';
import { vars } from 'lib/themes/globalTheme.css';
import { ThemeMode } from 'lib/types';
import { variables, colors } from './variables.css';

const theme: Record<ThemeMode, string> = {
  light: createTheme(
    vars,
    { colors: colors.light, ...variables },
    'windows-light',
  ),
  dark: createTheme(
    vars,
    { colors: colors.dark, ...variables },
    'windows-dark',
  ),
};

export default theme;
