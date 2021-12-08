import dark from './dark';

const darkBlur = {
  theme: {
    ...dark.theme,
    colors: {
      ...dark.theme.colors,
      foreground: 'white',
      background: 'gray',
    },
  },
};

export default darkBlur;
