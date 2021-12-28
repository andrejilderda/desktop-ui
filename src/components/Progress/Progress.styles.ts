import createStyles from 'src/theme/createStyles';
import { ComponentStyles, StylesFunctionArgs, CSS } from 'src/theme/types';
import {
  indeterminateSpinnerDash,
  indeterminateSpinnerRotation,
} from 'src/styles/animations';
import win from 'src/theme/themes/windows/tokens';

const styles: ComponentStyles = {
  wrapper: {
    height: 16,
    width: 16,

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
  },

  indeterminateSpinner: ({ mode }: StylesFunctionArgs): CSS => ({
    $$stroke: win[mode].fill_color.accent.default,

    transformOrigin: 'center',
    stroke: '$$stroke',
    animation: `2s linear running infinite ${indeterminateSpinnerRotation}`,
    height: '100%',
    width: '100%',
  }),

  circle: {
    strokeDasharray: 360,
    strokeDashoffset: 360,
    transformOrigin: 'center',
    animation: `2s linear running infinite ${indeterminateSpinnerDash}`,
  },
};

export default createStyles<keyof typeof styles>('progress', styles);
