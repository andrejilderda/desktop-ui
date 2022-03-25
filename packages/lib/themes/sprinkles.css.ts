import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { pseudo } from 'lib/constants/styles';
import { vars } from 'lib/themes/globalTheme.css';
import { themes } from 'lib/themes/themes.css';

const themeProperties = defineProperties({
  conditions: {
    base: {},
    windows: {
      selector: `.${themes.windows.light} &, .${themes.windows.dark} &`,
    },
    macos: { selector: `.${themes.macos.light} &, .${themes.macos.dark} &` },
  },
  defaultCondition: 'base',
  properties: {
    // fontSize: colors,
    // border: colors,
  },
});

const pseudoProperties = defineProperties({
  conditions: {
    base: {},
    hover: { selector: pseudo.hover },
    active: { selector: pseudo.active },
    focusVisible: { selector: pseudo.focusVisible },
  },
  defaultCondition: 'base',
  properties: {
    backgroundColor: vars.colors,
    color: vars.colors,
  },
  shorthands: {
    bgColor: ['backgroundColor'],
  },
});

const miscProperties = defineProperties({
  properties: {
    outline: {
      none: 'none',
      debug: '2px solid salmon',
    },
  },
});

export const sprinkles = createSprinkles(
  themeProperties,
  pseudoProperties,
  miscProperties,
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
