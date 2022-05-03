import React, { useContext } from 'react';
import clsx from 'clsx';
import Wrap from 'lib/components/Wrap';
import { ThemeMode, ThemeName } from 'lib/types';
import { useColorMode, useThemeClassName, useApplyThemeToHTML } from './hooks';
import ThemeProviderContext from './ThemeProviderContext';
import '../../styles/globalStyles.css';

interface ThemeProviderProps {
  children: React.ReactNode;
  theme: ThemeName;
  mode: ThemeMode | 'auto';
  focus?: boolean;
  withGlobalStyles?: boolean;
  enableWindowBlur?: boolean;
  local?: boolean;
}

const ThemeProvider = ({
  children,
  theme: themeName,
  mode: modeProp = 'auto',
  enableWindowBlur = true,
  withGlobalStyles,
  local: localProp,
}: ThemeProviderProps) => {
  // determine the mode automatically based on the user's light/dark system
  // preferences unless mode is explicitly provided as a prop
  const [mode] = useColorMode(modeProp);

  // 1. Most applications will only use one ThemeProvider. By default the
  //    ThemeProvider will add a className for the theme to the <html>-element,
  //    unless a `local` prop is given or the ThemeProvider is wrapped inside
  //    another ThemeProvider. In these cases the children are wrapped in a
  //    <div> with the className.
  const ThemeContext = useContext(ThemeProviderContext);
  const local = !!ThemeContext || localProp;
  // const theme = useTheme(themeName, mode, enableWindowBlur);
  const classNames = useThemeClassName(themeName, mode);
  useApplyThemeToHTML(!local, classNames, withGlobalStyles);

  // if (withGlobalStyles) globalStyles();

  return (
    <ThemeProviderContext.Provider value={classNames}>
      {/* See 1. */}
      <Wrap
        if={!!local}
        with={(children) => (
          <div className={clsx(Object.values(classNames))}>{children}</div>
        )}
      >
        {children}
      </Wrap>
    </ThemeProviderContext.Provider>
  );
};

export default ThemeProvider;
