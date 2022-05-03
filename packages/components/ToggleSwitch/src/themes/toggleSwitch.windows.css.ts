import { componentName } from '../index.css';
import { rdStyle as rdStylePartial } from 'packages/private/rdStyle.css';
import { tokens } from 'lib/themes/windows/tokens';

const rdStyle = rdStylePartial({ componentName, theme: 'windows' });

export const root = rdStyle({
  '$$border-width': tokens.borderWidths.default,
  '$$border-radius': tokens.radii['pill'],

  colors: (c) => ({
    $$text: c.fill_color.text.primary,
    '$$outline-color-focus': c.stroke_color.focus_stroke.outer,
  }),

  selectors: {
    '&:focus-visible': {
      '$$outline-color': '$$outline-color-focus',
      outlineWidth: '2px',
      outlineOffset: '1px',
    },
  },
});

export const thumb = rdStyle({
  colors: (c) => ({
    $$fill: c.fill_color.text.secondary,
    '$$fill-thumb-checked': c.fill_color.text_on_accent.primary,
  }),
});
