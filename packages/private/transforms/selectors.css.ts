import { pseudoWrapperClassNames } from './../constants/pseudo.css';

export const selectors = (
  originalSelector: string,
  extension: string | undefined,
) => {
  if (!extension) return originalSelector;

  const extensionSelector = extension
    .split(', ')
    // ⚠️ TRANSFORM BELOW IS ONLY APPLIED IN DEVELOPMENT MODE
    // prefix pseudo-classes so that these can be documented in
    // Storybook/Chromatic.
    .map((rule) => {
      if (!['development'].includes(process.env.NODE_ENV || '')) return rule;

      const pseudos = [':hover', ':focus', ':focus-visible', ':active'];

      const ruleSplitByPseudo = rule
        .split(/(\:hover|\:focus-visible|\:focus|\:active)/)
        .filter(Boolean);

      const usedPseudos = ruleSplitByPseudo.filter((splitValue) =>
        pseudos.includes(splitValue),
      );
      const withoutPseudos = ruleSplitByPseudo.filter(
        (splitValue) => !pseudos.includes(splitValue),
      );
      const ruleWithPseudoClassNames = usedPseudos
        .map((item) => item.replace(':', ''))
        .map(
          (item) =>
            `.${
              pseudoWrapperClassNames[
                item as keyof typeof pseudoWrapperClassNames
              ]
            } ${withoutPseudos.join('')}, ${rule}`,
        )
        .join('');

      return usedPseudos.length ? ruleWithPseudoClassNames : rule;
    })
    .map((ext) => originalSelector.replaceAll('&', ext));

  return extensionSelector.join(', ');
};
