import StyleDictionary, { Matcher } from "style-dictionary";

export const createFilter = (name: string, matcher: Matcher) => {
  StyleDictionary.registerFilter({
    name,
    matcher: matcher,
  });

  // return the name of the filter that Style Dictionary uses as a reference
  return name;
};
