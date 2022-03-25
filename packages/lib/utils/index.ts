import { createInitialVarFn } from './createInitialVarFn';
import { createUseVarFn } from './createUseVarFn';

export const createUtils = (componentName: string) => ({
  useVar: createUseVarFn(componentName),
  initialVars: createInitialVarFn(componentName),
});
