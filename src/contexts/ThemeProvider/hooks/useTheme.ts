import { useMemo } from 'react';
import { getTheme } from 'src/reactDesktop.config';
import { Theme, ThemeMode, ThemeName } from 'src/theme/types';
import useWindowBlurTheme from './useWindowBlurTheme';

const useTheme = (
  themeName: ThemeName,
  mode: ThemeMode,
  windowBlurEnabled: boolean,
) => {
  const applyBlurTheme = useWindowBlurTheme(themeName, windowBlurEnabled);

  const theme = useMemo<Theme>(
    () =>
      getTheme({
        theme: themeName,
        mode,
        windowBlur: applyBlurTheme,
      }),
    [themeName, mode, applyBlurTheme],
  );

  return theme;
};

export default useTheme;
