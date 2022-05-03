import base from './base';
import { tokens as t } from './tokens';

const dark = {
  theme: {
    ...base,
    colors: {
      foreground: t.dark.fill_color.text.primary,
      background: t.dark.background.fill_color.solid_background.base,

      // GENERAL
      text: t.dark.fill_color.text.primary,
      textDisabled: t.dark.fill_color.text.disabled,
      focusOutline: t.dark.stroke_color.focus_stroke.outer,

      // CONTROL
      controlFill: t.dark.fill_color.control_alt.secondary,
      controlBorder: t.dark.stroke_color.control_strong_stroke.default,
      controlTextOnAccentColor: t.dark.fill_color.text_on_accent.primary,

      // hover
      controlFillHover: t.dark.fill_color.control_alt.tertiary,
      controlFillHoverChecked: t.dark.fill_color.accent.secondary,

      // active
      controlFillActive: t.dark.fill_color.control_alt.quarternary,
      controlBorderActive: t.dark.stroke_color.control_strong_stroke.disabled,

      // active - checked
      controlFillActiveChecked: t.dark.fill_color.accent.tertiary,
      controlBorderActiveChecked: 'transparent',
      controlTextOnAccentColorActiveChecked:
        t.dark.fill_color.text_on_accent.secondary,

      // disabled
      controlFillDisabled: t.dark.fill_color.control_alt.disabled,
      controlBorderDisabled: t.dark.stroke_color.control_strong_stroke.disabled,

      // disabled - checked
      controlFillDisabledChecked: t.dark.fill_color.accent.disabled,
      controlBorderDisabledChecked: 'transparent',

      // checked
      controlFillChecked: t.dark.fill_color.accent.default,
      controlBorderChecked: 'transparent',
    },
  },
};

export default dark;
