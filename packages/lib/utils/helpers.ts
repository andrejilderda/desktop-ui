import { StyleWithSelectors } from '@vanilla-extract/css/dist/declarations/src/types';
import { Nullable } from 'ts-toolbelt/out/Object/Nullable';
import { classNamePrefix } from 'lib/constants/styles';
import tokens from 'lib/themes/tokens';
import { themes } from 'lib/themes/themes.css';
import { ThemeMode, ThemeName } from 'lib/types';
import { NestedObjKeys } from 'lib/types/flat';
import { get } from 'lodash';

// iterate over an object and make all object properties null
export function objToNull<T extends object>(obj: T): Nullable<T, '', 'deep'> {
  return Object.entries(obj).reduce<any>((acc, [key, value]) => {
    if (typeof value === 'object') {
      return { ...acc, [key]: objToNull(value) };
    }

    return { ...acc, [key]: null };
  }, {});
}

/**
 * Returns a token from a token object
 * @example getToken('windows', 'light').fill_color.accent.default
 */
// prettier-ignore
export function getTokens<T extends ThemeMode>(theme: 'windows', mode: T): typeof tokens.windows[T];
// prettier-ignore
export function getTokens<T extends ThemeMode>(theme: 'macos', mode: T): typeof tokens.macos[T];
export function getTokens(theme: ThemeName, mode: ThemeMode) {
  const themeTokens = theme === 'windows' ? tokens.windows : tokens.macos;

  return themeTokens[mode];
}

/**
 * Specify CSS properties for a certain theme specifically.
 * Make sure to spread the result inside `selectors`.
 *
 * @example
 * {
 *   // ...other styles
 *   selectors: {
 *     ...forTheme({
 *       windows: {
 *         background: 'blue',
 *       },
 *       macos: {
 *         background: 'marineblue'
 *       }
 *     })
 *   }
 * }
 */

type SelectorMap = StyleWithSelectors['selectors'];

export const forTheme = (forThemeProperties: SelectorMap): SelectorMap => {
  const selectors = Object.entries(forThemeProperties || {}).reduce(
    (acc, [key, value]) => {
      const themeClassNames =
        key === 'windows'
          ? `.${themes.windows.light} &, .${themes.windows.dark} &`
          : `.${themes.macos.light} &, .${themes.macos.dark} &`;

      return { ...acc, [`${themeClassNames}`]: value };
    },
    {},
  );

  return selectors;
};

/**
 * Generates CSS properties for both light & dark mode based on tokens for a
 * certain theme. Make sure to spread the result inside `selectors`.
 *
 * @example
 * {
 *   // ...other styles
 *   selectors: {
 *     ...assignTokensToVars('windows', {
 *       [contract.fill]: 'background.fill_color.accent_acrylic_background.base',
 *     })
 *   }
 * }
 */

// prettier-ignore
export function assignTokensToVars(
  componentName: string,
  theme: 'windows',
  vars: Partial<
    Record<string, NestedObjKeys<typeof tokens.windows.light> | string>
  >,
): Record<'light' | 'dark', { selector: string; vars: {} }>;
// prettier-ignore
export function assignTokensToVars(
  componentName: string,
  theme: 'macos',
  vars: Partial<
    Record<string, NestedObjKeys<typeof tokens.macos.light> | string>
  >,
): Record<'light' | 'dark', { selector: string; vars: {} }>;
export function assignTokensToVars(
  componentName: string,
  theme: ThemeName,
  vars: Partial<
    Record<
      string,
      | NestedObjKeys<typeof tokens.windows.light | typeof tokens.macos.light>
      | string
    >
  >,
): Record<'light' | 'dark', { selector: string; vars: {} }> {
  const resolveValues = (mode: ThemeMode) => {
    return Object.entries(vars).reduce((acc, [key, value]) => {
      const themeTokens = tokens[theme][mode];
      const tokenValue = get(themeTokens, value as any);
      const resolvedValue = tokenValue ? tokenValue : value;

      // if (!resolvedValue)
      //   throw new Error(`Token for value '${value}' not found.`);

      const newKey = `--rd-${componentName}-${key.replaceAll(
        /^var\(|--|\)$/g,
        '',
      )}`;

      return { ...acc, [newKey]: resolvedValue };
    }, {});
  };

  return {
    light: {
      selector: `.${themes[theme].light} &`,
      vars: resolveValues('light'),
    },
    dark: {
      selector: `.${themes[theme].dark} &`,
      vars: resolveValues('dark'),
    },
  };
}

/**
 * Returns nested custom properties for fallbacks, like:
 * `var(--rd--strokeActive, var(--rd--strokeDisabled, var(--rd--strokeHover, var(--stroke))))`
 *
 * @example
 * '&[disabled]': {
 *   backgroundColor: composeVars(['fillDisabled', 'fill']),
 * }
 */
export const composeVars = (props: string[]) => {
  return [...props].reverse().reduce((acc, variable, index) => {
    if (index === 0) return variable;

    // Stitches doesn't allow a custom property fallback, so we construct our
    // own classname
    return `var(--${classNamePrefix}--${variable.replaceAll(
      '$$',
      '',
    )}, ${acc})`;
  }, '');
};
