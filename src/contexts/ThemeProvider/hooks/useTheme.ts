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
  const windowFocused = useWindowBlurTheme(themeName, windowBlurEnabled);

  const theme = useMemo<Stitches['theme']>(
    () =>
      getTheme({
        theme: themeName,
        mode,
        windowBlur: windowFocused,
      }),
    [themeName, mode, windowFocused],
  );

  return theme;
};

export default useTheme;
