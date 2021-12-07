import React, { createContext } from 'react';
import { globalStyles, themes } from '../../../src/reactDesktop.config';
import useColorMode from './hooks/useColorMode';
import Stitches from '@stitches/react/types/stitches';
import useApplyThemeToHTML from './hooks/useApplyTheme';
import { ConditionalWrapper } from '../../utils/helpers';
import { ThemeMode, ThemeName } from 'src/theme/types';

interface ThemeProviderProps {
  children: React.ReactNode;
  theme: ThemeName;
  mode: ThemeMode | 'auto';
  focus?: boolean;
  withGlobalStyles?: boolean;
  enableWindowBlur?: boolean;
  local?: boolean;
}

export const ThemeProviderContext = createContext<
  Stitches['theme'] | undefined
>(undefined);
ThemeProviderContext.displayName = 'ThemeProviderContext';

const ThemeProvider = ({
  children,
  theme: themeName,
  mode: modeProp = 'auto',
  enableWindowBlur = false,
  withGlobalStyles,
  local,
}: ThemeProviderProps) => {
  // determine the mode automatically based on the user's light/dark system
  // preferences unless mode is explicitly provided as a prop
  const [mode] = useColorMode(modeProp);
  useApplyThemeToHTML({ enabled: !local, themeName, mode });
  const activeTheme = themes.find(
    (theme) => theme.name === `${themeName}-${mode}`,
  )?.theme;

  if (withGlobalStyles) globalStyles();

  // TODO: Switch to blur-theme on window blur
  if (enableWindowBlur) console.log('window blur enabled');

  return (
    <ThemeProviderContext.Provider value={activeTheme}>
      {/* 
        By default the ThemeProvider adds the theme to the <html>-element.
        When a `local`-prop is provided a wrapper is added with the theme
      */}
      <ConditionalWrapper
        condition={!!local}
        wrapper={(children) => (
          <div className={activeTheme}>LOCAL! {children}</div>
        )}
      >
        <>
          Theme: <br />
          <strong>{themeName}</strong>
          <br />
          <br />
          Mode: <br />
          <strong>{mode}</strong>
          {children}
        </>
      </ConditionalWrapper>
    </ThemeProviderContext.Provider>
  );
};

ThemeProviderContext.displayName = 'ThemeProviderContext';

export default ThemeProvider;
