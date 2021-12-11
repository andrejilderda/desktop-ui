import Stitches from '@stitches/react/types/stitches';
import themes from './themes';

export type ThemeName = keyof typeof themes; // macos, windows
export type ThemeMode = keyof typeof themes['macos']; // light, dark
export type WindowBlur = boolean;
export type ThemeSlugWithoutBlur = `${ThemeName}-${ThemeMode}`;
export type ThemeSlugWithBlur = `${Exclude<
  ThemeName,
  'windows'
>}-${ThemeMode}-blur`;
export type ThemeSlug = ThemeSlugWithoutBlur | ThemeSlugWithBlur;
export type ThemeClassName =
  | `rd-${ThemeSlugWithoutBlur}`
  | `rd-${ThemeSlugWithBlur}`;
export type ThemeBaseClassName = `rd-${ThemeName}`;

export interface ThemeConfig {
  theme: ThemeName;
  mode: ThemeMode;
  windowBlur?: WindowBlur;
}

export interface ThemeFactory {
  theme: ThemeName;
  mode: ThemeMode[] | ThemeMode;
  useWindowBlur: boolean;
}

export interface Theme {
  name: ThemeName;
  mode: ThemeMode;
  windowBlur?: WindowBlur;
  slug: ThemeSlug;
  theme: Stitches['theme'];
  baseClassName: string;
  className: string;
}
