import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { selectors } from 'lib/constants/selectors';
import { pseudo } from 'lib/constants/styles';
import checkboxVars from './themes/index';
import { createUtils } from 'lib/utils';
import { componentName } from './index.css';

const { useVar, initialVars } = createUtils(componentName);

export const wrapper = style([
  {
    vars: initialVars(['color']),

    display: 'inline-flex',
    alignItems: 'flex-start',
    gap: '8px',
    fontSize: '8px',
    lineHeight: '8px',
  },
]);

export const wrapperVariants = recipe({
  variants: {
    disabled: {
      true: { borderRadius: 999 },
    },
  },
});

export const checkboxStyle = style([
  {
    vars: initialVars([]),

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

      [checkboxVars.windows.light.selector]: {
        vars: checkboxVars.windows.light.vars,
      },
      [checkboxVars.windows.dark.selector]: {
        vars: {
          ...checkboxVars.windows.dark.vars,
          '--rd-button-elevation-y': '1px',
        },
      },
    },
  },
]);
