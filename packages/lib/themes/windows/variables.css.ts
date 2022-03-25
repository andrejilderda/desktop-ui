import { NestedObjKeys } from 'lib/types/flat';
import { getLightDarkColors } from 'lib/utils/theme-helpers';
import { GlobalColorTokens, ThemeContract } from '../globalTheme.css';
import { tokens } from './tokens';

type TokenNames = NestedObjKeys<typeof tokens.light>;

export const variables: Omit<ThemeContract, 'colors'> = {
  typography: {
    fonts: {
      system:
        '"Segoe UI Variable", "Segoe UI", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, sans-serif',
    },
  },
};

const globalColors: GlobalColorTokens<TokenNames> = {
  background: 'background.fill_color.solid_background.base',
  foreground: 'fill_color.text.primary',
};

export const colors = getLightDarkColors('windows', globalColors);
