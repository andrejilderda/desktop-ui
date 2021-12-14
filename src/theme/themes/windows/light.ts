import base from './base';

const light = {
  theme: {
    ...base,
    colors: {
      foreground: 'yellow',
      background: 'blue',
      color_base_gray_light: 'hsl(0 0% 80%)',
      color_base_gray_medium: 'hsl(0 0% 60%)',
      color_base_gray_dark: 'hsl(0 0% 7%)',
      color_base_red: 'hsl(0 100% 50%)',
      color_base_green: 'hsl(120 100% 50%)',
      color_font_base: 'hsl(0 100% 50%)',
      color_font_secondary: 'hsl(120 100% 50%)',
      color_font_tertiary: 'hsl(0 0% 80%)',
      fill_color_text_primary: 'hsl(0 0% 0% / 0.9019607843137255)',
      fill_color_text_secondary: 'hsl(0 0% 0% / 0.611764705882353)',
      fill_color_text_tertiary: 'hsl(0 0% 0% / 0.45098039215686275)',
      fill_color_text_disabled: 'hsl(0 0% 0% / 0.3607843137254902)',
      fill_color_accent_text_primary: 'hsl(215 100% 29%)',
      fill_color_accent_text_secondary: 'hsl(225 100% 20%)',
      fill_color_accent_text_tertiary: 'hsl(209 100% 36%)',
      fill_color_accent_text_disabled: 'hsl(0 0% 0% / 0.3607843137254902)',
      fill_color_text_on_accent_primary: 'hsl(0 0% 100%)',
      fill_color_text_on_accent_secondary:
        'hsl(0 0% 100% / 0.7019607843137254)',
      fill_color_text_on_accent_disabled: 'hsl(0 0% 100%)',
      fill_color_text_on_accent_selected_text: 'hsl(0 0% 100%)',
      fill_color_control_transparent: 'hsl(0 0% 100%)',
      fill_color_control_default: 'hsl(0 0% 100% / 0.7019607843137254)',
      fill_color_control_secondary: 'hsl(0 0% 98% / 0.5019607843137255)',
      fill_color_control_tertiary: 'hsl(0 0% 98% / 0.30196078431372547)',
      fill_color_control_input_active: 'hsl(0 0% 100%)',
      fill_color_control_disabled: 'hsl(0 0% 98% / 0.30196078431372547)',
      fill_color_control_strong_default: 'hsl(0 0% 0% / 0.45098039215686275)',
      fill_color_control_strong_disabled: 'hsl(0 0% 0% / 0.3215686274509804)',
      fill_color_subtle_transparent: 'hsl(0 0% 100%)',
      fill_color_subtle_secondary: 'hsl(0 0% 0% / 0.0392156862745098)',
      fill_color_subtle_tertiary: 'hsl(0 0% 0% / 0.0196078431372549)',
      fill_color_subtle_disabled: 'hsl(0 0% 0%)',
      fill_color_control_solid_default: 'hsl(0 0% 100%)',
      fill_color_control_alt_transparent: 'hsl(0 0% 100%)',
      fill_color_control_alt_secondary: 'hsl(0 0% 0% / 0.0196078431372549)',
      fill_color_control_alt_tertiary: 'hsl(0 0% 0% / 0.058823529411764705)',
      fill_color_control_alt_quarternary: 'hsl(0 0% 0% / 0.09019607843137255)',
      fill_color_control_alt_disabled: 'hsl(0 0% 100%)',
      fill_color_accent_default: 'hsl(209 100% 36%)',
      fill_color_accent_secondary: 'hsl(209 100% 36% / 0.9019607843137255)',
      fill_color_accent_tertiary: 'hsl(209 100% 36% / 0.8)',
      fill_color_accent_disabled: 'hsl(0 0% 0% / 0.2196078431372549)',
      fill_color_accent_selected_text_background: 'hsl(206 100% 42%)',
      fill_color_system_critical: 'hsl(5 75% 44%)',
      fill_color_system_success: 'hsl(120 78% 27%)',
      fill_color_system_attention: 'hsl(209 100% 36%)',
      fill_color_system_caution: 'hsl(36 100% 31%)',
      fill_color_system_attention_background:
        'hsl(0 0% 96% / 0.5019607843137255)',
      fill_color_system_success_background: 'hsl(115 58% 92%)',
      fill_color_system_caution_background: 'hsl(47 100% 90%)',
      fill_color_system_critical_background: 'hsl(355 85% 95%)',
      fill_color_system_neutral: 'hsl(0 0% 0% / 0.45098039215686275)',
      fill_color_system_neutral_background: 'hsl(0 0% 0% / 0.0196078431372549)',
      fill_color_system_solid_neutral: 'hsl(0 0% 54%)',
      fill_color_system_solid_attention_background: 'hsl(0 0% 97%)',
      fill_color_system_solid_neutral_background: 'hsl(0 0% 95%)',
      fill_color_control_on_image_default: 'hsl(0 0% 100% / 0.788235294117647)',
      fill_color_control_on_image_secondary: 'hsl(0 0% 95%)',
      fill_color_control_on_image_tertiary: 'hsl(0 0% 92%)',
      fill_color_control_on_image_disabled: 'hsl(0 0% 100%)',
      stroke_color_control_stroke_default:
        'hsl(0 0% 0% / 0.058823529411764705)',
      stroke_color_control_stroke_secondary:
        'hsl(0 0% 0% / 0.1607843137254902)',
      stroke_color_control_stroke_on_accent_default:
        'hsl(0 0% 100% / 0.0784313725490196)',
      stroke_color_control_stroke_on_accent_secondary: 'hsl(0 0% 0% / 0.4)',
      stroke_color_control_stroke_on_accent_tertiary:
        'hsl(0 0% 0% / 0.2196078431372549)',
      stroke_color_control_stroke_on_accent_disabled:
        'hsl(0 0% 0% / 0.058823529411764705)',
      stroke_color_control_stroke_for_strong_fill_when_on_image:
        'hsl(0 0% 100% / 0.34901960784313724)',
      stroke_color_control_strong_stroke_default:
        'hsl(0 0% 0% / 0.45098039215686275)',
      stroke_color_control_strong_stroke_disabled:
        'hsl(0 0% 0% / 0.2196078431372549)',
      stroke_color_card_stroke_default: 'hsl(0 0% 0% / 0.058823529411764705)',
      stroke_color_card_stroke_default_solid: 'hsl(0 0% 92%)',
      stroke_color_divider_stroke_default: 'hsl(0 0% 0% / 0.0784313725490196)',
      stroke_color_surface_stroke_default: 'hsl(0 0% 46% / 0.4)',
      stroke_color_surface_stroke_flyout: 'hsl(0 0% 0% / 0.058823529411764705)',
      stroke_color_focus_stroke_outer: 'hsl(0 0% 0% / 0.9019607843137255)',
      stroke_color_focus_stroke_inner: 'hsl(0 0% 100%)',
      background_fill_color_card_background_default:
        'hsl(0 0% 100% / 0.7019607843137254)',
      background_fill_color_card_background_secondary:
        'hsl(0 0% 96% / 0.5019607843137255)',
      background_fill_color_card_background_tertiary: 'hsl(0 0% 100%)',
      background_fill_color_smoke_default: 'hsl(0 0% 0% / 0.30196078431372547)',
      background_fill_color_layer_default:
        'hsl(0 0% 100% / 0.5019607843137255)',
      background_fill_color_layer_alt: 'hsl(0 0% 100%)',
      background_fill_color_layer_on_acrylic_default:
        'hsl(0 0% 100% / 0.25098039215686274)',
      background_fill_color_layer_on_accent_acrylic_default:
        'hsl(0 0% 100% / 0.25098039215686274)',
      background_fill_color_acrylic_background_default_0:
        'hsl(0 0% 99% / 0.8509803921568627)',
      background_fill_color_acrylic_background_default_1: 'hsl(0 0% 99%)',
      background_fill_color_acrylic_background_base_0:
        'hsl(0 0% 95% / 0.9019607843137255)',
      background_fill_color_acrylic_background_base_1: 'hsl(0 0% 95%)',
      background_fill_color_accent_acrylic_background_base_0:
        'hsl(192 100% 80% / 0.9019607843137255)',
      background_fill_color_accent_acrylic_background_base_1:
        'hsl(192 100% 80% / 0.8)',
      background_fill_color_accent_acrylic_background_default_0:
        'hsl(192 100% 80% / 0.9019607843137255)',
      background_fill_color_accent_acrylic_background_default_1:
        'hsl(192 100% 80% / 0.8)',
      background_fill_color_mica_background_base_0: 'hsl(0 0% 95%)',
      background_fill_color_mica_background_base_1:
        'hsl(0 0% 95% / 0.5019607843137255)',
      background_fill_color_solid_background_base: 'hsl(0 0% 95%)',
      background_fill_color_solid_background_secondary: 'hsl(0 0% 93%)',
      background_fill_color_solid_background_tertiary: 'hsl(0 0% 98%)',
      background_fill_color_solid_background_quarternary: 'hsl(0 0% 100%)',
    },
  },
};

export default light;
