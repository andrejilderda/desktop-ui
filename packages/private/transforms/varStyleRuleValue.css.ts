import { prefixVarsStyleRuleValue } from 'lib/utils/transformVars.css';
import _ from 'lodash';
import { RdStyleRule } from '../rdStyle.types';

export const varStyleRuleValue = _.curry(
  (componentName: string, obj: RdStyleRule) =>
    _.mapValues<RdStyleRule>(obj, (v: RdStyleRule[keyof RdStyleRule]) => {
      if (typeof v !== 'string') return v;
      else if (v.indexOf('$$') === -1) return v;

      return prefixVarsStyleRuleValue(componentName, v?.toString() || '');
    }),
);
