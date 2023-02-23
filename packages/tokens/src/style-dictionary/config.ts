import StyleDictionary, { Config } from "style-dictionary";
import { createFilter } from "./helpers/createFilter";
import { filterBy } from "./helpers/filterBy";
import registerTransforms from "./transforms";

registerTransforms();

// create custom transform groups that extends the default CSS & JSON ones
StyleDictionary.registerTransformGroup({
  name: "custom/css",
  transforms: StyleDictionary.transformGroup["css"].concat([
    "shadow/css",
    "custom/transformName",
  ]),
});

StyleDictionary.registerTransformGroup({
  name: "custom/json",
  transforms: StyleDictionary.transformGroup["web"].concat(["shadow/css"]),
});

const filterColorProps = filterBy("colors", (prop) => prop.type === "color");
const filterColorAndShadowProps = filterBy(
  "colorAndShadows",
  (prop) => prop.type === "color" || prop.type === "custom-shadow"
);

// setup the custom output formats
// We want it to split by light & dark colors
const config: Config = {
  source: ["src/tokens/**/*.json"],
  platforms: {
    css: {
      buildPath: "build/",
      transformGroup: "custom/css",
      files: [
        {
          format: "css/variables",
          destination: "variables-light.css",
          filter: filterColorAndShadowProps.light,
        },
        {
          format: "css/variables",
          destination: "variables-dark.css",
          filter: filterColorAndShadowProps.dark,
        },
      ],
    },
    json: {
      transformGroup: "custom/json",
      buildPath: "build/",
      files: [
        {
          destination: "light.json",
          format: "custom/format/merge-multiple-colors",
          filter: filterColorProps.light,
        },
        {
          destination: "dark.json",
          format: "json/flat",
          filter: filterColorProps.dark,
        },
        {
          destination: "effect.json",
          format: "json/flat",
          filter: createFilter(
            "custom-shadow/light",
            (prop) =>
              prop.type === "custom-shadow" && prop.attributes?.type === "light"
          ),
        },
      ],
    },
  },
};

export default config;
