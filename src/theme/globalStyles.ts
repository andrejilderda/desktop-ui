import { globalCss } from 'src/reactDesktop.config';

const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
  },

  html: {
    backgroundColor: '$background',
    color: '$foreground',
    fontFamily: '$system',
  },
});

export default globalStyles;
