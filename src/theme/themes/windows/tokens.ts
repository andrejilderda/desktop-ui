const tokens = {
  base: {
    gray: {
      light: 'rgb(204, 204, 204)',
      medium: 'rgb(153, 153, 153)',
      dark: 'rgb(17, 17, 17)',
    },
    red: 'rgb(255, 0, 0)',
    green: 'rgb(0, 255, 0)',
  },
  font: {
    base: 'rgb(255, 0, 0)',
    secondary: 'rgb(0, 255, 0)',
    tertiary: 'rgb(204, 204, 204)',
  },
  light: {
    fill_color: {
      text: {
        primary: 'rgba(0, 0, 0, 0.9)',
        secondary: 'rgba(0, 0, 0, 0.61)',
        tertiary: 'rgba(0, 0, 0, 0.45)',
        disabled: 'rgba(0, 0, 0, 0.36)',
      },
      accent_text: {
        primary: 'rgb(0, 62, 146)',
        secondary: 'rgb(0, 26, 104)',
        tertiary: 'rgb(0, 95, 184)',
        disabled: 'rgba(0, 0, 0, 0.36)',
      },
      text_on_accent: {
        primary: 'rgb(255, 255, 255)',
        secondary: 'rgba(255, 255, 255, 0.7)',
        disabled: 'rgb(255, 255, 255)',
        'selected text': 'rgb(255, 255, 255)',
      },
      control: {
        transparent: 'rgb(255, 255, 255)',
        default: 'rgba(255, 255, 255, 0.7)',
        secondary: 'rgba(249, 249, 249, 0.5)',
        tertiary: 'rgba(249, 249, 249, 0.3)',
        'input active': 'rgb(255, 255, 255)',
        disabled: 'rgba(249, 249, 249, 0.3)',
      },
      control_strong: {
        default: 'rgba(0, 0, 0, 0.45)',
        disabled: 'rgba(0, 0, 0, 0.32)',
      },
      subtle: {
        transparent: 'rgb(255, 255, 255)',
        secondary: 'rgba(0, 0, 0, 0.04)',
        tertiary: 'rgba(0, 0, 0, 0.02)',
        disabled: 'rgb(0, 0, 0)',
      },
      control_solid: {
        default: 'rgb(255, 255, 255)',
      },
      control_alt: {
        transparent: 'rgb(255, 255, 255)',
        secondary: 'rgba(0, 0, 0, 0.02)',
        tertiary: 'rgba(0, 0, 0, 0.06)',
        quarternary: 'rgba(0, 0, 0, 0.09)',
        disabled: 'rgb(255, 255, 255)',
      },
      accent: {
        default: 'rgb(0, 95, 184)',
        secondary: 'rgba(0, 95, 184, 0.9)',
        tertiary: 'rgba(0, 95, 184, 0.8)',
        disabled: 'rgba(0, 0, 0, 0.22)',
        'selected text background': 'rgb(0, 120, 212)',
      },
      system: {
        critical: 'rgb(196, 43, 28)',
        success: 'rgb(15, 123, 15)',
        attention: 'rgb(0, 95, 183)',
        caution: 'rgb(157, 93, 0)',
        'attention background': 'rgba(246, 246, 246, 0.5)',
        'success background': 'rgb(223, 246, 221)',
        'caution background': 'rgb(255, 244, 206)',
        'critical background': 'rgb(253, 231, 233)',
        neutral: 'rgba(0, 0, 0, 0.45)',
        'neutral background': 'rgba(0, 0, 0, 0.02)',
        'solid neutral': 'rgb(138, 138, 138)',
        'solid attention background': 'rgb(247, 247, 247)',
        'solid neutral background': 'rgb(243, 243, 243)',
      },
      control_on_image: {
        default: 'rgba(255, 255, 255, 0.79)',
        secondary: 'rgb(243, 243, 243)',
        tertiary: 'rgb(235, 235, 235)',
        disabled: 'rgb(255, 255, 255)',
      },
    },
    stroke_color: {
      control_stroke: {
        default: 'rgba(0, 0, 0, 0.06)',
        secondary: 'rgba(0, 0, 0, 0.16)',
        'on accent default': 'rgba(255, 255, 255, 0.08)',
        'on accent secondary': 'rgba(0, 0, 0, 0.4)',
        'on accent tertiary': 'rgba(0, 0, 0, 0.22)',
        'on accent disabled': 'rgba(0, 0, 0, 0.06)',
        'for strong fill when on image': 'rgba(255, 255, 255, 0.35)',
      },
      control_strong_stroke: {
        default: 'rgba(0, 0, 0, 0.45)',
        disabled: 'rgba(0, 0, 0, 0.22)',
      },
      card_stroke: {
        default: 'rgba(0, 0, 0, 0.06)',
        'default solid': 'rgb(235, 235, 235)',
      },
      divider_stroke: {
        default: 'rgba(0, 0, 0, 0.08)',
      },
      surface_stroke: {
        default: 'rgba(117, 117, 117, 0.4)',
        flyout: 'rgba(0, 0, 0, 0.06)',
      },
      focus_stroke: {
        outer: 'rgba(0, 0, 0, 0.9)',
        inner: 'rgb(255, 255, 255)',
      },
    },
    background: {
      fill_color: {
        card_background: {
          default: 'rgba(255, 255, 255, 0.7)',
          secondary: 'rgba(246, 246, 246, 0.5)',
          tertiary: 'rgb(255, 255, 255)',
        },
        smoke: {
          default: 'rgba(0, 0, 0, 0.3)',
        },
        layer: {
          default: 'rgba(255, 255, 255, 0.5)',
          alt: 'rgb(255, 255, 255)',
        },
        layer_on_acrylic: {
          default: 'rgba(255, 255, 255, 0.25)',
        },
        layer_on_accent_acrylic: {
          default: 'rgba(255, 255, 255, 0.25)',
        },
        acrylic_background: {
          default: 'rgba(252, 252, 252, 0.85)',
          base: 'rgba(243, 243, 243, 0.9)',
        },
        accent_acrylic_background: {
          base: 'rgba(153, 235, 255, 0.9)',
          default: 'rgba(153, 235, 255, 0.9)',
        },
        mica_background: {
          base: 'rgb(243, 243, 243)',
        },
        solid_background: {
          base: 'rgb(243, 243, 243)',
          secondary: 'rgb(238, 238, 238)',
          tertiary: 'rgb(249, 249, 249)',
          quarternary: 'rgb(255, 255, 255)',
        },
      },
    },
  },
  dark: {
    fill_color: {
      text: {
        primary: 'rgb(255, 255, 255)',
        secondary: 'rgba(255, 255, 255, 0.79)',
        tertiary: 'rgba(255, 255, 255, 0.54)',
        disabled: 'rgba(255, 255, 255, 0.36)',
      },
      accent_text: {
        primary: 'rgb(153, 235, 255)',
        secondary: 'rgb(153, 235, 255)',
        tertiary: 'rgb(96, 205, 255)',
        disabled: 'rgba(255, 255, 255, 0.36)',
      },
      text_on_accent: {
        primary: 'rgb(0, 0, 0)',
        secondary: 'rgba(0, 0, 0, 0.5)',
        disabled: 'rgba(255, 255, 255, 0.53)',
        'selected text': 'rgb(255, 255, 255)',
      },
      control: {
        transparent: 'rgb(255, 255, 255)',
        default: 'rgba(255, 255, 255, 0.06)',
        secondary: 'rgba(255, 255, 255, 0.08)',
        tertiary: 'rgba(255, 255, 255, 0.03)',
        disabled: 'rgba(255, 255, 255, 0.04)',
        'input active': 'rgba(30, 30, 30, 0.7)',
      },
      control_strong: {
        default: 'rgba(255, 255, 255, 0.54)',
        disabled: 'rgba(255, 255, 255, 0.25)',
      },
      control_alt: {
        transparent: 'rgb(255, 255, 255)',
        secondary: 'rgba(0, 0, 0, 0.1)',
        tertiary: 'rgba(255, 255, 255, 0.04)',
        quarternary: 'rgba(255, 255, 255, 0.07)',
        disabled: 'rgb(255, 255, 255)',
      },
      subtle: {
        transparent: 'rgb(255, 255, 255)',
        secondary: 'rgba(255, 255, 255, 0.06)',
        tertiary: 'rgba(255, 255, 255, 0.04)',
        disabled: 'rgb(255, 255, 255)',
      },
      accent: {
        default: 'rgb(96, 205, 255)',
        secondary: 'rgba(96, 205, 255, 0.9)',
        tertiary: 'rgba(96, 205, 255, 0.8)',
        disabled: 'rgba(255, 255, 255, 0.16)',
        'selected text background': 'rgb(0, 120, 212)',
      },
      control_solid: {
        default: 'rgb(69, 69, 69)',
      },
      system: {
        critical: 'rgb(255, 153, 164)',
        success: 'rgb(108, 203, 95)',
        attention: 'rgb(96, 205, 255)',
        caution: 'rgb(252, 225, 0)',
        'attention background': 'rgba(255, 255, 255, 0.03)',
        'success background': 'rgb(57, 61, 27)',
        'caution background': 'rgb(67, 53, 25)',
        'critical background': 'rgb(68, 39, 38)',
        neutral: 'rgba(255, 255, 255, 0.54)',
        'neutral background': 'rgba(255, 255, 255, 0.03)',
        'solid attention background': 'rgb(46, 46, 46)',
        'solid neutral': 'rgb(157, 157, 157)',
        'solid neutral background': 'rgb(46, 46, 46)',
      },
      control_on_image: {
        default: 'rgba(28, 28, 28, 0.7)',
        secondary: 'rgb(26, 26, 26)',
        tertiary: 'rgb(19, 19, 19)',
        disabled: 'rgb(30, 30, 30)',
      },
    },
    stroke_color: {
      control_stroke: {
        default: 'rgba(255, 255, 255, 0.07)',
        'on accent default': 'rgba(255, 255, 255, 0.08)',
        secondary: 'rgba(255, 255, 255, 0.09)',
        'on accent secondary': 'rgba(0, 0, 0, 0.14)',
        'on accent tertiary': 'rgba(0, 0, 0, 0.22)',
        'on accent disabled': 'rgba(0, 0, 0, 0.2)',
        'for strong fill when on image': 'rgba(0, 0, 0, 0.42)',
      },
      control_strong_stroke: {
        default: 'rgba(255, 255, 255, 0.54)',
        disabled: 'rgba(255, 255, 255, 0.16)',
      },
      divider_stroke: {
        default: 'rgba(255, 255, 255, 0.08)',
      },
      surface_stroke: {
        default: 'rgba(117, 117, 117, 0.4)',
        flyout: 'rgba(0, 0, 0, 0.2)',
      },
      card_stroke: {
        default: 'rgba(0, 0, 0, 0.1)',
        'default solid': 'rgb(28, 28, 28)',
      },
      focus_stroke: {
        outer: 'rgb(255, 255, 255)',
        inner: 'rgba(0, 0, 0, 0.7)',
      },
    },
    background: {
      fill_color: {
        card_background: {
          default: 'rgba(255, 255, 255, 0.05)',
          secondary: 'rgba(255, 255, 255, 0.03)',
        },
        smoke: {
          default: 'rgba(0, 0, 0, 0.3)',
        },
        solid_background: {
          base: 'rgb(32, 32, 32)',
          secondary: 'rgb(28, 28, 28)',
          tertiary: 'rgb(40, 40, 40)',
          quarternary: 'rgb(44, 44, 44)',
        },
        mica_background: {
          base: 'rgb(32, 32, 32)',
        },
        acrylic_background: {
          default: 'rgba(44, 44, 44, 0.96)',
          base: 'rgba(32, 32, 32, 0.96)',
        },
        accent_acrylic_background: {
          base: 'rgba(0, 63, 146, 0.8)',
          default: 'rgba(0, 120, 212, 0.8)',
        },
        layer: {
          default: 'rgba(58, 58, 58, 0.3)',
          alt: 'rgba(255, 255, 255, 0.05)',
        },
        layer_on_acrylic: {
          default: 'rgba(255, 255, 255, 0.04)',
        },
        layer_on_accent_acrylic: {
          default: 'rgba(255, 255, 255, 0.04)',
        },
      },
    },
  },
};

export default tokens;
