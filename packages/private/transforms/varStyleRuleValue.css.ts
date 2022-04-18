import { prefixVarsStyleRuleValue } from 'lib/utils/transformVars.css';
import _ from 'lodash';

export const varStyleRuleValue = _.curry((componentName: string, obj: any) => {
  return _.mapValues(obj, (v) => prefixVarsStyleRuleValue(componentName, v));
});
