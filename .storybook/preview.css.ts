import { style, globalStyle } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import vars from '../packages/lib/themes/globalTheme.css';

export const sideBySide = style({
  display: 'flex',
});

export const storybookPreview = recipe({
  base: {
    fontFamily: vars.typography.fonts.system,
    display: 'flex',
    flex: 1,
  },

  variants: {
    layout: {
      'side-by-side': {},
      stacked: {
        display: 'flex',
        flexDirection: 'column',
      },
    },
  },
});

globalStyle('.sb-show-main.sb-main-padded', {
  padding: 0,
});

globalStyle('.sb-show-main.sb-main-padded .rd-windows', {
  padding: 10,
});

globalStyle(`${storybookPreview()} > div`, {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  background: vars.colors.background,
});

globalStyle(`${storybookPreview()} > div > div`, {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});
