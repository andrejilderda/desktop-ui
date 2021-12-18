import { css } from 'src/reactDesktop.config';

const focusableVariants = css({
  variants: {
    _theme: {
      windows: {
        '&:focus-visible': {
          outline: '$borderStyles$focusStroke',
          outlineOffset: '2px',
        },
      },
    },
  },
});

export default focusableVariants;
