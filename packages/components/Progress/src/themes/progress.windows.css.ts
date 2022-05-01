import { componentName } from '../index.css';
import { recipe } from '@vanilla-extract/recipes';
import { rdStyle as rdStylePartial } from 'packages/private/rdStyle.css';
import { themes } from 'lib/themes/themes.css';

const rdStyle = rdStylePartial({ componentName, theme: 'windows' });

export const rail = rdStyle({
  borderRadius: '$pill',

  colors: (c) => ({
    $$rail: c.stroke_color.control_strong_stroke.default,
  }),
});

export const track = rdStyle({
  borderRadius: '$pill',

  colors: (c) => ({
    $$track: c.fill_color.accent.default,
  }),
});

export const trackStatusRecipe = {
  base: {},
  variants: {
    status: {
      default: {},
      paused: rdStyle({
        colors: (c) => ({
          $$track: c.fill_color.system.caution,
        }),
      }),
      error: rdStyle({
        colors: (c) => ({
          $$track: c.fill_color.system.critical,
        }),
      }),
    },
  },
};

export const ringWrapper = rdStyle({
  colors: (c) => ({
    $$stroke: c.fill_color.accent.default,
  }),
});
