import Stitches from '@stitches/react/types/stitches';
import { useState, useEffect, useRef } from 'react';
import { ThemeName, ThemeMode } from 'src/theme';
import { createTheme } from '../../../../src/reactDesktop.config';

interface Args {
  themeName: ThemeName;
  mode: ThemeMode;
}

const useApplyTheme = ({ themeName, mode }: Args) => {
  const [theme, setTheme] = useState<Stitches['theme']>();
  const prevThemeClassName = useRef<string>();

  useEffect(() => {
    const newTheme = createTheme({ theme: themeName, mode });
    setTheme(newTheme);

    const html = document.documentElement;

    // add/remove classnames
    if (prevThemeClassName.current)
      html.classList.remove(prevThemeClassName.current);
    if (newTheme?.className) html.classList.add(newTheme.className);

    prevThemeClassName.current = newTheme.className;
  }, [themeName, mode]);

  return theme;
};

export default useApplyTheme;
