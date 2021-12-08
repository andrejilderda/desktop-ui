import { useMemo } from 'react';
import { getTheme } from '../../../reactDesktop.config';
import { ThemeMode, ThemeName } from 'src/theme/types';
import Stitches from '@stitches/react/types/stitches';
import useWindowBlurTheme from './useWindowBlurTheme';

const useTheme = (
  themeName: ThemeName,
  mode: ThemeMode,
  windowBlurEnabled: boolean,
) => {
  const applyBlurTheme = useWindowBlurTheme(themeName, windowBlurEnabled);

  const theme = useMemo<Stitches['theme']>(
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
