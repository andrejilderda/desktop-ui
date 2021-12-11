import {
  ThemeBaseClassName,
  ThemeClassName,
  ThemeName,
  ThemeSlug,
  ThemeSlugWithBlur,
  ThemeSlugWithoutBlur,
} from 'src/theme/types';

type ClassNames = {
  [key in ThemeName | ThemeSlug]:
    | `.${ThemeBaseClassName} &`
    | `.${ThemeClassName} &`
    | `.rd-${ThemeSlugWithoutBlur} &, .rd-${ThemeSlugWithBlur} &`;
};

const classNames: ClassNames = {
  macos: '.rd-macos &',
  'macos-light': '.rd-macos-light &, .rd-macos-light-blur &',
  'macos-light-blur': '.rd-macos-light-blur &',
  'macos-dark': '.rd-macos-dark &, .rd-macos-dark-blur &',
  'macos-dark-blur': '.rd-macos-dark-blur &',
  windows: '.rd-windows &',
  'windows-light': '.rd-windows-light &',
  'windows-dark': '.rd-windows-dark &',
};

export default classNames;
