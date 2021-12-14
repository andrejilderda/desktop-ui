import base from './base';

const dark = {
  theme: {
    ...base,
    colors: {
      foreground: 'blue',
      background: 'yellow',
      color_base_gray_light: 'hsl(0 0% 80%)',
      color_base_gray_medium: 'hsl(0 0% 60%)',
      color_base_gray_dark: 'hsl(0 0% 7%)',
      color_base_red: 'hsl(0 100% 50%)',
      color_base_green: 'hsl(120 100% 50%)',
      color_font_base: 'hsl(0 100% 50%)',
      color_font_secondary: 'hsl(120 100% 50%)',
      color_font_tertiary: 'hsl(0 0% 80%)',
      fill_color_text_primary: 'hsl(0 0% 100%)',
      fill_color_text_secondary: 'hsl(0 0% 100% / 0.788235294117647)',
      fill_color_text_tertiary: 'hsl(0 0% 100% / 0.5411764705882353)',
      fill_color_text_disabled: 'hsl(0 0% 100% / 0.3607843137254902)',
      fill_color_accent_text_primary: 'hsl(192 100% 80%)',
      fill_color_accent_text_secondary: 'hsl(192 100% 80%)',
      fill_color_accent_text_tertiary: 'hsl(199 100% 69%)',
      fill_color_accent_text_disabled: 'hsl(0 0% 100% / 0.3607843137254902)',
      fill_color_text_on_accent_primary: 'hsl(0 0% 0%)',
      fill_color_text_on_accent_secondary: 'hsl(0 0% 0% / 0.5019607843137255)',
      fill_color_text_on_accent_disabled: 'hsl(0 0% 100% / 0.5294117647058824)',
      fill_color_text_on_accent_selected_text: 'hsl(0 0% 100%)',
      fill_color_control_transparent: 'hsl(0 0% 100%)',
      fill_color_control_default: 'hsl(0 0% 100% / 0.058823529411764705)',
      fill_color_control_secondary: 'hsl(0 0% 100% / 0.0784313725490196)',
      fill_color_control_tertiary: 'hsl(0 0% 100% / 0.03137254901960784)',
      fill_color_control_disabled: 'hsl(0 0% 100% / 0.0392156862745098)',
      fill_color_control_input_active: 'hsl(0 0% 12% / 0.7019607843137254)',
      fill_color_control_strong_default: 'hsl(0 0% 100% / 0.5411764705882353)',
      fill_color_control_strong_disabled:
        'hsl(0 0% 100% / 0.25098039215686274)',
      fill_color_control_alt_transparent: 'hsl(0 0% 100%)',
      fill_color_control_alt_secondary: 'hsl(0 0% 0% / 0.10196078431372549)',
      fill_color_control_alt_tertiary: 'hsl(0 0% 100% / 0.0392156862745098)',
      fill_color_control_alt_quarternary:
        'hsl(0 0% 100% / 0.07058823529411765)',
      fill_color_control_alt_disabled: 'hsl(0 0% 100%)',
      fill_color_subtle_transparent: 'hsl(0 0% 100%)',
      fill_color_subtle_secondary: 'hsl(0 0% 100% / 0.058823529411764705)',
      fill_color_subtle_tertiary: 'hsl(0 0% 100% / 0.0392156862745098)',
      fill_color_subtle_disabled: 'hsl(0 0% 100%)',
      fill_color_accent_default: 'hsl(199 100% 69%)',
      fill_color_accent_secondary: 'hsl(199 100% 69% / 0.9019607843137255)',
      fill_color_accent_tertiary: 'hsl(199 100% 69% / 0.8)',
      fill_color_accent_disabled: 'hsl(0 0% 100% / 0.1607843137254902)',
      fill_color_accent_selected_text_background: 'hsl(206 100% 42%)',
      fill_color_control_solid_default: 'hsl(0 0% 27%)',
      fill_color_system_critical: 'hsl(354 100% 80%)',
      fill_color_system_success: 'hsl(113 51% 58%)',
      fill_color_system_attention: 'hsl(199 100% 69%)',
      fill_color_system_caution: 'hsl(54 100% 49%)',
      fill_color_system_attention_background:
        'hsl(0 0% 100% / 0.03137254901960784)',
      fill_color_system_success_background: 'hsl(67 39% 17%)',
      fill_color_system_caution_background: 'hsl(40 46% 18%)',
      fill_color_system_critical_background: 'hsl(2 28% 21%)',
      fill_color_system_neutral: 'hsl(0 0% 100% / 0.5411764705882353)',
      fill_color_system_neutral_background:
        'hsl(0 0% 100% / 0.03137254901960784)',
      fill_color_system_solid_attention_background: 'hsl(0 0% 18%)',
      fill_color_system_solid_neutral: 'hsl(0 0% 62%)',
      fill_color_system_solid_neutral_background: 'hsl(0 0% 18%)',
      fill_color_control_on_image_default: 'hsl(0 0% 11% / 0.7019607843137254)',
      fill_color_control_on_image_secondary: 'hsl(0 0% 10%)',
      fill_color_control_on_image_tertiary: 'hsl(0 0% 7%)',
      fill_color_control_on_image_disabled: 'hsl(0 0% 12%)',
      stroke_color_control_stroke_default:
        'hsl(0 0% 100% / 0.07058823529411765)',
      stroke_color_control_stroke_on_accent_default:
        'hsl(0 0% 100% / 0.0784313725490196)',
      stroke_color_control_stroke_secondary:
        'hsl(0 0% 100% / 0.09019607843137255)',
      stroke_color_control_stroke_on_accent_secondary:
        'hsl(0 0% 0% / 0.1411764705882353)',
      stroke_color_control_stroke_on_accent_tertiary:
        'hsl(0 0% 0% / 0.2196078431372549)',
      stroke_color_control_stroke_on_accent_disabled: 'hsl(0 0% 0% / 0.2)',
      stroke_color_control_stroke_for_strong_fill_when_on_image:
        'hsl(0 0% 0% / 0.4196078431372549)',
      stroke_color_control_strong_stroke_default:
        'hsl(0 0% 100% / 0.5411764705882353)',
      stroke_color_control_strong_stroke_disabled:
        'hsl(0 0% 100% / 0.1607843137254902)',
      stroke_color_divider_stroke_default:
        'hsl(0 0% 100% / 0.0784313725490196)',
      stroke_color_surface_stroke_default: 'hsl(0 0% 46% / 0.4)',
      stroke_color_surface_stroke_flyout: 'hsl(0 0% 0% / 0.2)',
      stroke_color_card_stroke_default: 'hsl(0 0% 0% / 0.10196078431372549)',
      stroke_color_card_stroke_default_solid: 'hsl(0 0% 11%)',
      stroke_color_focus_stroke_outer: 'hsl(0 0% 100%)',
      stroke_color_focus_stroke_inner: 'hsl(0 0% 0% / 0.7019607843137254)',
      background_fill_color_card_background_default:
        'hsl(0 0% 100% / 0.050980392156862744)',
      background_fill_color_card_background_secondary:
        'hsl(0 0% 100% / 0.03137254901960784)',
      background_fill_color_smoke_default: 'hsl(0 0% 0% / 0.30196078431372547)',
      background_fill_color_solid_background_base: 'hsl(0 0% 13%)',
      background_fill_color_solid_background_secondary: 'hsl(0 0% 11%)',
      background_fill_color_solid_background_tertiary: 'hsl(0 0% 16%)',
      background_fill_color_solid_background_quarternary: 'hsl(0 0% 17%)',
      background_fill_color_mica_background_base_0: 'hsl(0 0% 13%)',
      background_fill_color_mica_background_base_1: 'hsl(0 0% 13% / 0.8)',
      background_fill_color_acrylic_background_default_0:
        'hsl(0 0% 17% / 0.9607843137254902)',
      background_fill_color_acrylic_background_default_1:
        'hsl(0 0% 17% / 0.14901960784313725)',
      background_fill_color_acrylic_background_base_0:
        'hsl(0 0% 13% / 0.9607843137254902)',
      background_fill_color_acrylic_background_base_1:
        'hsl(0 0% 13% / 0.5019607843137255)',
      background_fill_color_accent_acrylic_background_base_0:
        'hsl(214 100% 29% / 0.8)',
      background_fill_color_accent_acrylic_background_base_1:
        'hsl(214 100% 29% / 0.8)',
      background_fill_color_accent_acrylic_background_default_0:
        'hsl(206 100% 42% / 0.8)',
      background_fill_color_accent_acrylic_background_default_1:
        'hsl(206 100% 42% / 0.8)',
      background_fill_color_layer_default:
        'hsl(0 0% 23% / 0.30196078431372547)',
      background_fill_color_layer_alt: 'hsl(0 0% 100% / 0.050980392156862744)',
      background_fill_color_layer_on_acrylic_default:
        'hsl(0 0% 100% / 0.0392156862745098)',
      background_fill_color_layer_on_accent_acrylic_default:
        'hsl(0 0% 100% / 0.0392156862745098)',
    },
  },
};

export default dark;
