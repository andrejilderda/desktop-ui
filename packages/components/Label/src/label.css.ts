import { style } from '@vanilla-extract/css';
import selectors from 'lib/constants/selectors';
import { classNamePrefix } from 'lib/constants/styles';
import createUseVarFn from 'lib/utils/createUseVarFn';
import labelVars from './themes/index';
import { componentName } from '.';

const useVar = createUseVarFn(componentName);

export const labelStyle = style([
  {
    vars: {
      ...Object.fromEntries(
        ['font-size', 'line-height'].map((key) => [
          `--${classNamePrefix}-${componentName}-${key}`,
          'initial',
        ]),
      ),
    },

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
