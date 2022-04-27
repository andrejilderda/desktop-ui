import { componentName } from './../index.css';
import { rdStyle as rdStylePartial } from 'packages/private/rdStyle.css';

const rdStyle = rdStylePartial({ componentName, theme: 'windows' });
const rdStyleDark = rdStylePartial({
  componentName,
  theme: 'windows',
  mode: 'dark',
});

export const button = rdStyle({
  '$$font-size': '14px',
  '$$elevation-y': '-1px',
  '$$line-height': '20px',
  $$padding: '6px 20px',
  borderRadius: '4px',

  selectors: {
    '&:focus-visible': {
      outline: '2px solid $$focus-outline',
      outlineOffset: '1px',
    },
  },

  colors: (c) => ({
    '$$stroke-disabled': 'transparent',
    '$$elevation-stroke-active': 'transparent',
    '$$focus-outline': c.stroke_color.focus_stroke.outer,

    // fill
    $$fill: c.fill_color.control.default,
    '$$fill-hover': c.fill_color.control.secondary,
    '$$fill-disabled': c.fill_color.accent.disabled,
    '$$fill-active': c.fill_color.control.tertiary,

    // stroke
    $$stroke: c.stroke_color.control_stroke.default,
    '$$stroke-active': c.stroke_color.control_stroke.default,

    // elevationStroke
    '$$elevation-stroke': c.stroke_color.control_stroke.secondary,

    // text
    $$text: c.fill_color.text.primary,
    '$$text-hover': c.fill_color.text.primary,
    '$$text-active': c.fill_color.text.secondary,
    '$$text-disabled': c.fill_color.text.disabled,
  }),
});

export const buttonDark = rdStyleDark({
  '$$elevation-y': '1px',
});

export const accent = rdStyle({
  colors: (c) => ({
    $$fill: c.fill_color.accent.default,
    '$$fill-hover': c.fill_color.accent.secondary,
    '$$fill-active': c.fill_color.accent.tertiary,
    '$$fill-disabled': c.fill_color.accent.disabled,
    $$stroke: c.stroke_color.control_stroke.on_accent_default,
    '$$elevation-stroke': c.stroke_color.control_stroke.on_accent_secondary,

    // text
    $$text: c.fill_color.text_on_accent.primary,
    '$$text-hover': c.fill_color.text_on_accent.primary,
    '$$text-active': c.fill_color.text_on_accent.secondary,
    '$$text-disabled': c.fill_color.text_on_accent.disabled,
  }),
});
