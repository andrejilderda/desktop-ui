import React from 'react';
// import * as themes from 'src/themes';
// import { Theme } from 'src/themes/themes';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => ({ children });

export default ThemeProvider;
