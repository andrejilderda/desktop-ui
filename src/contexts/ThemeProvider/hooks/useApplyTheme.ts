import { useEffect, useRef } from 'react';
import { Theme } from 'src/theme/types';

// add/remove classnames of the current theme on the <html>-element
const useApplyThemeToHTML = (enabled: boolean, theme: Theme) => {
  const prevClassNames = useRef<string[]>();

  useEffect(() => {
    if (!enabled) return;

    const { baseClassName, className } = theme;
    const html = document?.documentElement;

    if (html && prevClassNames.current?.length) {
      prevClassNames.current.forEach((prevClassName) =>
        html.classList.remove(prevClassName),
      );
    }

    if (html && enabled && baseClassName && className) {
      html.classList.add(baseClassName, className);
    }

    prevClassNames.current = [baseClassName, className];
  }, [enabled, theme]);
};

export default useApplyThemeToHTML;
