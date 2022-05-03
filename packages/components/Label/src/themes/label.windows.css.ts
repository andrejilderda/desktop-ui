import { style } from '@vanilla-extract/css';
import { componentName } from './../index.css';
import { themeUtils } from 'lib/utils/themeUtils.css';

const { theme } = themeUtils('windows', componentName);

export const root = theme({
  borderRadius: '4px',
  '--font-size': '14px',
  '--line-height': '20px',

  colors: (c) => ({
    '--text': c.fill_color.text.primary,
  }),
});
