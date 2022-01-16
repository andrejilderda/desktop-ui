import { classNamePrefix } from 'lib/constants/styles';

/**
 * Higher order function that returns a tagged template literal-function for
 * creating references to local variables (or rather CSS custom properties),
 * optionally with a fallback.
 *
 * @param {TemplateStringsArray} [localVar]
 * @return {*}
 * @example
 * const useVar = createUseVarFn(componentName);
 * ...
 * // without fallback
 * fontSize: useVar`--font-size`,
 *
 * // with fallback
 * borderColor: useVar`--border-disabled, --border`,
 */
const createUseVarFn = (componentName: string) => ([
  localVar,
]: TemplateStringsArray) => {
  const varName = (name: string) =>
    `--${classNamePrefix}-${componentName}-${name}`;

  const splitVariables = (localVar as string)
    .replaceAll(/--/g, '')
    .split(/, /i);
  const [variable, fallback] = splitVariables;

  return fallback
    ? `var(${varName(variable)}, var(${varName(fallback)}))`
    : `var(${varName(variable)})`;
};

export default createUseVarFn;
