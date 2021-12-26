import { pseudo } from 'src/constants/styles';

const { focusVisible } = pseudo;

const focusableVariants = {
  variants: {
    theme: {
      windows: {
        [focusVisible]: {
          outline: '$borderStyles$focusStroke',
          outlineOffset: '2px',
        },
      },
    },
  },
};

export default focusableVariants;
