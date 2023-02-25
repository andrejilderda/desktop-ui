import { Matcher, TransformedToken } from "style-dictionary";

export const filterBy = (matcher: Matcher = () => true) => {
  return {
    light: (prop: TransformedToken) =>
      prop?.attributes?.type === "light" && matcher(prop),
    dark: (prop: TransformedToken) =>
      prop?.attributes?.type === "dark" && matcher(prop),
  };
};
