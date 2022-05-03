import { componentName } from '../index.css';
import { rdStyle as rdStylePartial } from 'packages/private/rdStyle.css';

const rdStyle = rdStylePartial({ componentName, theme: 'windows' });

export const base = rdStyle({
  colors: (c) => ({
    $$overlay: c.background.fill_color.smoke.default,
    $$bgBase: c.background.fill_color.solid_background.base,
    $$bgContent: c.background.fill_color.layer.alt,
    $$outlineColor: c.stroke_color.surface_stroke.default,
    $$text: c.fill_color.text.primary,
    $$bgFooter: c.background.fill_color.mica_background.base,
    $$bgFooterStroke: c.stroke_color.card_stroke.default,
  }),
});

export const content = rdStyle({
  boxShadow: '$dialog',
  borderRadius: '$3',
  padding: '$6',
});

export const title = rdStyle({
  fontSize: '$4',
  fontWeight: 600,
  lineHeight: '$4',
  margin: '0 0 $3',
});

export const description = rdStyle({
  fontSize: '$2',
  lineHeight: '$2',
});

export const footer = rdStyle({
  borderTop: '1px solid $$bgFooterStroke',
  borderRadius: '0 0 $3 $3',
  gap: '$2',
  margin: '$6 -$6 -$6',
  padding: '$6',
});
