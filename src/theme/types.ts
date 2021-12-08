import Stitches from '@stitches/react/types/stitches';
import themes from './themes';

export type ThemeName = keyof typeof themes; // macos, windows
export type ThemeMode = keyof typeof themes['macos']; // light, dark
export type WindowBlur = boolean;
type ThemeSlugWithoutBlur = `${ThemeName}-${ThemeMode}`;
type ThemeSlugWithBlur = `${ThemeName}-${ThemeMode}-blur`;
export type ThemeSlug = ThemeSlugWithoutBlur | ThemeSlugWithBlur;

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
}
