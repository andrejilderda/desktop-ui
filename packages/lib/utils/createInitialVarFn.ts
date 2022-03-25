import { classNamePrefix } from 'lib/constants/styles';

/**
 * Higher order function that returns a function that returns a list of custom
 * properties with 'initial'-value, based on an array of custom property names.
 * This to reset the light/dark theme values, so that theme specific styles
 * don't 'leak'. For more info:
 * https://css-tricks.com/using-custom-property-stacks-to-tame-the-cascade/#aa-component-ownership
 *
 * @example
 * const { resetVar } = createResetVarFn(componentName);
 * vars: {
 *   ...resetThemeVars(['border', 'border-disabled', 'etc'])
 * }
 */
export const createInitialVarFn =
  (componentName: string) => (customPropertyNames: string[]) =>
    Object.fromEntries(
      customPropertyNames.map((key) => [
        `--${classNamePrefix}-${componentName}-${key}`,
        'initial',
      ]),
    );
