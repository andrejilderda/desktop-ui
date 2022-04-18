import _ from 'lodash';

// this function recursively loops over object properties and moves vars to a
// `vars-property, since Vanilla Extract expects all variables to be in
// `{vars: {...}, ...}`
export const groupVars = (obj: Record<string, any>) => {
  const recursiveTransform = (obj: Record<string, any>) =>
    _.transform(
      obj,
      (result: any, value, key: string) => {
        const isToken = key.startsWith('$$') || key.startsWith('--');

        if (_.isObjectLike(value)) result[value] = recursiveTransform(value);
        else if (key === 'colors' || !isToken) result[key] = value;
        else _.set(result, `vars.${key}`, value);
      },
      {},
    );

  return recursiveTransform(obj);
};
