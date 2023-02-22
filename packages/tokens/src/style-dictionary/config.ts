import StyleDictionary from "style-dictionary";

const createFilter = (name, key) => {
  StyleDictionary.registerFilter({
    name,
    matcher: function (prop) {
      return prop.type === "color" && prop.attributes.type === key;
    },
  });

  // Style Dictionary uses the name of the filter as a reference
  return name;
};

const config = {
  source: ["src/tokens/**/*.json"],
  platforms: {
    json: {
      transformGroup: "custom/json",
      buildPath: "build/",
      files: [
        {
          destination: "light.json",
          format: "custom/format/merge-multiple-colors",
          filter: createFilter("custom/lightColors", "light"),
        },
        {
          destination: "dark.json",
          format: "json/flat",
          filter: createFilter("custom/darkColors", "dark"),
        },
        {
          destination: "contrast.json",
          format: "json/flat",
          filter: createFilter("custom/contrastColors", "contrast"),
        },
      ],
    },
  },
};

export default config;
