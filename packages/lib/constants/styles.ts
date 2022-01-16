export const classNamePrefix = 'rd';

// constants for pseudo-classes. The `pseudo`-classes are for documenting pseudo
// classes in Storybook/Chromatic
export const pseudoWrapperClassNames = {
  default: '',
  hover: 'pseudo-hover',
  active: 'pseudo-active',
  focusVisible: 'pseudo-focus-visible',
};

// &:hover, .pseudo-hover &`,
// etc.
export const pseudo = {
  hover: `.${pseudoWrapperClassNames.hover} &, &:hover`,
  active: `.${pseudoWrapperClassNames.active} &, &:active`,
  focusVisible: `.${pseudoWrapperClassNames.focusVisible} &, &:focus-visible`,
};
