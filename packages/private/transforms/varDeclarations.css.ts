import { classNamePrefix } from 'lib/constants/styles';
import _ from 'lodash';
import { RdStyleRule } from '../rdStyle.types';

/**
 * returns the prefix variable name with the custom property namespace &
 * component-name
 */
const prefixVar = (componentName: string, nameRaw: string) => {
  const tokenRegex = /^\$\$/g; // match `$$` at the beginning of a string
  const name = nameRaw.trim();
  const isValidVar = tokenRegex.test(name) && componentName;

  return isValidVar
    ? `--${classNamePrefix}-${componentName}-${name.replace(tokenRegex, '')}`
    : name;
};

export const varDeclarations = _.curry(
  (componentName: string, obj: RdStyleRule): RdStyleRule => {
    return _.mapKeys(obj, (_v, k) =>
      prefixVar(componentName, k),
    ) as RdStyleRule;
  },
);
