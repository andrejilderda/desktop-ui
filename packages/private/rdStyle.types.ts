import { StyleRule } from '@vanilla-extract/css/dist/declarations/src';
import { colorTokens } from 'lib/themes/colorTokens';
import { ThemeMode, ThemeName } from 'lib/types';
import { ComponentName } from 'lib/utils/themeUtils.types';

export interface RdStyleOptions {
  componentName: ComponentName;
  theme?: ThemeName;
  mode?: ThemeMode;
}

export interface RdStyleRule extends StyleRule {
  [key: `$$${string}`]: string;
}
export interface RdStyleRuleWindows extends RdStyleRule {
  colors?: (colors: typeof colorTokens['windows']['light']) => any;
}
export interface RdStyleRuleMacos extends RdStyleRule {
  colors?: (colors: typeof colorTokens['macos']['light']) => any;
}

// eslint-disable-next-line prettier/prettier
export type PartialRdStyleFn = (styleRules: RdStyleRule | RdStyleRule[]) => StyleRule[];
// eslint-disable-next-line prettier/prettier
export type PartialRdStyleFnWindows = (styleRules: RdStyleRuleWindows | RdStyleRuleWindows[]) => StyleRule[];
// eslint-disable-next-line prettier/prettier
export type PartialRdStyleFnMacos = (styleRules: RdStyleRuleMacos | RdStyleRuleMacos[]) => StyleRule[];