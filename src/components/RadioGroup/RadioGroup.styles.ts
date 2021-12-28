import { pseudo } from 'src/constants/styles';
import controlColors from 'src/styles/controlColors';
import focusableVariants from 'src/styles/focusableVariants';
import createStyles from 'src/theme/createStyles';
import win from 'src/theme/themes/windows/tokens';
import { StylesFunctionArgs, CSS, ComponentStyles } from 'src/theme/types';

const indicatorStyles: CSS = {
  content: '',
  display: 'block',
  borderRadius: '50%',
  backgroundColor: '$$indicatorFill',
  height: 12,
  width: 12,
};

const styles: ComponentStyles = {
  group: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$5',
  },

  item: {
    display: 'flex',
    gap: '8px',
  },

  radio: ({ classPrefix, mode }: StylesFunctionArgs): CSS[] => [
    {
      $$indicatorFill: win[mode].fill_color.text_on_accent.primary,

      all: 'unset',
      width: '$radio',
      height: '$radio',
      borderRadius: '100%',
      borderWidth: '1px',
      borderStyle: 'solid',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...controlColors,
      ...focusableVariants,

      [pseudo.active]: {
        ...(controlColors[pseudo.active] as Record<string, unknown>),
        '&:not([data-state="checked"])::after': {
          ...indicatorStyles,
          height: '10px !important',
          width: '10px !important',
        },

        [`${classPrefix}-indicator::after`]: {
          flex: '0 0 auto',
          height: 10,
          width: 10,
        },
      },
    },
  ],

  indicator: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'relative',

    '&::after': {
      ...indicatorStyles,
    },
  },

  label: {
    marginTop: '-1px',
  },
};

export default createStyles<keyof typeof styles>('radioGroup', styles);
