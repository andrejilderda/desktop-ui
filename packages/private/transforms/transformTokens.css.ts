import _ from 'lodash';
import { RdStyleRule } from '../rdStyle.types';
import { tokens } from 'lib/themes/tokens';
import { tokenMap } from 'packages/private/transforms/transformTokens.utils.css';
import { ThemeName } from 'lib/types';

export const transformTokens = _.curry(
  (theme: ThemeName | undefined, obj: RdStyleRule) => {
    const recursiveTransform = (
      theme: ThemeName | undefined,
      obj: Record<string, any>,
    ): RdStyleRule =>
      _.transform(
        obj,
        (result: any, value, key: string) => {
          const hasToken = typeof value === 'string' && value.indexOf('$') > -1;
          const tokenMapKeys = Object.keys(tokenMap);

          if (_.isObjectLike(value))
            result[value] = recursiveTransform(theme, value);
          else if (!hasToken) result[key] = value;
          else if (typeof value === 'string') {
            const valueWithTokensReplaced = value

              // - single $ followed by number, character or dash (-)
              // - allow min-values (like -$6)
              // - $$ (CSS variable aliases) are excluded
              // See: https://regex101.com/r/XmnIZv/1
              .split(/(-*(?<!\$)\$(?!\$)[a-zA-Z0-9-]+)/gm)
              .map((splitStr) => {
                const isToken = /^-*\$/.test(splitStr);

                if (!isToken) return splitStr;
                else if (!theme)
                  throw new Error(
                    'A token was used, but no theme name was provided.',
                  );
                else if (!tokenMapKeys.includes(key))
                  throw new Error(
                    `No '${key}'-key found in tokenMap. Token in '${value}' will not be replaced`,
                  );

                // negative tokens are allowed (f.e. -$6)
                const isNegative = splitStr.startsWith('-');
                // get accessor property from map
                const mappedProperty = tokenMap[key as keyof typeof tokenMap];
                // replace (-)$ from token
                const tokenValue = splitStr.replace(/^-*\$/, '');

                const property = _.get(
                  tokens,
                  `${theme}.${mappedProperty}.${tokenValue}`,
                );

                if (!property)
                  throw new Error(
                    `No token value found for theme '${theme}', property '${mappedProperty}' and value '${tokenValue}'.`,
                  );

                // console.log(
                //   'value',
                //   `${value},\n   property: ${property}, value: ${tokenValue}, mappedProperty: ${mappedProperty}`,
                // );

                // naive implementation that does not check whether we're dealing
                // with a number (since tokens can contain 'px'-values)
                const startsWithDigit = /^\d/;
                return isNegative && startsWithDigit.test(property)
                  ? `-${property}`
                  : property;
              })
              .join('');

            _.set(result, key, valueWithTokensReplaced);
          }
        },
        {},
      );

    return recursiveTransform(theme, obj);
  },
);
