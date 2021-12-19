import type * as Stitches from '@stitches/react';
import StitchesReact from '@stitches/react/types/stitches';
import { config } from 'src/reactDesktop.config';
import themes from './themes';

// https://stitches.dev/docs/typescript#type-a-css-object
export type CSS = Stitches.CSS<typeof config>;

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
  theme: StitchesReact['theme'];
  baseClassName: string;
  className: string;
}

// props that are automatically passed to createStyles for variants
export interface ThemeComponentProps {
  theme: ThemeName;
  mode: ThemeMode;
  windowBlur: boolean;
}
