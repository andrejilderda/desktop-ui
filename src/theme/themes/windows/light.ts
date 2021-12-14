import base from './base';
import tokens from './tokens';

const light = {
  theme: {
    ...base,
    colors: {
      foreground: String(tokens.light.fill_color.text.primary),
      background: String(tokens.light.background.fill_color),
    },
  },
};

export default light;
