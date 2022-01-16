import { useEffect, useRef } from 'react';
import { ThemeClassNames } from './useThemeClassName';

// add/remove classnames of the current theme on the <html>-element
const useApplyThemeToHTML = (
  enabled: boolean,
  themeClassNamesObj: ThemeClassNames,
) => {
  const prevClassNames = useRef<string[]>();
  const themeClassNames = Object.values(themeClassNamesObj);

  useEffect(() => {
    const html = document?.documentElement;

    if (html && prevClassNames.current?.length) {
      html.classList.remove(...prevClassNames.current);
    }

    if (!enabled) return;

    if (html && enabled && themeClassNames) {
      html.classList.add(...themeClassNames);
    }

    prevClassNames.current = themeClassNames;
  }, [enabled, themeClassNames]);
};

export default useApplyThemeToHTML;
