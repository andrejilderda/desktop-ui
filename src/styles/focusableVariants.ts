import { pseudo } from 'src/constants/styles';

const { focusVisible } = pseudo;

const focusableVariants = {
  variants: {
    theme: {
      windows: {
        [focusVisible]: {
          outline: '$borderStyles$focusStroke',
          outlineOffset: '1px',
        },
      },
    },
  },
};

export default focusableVariants;
