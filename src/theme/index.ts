import { createStitches } from '@stitches/react';
import macos from './macos';
import windows from './windows';

export type ThemeName = keyof typeof themes; // macos, windows
export type ThemeMode = keyof typeof macos; // light, dark
export type WindowFocus = boolean;

const themes = {
  macos,
  windows,
};

export interface GetThemeConfigType {
  theme: ThemeName;
  mode: ThemeMode;
  windowFocus?: WindowFocus;
}

const getThemeConfig = ({
  theme: themeName,
  mode,
  windowFocus,
}: GetThemeConfigType) => {
  const windowBlur = windowFocus ? 'default' : 'blur';

  // for now, only macOS has specific styles for when the window is focused
  return themeName === 'macos'
    ? themes[themeName][mode][windowBlur]
    : themes[themeName][mode].default;
};

const generateTheme = (props: GetThemeConfigType) => {
  const { createTheme: createStitchesTheme, ...stitches } = createStitches(
    getThemeConfig(props),
  );

  // change interface of default Stitches createTheme function, so that both the
  // `generateTheme` and `createTheme` have the same simple interface
  const createTheme = (props: GetThemeConfigType) =>
    createStitchesTheme(getThemeConfig(props).theme);

  const globalStyles = stitches.globalCss({
    html: { backgroundColor: '$background', color: '$foreground' },
    '*': { outline: '2px solid blue', margin: 0, padding: 0 },
  });

  return { ...stitches, createStitchesTheme, createTheme, globalStyles };
};

export default generateTheme;
