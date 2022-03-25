import controlColors from 'src/styles/controlColors';
import { createStyles } from 'src/theme/createStyles';
import { StylesFunctionArgs, CSS, ComponentStyles } from 'src/theme/types';
import { tokens as win } from 'src/theme/themes/windows/tokens';
import { focusableVariants } from 'src/styles/focusableVariants';
import { pseudo } from 'src/constants/styles';

const styles: ComponentStyles = {
  root: ({ classPrefix }: StylesFunctionArgs): CSS[] => [
    {
      all: 'unset',
      borderRadius: '$pill',
      borderStyle: 'solid',
      borderWidth: '$borderWidths$default',
      height: 20,
      position: 'relative',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      width: 40,
      transition: 'background-color 150ms',
      willChange: 'background-color',
      ...controlColors,

      [pseudo.active]: {
        '&:not([data-disabled])': {
          [`${classPrefix}-thumb`]: {
            width: 17,
            transform: 'translate(calc(0% + 3px), -50%)',
            left: '0%',
          },

          '&[data-state="checked"]': {
            [`${classPrefix}-thumb`]: {
              transform: 'translate(calc(-100% - 3px), -50%)',
              left: '100%',
            },
          },
        },
      },
    },
    focusableVariants,
  ],
  thumb: ({ classPrefix, mode }: StylesFunctionArgs): CSS[] => {
    const root = `${classPrefix}-root`;

    return [
      {
        $$fill: win[mode].fill_color.text.secondary,

        backgroundColor: '$$fill',
        borderRadius: '9999px',
        display: 'block',
        height: 12,
        position: 'absolute',
        top: '50%',
        left: 0,
        transform: 'translate(calc(0% + 3px), -50%)',
        // TODO: add animations according to spec
        transition: 'all 150ms',
        width: 12,
        willChange: 'transform',

        [`${root}[disabled] &`]: {
          $$fill: win[mode].fill_color.text.disabled,
        },

        '&[data-state="checked"]': {
          $$fill: win[mode].fill_color.text_on_accent.primary,
          transform: 'translate(calc(-100% - 3px), -50%)',
          left: '100%',
        },

        variants: {
          theme: {
            windows: {},
            macos: {},
          },
        },
      },
    ];
  },
};

export default createStyles<keyof typeof styles>('toggleSwitch', styles);
