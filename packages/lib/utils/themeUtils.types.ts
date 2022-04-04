import { ComplexStyleRule } from '@vanilla-extract/css/dist/declarations/src';
import { colorTokens } from 'lib/themes/colorTokens';
import { ThemeMode } from 'lib/types';

// eslint-disable-next-line prettier/prettier
export type ColorFnWindows = (colors: typeof colorTokens['windows']['light']) => any;
// eslint-disable-next-line prettier/prettier
export type ColorFnMacos = (colors: typeof colorTokens['macos']['light']) => any;
export type ColorFn = (
  colors:
    | typeof colorTokens['windows']['light']
    | typeof colorTokens['macos']['light'],
) => any;

export type PartialThemeFnWindows = {
  (...args: [ComplexStyleRule | { colors: ColorFnWindows }]): string;
  (...args: [ThemeMode, ComplexStyleRule | { colors: ColorFnWindows }]): string;
  // eslint-disable-next-line prettier/prettier
  (...args: [ThemeMode, string, ComplexStyleRule | { colors: ColorFnWindows }]): string;
  (...args: any[]): string;
};

export type PartialThemeFnMacos = {
  (...args: [ComplexStyleRule | { colors: ColorFnMacos }]): string;
  (...args: [ThemeMode, ComplexStyleRule | { colors: ColorFnMacos }]): string;
  // eslint-disable-next-line prettier/prettier
  (...args: [ThemeMode, string, ComplexStyleRule | { colors: ColorFnMacos }]): string;
  (...args: any[]): string;
};

export type ComponentName = string;
