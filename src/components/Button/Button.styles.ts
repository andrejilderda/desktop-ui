import createStyles from 'src/theme/createStyles';
import { ThemeComponentProps, CSS } from 'src/theme/types';
import win from 'src/theme/themes/windows/tokens';
import focusableVariants from 'src/styles/focusableVariants';
import { pseudo } from 'src/constants/styles';

const styles = {
  element: ({ mode }: ThemeComponentProps): CSS[] => {
    return [
      {
        all: 'unset',
        cursor: 'default',
        backgroundColor: '$$fill',
        border: '$$borderDisabled',
        color: '$$text',
        userSelect: 'none',
        fontSize: '$2',
        lineHeight: '$2',
        padding: '6px $5',

        '&[disabled]': {
          $$fill: '$$fillDisabled',
          $$border: '$$borderDisabled',
        },

        [pseudo.hover]: {
          '&:not([disabled])': {
            $$fill: '$$fillHover',
            $$border: '$$borderHover',
            // $$text: '$$textHover',
          },
        },

        [pseudo.active]: {
          '&:not([disabled])': {
            $$fill: '$$fillActive',
            $$border: '$$borderActive',
            $$text: '$$textActive',
          },
        },

        compoundVariants: [
          {
            theme: 'windows',
            variant: 'accent',
            css: {
              $$fill: win[mode].fill_color.accent.default,
              $$border: '',
              $$text: win[mode].fill_color.text_on_accent.primary,

              $$fillHover: win[mode].fill_color.accent.secondary,
              $$stroke:
                win[mode].stroke_color.control_stroke['on accent default'],
              $$bottomStroke:
                win[mode].stroke_color.control_stroke['on accent secondary'],

              $$fillActive: win[mode].fill_color.accent.tertiary,
              $$borderActive: '',
              $$textActive: win[mode].fill_color.text_on_accent.secondary,

              $$fillDisabled: `${win[mode].fill_color.accent.disabled}`,
              $$borderDisabled: 'none',
              $$textDisabled: win[mode].fill_color.text_on_accent.disabled,

              borderRadius: '4px',
              '&:not([disabled])': {
                boxShadow:
                  'inset 0px -1px 0px 0px  rgba(0, 0, 0, 0.4), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.08)',
              },

              [pseudo.active]: {
                borderColor: 'transparent',
                boxShadow: 'inset 0px 0px 0px 1px rgba(255, 255, 255, 0.08)',
              },
            },
          },
        ],

        variants: {
          variant: {},
          theme: {
            windows: {
              // t.light.elevation.accent_control.border
              // t.light.elevation.control.border
              // t.light.fill_color.accent.default
              // t.light.fill_color.accent.disabled
              // t.light.fill_color.accent.secondary
              // t.light.fill_color.accent.tertiary
              // t.light.fill_color.control.default
              // t.light.fill_color.control.disabled
              // t.light.fill_color.control.secondary
              // t.light.fill_color.control.tertiary
              // t.light.fill_color.text_on_accent.disabled
              // t.light.fill_color.text_on_accent.primary
              // t.light.fill_color.text_on_accent.secondary
              // t.light.fill_color.text.disabled
              // t.light.fill_color.text.primary
              // t.light.fill_color.text.secondary
              // t.light.stroke_color.control_stroke.default
              // t.light.stroke_color.control_stroke.on_accent_default
              // t.light.stroke_color.focus_stroke.inner
              // t.light.stroke_color.focus_stroke.outer
              // accent
              $$fill: win[mode].fill_color.control.default,
              // $$border: ,
              $$text: win[mode].fill_color.text.primary,

              $$fillHover: win[mode].fill_color.control.secondary,
              $$stroke: win[mode].stroke_color.control_stroke.secondary,
              $$bottomStroke: win[mode].stroke_color.control_stroke.default,
              // $$borderHover: 'unset',
              // $$textHover: '',
              $$fillActive: win[mode].fill_color.control.tertiary,
              $$borderActive: '',
              $$textActive: win[mode].fill_color.text.secondary,

              $$fillDisabled: win[mode].fill_color.accent.disabled,
              $$borderDisabled: 'none',
              $$textDisabled: win[mode].fill_color.text.disabled,

              borderRadius: '4px',
              '&:not([disabled])': {
                boxShadow:
                  'inset 0px -1px 0px 0px $$bottomStroke, inset 0px 0px 0px 1px $$stroke',
              },

              [pseudo.active]: {
                $$stroke: 'rgba(0, 0, 0, 0.08)',
                $$bottomStroke: 'transparent',
              },
            },
          },
        },
      },
      focusableVariants,
    ];
  },
};

export default createStyles<keyof typeof styles>('button', styles);
