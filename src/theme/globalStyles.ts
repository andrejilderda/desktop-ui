import { globalCss } from '@stitches/react';

const globalStyles = globalCss({
  html: {
    backgroundColor: '$background',
    color: '$foreground',
    fontFamily: '$system',
  },
});

export default globalStyles;
