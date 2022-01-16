import { NestedObjKeys } from 'lib/types/flat';
import { getLightDarkColors } from 'lib/utils/theme-helpers';
import { GlobalColorTokens, ThemeContract } from '../globalTheme.css';
import tokens from './tokens';

type TokenNames = NestedObjKeys<typeof tokens.light>;

export const variables: Omit<ThemeContract, 'colors'> = {
  typography: {
    fonts: {
      system: 'system-ui, BlinkMacSystemFont, sans-serif',
    },
  },
};

const globalColors: GlobalColorTokens<TokenNames> = {
  background: 'windows.windowBackground',
  foreground: 'text.base',
};

export const colors = getLightDarkColors('macos', globalColors);

export default variables;
