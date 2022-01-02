import createStyles from 'src/theme/createStyles';
import { ThemeComponentProps, CSS, ComponentStyles } from 'src/theme/types';
import win from 'src/theme/themes/windows/tokens';
import focusableVariants from 'src/styles/focusableVariants';
import { pseudo } from 'src/constants/styles';
import { composeVars } from 'src/utils/helpers';

const styles: ComponentStyles = {
  base: ({ mode }: ThemeComponentProps): CSS[] => {
    return [
      {
        all: 'unset',
        cursor: 'default',
        fontSize: '$2',
        lineHeight: '$2',
        padding: '6px $5',
        textAlign: 'center',
        userSelect: 'none',

        backgroundColor: '$$fill',
        borderColor: '$$border',
        color: '$$text',

        '&[disabled]': {
          backgroundColor: composeVars(['$$fillDisabled', '$$fill']),
          borderColor: composeVars(['$$borderDisabled', '$$border']),
          color: composeVars(['$$textDisabled', '$$text']),
        },

        '&:not([disabled])': {
          boxShadow:
            'inset 0px $$elevationY 0px 0px $$elevationStroke, inset 0px 0px 0px 1px $$stroke',
        },

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
            boxShadow: `inset 0px $$elevationY 0px 0px ${composeVars([
              '$$elevationStrokeActive',
              '$$elevationStroke',
            ])}, inset 0px 0px 0px 1px ${composeVars([
              '$$strokeActive',
              '$$stroke',
            ])}`,
          },
        },

        variants: {
          mode: {},
          variant: {},
          theme: {
            windows: {
              $$elevationY: '-1px',

              // fill
              $$fill: win[mode].fill_color.control.default,
              $$fillHover: win[mode].fill_color.control.secondary,
              $$fillDisabled: win[mode].fill_color.accent.disabled,
              $$fillActive: win[mode].fill_color.control.tertiary,

              // stroke
              $$stroke: win[mode].stroke_color.control_stroke.default,
              $$strokeActive: win[mode].stroke_color.control_stroke.default,
              $$strokeDisabled: 'transparent',

              // elevationStroke
              $$elevationStroke:
                win[mode].stroke_color.control_stroke.secondary,
              $$elevationStrokeActive: 'transparent',

              // text
              $$text: win[mode].fill_color.text.primary,
              $$textActive: win[mode].fill_color.text.secondary,
              $$textDisabled: win[mode].fill_color.text.disabled,

              borderRadius: '4px',
            },
          },
        },

        compoundVariants: [
          {
            theme: 'windows',
            variant: 'accent',
            css: {
              // fill
              $$fill: win[mode].fill_color.accent.default,
              $$fillHover: win[mode].fill_color.accent.secondary,
              $$fillActive: win[mode].fill_color.accent.tertiary,
              $$fillDisabled: `${win[mode].fill_color.accent.disabled}`,

              $$stroke:
                win[mode].stroke_color.control_stroke['on accent default'],

              $$elevationStroke:
                win[mode].stroke_color.control_stroke['on accent secondary'],

              // text
              $$text: win[mode].fill_color.text_on_accent.primary,
              $$textActive: win[mode].fill_color.text_on_accent.secondary,
              $$textDisabled: win[mode].fill_color.text_on_accent.disabled,
            },
          },
          // this is a strange exception in the spec for the accent disabled
          // button, which has an extra outline, compared to the standard variant
          {
            theme: 'windows',
            mode: 'dark',
            variant: 'accent',
            css: {
              $$elevationStrokeDisabled: win[mode].fill_color.control.disabled,
              '&[disabled]': {
                boxShadow:
                  '0px 0px 0px 1px $$fillDisabled, inset 0px 0 0px 1px $$elevationStrokeDisabled',
              },
            },
          },
          {
            theme: 'windows',
            mode: 'dark',
            variant: 'default',
            css: {
              // for the standard button in dark mode the elevation is inverted: in
              // stead of shadow at the bottom there is a highlight at the top
              $$elevationY: '1px',
            },
          },
        ],
      },
      focusableVariants,
    ];
  },
};

export default createStyles<keyof typeof styles>('button', styles);
