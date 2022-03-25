import { style } from '@vanilla-extract/css';
import { themes } from 'lib/themes/themes.css';
import { selectors } from 'lib/constants/selectors';
import { classNamePrefix, pseudo } from 'lib/constants/styles';
import { vars }from 'lib/themes/globalTheme.css';
import { createUseVarFn } from 'lib/utils/createUseVarFn';
import component_nameVars from './themes/index';
import { componentName } from '.';

const useVar = createUseVarFn(componentName);

export const component_nameStyle = style([
  {
    vars: {
      ...Object.fromEntries(
        ['fill'].map((key) => [
          `--${classNamePrefix}-${componentName}-${key}`,
          'initial',
        ]),
      ),
    },

    background: useVar`--fill`,
    backgroundColor: useVar`--fill-active, --fill`,

    selectors: {
      // hover
      [`${pseudo.hover}:not([disabled])`]: {
        backgroundColor: useVar`--fill-hover, --fill`,
      },

      [`${selectors.windows}`]: {
        borderRadius: '4px',
      },

      [component_nameVars.windows.light.selector]: {
        vars: component_nameVars.windows.light.vars,
      },
      [component_nameVars.windows.dark.selector]: {
        vars: {
          ...component_nameVars.windows.dark.vars,
          '--rd-button-elevation-y': '1px',
        },
      },
    },
  },
]);