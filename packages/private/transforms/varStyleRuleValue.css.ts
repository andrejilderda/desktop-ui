import { prefixVarsStyleRuleValue } from 'lib/utils/transformVars.css';
import _ from 'lodash';
import { RdStyleRule } from '../rdStyle.types';

export const varStyleRuleValue = _.curry(
  (componentName: string, obj: RdStyleRule) => {
    return _.mapValues(obj, (v) =>
      prefixVarsStyleRuleValue(componentName, v?.toString() || ''),
    );
  },
);
