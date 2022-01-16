import { NestedObjKeys } from 'lib/types/flat';
import { getLightDarkColors } from 'lib/utils/theme-helpers';
import tokens from './tokens';

type TokenNames = NestedObjKeys<typeof tokens.light>;

export const variables = {
  'font-family': {
    system: 'system-ui, BlinkMacSystemFont, sans-serif',
  },
};
const globalColors: Record<string, TokenNames> = {
  background: 'windows.windowBackground',
};

export const colors = getLightDarkColors('macos', globalColors);

export default variables;
