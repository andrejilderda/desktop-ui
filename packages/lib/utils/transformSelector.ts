import { curry } from 'lodash';

/**
 * transformSelector
 */
const transformSelectorFn = (
  extension: string | undefined,
  originalSelector: string,
) => {
  if (!extension) return originalSelector;

  const extensionSelector = extension
    .split(', ')
    .map((ext) => `${originalSelector.replace('&', '')}${ext}`);

  return extensionSelector.join(', ');
};

export const transformSelector = curry(transformSelectorFn);
