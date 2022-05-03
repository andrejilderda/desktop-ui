import { globalStyle, style } from '@vanilla-extract/css';
import { styles } from './themes/index';
import { rdStyle as rdStylePartial } from 'packages/private/rdStyle.css';
import { controlColors } from 'packages/private/styles/controlColors.css';
import { componentName } from './index.css';
import { focusableVariants } from 'src/styles/focusableVariants';
import { selectors } from 'lib/constants/selectors';

const rdStyle = rdStylePartial({ componentName });

export const root = style([
  ...rdStyle({
    all: 'unset',
    borderRadius: '$$border-radius',
    borderWidth: '$$border-width',
    borderStyle: 'solid',
    height: 20,
    position: 'relative',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    width: 40,
    transition: 'background-color 150ms',
    willChange: 'background-color',

    // focusableVariants,
  }),
  ...styles.windows.root,
  ...controlColors,
]);

export const thumb = style([
  ...rdStyle({
    // backgroundColor: '$$fill',
    backgroundColor: 'CurrentColor',
    borderRadius: '9999px',
    display: 'block',
    height: 12,
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: 'translate(calc(0% + 3px), -50%)',

    // TODO: add animations according to spec
    transition: 'all 150ms',
    width: 12,
    willChange: 'transform',

    selectors: {
      [`&:active:not([data-disabled])`]: {
        width: 17,
        transform: 'translate(calc(0% + 3px), -50%)',
        left: '0%',
      },

      '&[data-state="checked"]': {
        // background: '($$fill-thumb-checked, $$fill)',
        transform: 'translate(calc(-100% - 3px), -50%)',
        left: '100%',
      },

      [`${root}[disabled] &`]: {
        // backgroundColor: '($$fill-thumb-disabled, $$fill-thumb)',
      },
    },
  }),
  ...styles.windows.thumb,
]);

// selectors: {
//   [`${root}[disabled] &`]: {
//     $$fill: win[mode].fill_color.text.disabled,
//   },

//   '&[data-state="checked"]': {
//     $$fill: win[mode].fill_color.text_on_accent.primary,
//     transform: 'translate(calc(-100% - 3px), -50%)',
//     left: '100%',
//   },
// },
