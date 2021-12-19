const focusableVariants = {
  variants: {
    theme: {
      windows: {
        '&:focus-visible': {
          outline: '$borderStyles$focusStroke',
          outlineOffset: '2px',
        },
      },
    },
  },
};

export default focusableVariants;
