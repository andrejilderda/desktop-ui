import { TransformedToken } from "style-dictionary";

// filters out all blend mode values other than 'normal'
export const filterUnusualBlendModes = ({
  type,
  blendMode,
}: TransformedToken) => {
  const result = blendMode === "normal";
  return result;
};
