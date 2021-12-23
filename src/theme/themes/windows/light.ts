import base from './base';
import t from './tokens';

const light = {
  theme: {
    ...base,
    colors: {
      foreground: t.light.fill_color.text.primary,
      background: t.light.background.fill_color.solid_background.base,

      // GENERAL
      text: t.light.fill_color.text.primary,
      textDisabled: t.light.fill_color.text.disabled,
      focusOutline: t.light.stroke_color.focus_stroke.outer,

      // CONTROL
      controlFill: t.light.fill_color.control_alt.secondary,
      controlBorder: t.light.stroke_color.control_strong_stroke.default,
      controlTextOnAccentColor: t.light.fill_color.text_on_accent.primary,

      // hover
      controlFillHover: t.light.fill_color.control_alt.tertiary,
      controlFillHoverChecked: t.light.fill_color.accent.secondary,

      // active
      controlFillActive: t.light.fill_color.control_alt.quarternary,
      controlBorderActive: t.light.stroke_color.control_strong_stroke.disabled,

      // active - checked
      controlFillActiveChecked: t.light.fill_color.accent.tertiary,
      controlBorderActiveChecked: 'transparent',
      controlTextOnAccentColorActiveChecked:
        t.light.fill_color.text_on_accent.secondary,

      // disabled
      controlFillDisabled: t.light.fill_color.control_alt.disabled,
      controlBorderDisabled:
        t.light.stroke_color.control_strong_stroke.disabled,

      // disabled - checked
      controlFillDisabledChecked: t.light.fill_color.accent.disabled,
      controlBorderDisabledChecked: 'transparent',

      // checked
      controlFillChecked: t.light.fill_color.accent.default,
      controlBorderChecked: 'transparent',
    },
  },
};

export default light;
