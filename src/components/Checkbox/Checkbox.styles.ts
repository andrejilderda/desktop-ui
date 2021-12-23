import createStyles from 'src/theme/createStyles';
import focusableVariants from 'src/styles/focusableVariants';
import { ComponentStyles } from 'src/theme/types';
import controlColors from 'src/styles/controlColors';

const styles: ComponentStyles = {
  wrapper: {
    $$color: 'text$checkboxFill',
    color: '$$color',

    display: 'flex',
    gridTemplateColumns: '$checkbox auto',
    alignItems: 'flex-start',
    gap: '$2',
    fontSize: '$2',
    lineHeight: '$2',

    variants: {
      disabled: {
        true: {
          $$color: '$colors$textDisabled',
        },
      },
    },
  },

  checkboxWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  root: [
    {
      ...controlColors,

      alignItems: 'center',

      borderStyle: 'solid',
      borderWidth: '$borderWidths$default',
      borderRadius: '$1',
      height: '$checkbox',
      width: '$checkbox',
      flexShrink: '0',
      transform: 'translateY(1px)',
    },
    focusableVariants,
  ],

  indicator: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },

  check: { position: 'absolute' },
  minus: { position: 'absolute' },
  label: {
    alignSelf: 'center',
  },
};

export default createStyles<keyof typeof styles>('checkbox', styles);
