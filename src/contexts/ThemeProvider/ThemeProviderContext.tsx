import Stitches from '@stitches/react/types/stitches';
import { createContext } from 'react';

export const ThemeProviderContext = createContext<
  Stitches['theme'] | undefined
>(undefined);
