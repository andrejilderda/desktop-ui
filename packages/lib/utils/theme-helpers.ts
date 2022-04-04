import { ThemeContract } from 'lib/themes/globalTheme.css';
import { colorTokens } from 'lib/themes/colorTokens';
import { ThemeName } from 'lib/types';
import { NestedObjKeys } from 'lib/types/flat';
import { get } from 'lodash';

/**
 * Get light & dark colors for createTheme
 */
export const getLightDarkColors = (
  theme: ThemeName,
  colors: Record<
    string,
    NestedObjKeys<
      typeof colorTokens.windows.light | typeof colorTokens.macos.light
    >
  >,
) => {
  const themeTokensLight = colorTokens[theme].light;
  const themeTokensDark = colorTokens[theme].dark;

  return Object.entries(colors).reduce<
    Record<'light' | 'dark', ThemeContract['colors']>
  >(
    (acc, [key, tokenName]) => {
      const lightValue = get(themeTokensLight, tokenName);
      const darkValue = get(themeTokensDark, tokenName);

      if (!lightValue || !darkValue)
        throw new Error(`Token for value '${tokenName}' in theme not found.`);

      return {
        light: {
          ...acc.light,
          [key]: lightValue,
        },
        dark: {
          ...acc.dark,
          [key]: darkValue,
        },
      };
    },
    {
      light: {} as ThemeContract['colors'],
      dark: {} as ThemeContract['colors'],
    },
  );
};
