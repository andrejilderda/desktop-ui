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

  '&:hover:not([disabled])': {
    $$fill: '$colors$controlFillHover',

    '&[data-checked]': {
      $$fill: '$colors$controlFillHoverChecked',
    },
  },

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

  '&:active': {
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
