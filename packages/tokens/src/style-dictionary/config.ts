import __ from "lodash/fp";
import StyleDictionary, { Config, TransformedToken } from "style-dictionary";
import { filterUnusualBlendModes } from "./filters/unusualBlendModes";
import { filterBy } from "./helpers/filterBy";
import registerTransforms from "./transforms";
import registerFormatters from "./formatters";

registerFormatters();
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

const filterColorProps = filterBy((prop) => prop.type === "color");
const filterColorAndShadowProps = filterBy(
  (prop) => prop.type === "color" || prop.type === "custom-shadow"
);

// setup the custom output formats
// We want it to split by light & dark colors
const config: Config = {
  source: ["src/tokens/**/*.json"],
  platforms: {
    css: {
      buildPath: "build/css/",
      transformGroup: "custom/css",
      files: [
        {
          format: "css/variables",
          destination: "variables-light.css",
          filter: filterColorAndShadowProps.light,
          options: {
            selector: "&",
          },
        },
        {
          format: "css/variables",
          destination: "variables-dark.css",
          filter: filterColorAndShadowProps.dark,
          options: {
            selector: "&",
          },
        },
      ],
    },
    js: {
      transformGroup: "js",
      buildPath: "build/js/",
      files: [
        {
          format: "custom/format/es6-color-variables",
          destination: "colors.js",
          filter: {
            attributes: {
              category: "color",
            },
          },
        },
      ],
    },
    json: {
      transformGroup: "custom/json",
      buildPath: "build/json/",
      files: [
        {
          destination: "light.json",
          format: "custom/format/merge-multiple-colors",
          filter: filterColorProps.light,
        },
        {
          destination: "dark.json",
          format: "json/flat",
          filter: (prop) =>
            filterColorProps.dark(prop) && filterUnusualBlendModes(prop),
        },
        {
          destination: "effect.json",
          format: "json/flat",
          filter: (prop: TransformedToken) =>
            prop.type === "custom-shadow" && prop.attributes?.type === "light",
        },
      ],
    },
  },
};

export default config;
