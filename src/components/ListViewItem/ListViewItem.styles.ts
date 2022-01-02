import createStyles from 'src/theme/createStyles';
import { ComponentStyles, StylesFunctionArgs, CSS } from 'src/theme/types';
import win from 'src/theme/themes/windows/tokens';
import { pseudo } from 'src/constants/styles';
import focusableVariants from 'src/styles/focusableVariants';
import { composeVars } from 'src/utils/helpers';

const styles: ComponentStyles = {
  base: ({ classPrefix, mode }: StylesFunctionArgs): CSS[] => [
    {
      $$text: win[mode].fill_color.text.primary,
      $$textHover: win[mode].fill_color.text.secondary,
      $$textActive: win[mode].fill_color.text.tertiary,
      $$textDisabled: win[mode].fill_color.text.disabled,

      borderRadius: '$3',
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 8,
      color: '$$text',
      fontSize: '$2',
      lineHeight: '$2',
      fontFamily: 'inherit',
      position: 'relative',

      '&:not(:hover)': {
        [`${classPrefix}-caret`]: {
          color: win[mode].fill_color.text.secondary,
        },
      },

      '&[disabled]': {
        backgroundColor: composeVars(['$$fillDisabled', '$$fill']),
        borderColor: composeVars(['$$borderDisabled', '$$border']),
        color: composeVars(['$$textDisabled', '$$text']),
      },

      '&:not([disabled])': {},

      [pseudo.hover]: {
        '&:not([disabled])': {
          backgroundColor: composeVars(['$$fillHover', '$$fill']),
          color: composeVars(['$$textHover', '$$text']),
        },
      },

      [pseudo.active]: {
        '&:not([disabled])': {
          backgroundColor: composeVars(['$$fillActive', '$$fill']),
          color: composeVars(['$$textActive', '$$text']),
        },
      },

      variants: {
        selected: {},
        orientation: {
          vertical: {
            flexDirection: 'column',
            alignItems: 'center',
            padding: 7,
          },
          horizontal: {
            flexDirection: 'row',
            padding: 10,
          },
        },
        asChild: {
          false: {
            background: 'transparent',
            border: 'none',
          },
        },
        theme: {
          windows: {
            color: win,
          },
        },
      },
      compoundVariants: [
        {
          theme: 'windows',
          selected: true,
          css: {
            background: win[mode].fill_color.subtle.secondary,
            $$fillHover: win[mode].fill_color.subtle.tertiary,

            '&::after': {
              content: '',

              background: win[mode].fill_color.accent.default,
              borderRadius: '$pill',
              position: 'absolute',
            },
          },
        },
        {
          theme: 'windows',
          orientation: 'horizontal',
          css: {
            padding: 10,

            '&::after': {
              left: 0,
              height: 16,
              width: 3,
              top: '50%',
              transform: 'translatey(-50%)',
            },
          },
        },
        {
          theme: 'windows',
          orientation: 'vertical',
          css: {
            padding: '7px $4',

            '&::after': {
              bottom: 0,
              height: 3,
              width: 16,
              left: '50%',
              transform: 'translateX(-50%)',
            },
          },
        },
      ],
    },
    focusableVariants,
  ],

  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
  },

  labelWrapper: {
    display: 'flex',
    gap: '$1',
  },

  caret: {
    variants: {
      expanded: {
        false: {
          transform: 'translateY(1px)',
        },
        true: {
          transform: 'translateY(1px) rotate(180deg)',
          transformOrigin: 'center',
        },
      },
    },
  },
  // fn: ({ classPrefix, mode }: StylesFunctionArgs): CSS[] => {},
};

export default createStyles<keyof typeof styles>('listViewItem', styles);
