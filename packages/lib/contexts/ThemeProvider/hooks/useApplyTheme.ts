import { useEffect, useRef } from 'react';
import { globalStylesClassName } from 'lib/constants/styles';
import { ThemeClassNames } from './useThemeClassName';

// add/remove classnames of the current theme on the <html>-element
const useApplyThemeToHTML = (
  enabled: boolean,
  themeClassNamesObj: ThemeClassNames,
  withGlobalStyles = false,
) => {
  const prevClassNames = useRef<string[]>();
  const themeClassNames = Object.values(themeClassNamesObj);
  const withGlobalStylesClassName = withGlobalStyles
    ? globalStylesClassName
    : undefined;

  useEffect(() => {
    const html = document?.documentElement;

    if (html && prevClassNames.current?.length) {
      html.classList.remove(
        ...prevClassNames.current,
        withGlobalStylesClassName as string,
      );
    }

    if (!enabled) return;

    if (html && enabled && themeClassNames) {
      html.classList.add(
        ...themeClassNames,
        withGlobalStylesClassName as string,
      );
    }

    prevClassNames.current = [
      ...themeClassNames,
      withGlobalStylesClassName as string,
    ];
  }, [enabled, themeClassNames, withGlobalStylesClassName]);
};

export default useApplyThemeToHTML;
