import { classNamePrefix } from 'lib/constants/styles';
import { curry, identity, isObjectLike } from 'lodash';
import { StitchStyleRule } from './transformVars.types';
import { compose } from 'lodash/fp';
import _ from 'lodash';

export const recursiveMap = (
  obj: Record<string, any>,
  callback: ([key, value]: [key: string, value: any]) => [
    key: string,
    value: any,
  ],
): any => {
  const transformedEntries = Object.entries(obj).map(([key, value]) => {
    if (isObjectLike(value)) return [key, recursiveMap(value, callback)];
    else return callback([key, value]);
  });

  return Object.fromEntries(transformedEntries);
};

/**
 * returns the prefix variable name with the custom property namespace &
 * component-name
 */
export const prefixVarCurried = curry(
  (componentName: string, nameRaw: string) => {
    const tokenRegex = /^\$\$/g; // match `$$` at the beginning of a string

    const name = nameRaw.trim();
    return !name.match(tokenRegex)
      ? name
      : `--${classNamePrefix}-${componentName}-${name.replace(tokenRegex, '')}`;
  },
);

/**
 * Prefix vars in style rule values
 *
 * @param {string} componentName
 * @param {string} ruleValue
 * @return {function | string} Curried function that returns a string when all arguments are passed
 * @example
 * prefixVarsStyleRuleValue('componentName', '$$foo, $$bar')
 * // returns '--rd-component-name-foo, --rd-component-name-bar'
 */
export const prefixVarsStyleRuleValue = (
  componentName: string,
  ruleValue: string,
) => {
  if (typeof ruleValue !== 'string') return;

  return (
    ruleValue
      // split var fallback groups (f.e. `($$foo, $$bar)`) or whitespace `/([\s])/g`
      .split(/\((\$\$[^\)]+)\)|([\s])/g)
      // trim each
      .filter((match) => !!match && !!match.trim())
      // split the group
      .map((item, itemIndex) =>
        item.startsWith('$$') && item.indexOf(',') > -1
          ? item
              .split(',')
              .map((item) => item.trim())
              .reverse()
              .reduce((acc, groupItem, index) => {
                const prefix = prefixVarCurried(componentName);
                return !groupItem.startsWith('$$')
                  ? groupItem
                  : index + 1 === item[itemIndex].length
                  ? `var(${prefix(groupItem)})`
                  : `var(${prefix(groupItem)}, ${acc})`;
              }, '')
          : item,
      )
      // transform items here
      .map((item) => item)
      .join(' ')
  );
};

export const transformVars = curry(
  (componentName: string, obj: StitchStyleRule) => {
    const prefixVar = prefixVarCurried(componentName);

    const transformColors = {};

    const transformKey = compose(prefixVar);
    const transformValue = compose(identity);

    const recursiveTransform = (obj) =>
      _.transform(
        obj,
        (result: any, value, key: string) => {
          if (_.isObjectLike(value))
            result[prefixVar(key)] = recursiveTransform(value);
          else if (key === 'colors') {
            // TODO: transform colors function
          } else
            result[prefixVar(key)] = prefixVarsStyleRuleValue(
              componentName,
              value,
            );
        },
        {},
      );

    const result = recursiveTransform(obj);

    return result;
  },
);
