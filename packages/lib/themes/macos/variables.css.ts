import { NestedObjKeys } from 'lib/types/flat';
import { getLightDarkColors } from 'lib/utils/theme-helpers';
import { GlobalColorTokens, ThemeContract } from '../globalTheme.css';
import { colors as baseColors } from './colors';

type TokenNames = NestedObjKeys<typeof baseColors.light>;

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
