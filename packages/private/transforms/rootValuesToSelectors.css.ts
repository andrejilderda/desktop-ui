import _ from 'lodash';
import { RdStyleRule, WithRequiredProperty } from '../rdStyle.types';

// move all root values to '&' in `selectors`, so that it's easier to
// apply transformations, f.e.:
// {
//   selectors: {
//     '&': /* ... */,
//   },
// };

export const rootValuesToSelectors = (
  obj: RdStyleRule,
): WithRequiredProperty<RdStyleRule, 'selectors'> => {
  const selectors = obj?.selectors || {};
  const properties = _.omit(obj, ['selectors']);

  return {
    selectors: _.merge(selectors, {
      '&': {
        ...properties,
      },
    }),
  };
};
