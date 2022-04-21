import { rdStyle as rdStylePartial } from 'packages/private/rdStyle.css';
import { controlColors as windows } from './controlColors.windows.css';

const rdStyle = rdStylePartial({ componentName: 'control' });

// can be used by at least:
// - checkbox
// - radio
// - toggle

export const controlColors = [
  ...rdStyle({
    // vars: initialVars(['border', 'fill', '--symbol']),

    borderColor: '$$border',
    color: '$$symbol',
    backgroundColor: '$$fill',

    selectors: {
      '&[disabled]': {
        $$fill: '$$fill-disabled',
        $$border: '$$border-disabled',
      },

      [`&[disabled][data-state="checked"], 
        &[disabled][data-state="indeterminate"]`]: {
        $$fill: '$$fill-checked-disabled',
        $$border: '$$border-checked-disabled',
        $$symbol: '$$symbol-checked',
      },

      [`&:not([disabled])[data-state="checked"], 
      &:not([disabled])[data-state="indeterminate"]`]: {
        $$fill: '$$fill-checked',
        $$border: '$$border-checked',
        $$symbol: '$$symbol-checked',
      },

      '&:hover:not([disabled])': {
        $$fill: '$$fill-hover',
      },

      [`&:hover:not([disabled])[data-state="checked"],
        &:hover:not([disabled])[data-state="indeterminate"]`]: {
        $$fill: '$$fill-hover-checked',
      },

      [`&:active:not([disabled])`]: {
        $$fill: '$$fill-active',
      },

      [`&:active:not([disabled])[data-state="checked"],
        &:active:not([disabled])[data-state="indeterminate"]`]: {
        $$fill: '$$fill-active-checked',
      },
    },
  }),
  ...windows,
];
