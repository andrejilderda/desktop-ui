import { style } from '@vanilla-extract/css';
import { pseudo } from 'lib/constants/styles';
import { createUtils } from 'lib/utils';
import { styles } from './themes/index';
import { componentName } from './index.css';

const { useVar, initialVars } = createUtils(componentName);

export const root = style([
  {
    vars: initialVars(['text']),

    color: useVar`--text`,

    selectors: {
      [`${pseudo.hover}:not([disabled])`]: {
        color: useVar`--text-hover, --text`,
      },
    },
  },
  styles.windows.root,
  styles.macos.root,
]);
