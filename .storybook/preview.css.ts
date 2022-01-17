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

globalStyle(`.sb-story-wrapper`, {
  display: 'flex',
  width: '100%',
  alignItems: 'start',
  justifyItems: 'start',
});

globalStyle(`.sb-preview-side-by-side, .sb-preview-stacked`, {
  margin: '-1rem',
});

globalStyle(`.sb-preview-side-by-side > div, .sb-preview-stacked > div`, {
  padding: '1rem',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  background: vars.colors.background,
});

globalStyle(`${storybookPreview()} .sb-story-wrapper--all-pseudo-states`, {
  gap: '12px',
});

globalStyle(`${storybookPreview()} .sb-preview-side-by-side`, {
  flex: 1,
  alignItems: 'start',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});
