import { createGlobalThemeContract } from '@vanilla-extract/css';
import { classNamePrefix } from 'lib/constants/styles';
import { variables, colors } from './windows/variables.css';

export type ThemeContract = {
  colors: {
    background: string;
    foreground: string;
  };
  typography: { fonts: { system: string } };
};

export type GlobalColorTokens<T extends string> = Record<
  keyof ThemeContract['colors'],
  T
>;

const vars = createGlobalThemeContract<ThemeContract>(
  {
    colors: {
      ...colors.light,
    },
    ...variables,
  },
  (_value: string | null, path: string[]) =>
    `${classNamePrefix}-${path.join('-').replace('.', '_')}`,
);

export default vars;
