import { createInitialVarFn } from './createInitialVarFn';
import { createSetVarFn } from './createSetVarFn';
import { createUseVarFn } from './createUseVarFn';

export const createUtils = (componentName: string) => ({
  useVar: createUseVarFn(componentName),
  setVars: createSetVarFn(componentName),
  initialVars: createInitialVarFn(componentName),
});
