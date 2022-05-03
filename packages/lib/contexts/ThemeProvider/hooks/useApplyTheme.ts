import { useEffect, useMemo, useState } from 'react';
import { globalStylesClassName } from 'lib/constants/styles';
import { ThemeClassNames } from './useThemeClassName';

// add/remove classnames of the current theme on the <html>-element
const useApplyThemeToHTML = (
  enabled: boolean,
  themeClassNamesObj: ThemeClassNames,
  withGlobalStyles = false,
) => {
  const [prevClassNames, setPrevClassNames] = useState<string[]>();
  const themeClassNames = useMemo(
    () => Object.values(themeClassNamesObj),
    [themeClassNamesObj],
  );
  const withGlobalStylesClassName = withGlobalStyles
    ? globalStylesClassName
    : undefined;

  const html = document?.documentElement;

  if (prevClassNames?.length) {
    html.classList.remove(
      ...prevClassNames,
      withGlobalStylesClassName as string,
    );
  }

  if (enabled)
    html.classList.add(...themeClassNames, withGlobalStylesClassName as string);

  useEffect(() => {
    setPrevClassNames([
      ...themeClassNames,
      withGlobalStylesClassName as string,
    ]);
  }, [themeClassNames, withGlobalStylesClassName]);
};

export default useApplyThemeToHTML;
