import Stitches from '@stitches/react/types/stitches';
import { useEffect, useRef } from 'react';

// add/remove classnames of the current theme on the <html>-element
const useApplyThemeToHTML = (enabled: boolean, theme: Stitches['theme']) => {
  const prevThemeClassName = useRef<string>();

  useEffect(() => {
    if (!enabled) return;

    const html = document?.documentElement;

    if (html && prevThemeClassName.current)
      html.classList.remove(prevThemeClassName.current);

    if (html && enabled && theme?.className)
      html.classList.add(theme?.className);

    prevThemeClassName.current = theme?.className;
  }, [enabled, theme]);
};

export default useApplyThemeToHTML;
