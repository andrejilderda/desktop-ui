import { style } from '@vanilla-extract/css';
import { selectors } from 'lib/constants/selectors';
import { labelVars } from './themes/index';
import { createUtils } from 'lib/utils';
import { componentName } from './index.css';

const { useVar, initialVars } = createUtils(componentName);

export const labelStyle = style([
  {
    vars: initialVars(['font-size', 'line-height']),

    userSelect: 'none',

    color: useVar`--text`,
    fontSize: useVar`--font-size`,
    lineHeight: useVar`--line-height`,

    selectors: {
      [`${selectors.windows}`]: {
        vars: {
          '--rd-label-font-size': '14px',
          '--rd-label-line-height': '20px',
        },
      },

      [labelVars.windows.light.selector]: {
        vars: labelVars.windows.light.vars,
      },
      [labelVars.windows.dark.selector]: {
        vars: labelVars.windows.dark.vars,
      },
    },
  },
]);
