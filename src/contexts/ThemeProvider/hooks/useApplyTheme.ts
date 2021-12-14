import { useEffect, useRef } from 'react';
import { Theme } from 'src/theme/types';

// add/remove classnames of the current theme on the <html>-element
const useApplyThemeToHTML = (
  enabled: boolean,
  { baseClassName, theme }: Theme,
) => {
  const prevClassNames = useRef<string[]>();

  useEffect(() => {
    if (!enabled) return;

    const html = document?.documentElement;

    if (html && prevClassNames.current?.length) {
      prevClassNames.current.forEach((prevClassName) =>
        html.classList.remove(prevClassName),
      );
    }

    if (html && enabled && baseClassName && theme) {
      html.classList.add(baseClassName, theme);
    }

    prevClassNames.current = [baseClassName, theme];
  }, [enabled, theme, baseClassName]);
};

export default useApplyThemeToHTML;
