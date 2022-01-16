import { createGlobalThemeContract } from '@vanilla-extract/css';
import { classNamePrefix } from 'lib/constants/styles';
import { variables, colors } from './windows/variables.css';

export const themeContract = createGlobalThemeContract(
  {
    colors: {
      ...colors.light,
    },
    ...variables,
  },
  (_value: string | null, path: string[]) =>
    `${classNamePrefix}-${path.join('-').replace('.', '_')}`,
);

export const vars = themeContract;
