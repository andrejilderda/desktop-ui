import { keyframes } from 'src/reactDesktop.config';

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
