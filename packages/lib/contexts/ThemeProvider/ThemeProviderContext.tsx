import { createContext } from 'react';
import { Theme } from 'src/theme/types';

const ThemeProviderContext = createContext<Theme | undefined>(undefined);
ThemeProviderContext.displayName = 'ThemeProviderContext';

export default ThemeProviderContext;
