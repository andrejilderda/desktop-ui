import {
  ComplexStyleRule,
  StyleRule,
} from '@vanilla-extract/css/dist/declarations/src';
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
  (...args: [ComplexStyleRule | { colors: ColorFnWindows }]): StyleRule;
  // eslint-disable-next-line prettier/prettier
  (...args: [ThemeMode, ComplexStyleRule | { colors: ColorFnWindows }]): StyleRule;
  // eslint-disable-next-line prettier/prettier
  (...args: [ThemeMode, string, ComplexStyleRule | { colors: ColorFnWindows }]): StyleRule;
  (...args: any[]): StyleRule;
};

export type PartialThemeFnMacos = {
  (...args: [ComplexStyleRule | { colors: ColorFnMacos }]): StyleRule;
  // eslint-disable-next-line prettier/prettier
  (...args: [ThemeMode, ComplexStyleRule | { colors: ColorFnMacos }]): StyleRule;
  // eslint-disable-next-line prettier/prettier
  (...args: [ThemeMode, string, ComplexStyleRule | { colors: ColorFnMacos }]): StyleRule;
  (...args: any[]): StyleRule;
};

export type ComponentName = string;
