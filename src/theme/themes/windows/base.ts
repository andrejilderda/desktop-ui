const base = {
  space: {
    // 1: '5px',
  },
  fonts: {
    // untitled: 'Untitled Sans, apple-system, sans-serif',
  },
  // see typography
  // https://docs.microsoft.com/en-us/windows/apps/design/signature-experiences/typography
  fontSizes: {
    1: '12px',
    2: '14px',
    3: '18px',
    4: '20px',
    5: '28px',
    6: '40px',
    7: '68px',
  },
  fontWeights: {
    400: '400',
    600: '600',
  },
  lineHeights: {
    1: '16px',
    2: '20px',
    3: '24px',
    4: '28px',
    5: '36px',
    6: '52px',
    7: '92px',
  },
  letterSpacings: {},
  sizes: {
    checkbox: '20px',
  },
  borderWidths: {
    default: '1px',
    card_rest: '$default',
    tooltip: '$default',
    flyout: '$default',
    dialog: '$default',
    inactive_windows: '$default',
    active_windows: '$default',
  },
  borderStyles: {
    default: '1px solid hsla(0, 0%, 0%, 0.06)',
    card_rest: '$default',
    card_pressed: '$default',
    tooltip: '$default',
    flyout: '$default',
    dialog: '$default',
    inactive_windows: '$default',
    active_windows: '$default',
    focusStroke: '2px solid $colors$focusOutline',
  },
  radii: {
    1: '3px',
    2: '4px',
    3: '7px',
    round: '50%',
    pill: '9999px',
  },
  shadows: {
    // see layering:
    // https://docs.microsoft.com/en-us/windows/apps/design/signature-experiences/layering
    card_rest: '0px 2px 4px 0px hsla(0, 0%, 0%, 0.04)',
    tooltip: '0px 4px 8px 0px hsla(0, 0%, 0%, 0.14)',
    flyout: '0px 8px 16px 0px hsla(0, 0%, 0%, 0.14)',
    dialog:
      '0px 2px 21px 0px hsla(0, 0%, 0%, 0.15), 0px 32px 64px 0px hsla(0, 0%, 0%, 0.19)',
    inactive_windows:
      '0px 2px 10.670000076293945px 0px hsla(0, 0%, 0%, 0.15), 0px 16px 32px 0px hsla(0, 0%, 0%, 0.19)',
    active_windows:
      '0px 2px 21px 0px hsla(0, 0%, 0%, 0.22), 0px 32px 64px 0px hsla(0, 0%, 0%, 0.28)',
  },
  zIndices: {},
  transitions: {},
};

export default base;
