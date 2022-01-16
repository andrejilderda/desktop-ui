import { NestedObjKeys } from 'lib/types/flat';
import { getLightDarkColors } from 'lib/utils/theme-helpers';
import tokens from './tokens';

type TokenNames = NestedObjKeys<typeof tokens.light>;

export const variables = {
  'font-family': {
    system:
      '"Segoe UI Variable", "Segoe UI", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, sans-serif',
  },
};
const globalColors: Record<string, TokenNames> = {
  background: 'background.fill_color.solid_background.base',
};

export const colors = getLightDarkColors('windows', globalColors);

export default variables;
