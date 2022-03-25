import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { componentName } from '.';
import { selectors } from 'lib/constants/selectors';
import { pseudo } from 'lib/constants/styles';
import { vars } from 'lib/themes/globalTheme.css';
import { assignTokensToVars } from 'lib/utils/helpers';
import { buttonVars } from './themes';
import { themes } from 'lib/themes/themes.css';
import { createUtils } from 'lib/utils';

const { useVar, initialVars } = createUtils(componentName);

export const buttonStyle = style([
  {
    vars: initialVars([
      'border',
      'border-disabled',
      'elevation-stroke',
      'elevation-stroke-active',
      'fill',
      'fill-active',
      'fill-hover',
      'fill-disabled',
      'focus-outline',
      'stroke',
      'stroke-active',
      'text',
      'text-active',
      'text-hover',
      'text-disabled',
      'font-size',
    ]),

    all: 'unset',
    cursor: 'default',
    fontFamily: vars.typography.fonts.system,

    lineHeight: useVar`--line-height`,
    padding: useVar`--padding`,
    textAlign: 'center',
    userSelect: 'none',
    borderColor: useVar`--border`,
    backgroundColor: useVar`--fill`,
    color: useVar`--text`,
    fontSize: useVar`--font-size`,
    outlineColor: useVar`--focus-outline`,

    selectors: {
      '&[disabled]': {
        backgroundColor: useVar`--fill-disabled, --fill`,
        borderColor: useVar`--border-disabled, --border`,
        color: useVar`--text-disabled, --text`,
      },

      '&:not([disabled])': {
        boxShadow: `inset 0px ${useVar`--elevation-y`} 0px 0px ${useVar`--elevation-stroke`}, inset 0px 0px 0px 1px ${useVar`--stroke`}`,
      },

      // hover
      [`${pseudo.hover}:not([disabled])`]: {
        backgroundColor: useVar`--fill-hover, --fill`,
        color: useVar`--text-hover, --text`,
      },

      // active
      [`${pseudo.active}:not([disabled])`]: {
        backgroundColor: useVar`--fill-active, --fill`,
        color: useVar`--text-active, --text`,
        boxShadow: `inset 0px ${useVar`--elevation-y`} 0px 0px ${useVar`--elevation-stroke-active, --elevation-stroke`}, inset 0px 0px 0px 1px ${useVar`--stroke-active, --stroke`}`,
      },

      // Windows
      [`${selectors.windows}`]: {
        borderRadius: '4px',
      },

      [`.${themes.windows.light} ${pseudo.focusVisible},
      .${themes.windows.dark} ${pseudo.focusVisible}`]: {
        outline: `2px solid ${useVar`--focus-outline`}`,
        outlineOffset: '1px',
      },

      [windowsVars.light.selector]: { vars: windowsVars.light.vars },
      [windowsVars.dark.selector]: {
        vars: {
          ...windowsVars.dark.vars,
          ...buttonVars.windows.dark.vars,
          '--rd-button-elevation-y': '1px',
        },
      },
    },
  },
]);

// Variant: accent
const accentVars = assignTokensToVars('button', 'windows', {
  fill: 'fill_color.accent.default',
  'fill-hover': 'fill_color.accent.secondary',
  'fill-active': 'fill_color.accent.tertiary',
  'fill-disabled': 'fill_color.accent.disabled',
  stroke: 'stroke_color.control_stroke.on accent default',
  'elevation-stroke': 'stroke_color.control_stroke.on accent secondary',
  // text
  text: 'fill_color.text_on_accent.primary',
  'text-active': 'fill_color.text_on_accent.secondary',
  'text-disabled': 'fill_color.text_on_accent.disabled',
});

export const buttonRecipe = recipe({
  base: {},

  variants: {
    variant: {
      default: {
        vars: {},
      },
      accent: {
        selectors: {
          [accentVars.dark.selector]: { vars: accentVars.dark.vars },
          [accentVars.light.selector]: { vars: accentVars.light.vars },
        },
      },
    },
  },
});
