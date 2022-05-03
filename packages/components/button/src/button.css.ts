import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from 'lib/themes/globalTheme.css';
import { componentName } from './index.css';
import { rdStyle as rdStylePartial } from 'packages/private/rdStyle.css';
import { styles } from 'components/Button/src/themes';

const rdStyle = rdStylePartial({ componentName });

export const buttonStyle = style([
  ...rdStyle({
    // vars: initialVars([
    //   'border',
    //   'border-disabled',
    //   'elevation-stroke',
    //   'elevation-stroke-active',
    //   'fill',
    //   'fill-active',
    //   'fill-hover',
    //   'fill-disabled',
    //   'focus-outline',
    //   'stroke',
    //   'stroke-active',
    //   'text',
    //   'text-active',
    //   'text-hover',
    //   'text-disabled',
    //   'font-size',
    // ]),

    all: 'unset',
    cursor: 'default',
    fontFamily: vars.typography.fonts.system,

    lineHeight: '$$line-height',
    padding: '$$padding',
    textAlign: 'center',
    userSelect: 'none',
    borderColor: '$$border',
    backgroundColor: '$$fill',
    color: '$$text',
    fontSize: '$$font-size',
    outlineColor: '$$focus-outline',

    selectors: {
      '&[disabled]': {
        backgroundColor: '($$fill-disabled, $$fill)',
        borderColor: '($$border-disabled, $$border)',
        color: '($$text-disabled, $$text)',
      },

      '&:not([disabled])': {
        boxShadow: `inset 0px $$elevation-y 0px 0px $$elevation-stroke, inset 0px 0px 0px 1px $$stroke`,
      },

      // hover
      '&:hover:not([disabled])': {
        backgroundColor: '($$fill-hover, $$fill)',
        color: '($$text-hover, $$text)',
      },

      // active
      '&:active:not([disabled])': {
        backgroundColor: '($$fill-active, $$fill)',
        color: '($$text-active, $$text)',
        boxShadow: `inset 0px $$elevation-y 0px 0px ($$elevation-stroke-active, $$elevation-stroke), inset 0px 0px 0px 1px ($$stroke-active, $$stroke)`,
      },
    },
  }),
  ...styles.windows.button,
  ...styles.windows.buttonDark,
]);

export const buttonRecipe = recipe({
  base: {},

  variants: {
    variant: {
      accent: styles.windows.accent,
    },
  },
});
