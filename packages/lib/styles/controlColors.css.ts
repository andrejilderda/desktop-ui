import { StyleRule } from '@vanilla-extract/css/dist/declarations/src';
import { pseudo } from 'lib/constants/styles';
import { createUtils } from 'lib/utils';
import { controlColors as windows } from './controlColors.windows.css';

// can be used by at least:
// - checkbox
// - radio
// - toggle

const { useVar, initialVars } = createUtils('control');

export const controlColors: StyleRule[] = [
  {
    vars: initialVars(['border', 'fill', '--symbol']),

    borderColor: useVar`--border`,
    color: useVar`--symbol`,
    backgroundColor: useVar`--fill`,

    selectors: {
      '&[disabled]': {
        vars: {
          [useVar`--fill`]: useVar`--fill-disabled`,
          [useVar`--border`]: useVar`--border-disabled`,
        },
      },

      [`&[disabled][data-state="checked"], 
        &[disabled][data-state="indeterminate"]`]: {
        vars: {
          [useVar`--fill`]: useVar`--fill-checked-disabled`,
          [useVar`--border`]: useVar`--border-checked-disabled`,
        },
      },

      [`&:not([disabled])[data-state="checked"], 
        &:not([disabled])[data-state="indeterminate"]`]: {
        vars: {
          [useVar`--fill`]: useVar`--fill-checked`,
          [useVar`--border`]: useVar`--border-checked`,
        },
      },

      [`${pseudo.hover}:not([disabled])`]: {
        vars: {
          [useVar`--fill`]: useVar`--fill-hover`,
        },
      },

      [`${pseudo.hover}:not([disabled])[data-state="checked"],
        ${pseudo.hover}:not([disabled])[data-state="indeterminate"]`]: {
        vars: {
          [useVar`--fill`]: useVar`--fill-hover-checked`,
        },
      },

      [`${pseudo.active}:not([disabled])`]: {
        vars: {
          [useVar`--fill`]: useVar`--fill-active`,
        },
      },

      [`${pseudo.active}:not([disabled])[data-state="checked"],
        ${pseudo.active}:not([disabled])[data-state="indeterminate"]`]: {
        vars: {
          [useVar`--fill`]: useVar`--fill-active-checked`,
        },
      },
    },
  },
  windows,
];
