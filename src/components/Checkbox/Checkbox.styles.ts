import createStyles from 'src/theme/createStyles';
import focusableVariants from 'src/styles/focusableVariants';

const selectedStyles = {
  background: '$checkboxFillSelected',
  border: 'none',
};

const styles = {
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  root: [
    focusableVariants,
    {
      background: '$checkboxFill',
      border: '$borderWidths$default solid $checkboxBorder',
      borderRadius: '$1',
      height: '$checkbox',
      width: '$checkbox',
      position: 'relative',

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
