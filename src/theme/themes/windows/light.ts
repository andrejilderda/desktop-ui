import base from './base';
import tokens from './tokens';

const light = {
  theme: {
    ...base,
    colors: {
      foreground: String(tokens.light.fill_color.text.primary),
      background: String(
        tokens.light.background.fill_color.solid_background.base,
      ),
      focusOutline: String(tokens.light.stroke_color.focus_stroke.outer),
      checkboxFill: String(tokens.light.fill_color.control_alt.secondary),
      checkboxBorder: String(
        tokens.light.stroke_color.control_strong_stroke.default,
      ),
      checkboxFillSelected: String(tokens.light.fill_color.accent.default),
      checkboxCheck: String(tokens.light.fill_color.text_on_accent.primary),
    },
  },
};

export default light;
