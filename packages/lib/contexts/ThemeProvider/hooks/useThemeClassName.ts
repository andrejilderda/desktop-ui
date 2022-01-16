import { useMemo } from 'react';
import { ThemeBaseClassName, ThemeMode, ThemeName } from 'lib/types';
import themes from 'lib/themes/themes.css';
import { ThemeClassName } from 'src/theme/types';
import { classNamePrefix } from 'lib/constants/styles';
// import useWindowBlurTheme from './useWindowBlurTheme';

export type ThemeClassNames = ReturnType<typeof useThemeClassName>;

/**
 * Returns the generated and friendly classnames for a theme
 *
 * @param {ThemeName} themeName
 * @param {ThemeMode} mode
 * @return {*}
 */
const useThemeClassName = (
  themeName: ThemeName,
  mode: ThemeMode,
  // windowBlurEnabled: boolean,
) => {
  // const applyBlurTheme = useWindowBlurTheme(themeName, windowBlurEnabled);
  const generated = themes[themeName][mode];
  const friendlyBase: ThemeBaseClassName = `${classNamePrefix}-${themeName}`; // e.g. rd-windows
  const friendly: ThemeClassName = `${classNamePrefix}-${themeName}-${mode}`; // e.g. rd-windows-light

  return useMemo(
    () => ({
      generated,
      friendly,
      friendlyBase,
    }),
    [friendly, friendlyBase, generated],
  );
};

export default useThemeClassName;
