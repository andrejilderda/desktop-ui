import { rdStyle as rdStylePartial } from 'packages/private/rdStyle.css';

const rdStyle = rdStylePartial({ componentName: 'control', theme: 'windows' });

// can be used by at least:
// - checkbox
// - radio
// - toggle

export const controlColors = rdStyle({
  colors: (c) => ({
    $$fill: c.fill_color.control_alt.secondary,
    $$border: c.stroke_color.control_strong_stroke.default,
    $$symbol: c.fill_color.text.secondary,
    '$$symbol-checked': c.fill_color.text_on_accent.primary,

    '$$fill-disabled': c.fill_color.control.disabled,
    '$$border-disabled': c.stroke_color.control_strong_stroke.disabled,
    '$$symbol-disabled': c.fill_color.text.disabled,
    '$$fill-checked-disabled': c.fill_color.accent.disabled,
    '$$border-checked-disabled': 'transparent',

    '$$fill-checked': c.fill_color.accent.default,
    '$$border-checked': 'transparent',

    '$$fill-hover': c.fill_color.control_alt.tertiary,
    '$$fill-hover-checked': c.fill_color.accent.secondary,

    '$$fill-active': c.fill_color.control_alt.quarternary,
    '$$border-active': c.stroke_color.control_strong_stroke.disabled,

    '$$fill-active-checked': c.fill_color.accent.tertiary,
    '$$symbol-active-checked': c.fill_color.text_on_accent.secondary,
  }),
});
