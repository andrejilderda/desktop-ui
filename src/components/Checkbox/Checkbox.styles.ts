import createStyles from 'src/theme/createStyles';
import focusableVariants from 'src/styles/focusableVariants';
import { ComponentStyles } from 'src/theme/types';

const selectedStyles = {
  background: '$checkboxFillSelected',
  border: 'none',
};

const styles: ComponentStyles = {
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '$checkbox auto',
    gap: '$2',
  },

  root: [
    focusableVariants,
    {
      background: '$checkboxFill',
      border: '$borderWidths$default solid $checkboxBorder',
      borderRadius: '$1',
      height: '$checkbox',
      transform: 'translateY(0.1em)',
      fontSize: 'inherit',
      position: 'relative',
      width: '$checkbox',

      compoundVariants: [
        {
          theme: 'windows',
          checked: true,
          css: selectedStyles,
        },
        {
          theme: 'windows',
          checked: 'indeterminate',
          css: selectedStyles,
        },
      ],

      variants: {
        // needed to trigger compoundVariants & make Stitches infer types correctly
        theme: {},
        mode: {},
        windowBlur: {},
        checked: {
          true: {},
          false: {},
          indeterminate: {},
        },
      },
    },
  ],

  indicator: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },

  check: {
    position: 'absolute',

    color: '$checkboxCheck',
  },
  minus: {
    position: 'absolute',

    color: '$checkboxCheck',
  },
};

export default createStyles<keyof typeof styles>('checkbox', styles);
