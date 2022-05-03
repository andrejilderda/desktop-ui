import { classNamePrefix } from 'lib/constants/styles';

/**
 * Higher order function that returns a tagged template literal-function for
 * creating references to local variables (or rather CSS custom properties),
 * optionally with a fallback.
 *
 * @example
 * const useVar = createUseVarFn(componentName);
 * ...
 * // without fallback
 * fontSize: useVar`--font-size`,
 *
 * // with custom property as fallback
 * borderColor: useVar`--border-disabled, --border`,
 
 * // with default value as fallback
 * borderColor: useVar`--border-disabled, 2px solid red`,
 */
export const createUseVarFn =
  (componentName: string) =>
  ([localVar]: TemplateStringsArray): string => {
    const varName = (name: string) =>
      `--${classNamePrefix}-${componentName}-${name}`;

    const splitVariablesRaw = (localVar as string).split(/, /i);
    // remove var dashes (--) from beginning of var-name for further processing:
    // fe. --foo--bar, --baz-quux › foo--bar, baz-quux
    const splitVariablesClean = (localVar as string)
      ?.trim()
      .replaceAll(/^--|(?!,)\s*--/g, '')
      .split(/, /i);

    const [variableClean, fallbackClean] = splitVariablesClean;
    const [, fallbackRaw] = splitVariablesRaw;

    // determine whether fallback is a var-name (starting with '--') or another
    // property (f.e. '12px')
    const fallback = fallbackRaw?.trim().match(/^--/)
      ? `var(${varName(fallbackRaw)})`
      : fallbackClean;

    return fallback
      ? `var(${varName(variableClean)}, ${fallback})`
      : `var(${varName(variableClean)})`;
  };
