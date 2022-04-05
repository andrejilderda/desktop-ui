import { createInitialVarFn } from './createInitialVarFn';
import { createSetVarFn } from './createSetVarFn';
import { createUseVarFn } from './createUseVarFn';
export { themeUtils } from './themeUtils.css';

export const createUtils = (componentName: string) => ({
  useVar: createUseVarFn(componentName),
  setVars: createSetVarFn(componentName),
  initialVars: createInitialVarFn(componentName),
});
