import { createContext } from 'react';
import { ThemeClassNames } from './hooks/useThemeClassName';

const ThemeProviderContext = createContext<ThemeClassNames | undefined>(
  undefined,
);
ThemeProviderContext.displayName = 'ThemeProviderContext';

export default ThemeProviderContext;
