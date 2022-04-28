import { RuntimeFn } from '@vanilla-extract/recipes';
import { classNamePrefix } from './constants/styles';

export type ThemeName = 'windows' | 'macos';
export type ThemeMode = 'light' | 'dark';
export type WindowBlur = boolean;
export type ThemeSlugWithoutBlur = `${ThemeName}-${ThemeMode}`;
export type ThemeSlugWithBlur = `${Exclude<
  ThemeName,
  'windows'
>}-${ThemeMode}-blur`;
export type ThemeSlug = ThemeSlugWithoutBlur | ThemeSlugWithBlur;

export type ThemeClassName =
  | `${typeof classNamePrefix}-${ThemeSlugWithoutBlur}`
  | `${typeof classNamePrefix}-${ThemeSlugWithBlur}`;
export type ThemeBaseClassName = `${typeof classNamePrefix}-${ThemeName}`;

export type RecipeVariant<
  T extends RuntimeFn<Record<string, any>>,
  V extends keyof NonNullable<Parameters<T>[0]>,
> = NonNullable<NonNullable<Parameters<T>[0]>[V]>;
