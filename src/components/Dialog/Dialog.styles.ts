import createStyles from 'src/theme/createStyles';
import { ComponentStyles, StylesFunctionArgs, CSS } from 'src/theme/types';
import win from 'src/theme/themes/windows/tokens';
// import { pseudo } from 'src/constants/styles';
// import focusableVariants from 'src/styles/focusableVariants';

const styles: ComponentStyles = {
  base: ({ mode }: StylesFunctionArgs): CSS => ({
    $$overlay: win[mode].background.fill_color.smoke.default,
    $$bgBase: win[mode].background.fill_color.solid_background.base,
    $$bgContent: win[mode].background.fill_color.layer.alt,
    $$outlineColor: win[mode].stroke_color.surface_stroke.default,
    $$text: win[mode].fill_color.text.primary,
    $$bgFooter: win[mode].background.fill_color.mica_background.base,
    $$bgFooterStroke: win[mode].stroke_color.card_stroke.default,
  }),

  overlay: {
    background: '$$overlay',
    display: 'grid',
    overflowY: 'auto',
    placeItems: 'center',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  },

  content: {
    backgroundImage:
      'linear-gradient($$bgContent, $$bgContent), linear-gradient($$bgBase, $$bgBase)',
    borderRadius: '$3',
    boxShadow: '$dialog',
    color: '$$text',
    outline: '1px solid $$outlineColor',
    overflow: 'hidden',
    padding: '$6',
    userSelect: 'none',

    variants: {
      theme: {},
      mode: {},
      size: {
        standard: {
          width: 448,
        },
        min: {
          width: 320,
        },
        max: {
          width: 540,
        },
      },
    },

    compoundVariants: [
      {
        theme: 'windows',
        mode: 'dark',
        css: {
          $$bgFooter: win.dark.background.fill_color.solid_background.base,
        },
      },
    ],
  },

  title: {
    fontSize: '$4',
    lineHeight: '$4',
    fontWeight: 600,
    margin: '0 0 $3',
  },

  description: {
    fontSize: '$2',
    lineHeight: '$2',
  },

  footer: {
    borderTop: '1px solid $$bgFooterStroke',
    background: '$$bgFooter',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '$2',
    margin: '$6 -$6 -$6',
    padding: '$6',

    '.rd-button': {
      flex: '1 0 auto',
      maxWidth: '50%',
    },
  },

  // close: ({ mode }: StylesFunctionArgs): CSS => ({}),
};

export default createStyles<keyof typeof styles>('dialog', styles);
