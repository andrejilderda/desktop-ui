import base from './base';
import tokens from './tokens';

const dark = {
  theme: {
    ...base,
    colors: {
      foreground: String(tokens.dark.fill_color.text.primary),
      background: String(
        tokens.dark.background.fill_color.solid_background.base,
      ),
      focusOutline: String(tokens.dark.stroke_color.focus_stroke.outer),
      checkboxFill: String(tokens.dark.fill_color.control_alt.secondary),
      checkboxBorder: String(
        tokens.dark.stroke_color.control_strong_stroke.default,
      ),
      checkboxFillSelected: String(tokens.dark.fill_color.accent.default),
    },
  },
};

export default dark;
