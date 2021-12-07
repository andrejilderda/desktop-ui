import themes from './themes';

export type ThemeName = keyof typeof themes; // macos, windows
export type ThemeMode = keyof typeof themes['macos']; // light, dark
export type WindowBlur = boolean;
type ThemeSlugWithoutBlur = `${ThemeName}-${ThemeMode}`;
type ThemeSlugWithBlur = `${ThemeName}-${ThemeMode}-blur`;
export type ThemeSlug = ThemeSlugWithoutBlur | ThemeSlugWithBlur;

export interface GetThemeConfigType {
  theme: ThemeName;
  mode: ThemeMode;
  windowBlur?: WindowBlur;
}

export interface ThemeFactory {
  theme: ThemeName;
  mode: ThemeMode[] | ThemeMode;
  useWindowBlur: boolean;
}
