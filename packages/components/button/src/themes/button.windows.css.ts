import { componentName } from './../index';
import { assignTokensToVars } from 'lib/utils/helpers';

const buttonVars = assignTokensToVars(componentName, 'windows', {
  '--font-size': '14px',
  '--stroke-disabled': 'transparent',
  '--elevation-y': '-1px',
  '--elevation-stroke-active': 'transparent',
  '--padding': '6px 20px',

  // fill
  '--fill': 'fill_color.control.default',
  '--fill-hover': 'fill_color.control.secondary',
  '--fill-disabled': 'fill_color.accent.disabled',
  '--fill-active': 'fill_color.control.tertiary',

  // stroke
  '--stroke': 'stroke_color.control_stroke.default',
  '--stroke-active': 'stroke_color.control_stroke.default',

  // elevationStroke
  '--elevation-stroke': 'stroke_color.control_stroke.secondary',

  // text
  '--text': 'fill_color.text.primary',
  '--text-active': 'fill_color.text.secondary',
  '--text-disabled': 'fill_color.text.disabled',
});

export default buttonVars;
