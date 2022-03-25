import { globalStyle } from '@vanilla-extract/css';
import { globalStylesClassName } from 'lib/constants/styles';
import { vars } from 'lib/themes/globalTheme.css';

globalStyle(`.${globalStylesClassName}`, {
  backgroundColor: vars.colors.background,
  color: vars.colors.foreground,
  fontFamily: vars.typography.fonts.system,
});

globalStyle(`.${globalStylesClassName} *`, {
  boxSizing: 'border-box',
});
