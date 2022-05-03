import { style } from '@vanilla-extract/css';
import { createUtils } from 'lib/utils';
import { styles } from './themes/index';
import { componentName } from './index.css';

const { useVar, initialVars } = createUtils(componentName);

export const label = style([
  {
    vars: initialVars(['font-size', 'line-height']),

    userSelect: 'none',
    color: useVar`--text`,
    fontSize: useVar`--font-size`,
    lineHeight: useVar`--line-height`,
  },
  styles.windows.root,
  // styles.macos.root,
]);
