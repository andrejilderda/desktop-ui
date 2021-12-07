import dark from './dark';

const darkBlur = {
  theme: {
    ...dark.theme,
    colors: {
      ...dark.theme.colors,
      // overrides
    },
  },
};

export default darkBlur;
