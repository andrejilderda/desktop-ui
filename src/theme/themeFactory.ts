import { createStitches } from '@stitches/react';
import themes from './themes';
import { GetThemeConfigType, ThemeFactory, ThemeSlug } from './types';

export const getThemeConfig = ({
  theme: themeName,
  mode,
  windowBlur: windowBlurArg,
}: GetThemeConfigType) => {
  const windowBlur = windowBlurArg ? 'default' : 'blur';

  // for now, only macOS has specific styles for when the window is focused
  return themeName === 'macos'
    ? themes[themeName][mode][windowBlur]
    : themes[themeName][mode].default;
};

export const themeFactory = (config: ThemeFactory[]) => {
  const { createTheme: createStitchesTheme, ...stitches } = createStitches({});

  // change interface of default Stitches createTheme function, so that both the
  // `generateTheme` and `createTheme` have the same simple interface
  const createTheme = (props: GetThemeConfigType) =>
    createStitchesTheme(getThemeConfig(props).theme);

  const generateTheme = (props: GetThemeConfigType) => {
    const { theme, mode, windowBlur: windowBlurArg } = props;
    const windowBlur = windowBlurArg || undefined;
    const generatedTheme = createTheme({ theme, mode, windowBlur });
    const name: ThemeSlug = `${theme}-${mode}${windowBlur ? '-blur' : ''}`;
    return {
      name,
      ...props,
      theme: generatedTheme,
    };
  };

  type GeneratedTheme = ReturnType<typeof generateTheme>;

  const themes = config.reduce<GeneratedTheme[]>(
    (acc, { theme, mode: modeArg, useWindowBlur }) => {
      const mode = typeof modeArg === 'string' ? [modeArg] : modeArg;
      const themeModes = mode.reduce<GeneratedTheme[]>((acc, mode) => {
        const generatedTheme = generateTheme({ theme, mode });
        if (typeof generatedTheme === 'string') return acc;

        if (!useWindowBlur) return [...acc, generatedTheme];

        const generatedThemeBlur = generateTheme({
          theme,
          mode,
          windowBlur: true,
        });

        return [...acc, generatedTheme, generatedThemeBlur];
      }, []);

      return [...acc, ...themeModes];
    },
    [],
  );

  const globalStyles = stitches.globalCss({
    html: { backgroundColor: '$background', color: '$foreground' },
    '*': { outline: '2px solid blue', margin: 0, padding: 0 },
  });

  console.log(themes);

  return {
    ...stitches,
    createStitchesTheme,
    createTheme,
    globalStyles,
    themes,
  };
};

export default themeFactory;
