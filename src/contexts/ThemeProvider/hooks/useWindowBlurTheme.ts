import { useState, useEffect } from 'react';
import { ThemeName } from 'src/theme/types';

// The MIT License (MIT)

// Copyright (c) 2021 Justas Palumickas

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// Code below is a modified version from use-window-focus:
// https://github.com/jpalumickas/use-window-focus

// Returns true or false for the given theme if the window has focus and blur
// theme is enabled.
const hasFocus = () => typeof document !== 'undefined' && document.hasFocus();

const useWindowBlurTheme = (themeName: ThemeName, enabledArg: boolean) => {
  const enabled = themeName !== 'windows' && enabledArg;
  const [focused, setFocused] = useState(hasFocus); // Focus for first render

  useEffect(() => {
    setFocused(hasFocus()); // Focus for additional renders

    const onFocus = () => enabled && setFocused(true);
    const onBlur = () => enabled && setFocused(false);

    window.addEventListener('focus', onFocus);
    window.addEventListener('blur', onBlur);

    return () => {
      window.removeEventListener('focus', onFocus);
      window.removeEventListener('blur', onBlur);
    };
  }, [enabled]);

  return enabled ? focused : false;
};

export default useWindowBlurTheme;
