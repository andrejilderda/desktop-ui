import { useEffect, useRef } from 'react';
import { ThemeMode, ThemeName } from 'src/theme/types';
import { createTheme } from '../../../../src/reactDesktop.config';

interface Args {
  enabled: boolean;
  themeName: ThemeName;
  mode: ThemeMode;
}

const useApplyThemeToHTML = ({ enabled, themeName, mode }: Args) => {
  const prevThemeClassName = useRef<string>();

  useEffect(() => {
    if (!enabled) return;

    const newTheme = createTheme({ theme: themeName, mode });
    const html = document.documentElement;

    // add/remove classnames
    if (prevThemeClassName.current)
      html.classList.remove(prevThemeClassName.current);
    if (newTheme?.className && enabled) html.classList.add(newTheme.className);

    prevThemeClassName.current = newTheme.className;
  }, [themeName, mode, enabled]);
};

export default useApplyThemeToHTML;
