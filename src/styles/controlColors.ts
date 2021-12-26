import { pseudo } from 'src/constants/styles';

// can be used by at least:
// - checkbox
// - radio
// - toggle

const controlColors = {
  $$fill: '$colors$controlFill',
  $$border: '$colors$controlBorder',
  $$textOnAccentColor: '$colors$controlTextOnAccentColor',

  borderColor: '$$border',
  color: '$$textOnAccentColor',
  background: '$$fill',

  '&[disabled]': {
    $$fill: '$colors$controlFillDisabled',
    $$border: '$colors$controlBorderDisabled',

    '&[data-checked]': {
      $$fill: '$colors$controlFillDisabledChecked',
      $$border: '$colors$controlBorderDisabledChecked',
    },
  },

  '&[data-checked]': {
    '&:not([disabled])': {
      $$fill: '$colors$controlFillChecked',
      $$border: '$colors$controlBorderChecked',
    },
  },

  [pseudo.hover]: {
    '&:not([disabled])': {
      $$fill: '$colors$controlFillHover',

      '&[data-checked]': {
        $$fill: '$colors$controlFillHoverChecked',
      },
    },
  },

  [pseudo.active]: {
    '&:not([disabled])': {
      $$fill: '$colors$controlFillActive',
      $$border: '$colors$controlBorderActive',

      '&[data-checked]': {
        $$fill: '$colors$controlFillActiveChecked',
        $$border: '$colors$controlBorderActiveChecked',
        $$textOnAccentColor: '$colors$controlTextOnAccentColorActiveChecked',
      },
    },
  },
};

export default controlColors;
