import base from './base';
import tokens from './tokens';

const dark = {
  theme: {
    ...base,
    colors: {
      foreground: String(tokens.dark.fill_color.text.primary),
      background: String(tokens.dark.background.fill_color),
    },
  },
};

export default dark;
