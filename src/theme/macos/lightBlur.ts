import light from "./light";

const lightBlur = {
  theme: {
    ...light.theme,
    colors: {
      ...light.theme.colors,
      // overrides
    },
  },
};

export default lightBlur;
