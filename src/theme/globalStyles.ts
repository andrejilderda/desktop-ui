import { globalCss } from '@stitches/react';

const globalStyles = globalCss({
  html: { backgroundColor: '$background', color: '$foreground' },
  '*': { outline: '2px solid blue', margin: 0, padding: 0 },
});

export default globalStyles;
