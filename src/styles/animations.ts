import { keyframes } from 'src/reactDesktop.config';

export const indeterminateSpinnerRotation = keyframes({
  '0%': {
    transform: 'rotate3d(0, 0, 1, -105deg)',
  },

  '100%': {
    transform: 'rotate3d(0, 0, 1, 615deg)',
  },
});

export const indeterminateSpinnerDash = keyframes({
  '0%': {
    strokeDashoffset: 360,
    strokeDasharray: 359,
    transform: 'rotate3d(0, 0, 1, 0deg)',
  },

  '33%': {
    strokeDashoffset: 320,
    strokeDasharray: 360,
    transform: 'rotate3d(0, 0, 1, 90deg)',
  },

  '66%': {
    strokeDashoffset: 320,
    strokeDasharray: 360,
    transform: 'rotate3d(0, 0, 1, 180deg)',
  },

  '100%': {
    strokeDashoffset: 360,
    strokeDasharray: 359,
    transform: 'rotate3d(0, 0, 1, 360deg)',
  },
});
