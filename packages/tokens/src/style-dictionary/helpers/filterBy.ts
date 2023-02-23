import { Matcher } from "style-dictionary";
import { createFilter } from "./createFilter";

export const filterBy = (property: string, matcher: Matcher = () => true) => {
  return {
    light: createFilter(
      `light/${property}`,
      (prop) => prop.attributes?.type === "light" && matcher(prop)
    ),
    dark: createFilter(
      `dark/${property}`,
      (prop) => prop.attributes?.type === "dark" && matcher(prop)
    ),
  };
};
