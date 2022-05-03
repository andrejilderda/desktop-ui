import { style } from '@vanilla-extract/css';
import { componentName } from '../index.css';
import { themeUtils } from 'lib/utils/themeUtils.css';

const { theme } = themeUtils('macos', componentName);

export const root = theme({
  colors: (c) => ({}),
});
