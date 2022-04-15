import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { selectors } from 'lib/constants/selectors';
import { createUtils } from 'lib/utils';
import { componentName } from './index.css';
import { assignTokensToVars } from 'lib/utils/helpers.css';

const { useVar, setVars, initialVars } = createUtils(componentName);

export const wrapper = style([
  {
    vars: initialVars(['color']),

    display: 'inline-flex',
    alignItems: 'flex-start',
    gap: '8px',
  },
]);

const wrapperVars = assignTokensToVars(componentName, 'windows', {
  '--text-disabled': 'fill_color.text.disabled',
});

export const wrapperVariants = recipe({
  variants: {
    disabled: {
      true: {
        selectors: {
          [wrapperVars.dark.selector]: { vars: wrapperVars.dark.vars },
          [wrapperVars.light.selector]: { vars: wrapperVars.light.vars },
        },
      },
    },
  },
});

export const checkboxWrapper = style([
  {
    display: 'flex',
    alignItems: 'center',
  },
]);

export const root = style([
  {
    alignItems: 'center',
    fontSize: '8px',
    lineHeight: '8px',
    borderStyle: 'solid',
    borderWidth: useVar`--border-width`,
    borderRadius: '$1',
    display: 'block',
    flexShrink: '0',
    height: useVar`--size`,
    width: useVar`--size`,
    margin: 0,
    padding: 0,
    transform: 'translateY(1px)',

    selectors: {
      // Windows
      [`${selectors.windows}`]: {
        borderRadius: '4px',
        vars: {
          ...setVars`
            --size: 20px,
            --border-width: 4px
          `,
        },
      },
    },
  },
  // controlColors,
]);

export const indicator = style([
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
]);

export const check = style([{ position: 'absolute' }]);
export const minus = style([{ position: 'absolute' }]);
export const label = style([
  {
    alignSelf: 'center',
    userSelect: 'none',
  },
]);

//     vars: initialVars([]),

//     background: useVar`--fill`,
//     backgroundColor: useVar`--fill-active, --fill`,

//     selectors: {
//       // hover
//       [`${pseudo.hover}:not([disabled])`]: {
//         backgroundColor: useVar`--fill-hover, --fill`,
//       },

//       [`${selectors.windows}`]: {
//         borderRadius: '4px',
//       },

//       [checkboxVars.windows.light.selector]: {
//         vars: checkboxVars.windows.light.vars,
//       },
//       [checkboxVars.windows.dark.selector]: {
//         vars: {
//           ...checkboxVars.windows.dark.vars,
//           '--rd-button-elevation-y': '1px',
//         },
//       },
//     },
//   },
// ]);
