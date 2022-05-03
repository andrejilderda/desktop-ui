import { StyleRule } from '@vanilla-extract/css/dist/declarations/src';
import {
  CSSPropertiesWithVars,
  FeatureQueries,
  MediaQueries,
} from '@vanilla-extract/css/dist/declarations/src/types';
import { colorTokens } from 'lib/themes/colorTokens';
import { ThemeMode, ThemeName } from 'lib/types';
import { ComponentName } from 'lib/utils/themeUtils.types';

export type WithRequiredProperty<T, K extends keyof T> = T & {
  [P in K]-?: T[P];
};

export interface RdStyleOptions {
  componentName: ComponentName;
  theme?: ThemeName;
  mode?: ThemeMode;
}

export interface RdStyleRule extends StyleRule {
  [key: `$$${string}`]: string;

  selectors?: {
    [selector: string]: CSSPropertiesWithVars &
      MediaQueries<
        CSSPropertiesWithVars & FeatureQueries<CSSPropertiesWithVars>
      > &
      FeatureQueries<
        CSSPropertiesWithVars & MediaQueries<CSSPropertiesWithVars>
      > &
      // make it accept tokens also
      Record<`$$${string}`, string>;
  };
}
export interface RdStyleRuleWindows extends RdStyleRule {
  colors?: (colors: typeof colorTokens['windows']['light']) => any;
}
export interface RdStyleRuleMacos extends RdStyleRule {
  colors?: (colors: typeof colorTokens['macos']['light']) => any;
}

export type PartialRdStyleFn = (
  styleRules: RdStyleRule | RdStyleRule[],
) => RdStyleRule[];

export type PartialRdStyleFnWindows = (
  styleRules: RdStyleRuleWindows | RdStyleRuleWindows[],
) => RdStyleRule[];

export type PartialRdStyleFnMacos = (
  styleRules: RdStyleRuleMacos | RdStyleRuleMacos[],
) => RdStyleRule[];
