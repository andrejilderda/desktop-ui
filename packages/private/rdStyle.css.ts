import _ from 'lodash';
import { ThemeMode, ThemeName } from 'lib/types';
import * as transform from './transforms';
import { compose } from 'lodash/fp';

interface RdStyleFn {
  componentName: string;
  theme?: ThemeName;
  mode?: ThemeMode;
}

export const rdStyle = (
  { theme, mode, componentName }: RdStyleFn,
  obj: any,
) => {
  const flatObjWithSelectorsOnly = transform.rootValuesToSelectors(obj);

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
