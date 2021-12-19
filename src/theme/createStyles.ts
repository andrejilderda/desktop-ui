import { css } from '@stitches/react';
import { useContext } from 'react';
import { classNamePrefix } from 'src/constants/styles';
import ThemeProviderContext from 'src/contexts/ThemeProvider/ThemeProviderContext';
import { CSS, ThemeComponentProps } from './types';

type CreateStyleValue<T extends string> = Record<
  T,
  // `string &` is for Stitches' className compatibility
  string & {
    className: string;
    selector: string;
    props: ThemeComponentProps & { className: string };
  }
>;

// extend Stitches' toString-method so that user friendly classnames are appended
const extendToString =
  (originalToString: () => string, componentName: string, key: string) =>
  (...args: any[any]) => {
    const toString = originalToString.apply(this, args);
    return `${classNamePrefix}-${componentName}-${key} ${toString}`;
  };

// creates styles using Stitches' css-method with props that are retrieved from
// the theming context so that variants are properly applied. Props can be
// passed to the returned function for variants based on other values.
const createStyles =
  <T extends string>(
    componentName: string,
    namedCssObject: Record<string, CSS | CSS[]>,
  ) =>
  (variantProps?: { [key: string]: unknown }) => {
    const themeProvider = useContext(ThemeProviderContext);

    if (!themeProvider)
      throw new Error(
        'No ThemeProvider found. Make sure you wrap React Desktop components inside a `<ThemeProvider>`.',
      );

    const { name: theme, mode, windowBlur } = themeProvider;

    return Object.entries(namedCssObject).reduce<CreateStyleValue<T>>(
      (acc, [key, cssObject]) => {
        const generatedCss = css(
          ...(Array.isArray(cssObject) ? cssObject : [cssObject]),
        )({
          theme,
          mode,
          windowBlur,
          ...variantProps,
        });

        // call Stitches' toString-method before overwriting it
        const extendedToString = extendToString(
          generatedCss.toString,
          componentName,
          key,
        );

        return {
          ...acc,
          [key]: {
            ...(generatedCss as unknown as Record<string, never>),
            toString: extendedToString,
          },
        };
      },
      {} as CreateStyleValue<T>,
    );
  };

export default createStyles;
