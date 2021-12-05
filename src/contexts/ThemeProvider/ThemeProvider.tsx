import React, { createContext } from 'react';
import { globalStyles } from '../../../src/reactDesktop.config';
import { ThemeName, ThemeMode } from '../../../src/theme';
import useColorMode from './hooks/useColorMode';
import Stitches from '@stitches/react/types/stitches';
import useApplyTheme from './hooks/useApplyTheme';

interface ThemeProviderProps {
  children: React.ReactNode;
  theme: ThemeName;
  mode: ThemeMode | 'auto';
  focus?: boolean;
  withGlobalStyles?: boolean;
}

export const ThemeProviderContext = createContext<
  Stitches['theme'] | undefined
>(undefined);
ThemeProviderContext.displayName = 'ThemeProviderContext';

const ThemeProvider = ({
  children,
  theme: themeName,
  mode: modeProp = 'auto',
  focus = false,
  withGlobalStyles,
}: ThemeProviderProps) => {
  // determine the mode automatically unless mode is explicitly provided as a prop
  const [mode] = useColorMode(modeProp);
  const theme = useApplyTheme({ themeName, mode });

  if (withGlobalStyles) globalStyles();
  if (focus) console.log('focus', focus);

  return (
    <ThemeProviderContext.Provider value={theme}>
      Theme: <br />
      <strong>{themeName}</strong>
      <br />
      <br />
      Mode: <br />
      <strong>{mode}</strong>
      {children}
    </ThemeProviderContext.Provider>
  );
};

export default ThemeProvider;
