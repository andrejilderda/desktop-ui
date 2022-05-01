import { componentName } from './index.css';
import { rdStyle as rdStylePartial } from 'packages/private/rdStyle.css';
import { style } from '@vanilla-extract/css';
import { styles } from 'components/Progress/src/themes';
import { keyframes } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const rdStyle = rdStylePartial({ componentName });

export const indeterminateBar = keyframes({
  '0%': {
    width: '40%',
    transform: 'translateX(-100%)',
    left: '0',
  },
  '50%': {
    left: '100%',
    transform: 'translateX(0%)',
  },
  '50.1%': {
    width: '60%',
    transform: 'translateX(-100%)',
    left: '0',
  },
  '100%': {
    left: '100%',
    width: '60%',
    transform: 'translateX(0%)',
  },
});

export const indeterminateRailRotation = keyframes({
  '0%': {
    transform: 'rotate3d(0, 0, 1, -105deg)',
  },

  '100%': {
    transform: 'rotate3d(0, 0, 1, 615deg)',
  },
});

export const indeterminateRailDash = keyframes({
  '0%': {
    strokeDashoffset: 100,
    strokeDasharray: '100 100',
    transform: 'rotate3d(0, 0, 1, 0deg)',
  },

  '33%': {
    strokeDashoffset: 62,
    strokeDasharray: '100 100',
    transform: 'rotate3d(0, 0, 1, 80deg)',
  },

  '66%': {
    strokeDashoffset: 62,
    strokeDasharray: '100 100',
    transform: 'rotate3d(0, 0, 1, 160deg)',
  },

  '100%': {
    strokeDashoffset: 100,
    strokeDasharray: '100 100',
    transform: 'rotate3d(0, 0, 1, 360deg)',
  },
});

export const rail = style([
  ...rdStyle({
    alignItems: 'center',
    display: 'flex',
    height: 1,
    background: '$$rail',
    width: '100%',
  }),
  ...styles.windows.rail,
]);

export const track = style([
  ...rdStyle({
    height: 3,
    background: '$$track',

    selectors: {
      '&[data-state="indeterminate"]': {
        background: 'transparent',
        overflow: 'hidden',
        width: '100%',
      },
      '&[data-state="indeterminate"]:after': {
        content: '',
        background: '$$track',
        display: 'block',
        height: 3,
        position: 'relative',
        width: '53%',
        animation: `2s linear running infinite ${indeterminateBar}`,
      },
    },
  }),
  ...styles.windows.track,
]);

export const trackStatusRecipe = recipe(styles.windows.trackStatusRecipe);

export const ringWrapper = style([
  ...rdStyle({
    height: 16,
    width: 16,

    stroke: '$$stroke',
    transform: 'rotate(-90deg)',
    overflow: 'visible',

    selectors: {
      '&[data-state="indeterminate"]': {
        transformOrigin: 'center',
        animation: `2s linear running infinite ${indeterminateRailRotation}`,
      },
    },
  }),
  ...styles.windows.ringWrapper,
]);

export const ringWrapperSizeRecipe = recipe({
  base: {},
  variants: {
    size: {
      16: {
        height: 16,
        width: 16,
      },
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
});

export const ring = style([
  ...rdStyle({
    selectors: {
      '&[data-state="indeterminate"]': {
        strokeDasharray: '360 100',
        transformOrigin: 'center',
        animation: `2s linear running infinite ${indeterminateRailDash}`,
      },
    },
  }),
]);
