import StyleDictionary from "style-dictionary";

// filter out 'color', 'light', 'dark' & 'contrast' from the name
//
// ('color' is the category, 'light' & 'dark' are the main appearances,
// 'contrast' is an extra variant in Windows
export const registerTransformName = () =>
  StyleDictionary.registerTransform({
    name: "custom/transformName",
    type: "name",
    transformer: function (prop) {
      const filteredPath = prop.path.filter(
        (pathItem) =>
          ["color", "light", "dark", "contrast"].indexOf(pathItem) === -1
      );
      const name = filteredPath.join("-").replaceAll(" ", "_");

      return `dui-windows-${name}`;
    },
  });
