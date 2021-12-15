import React, { ReactElement, useContext } from 'react';
import { ThemeProviderContext } from './ThemeProvider';

type ForwardPropsItem = 'theme' | 'mode' | 'windowBlur';

interface ThemeConsumerProps {
  children: ReactElement;
  forwardProps?: ForwardPropsItem[] | boolean;
}

const ThemeConsumer = ({ children, forwardProps = [] }: ThemeConsumerProps) => {
  const theme = useContext(ThemeProviderContext);

  if (forwardProps === false) return children;

  if (!theme)
    throw new Error(
      'No ThemeProvider found. Make sure you wrap React Desktop components inside a `<ThemeProvider>`.',
    );

  if (!React.Children.only(children))
    throw new Error(
      'ThemeConsumer expects only a single child to provide props to.',
    );

  // add theme properties to child component
  const themeProps = {
    $theme: theme.name,
    $themeMode: theme.mode,
    $themeWindowBlur: theme.windowBlur,
  };

  // map the values of the props to forward to the actual theme values
  const themePropsMap: Record<ForwardPropsItem, keyof typeof themeProps> = {
    theme: '$theme',
    mode: '$themeMode',
    windowBlur: '$themeWindowBlur',
  };

  // forward all of the above themeProps by default, unless forwardProps is specified
  const filteredProps =
    forwardProps === true || !forwardProps?.length
      ? themeProps
      : Object.keys(themePropsMap)
          .filter((key) => forwardProps.includes(key as ForwardPropsItem))
          .reduce<Partial<typeof themeProps>>((acc, key) => {
            const themePropKey = themePropsMap[key as ForwardPropsItem];
            const mappedValue = themeProps[themePropKey];
            return {
              ...acc,
              ...(mappedValue
                ? {
                    [themePropsMap[key as ForwardPropsItem]]:
                      themeProps[themePropKey],
                  }
                : {}),
            };
          }, {});

  const clonedChild = React.cloneElement(children, filteredProps);

  return clonedChild;
};

ThemeProviderContext.displayName = 'ThemeConsumer';

export default ThemeConsumer;
