import { pseudo } from 'src/constants/styles';

const { focusVisible } = pseudo;

export const focusableVariants = {
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
