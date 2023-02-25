import StyleDictionary from "style-dictionary";
import _ from "lodash";

// const { formatHelpers } = StyleDictionary;

export const es6ColorVariables = () => {
  StyleDictionary.registerFormat({
    name: "custom/format/es6-color-variables",
    formatter: function ({ dictionary, options }) {
      // format to CSS variable
      // console.log(
      //   formatHelpers.formattedVariables({
      //     dictionary,
      //     format: "css",
      //   })
      // );

      return `export const variables = [
        ${dictionary.allProperties
          .map(function (prop) {
            const filteredPath = prop.path.filter(
              (pathItem) =>
                ["color", "light", "dark", "contrast"].indexOf(pathItem) === -1
            );
            const name = filteredPath.join("/");
            return `{ name: '${name}', propName: '${prop.name}' value: '${prop.value}' }`;
          })
          .join(",\n")}
      ]`;
    },
  });
};
