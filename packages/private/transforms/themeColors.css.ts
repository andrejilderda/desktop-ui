import { selectors } from 'lib/constants/selectors';
import { selectors as transformSelector } from './selectors.css';
import { colorTokens } from 'lib/themes/colorTokens';
import { ThemeName, ThemeMode } from 'lib/types';
import { ColorFn } from 'lib/utils/themeUtils.types';
import _ from 'lodash';
import { RdStyleRule, WithRequiredProperty } from '../rdStyle.types';

interface ThemeColorsOptions {
  theme?: ThemeName;
  mode?: ThemeMode;
}

export const themeColors = _.curry(
  (
    { theme, mode }: ThemeColorsOptions,
    obj: WithRequiredProperty<RdStyleRule, 'selectors'>,
  ) => {
    const filterColors = (obj: Record<string, string>) =>
      _.omitBy(obj, (_value, key) => key === 'colors');

    const output = {
      selectors: Object.entries(obj?.selectors).reduce(
        (acc, [selector, styleObj]: any[]) => {
          const colorsFn = styleObj.colors as ColorFn;

          const mainSelector =
            theme && mode
              ? transformSelector(selectors[theme][mode], selector)
              : theme
              ? transformSelector(selectors[theme].toString(), selector)
              : transformSelector('&', selector);

          if (!_.isFunction(styleObj.colors))
            return {
              ...acc,
              [mainSelector]: styleObj,
            };

          if (!theme)
            throw new Error(
              'A `colors`-property was used, but no theme was provided to `themeColors()`',
            );

          const newProperties = {
            [mainSelector]: filterColors(styleObj),

            ...(!mode || mode === 'light'
              ? {
                  [transformSelector(selectors[theme].light, selector)]:
                    colorsFn(colorTokens[theme].light),
                }
              : {}),
            ...(!mode || mode === 'dark'
              ? {
                  [transformSelector(selectors[theme].dark, selector)]:
                    colorsFn(colorTokens[theme].dark),
                }
              : {}),
          };

          return _.merge(acc, newProperties);
        },
        {},
      ),
    };

    return output;
  },
);
