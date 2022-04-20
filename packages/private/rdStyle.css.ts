import { ThemeMode } from 'lib/types';
import * as transform from './transforms';
import { compose } from 'lodash/fp';
import { ComponentName } from 'lib/utils/themeUtils.types';
import {
  PartialRdStyleFn,
  RdStyleOptions,
  PartialRdStyleFnWindows,
  PartialRdStyleFnMacos,
  RdStyleRule,
} from './rdStyle.types';

// eslint-disable-next-line prettier/prettier
export function rdStyle (options: { componentName: ComponentName, theme: 'windows', mode?: ThemeMode }): PartialRdStyleFnWindows;
// eslint-disable-next-line prettier/prettier
export function rdStyle (options: { componentName: ComponentName, theme: 'macos', mode?: ThemeMode }): PartialRdStyleFnMacos;
// eslint-disable-next-line prettier/prettier
export function rdStyle (options: { componentName: ComponentName }): PartialRdStyleFn;
export function rdStyle({
  componentName,
  theme,
  mode,
}: RdStyleOptions): PartialRdStyleFn {
  return (styleRules) => {
    const styleRuleArray = Array.isArray(styleRules)
      ? styleRules
      : [styleRules];

    const transformStyleRules = (styles: RdStyleRule) => {
      const flatObjWithSelectorsOnly = transform.rootValuesToSelectors(styles);

      const replaceThemeColors = transform.themeColors({ mode, theme });
      const objWithColors = replaceThemeColors(flatObjWithSelectorsOnly) || {
        selectors: {},
      };

      const varStyleRuleValue = transform.varStyleRuleValue(componentName);
      const varDeclarations = transform.varDeclarations(componentName);
      const transformStyleObj = compose(
        transform.groupVars,
        varDeclarations,
        varStyleRuleValue,
      );

      return {
        selectors: Object.entries(objWithColors.selectors).reduce(
          (acc, [selector, styleObj]) => {
            return {
              ...acc,
              [selector]: transformStyleObj(styleObj),
            };
          },
          {},
        ),
      };
    };

    return styleRuleArray.map(transformStyleRules);
  };
}
