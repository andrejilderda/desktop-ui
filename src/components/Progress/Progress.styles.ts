import { createStyles } from 'src/theme/createStyles';
import { ComponentStyles, StylesFunctionArgs, CSS } from 'src/theme/types';
import {
  indeterminateBar,
  indeterminateRailDash,
  indeterminateRailRotation,
} from 'src/styles/animations';
import { tokens as win } from 'src/theme/themes/windows/tokens';

const styles: ComponentStyles = {
  rail: ({ mode }: StylesFunctionArgs): CSS => ({
    $$rail: win[mode].stroke_color.control_strong_stroke.default,

    alignItems: 'center',
    display: 'flex',
    height: 1,
    background: '$$rail',
    borderRadius: '$pill',
    width: '100%',
  }),

  track: ({ mode }: StylesFunctionArgs): CSS => ({
    $$track: win[mode].fill_color.accent.default,

    height: 3,
    background: '$$track',
    borderRadius: '$pill',

    '&[data-state="indeterminate"]': {
      background: 'transparent',
      overflow: 'hidden',
      width: '100%',

      '&:after': {
        content: '',
        background: '$$track',
        display: 'block',
        height: 3,
        position: 'relative',
        width: '53%',
        animation: `2s linear running infinite ${indeterminateBar}`,
      },
    },

    variants: {
      theme: {},
      status: {},
    },

    compoundVariants: [
      {
        theme: 'windows',
        status: 'paused',
        css: {
          $$track: win[mode].fill_color.system.caution,
        },
      },
      {
        theme: 'windows',
        status: 'error',
        css: {
          $$track: win[mode].fill_color.system.critical,
        },
      },
    ],
  }),

  ringWrapper: ({ mode }: StylesFunctionArgs): CSS => ({
    $$stroke: win[mode].fill_color.accent.default,
    height: 16,
    width: 16,

    stroke: '$$stroke',
    transform: 'rotate(-90deg)',
    overflow: 'visible',

    '&[data-state="indeterminate"]': {
      transformOrigin: 'center',
      animation: `2s linear running infinite ${indeterminateRailRotation}`,
    },

    variants: {
      size: {
        32: {
          height: 32,
          width: 32,
        },

        64: {
          height: 64,
          width: 64,
        },
      },
    },
  }),

  ring: {
    '&[data-state="indeterminate"]': {
      strokeDasharray: '360 100',
      transformOrigin: 'center',
      animation: `2s linear running infinite ${indeterminateRailDash}`,
    },
  },
};

export default createStyles<keyof typeof styles>('progress', styles);
