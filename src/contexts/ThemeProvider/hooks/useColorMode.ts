import { useState, useEffect, useMemo } from 'react';
import { ThemeMode } from 'src/theme';

type UseColorModeArg = ThemeMode | 'auto';

// returns light or dark based on the user's OS preference (if any)
const getThemeModePreference = (fallback: ThemeMode = 'light'): ThemeMode => {
  const prefersDark = matchMedia('(prefers-color-scheme: dark)');
  const hasPreference = typeof prefersDark.matches === 'boolean';
  if (hasPreference) return prefersDark.matches ? 'dark' : 'light';
  return fallback;
};

const getThemeMode = (mode: UseColorModeArg) =>
  mode === 'auto' ? getThemeModePreference() : mode;

const useColorMode = (modeArg: UseColorModeArg = 'auto') => {
  const mode = getThemeMode(modeArg);
  const [colorMode, setColorMode] = useState<ThemeMode>(mode);

  // update color mode whenever a new 'mode' argument is received
  useEffect(() => {
    setColorMode(getThemeMode(modeArg));
  }, [modeArg]);

  // listen to light/dark mode change events
  const onColorSchemeChange = (event: MediaQueryListEvent) => {
    const toDark =
      (event.media.includes('light') && !event.matches) ||
      (event.media.includes('dark') && event.matches);
    setColorMode(toDark ? 'dark' : 'light');
  };

  // if mode is set to 'auto' listen to events when the user changes the OS's
  // appearance settings
  useEffect(() => {
    if (modeArg !== 'auto') return;

    const mediaQueryListDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    );
    const mediaQueryListLight = window.matchMedia(
      '(prefers-color-scheme: light)',
    );
    if (mediaQueryListDark.matches)
      mediaQueryListDark.addEventListener('change', onColorSchemeChange);
    if (mediaQueryListLight.matches)
      mediaQueryListLight.addEventListener('change', onColorSchemeChange);

    return () => {
      mediaQueryListDark.removeEventListener('change', onColorSchemeChange);
      mediaQueryListLight.removeEventListener('change', onColorSchemeChange);
    };
  }, [modeArg]);

  // memoize return values
  const colorModeFns = useMemo(
    () => [colorMode, setColorMode] as const,
    [colorMode],
  );

  return colorModeFns;
};

export default useColorMode;
